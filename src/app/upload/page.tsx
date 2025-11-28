'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useDropzone } from 'react-dropzone';
import { useUser, useFirestore } from '@/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Loader2, UploadCloud, Image as ImageIcon, X, Link as LinkIcon, Eye } from 'lucide-react';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';
import { db } from '@/lib/db';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { FeedCard } from '@/components/feed/feed-card';
import type { FeedItem } from '@/lib/feed-items';


const feedSchema = z.object({
  title: z.string().min(1, 'Title is required').max(100, 'Title is too long'),
  subtitle: z.string().min(1, 'Content is required').max(500, 'Content is too long'),
  mediaUrl: z.string().url('Please enter a valid URL').optional().or(z.literal('')),
});

type FeedFormValues = z.infer<typeof feedSchema>;

async function createThumbnail(file: File, maxSize = 1080): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const img = new window.Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      let { width, height } = img;
      if (width > maxSize || height > maxSize) {
        const scale = Math.min(maxSize / width, maxSize / height);
        width = Math.round(width * scale);
        height = Math.round(height * scale);
      }
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        return reject(new Error('Could not get canvas context'));
      }
      ctx.drawImage(img, 0, 0, width, height);
      canvas.toBlob((blob) => {
        if (!blob) return reject(new Error('Canvas toBlob failed'));
        resolve(blob);
        URL.revokeObjectURL(url);
      }, 'image/jpeg', 0.85); // 85% quality
    };
    img.onerror = (e) => {
        URL.revokeObjectURL(url);
        reject(e)
    };
    img.src = url;
  });
}

