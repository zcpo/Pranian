
'use client';

import { useState, useCallback, useEffect } from 'react';
import { useUser, useFirestore, useMemoFirebase } from '@/firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { updateProfile } from 'firebase/auth';
import { useDropzone } from 'react-dropzone';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Loader2, UserCircle } from 'lucide-react';
import { useDoc } from '@/firebase/firestore/use-doc';

const profileSchema = z.object({
  displayName: z.string().min(1, 'Display name is required'),
  email: z.string().email('Invalid email address'),
});

type ProfileFormValues = z.infer<typeof profileSchema>;

export default function ProfilePage() {
  const { user, isUserLoading } = useUser();
  const firestore = useFirestore();
  const { toast } = useToast();
  const [isUploading, setIsUploading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const userDocRef = useMemoFirebase(
    () => (user ? doc(firestore, 'users', user.uid) : null),
    [user, firestore]
  );
  
  const { data: userProfile, isLoading: isProfileLoading } = useDoc(userDocRef);

  const { control, handleSubmit, reset, formState: { errors } } = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      displayName: '',
      email: '',
    },
  });

  useEffect(() => {
    if (userProfile) {
      reset({
        displayName: userProfile.displayName || '',
        email: userProfile.email || '',
      });
    } else if (user) {
        reset({
            displayName: user.displayName || '',
            email: user.email || '',
        });
    }
  }, [userProfile, user]);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (!user || !firestore) return;
    const file = acceptedFiles[0];
    if (!file) return;

    setIsUploading(true);
    const storage = getStorage();
    const storageRef = ref(storage, `avatars/${user.uid}/${file.name}`);

    try {
      const snapshot = await uploadBytes(storageRef, file);
      const photoURL = await getDownloadURL(snapshot.ref);

      await updateProfile(user, { photoURL });
      await updateDoc(doc(firestore, 'users', user.uid), { avatarUrl: photoURL });

      toast({
        title: 'Success',
        description: 'Profile picture updated successfully.',
      });
    } catch (error) {
      console.error("Error uploading file:", error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to upload profile picture.',
      });
    } finally {
      setIsUploading(false);
    }
  }, [user, firestore, toast]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
    multiple: false,
  });

  const onSubmit = async (data: ProfileFormValues) => {
    if (!user || !firestore) return;

    setIsSaving(true);
    try {
      await updateProfile(user, { displayName: data.displayName });
      await updateDoc(doc(firestore, 'users', user.uid), {
        displayName: data.displayName,
      });

      toast({
        title: 'Success',
        description: 'Profile updated successfully.',
      });
    } catch (error) {
      console.error("Error updating profile:", error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to update profile.',
      });
    } finally {
      setIsSaving(false);
    }
  };

  if (isUserLoading || isProfileLoading) {
    return (
      <div className="container mx-auto px-4 py-8 sm:py-16 flex justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-8 sm:py-16 text-center">
        <h1 className="text-2xl font-bold">Please sign in</h1>
        <p className="text-muted-foreground">You need to be logged in to view your profile.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-2xl px-4 py-8 sm:py-16">
      <Card>
        <CardHeader>
          <CardTitle>My Profile</CardTitle>
          <CardDescription>Manage your personal information and preferences.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center gap-6">
            <div
              {...getRootProps()}
              className="relative group cursor-pointer"
            >
              <input {...getInputProps()} />
              <Avatar className="h-24 w-24">
                <AvatarImage src={user.photoURL || userProfile?.avatarUrl} alt={user.displayName || ''} />
                <AvatarFallback>
                  {user.displayName ? user.displayName.charAt(0).toUpperCase() : <UserCircle className="h-12 w-12" />}
                </AvatarFallback>
              </Avatar>
              <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                {isUploading ? (
                  <Loader2 className="h-8 w-8 animate-spin text-white" />
                ) : (
                  <span className="text-white text-xs text-center">Change Photo</span>
                )}
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              {isDragActive ?
                <p>Drop the image here ...</p> :
                <p>Drop an image here, or click to select one.<br />(Square images work best)</p>
              }
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="displayName">Display Name</Label>
              <Controller
                name="displayName"
                control={control}
                render={({ field }) => (
                  <Input id="displayName" {...field} />
                )}
              />
              {errors.displayName && <p className="text-sm text-destructive">{errors.displayName.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <Input id="email" type="email" {...field} disabled />
                )}
              />
               {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
            </div>
            <div className="flex justify-end">
              <Button type="submit" disabled={isSaving}>
                {isSaving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Save Changes
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
