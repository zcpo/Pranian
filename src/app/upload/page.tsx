
'use client';

import React, { useState, useCallback, useRef, useEffect } from 'react';
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
import { Loader2, UploadCloud, Image as ImageIcon, X } from 'lucide-react';
import Image from 'next/image';

const feedSchema = z.object({
  title: z.string().min(1, 'Title is required').max(100, 'Title is too long'),
  subtitle: z.string().min(1, 'Content is required').max(500, 'Content is too long'),
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
  const router = useRouter();
  const { toast } = useToast();

  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const { control, handleSubmit, formState: { errors } } = useForm<FeedFormValues>({
    resolver: zodResolver(feedSchema),
  });

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles[0]) {
      const file = acceptedFiles[0];
      setFile(file);
      const previewUrl = URL.createObjectURL(file);
      setPreview(previewUrl);
    }
  }, []);
  
  useEffect(() => {
    // Revoke object URL on unmount
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

    setIsSubmitting(true);
    let imageUrl: string | undefined = undefined;

    try {
      // 1. Upload image thumbnail if it exists
      if (file) {
        const storage = getStorage();
        const thumb = await createThumbnail(file);
        const filename = `feed_images/${user.uid}/${Date.now()}-${file.name.replace(/\s+/g, '_')}`;
        const storageRef = ref(storage, filename);
        
        const uploadTask = uploadBytesResumable(storageRef, thumb);
        
        await new Promise<void>((resolve, reject) => {
            uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    setUploadProgress(progress);
                },
                (error) => reject(error),
                async () => {
                    imageUrl = await getDownloadURL(uploadTask.snapshot.ref);
                    resolve();
                }
            );
        });
      }

      // 2. Create Firestore document
      const feedCollection = collection(firestore, 'feed_items');
      await addDoc(feedCollection, {
        ...data,
        type: 'user_post',
        image: imageUrl,
        userId: user.uid,
        userName: user.displayName,
        userAvatar: user.photoURL,
        createdAt: serverTimestamp(),
      });

      toast({
        title: 'Post Created!',
        description: 'Your post has been successfully added to the feed.',
      });

      router.push('/feed');

    } catch (error) {
      console.error('Error creating post:', error);
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem creating your post. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <CardDescription>Share your thoughts, experiences, or updates with the community.</CardDescription>
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
                  <Textarea id="subtitle" placeholder="What's on your mind?" {...field} rows={6} />
                )}
              />
              {errors.subtitle && <p className="text-sm text-destructive">{errors.subtitle.message}</p>}
            </div>

            <div className="space-y-2">
              <Label>Image (Optional)</Label>
              {preview ? (
                <div className="relative">
                  <Image src={preview} alt="Preview" width={400} height={300} className="rounded-md object-cover w-full aspect-video" />
                  <Button
                    type="button"
                    variant="destructive"
                    size="icon"
                    className="absolute top-2 right-2 h-8 w-8"
                    onClick={() => {
                      setFile(null);
                      setPreview(null);
                    }}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <div
                  {...getRootProps()}
                  className="flex flex-col items-center justify-center p-10 border-2 border-dashed rounded-md cursor-pointer hover:bg-muted/50 transition-colors"
                >
                  <input {...getInputProps()} />
                  <UploadCloud className="h-12 w-12 text-muted-foreground" />
                  <p className="mt-4 text-sm text-muted-foreground">
                    {isDragActive ? 'Drop the image here...' : 'Drag & drop an image, or click to select'}
                  </p>
                </div>
              )}
            </div>
            
            <div className="flex justify-end">
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {isSubmitting ? `Uploading... ${Math.round(uploadProgress)}%` : 'Create Post'}
              </Button>
            </div>

          </form>
        </CardContent>
      </Card>
    </div>
  );
}