export default function UploadPage() {
  const { user, isUserLoading } = useUser();
  const firestore = useFirestore();
  const storage = getStorage();
  const router = useRouter();
  const { toast } = useToast();

  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadMode, setUploadMode] = useState<'file' | 'url'>('file');

  const { control, handleSubmit, formState: { errors }, watch } = useForm<FeedFormValues>({
    resolver: zodResolver(feedSchema),
    defaultValues: { title: '', subtitle: '', mediaUrl: '' }
  });

  const watchedValues = watch();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles[0]) {
      const file = acceptedFiles[0];
      setFile(file);
      const previewUrl = URL.createObjectURL(file);
      setPreview(previewUrl);
    }
  }, []);
  
  useEffect(() => {
    return () => {
        if(preview) URL.revokeObjectURL(preview);
    }
  }, [preview]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
    multiple: false,
  });

  const onSubmit = async (data: FeedFormValues) => {
    if (!user || !firestore) {
      toast({
        variant: 'destructive',
        title: 'Authentication Error',
        description: 'You must be signed in to create a post.',
      });
      return;
    }
    
    if (uploadMode === 'file' && !file) {
      toast({ variant: 'destructive', title: 'No file selected', description: 'Please upload an image to create a post.' });
      return;
    }
    if (uploadMode === 'url' && !data.mediaUrl) {
        toast({ variant: 'destructive', title: 'No URL provided', description: 'Please provide a media URL to create a post.' });
        return;
    }


    setIsSubmitting(true);
    let finalMediaUrl = data.mediaUrl || undefined;
    const localId = `local_${uuidv4()}`;

    // Create optimistic post in Dexie and redirect immediately
    await db.feed.add({
      id: localId,
      title: data.title,
      subtitle: data.subtitle,
      image: preview || finalMediaUrl,
      userId: user.uid,
      userName: user.displayName || 'You',
      userAvatar: user.photoURL || undefined,
      createdAt: new Date().toISOString(),
      type: 'user_post',
      status: 'uploading',
      uploadProgress: 0,
    });

    router.push('/feed');
    toast({ title: "Your post is being uploaded!", description: "It will appear at the top of the feed." });

    try {
      // 1. Handle image upload if a file is selected
      if (uploadMode === 'file' && file && storage) {
        try {
            const thumb = await createThumbnail(file);
            const filename = `feed_images/${user.uid}/${Date.now()}-${file.name.replace(/\s+/g, '_')}`;
            const storageRef = ref(storage, filename);
            const uploadTask = uploadBytesResumable(storageRef, thumb);
            
            finalMediaUrl = await new Promise<string>((resolve, reject) => {
                uploadTask.on('state_changed',
                    (snapshot) => {
                        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        db.feed.update(localId, { uploadProgress: progress });
                    },
                    (error) => reject(error),
                    async () => {
                        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                        resolve(downloadURL);
                    }
                );
            });
        } catch (uploadError) {
            console.error('Image upload failed:', uploadError);
            // Don't throw, allow text post to proceed without image
            finalMediaUrl = undefined;
        }
      }

      // 2. Create the final Firestore document in the global feed_items collection
      const feedCollection = collection(firestore, 'feed_items');
      const docData = {
        title: data.title,
        subtitle: data.subtitle,
        type: 'user_post',
        image: finalMediaUrl,
        userId: user.uid,
        userName: user.displayName,
        userAvatar: user.photoURL,
        createdAt: serverTimestamp(),
      };
      
      const docRef = await addDoc(feedCollection, docData);
      
      // Update local item with final data and remove it (or update its status)
      const finalItem = (await db.feed.get(localId)) as FeedItem;
      await db.feed.delete(localId); // Remove the temp local item
      // Add the final, confirmed item to Dexie to avoid UI flicker
      await db.feed.add({ ...finalItem, id: docRef.id, status: 'complete', image: finalMediaUrl });


    } catch (error) {
      console.error('Error creating post:', error);
      toast({
        variant: 'destructive',
        title: 'Upload Failed',
        description: 'There was a problem creating your post. Please try again.',
      });
       await db.feed.update(localId, { status: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const getPreviewItem = (): FeedItem => {
    let imageUrl: string | undefined;
    if (uploadMode === 'file' && preview) {
        imageUrl = preview;
    } else if (uploadMode === 'url' && watchedValues.mediaUrl) {
        imageUrl = watchedValues.mediaUrl;
    }

    return {
        id: 'preview',
        type: 'user_post',
        title: watchedValues.title || 'Your Title Here',
        subtitle: watchedValues.subtitle || 'Your content will appear here.',
        image: imageUrl,
        createdAt: new Date().toISOString(),
        userId: user?.uid,
        userName: user?.displayName || 'Your Name',
        userAvatar: user?.photoURL || undefined,
        status: 'complete'
    };
  }

  if (isUserLoading) {
    return <div className="flex items-center justify-center h-screen"><Loader2 className="h-12 w-12 animate-spin" /></div>;
  }

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Access Denied</CardTitle>
            <CardDescription>You need to be logged in to upload a post.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => router.push('/login')}>Go to Login</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-2xl px-4 py-8 sm:py-16">
      <Card>
        <CardHeader>
          <CardTitle>Create a New Post</CardTitle>
          <CardDescription>Share your thoughts, experiences, or media with the community.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Controller
                name="title"
                control={control}
                render={({ field }) => (
                  <Input id="title" placeholder="Give your post a title" {...field} />
                )}
              />
              {errors.title && <p className="text-sm text-destructive">{errors.title.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="subtitle">Content</Label>
              <Controller
                name="subtitle"
                control={control}
                render={({ field }) => (
                  <Textarea id="subtitle" placeholder="What's on your mind?" {...field} rows={4} />
                )}
              />
              {errors.subtitle && <p className="text-sm text-destructive">{errors.subtitle.message}</p>}
            </div>
            
            <div className="flex gap-2 rounded-md bg-muted p-1">
                <Button type="button" variant={uploadMode === 'file' ? 'secondary' : 'ghost'} className="flex-1" onClick={() => setUploadMode('file')}>Upload File</Button>
                <Button type="button" variant={uploadMode === 'url' ? 'secondary' : 'ghost'} className="flex-1" onClick={() => setUploadMode('url')}>From URL</Button>
            </div>

            {uploadMode === 'file' ? (
                <div className="space-y-2">
                  <Label>Image Upload</Label>
                  {preview ? (
                    <div className="relative">
                      <Image src={preview} alt="Preview" width={400} height={300} className="rounded-md object-cover w-full aspect-video" />
                      <Button type="button" variant="destructive" size="icon" className="absolute top-2 right-2 h-8 w-8" onClick={() => { setFile(null); setPreview(null); }}>
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ) : (
                    <div {...getRootProps()} className="flex flex-col items-center justify-center p-10 border-2 border-dashed rounded-md cursor-pointer hover:bg-muted/50 transition-colors">
                      <input {...getInputProps()} />
                      <UploadCloud className="h-12 w-12 text-muted-foreground" />
                      <p className="mt-4 text-sm text-muted-foreground">
                        {isDragActive ? 'Drop the image here...' : 'Drag & drop an image, or click to select'}
                      </p>
                    </div>
                  )}
                </div>
            ) : (
                <div className="space-y-2">
                    <Label htmlFor="mediaUrl">Media URL</Label>
                    <div className="relative">
                        <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Controller
                            name="mediaUrl"
                            control={control}
                            render={({ field }) => (
                              <Input id="mediaUrl" placeholder="https://youtube.com/watch?v=..." {...field} className="pl-10" />
                            )}
                        />
                    </div>
                    {errors.mediaUrl && <p className="text-sm text-destructive">{errors.mediaUrl.message}</p>}
                    {watchedValues.mediaUrl && (
                        <div className="pt-2">
                            <p className="text-sm text-muted-foreground mb-2">URL Preview:</p>
                             <div className="aspect-video w-full overflow-hidden rounded-md border bg-muted">
                                <iframe
                                    src={watchedValues.mediaUrl.replace('watch?v=', 'embed/')}
                                    title="Media Preview"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                ></iframe>
                            </div>
                        </div>
                    )}
                </div>
            )}
            
            <div className="flex justify-end gap-2">
                <Dialog>
                    <DialogTrigger asChild>
                         <Button type="button" variant="outline">
                            <Eye className="mr-2 h-4 w-4" />
                            Preview
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                        <DialogHeader>
                            <DialogTitle>Post Preview</DialogTitle>
                        </DialogHeader>
                        <div className="mt-4 -mx-4">
                           <FeedCard item={getPreviewItem()} />
                        </div>
                    </DialogContent>
                </Dialog>

              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {isSubmitting ? `Posting...` : 'Create Post'}
              </Button>
            </div>

          </form>
        </CardContent>
      </Card>
    </div>
  );
}
