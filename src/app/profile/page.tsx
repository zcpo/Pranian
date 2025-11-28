
'use client';

import { useState, useCallback, useEffect } from 'react';
import { useUser, useFirestore, useMemoFirebase } from '@/firebase';
import { doc, updateDoc, collection, query, where, orderBy } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { updateProfile } from 'firebase/auth';
import { useDropzone } from 'react-dropzone';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import dayjs from 'dayjs';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Loader2, UserCircle, Edit, Image as ImageIcon } from 'lucide-react';
import { useDoc, useCollection } from '@/firebase/firestore/use-doc';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Image from 'next/image';
import Link from 'next/link';

const profileSchema = z.object({
  displayName: z.string().min(1, 'Display name is required'),
  email: z.string().email('Invalid email address'),
});

type ProfileFormValues = z.infer<typeof profileSchema>;

function UserActivity({ userId }: { userId: string }) {
  const firestore = useFirestore();

  const sessionsQuery = useMemoFirebase(
    () => (firestore ? query(collection(firestore, 'users', userId, 'sessions'), orderBy('date', 'desc')) : null),
    [firestore, userId]
  );
  const { data: sessions, isLoading: isLoadingSessions } = useCollection(sessionsQuery);

  const postsQuery = useMemoFirebase(
    () => (firestore ? query(collection(firestore, 'feed_items'), where('userId', '==', userId), orderBy('createdAt', 'desc')) : null),
    [firestore, userId]
  );
  const { data: posts, isLoading: isLoadingPosts } = useCollection(postsQuery);

  if (isLoadingSessions || isLoadingPosts) {
    return (
      <div className="flex justify-center mt-8">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-8 mt-8">
      {sessions && sessions.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>My Journal Entries</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {sessions.map((session) => (
                <AccordionItem value={session.id} key={session.id}>
                  <AccordionTrigger>
                    <div className="flex justify-between w-full pr-4">
                      <span>{session.title}</span>
                      <span className="text-sm text-muted-foreground">
                        {dayjs(session.date).format('MMMM D, YYYY')}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    {session.notes && <p className="mb-4 text-muted-foreground">{session.notes}</p>}
                    {session.mediaUrl && (
                      <div className="relative w-full max-w-xs h-40 rounded-md overflow-hidden">
                        <Image src={session.mediaUrl} alt="Journal media" layout="fill" objectFit="cover" />
                      </div>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      )}

      {posts && posts.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>My Feed Posts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {posts.map((post) => (
              <Link href="/feed" key={post.id}>
                <div className="flex items-start gap-4 p-3 -m-3 rounded-lg hover:bg-muted/50 transition-colors">
                  {post.image && (
                    <div className="relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0 bg-muted">
                       <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" />
                    </div>
                  )}
                  <div>
                    <p className="font-semibold">{post.title}</p>
                    <p className="text-sm text-muted-foreground line-clamp-2">{post.subtitle}</p>
                  </div>
                </div>
              </Link>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
}


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
        displayName: userProfile.firstName ? `${userProfile.firstName} ${userProfile.lastName}` : userProfile.displayName || '',
        email: userProfile.email || '',
      });
    } else if (user) {
        reset({
            displayName: user.displayName || '',
            email: user.email || '',
        });
    }
  }, [userProfile, user, reset]);

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

      if(user) {
        await updateProfile(user, { photoURL });
      }
      const userDoc = doc(firestore, 'users', user.uid);
      await updateDoc(userDoc, { avatarUrl: photoURL });

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
    
    const nameParts = data.displayName.split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    setIsSaving(true);
    try {
      await updateProfile(user, { displayName: data.displayName });
      await updateDoc(doc(firestore, 'users', user.uid), {
        displayName: data.displayName,
        firstName: firstName,
        lastName: lastName,
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
  
  const userInitial = userProfile?.firstName?.charAt(0) || user.displayName?.charAt(0) || '';

  return (
    <div className="container mx-auto max-w-3xl px-4 py-8 sm:py-16">
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
                <AvatarImage src={user.photoURL || userProfile?.avatarUrl} alt={user.displayName || ''} className="object-cover" />
                <AvatarFallback className="text-3xl">
                  {isUploading ? <Loader2 className="h-8 w-8 animate-spin" /> : (userInitial ? userInitial.toUpperCase() : <UserCircle className="h-12 w-12" />)}
                </AvatarFallback>
              </Avatar>
              <div className="absolute inset-0 bg-black/50 rounded-full flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                 <Edit className="h-6 w-6 mb-1" />
                 <span className="text-xs font-semibold">Change</span>
              </div>
            </div>
            <div>
                 <h2 className="text-2xl font-bold">{userProfile?.firstName ? `${userProfile.firstName} ${userProfile.lastName}` : user.displayName}</h2>
                 <p className="text-muted-foreground">{user.email}</p>
            </div>
          </div>
          <Accordion type="single" collapsible>
            <AccordionItem value="edit-profile">
              <AccordionTrigger>
                <h3 className="font-semibold">Edit Profile Information</h3>
              </AccordionTrigger>
              <AccordionContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <Label htmlFor="displayName">Full Name</Label>
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
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      <UserActivity userId={user.uid} />
    </div>
  );
}
