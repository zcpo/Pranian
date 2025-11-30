
'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useDropzone } from 'react-dropzone';
import { useUser, useFirestore } from '@/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { getStorage, ref as storageRef, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Loader2, UploadCloud, Image as ImageIcon, X, Link as LinkIcon, Eye } from 'lucide-react';
import Image from 'next/image';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { FeedCard } from '@/components/feed/feed-card';
import type { FeedItem } from '@/lib/feed-items';
import { Progress } from '@/components/ui/progress';

const feedSchema = z.object({
  title: z.string().min(1, 'Title is required').max(100, 'Title is too long'),
  subtitle: z.string().min(1, 'Content is required').max(500, 'Content is too long'),
  mediaUrl: z.string().url('Please enter a valid URL').optional().or(z.literal('')),
});

type FeedFormValues = z.infer<typeof feedSchema>;

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

  const createPostInDb = async (data: FeedFormValues, mediaUrl?: string) => {
    if (!user || !firestore) return;
    
    const postData = {
      title: data.title,
      subtitle: data.subtitle,
      type: 'user_post',
      image: mediaUrl,
      userId: user.uid,
      userName: user.displayName,
      userAvatar: user.photoURL,
      createdAt: serverTimestamp(),
    };
    
    await addDoc(collection(firestore, 'feed_items'), postData);
    toast({ title: "Success!", description: "Your post has been created." });
    router.push('/feed');
  };

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
    setUploadProgress(0);

    try {
      let finalMediaUrl: string | undefined = data.mediaUrl || undefined;

      if (uploadMode === 'file' && file) {
        const filename = `feed_images/${user.uid}/${Date.now()}-${file.name.replace(/\s+/g, '_')}`;
        const fileRef = storageRef(storage, filename);
        
        finalMediaUrl = await new Promise<string>((resolve, reject) => {
            const uploadTask = uploadBytesResumable(fileRef, file);
            uploadTask.on('state_changed',
              (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setUploadProgress(progress);
              },
              (error) => {
                console.error('Upload failed:', error);
                reject(error);
              },
              async () => {
                try {
                  const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                  resolve(downloadURL);
                } catch (error) {
                  reject(error);
                }
              }
            );
        });
      }
      
      await createPostInDb(data, finalMediaUrl);

    } catch (error) {
      console.error('Error creating post:', error);
      toast({
        variant: 'destructive',
        title: 'Post Creation Failed',
        description: 'There was a problem creating your post. Please try again.',
      });
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
            <Button onClick={() => router.push('/login?redirect=/upload')}>Go to Login</Button>
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
                  <Input id="title" placeholder="Give your post a title" {...field} disabled={isSubmitting} />
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
                  <Textarea id="subtitle" placeholder="What's on your mind?" {...field} rows={4} disabled={isSubmitting} />
                )}
              />
              {errors.subtitle && <p className="text-sm text-destructive">{errors.subtitle.message}</p>}
            </div>
            
            <div className="flex gap-2 rounded-md bg-muted p-1">
                <Button type="button" variant={uploadMode === 'file' ? 'secondary' : 'ghost'} className="flex-1" onClick={() => setUploadMode('file')} disabled={isSubmitting}>Upload File</Button>
                <Button type="button" variant={uploadMode === 'url' ? 'secondary' : 'ghost'} className="flex-1" onClick={() => setUploadMode('url')} disabled={isSubmitting}>From URL</Button>
            </div>

            {uploadMode === 'file' ? (
                <div className="space-y-2">
                  <Label>Image Upload</Label>
                  {preview ? (
                    <div className="relative">
                      <Image src={preview} alt="Preview" width={400} height={300} className="rounded-md object-cover w-full aspect-video" />
                      <Button type="button" variant="destructive" size="icon" className="absolute top-2 right-2 h-8 w-8" onClick={() => { setFile(null); setPreview(null); }} disabled={isSubmitting}>
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ) : (
                    <div {...getRootProps()} className={`flex flex-col items-center justify-center p-10 border-2 border-dashed rounded-md ${isSubmitting ? 'cursor-not-allowed bg-muted/50' : 'cursor-pointer hover:bg-muted/50'} transition-colors`}>
                      <input {...getInputProps()} disabled={isSubmitting} />
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
                              <Input id="mediaUrl" placeholder="https://youtube.com/watch?v=..." {...field} className="pl-10" disabled={isSubmitting} />
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
            
            {isSubmitting && uploadMode === 'file' && (
                <div className="space-y-2">
                    <Label>Upload Progress</Label>
                    <Progress value={uploadProgress} />
                    <p className="text-sm text-muted-foreground text-center">{Math.round(uploadProgress)}%</p>
                </div>
            )}

            <div className="flex justify-end gap-2">
                <Dialog>
                    <DialogTrigger asChild>
                         <Button type="button" variant="outline" disabled={isSubmitting}>
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
