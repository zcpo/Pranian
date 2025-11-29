'use client';

import { useState, useCallback, useEffect } from 'react';
import { useUser, useFirestore, useMemoFirebase } from '@/firebase';
import { doc, updateDoc, collection, query, orderBy, setDoc, deleteDoc, getDocs, getDoc, where } from 'firebase/firestore';
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
import { Loader2, UserCircle, Edit, Heart, Bookmark, UserPlus } from 'lucide-react';
import { useDoc, useCollection } from '@/firebase/firestore/use-doc';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { GenericCard } from '@/components/feed/generic-card';
import type { FeedItem } from '@/lib/feed-items';
import { useRouter, useParams } from 'next/navigation';

const profileSchema = z.object({
  displayName: z.string().min(1, 'Display name is required'),
  email: z.string().email('Invalid email address'),
});

type ProfileFormValues = z.infer<typeof profileSchema>;

function ProfileSocialStats({ userId }: { userId: string }) {
  const firestore = useFirestore();
  const followingQuery = useMemoFirebase(() => firestore ? collection(firestore, 'users', userId, 'following') : null, [firestore, userId]);
  const followersQuery = useMemoFirebase(() => firestore ? collection(firestore, 'users', userId, 'followers') : null, [firestore, userId]);
  
  const { data: following } = useCollection(followingQuery);
  const { data: followers } = useCollection(followersQuery);

  return (
    <div className="flex gap-4 text-center">
      <div>
        <p className="font-bold text-lg">{followers?.length ?? 0}</p>
        <p className="text-sm text-muted-foreground">Followers</p>
      </div>
      <div>
        <p className="font-bold text-lg">{following?.length ?? 0}</p>
        <p className="text-sm text-muted-foreground">Following</p>
      </div>
    </div>
  );
}

function ProfileContentTabs({ userId }: { userId: string }) {
    const firestore = useFirestore();

    const postsQuery = useMemoFirebase(
        () => firestore ? query(collection(firestore, 'feed_items'), where('userId', '==', userId), orderBy('createdAt', 'desc')) : null,
        [firestore, userId]
    );
    const { data: posts, isLoading: isLoadingPosts } = useCollection<FeedItem>(postsQuery);

    // This is a placeholder for liked posts. A real implementation would be more complex.
    const [likedPosts, setLikedPosts] = useState<FeedItem[]>([]);
    const [savedPosts, setSavedPosts] = useState<FeedItem[]>([]);

    return (
        <Tabs defaultValue="posts" className="w-full mt-8">
            <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="posts">My Posts</TabsTrigger>
                <TabsTrigger value="likes">Likes</TabsTrigger>
                <TabsTrigger value="saved">Saved</TabsTrigger>
            </TabsList>
            <TabsContent value="posts" className="mt-6">
                {isLoadingPosts && <Loader2 className="mx-auto my-8 h-8 w-8 animate-spin" />}
                {posts && posts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                       {posts.map(post => <GenericCard key={post.id} item={post} />)}
                    </div>
                ) : (
                    <p className="text-center text-muted-foreground py-8">No posts yet.</p>
                )}
            </TabsContent>
            <TabsContent value="likes" className="mt-6">
                <p className="text-center text-muted-foreground py-8">Liked posts will appear here.</p>
            </TabsContent>
            <TabsContent value="saved" className="mt-6">
                <p className="text-center text-muted-foreground py-8">Saved posts will appear here.</p>
            </TabsContent>
        </Tabs>
    );
}


export default function ProfilePage() {
  const params = useParams();
  const userId = params.userId as string;
  const { user: currentUser, isUserLoading } = useUser();
  const firestore = useFirestore();
  const { toast } = useToast();
  const router = useRouter();
  const [isUploading, setIsUploading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  
  const isOwnProfile = currentUser?.uid === userId;

  useEffect(() => {
    if (!isUserLoading && !currentUser) {
      router.push('/login');
    }
  }, [currentUser, isUserLoading, router]);

  const userDocRef = useMemoFirebase(
    () => (userId && firestore ? doc(firestore, 'users', userId) : null),
    [userId, firestore]
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
    }
  }, [userProfile, reset]);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (!isOwnProfile || !currentUser || !firestore) return;
    const file = acceptedFiles[0];
    if (!file) return;

    setIsUploading(true);
    const storage = getStorage();
    const storageRef = ref(storage, `avatars/${currentUser.uid}/${file.name}`);

    try {
      const snapshot = await uploadBytes(storageRef, file);
      const photoURL = await getDownloadURL(snapshot.ref);

      await updateProfile(currentUser, { photoURL });
      const userDoc = doc(firestore, 'users', currentUser.uid);
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
  }, [isOwnProfile, currentUser, firestore, toast]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
    multiple: false,
    disabled: !isOwnProfile,
  });

  const onSubmit = async (data: ProfileFormValues) => {
    if (!isOwnProfile || !currentUser || !firestore) return;
    
    const nameParts = data.displayName.split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    setIsSaving(true);
    try {
      await updateProfile(currentUser, { displayName: data.displayName });
      await updateDoc(doc(firestore, 'users', currentUser.uid), {
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

  const handleFollow = async () => {
      // This is a placeholder for following another user.
      if (!currentUser || isOwnProfile) return;
      toast({ title: "Follow clicked!", description: `You followed ${userProfile?.displayName}` });
  }

  if (isUserLoading || isProfileLoading) {
    return (
      <div className="container mx-auto px-4 py-8 sm:py-16 flex justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  if (!userProfile) {
    return (
      <div className="container mx-auto px-4 py-8 sm:py-16 text-center">
        <h1 className="text-2xl font-bold">User not found</h1>
        <p className="text-muted-foreground mt-2">The profile you are looking for does not exist.</p>
        <Button onClick={() => router.push('/feed')} className="mt-4">Go to Feed</Button>
      </div>
    );
  }
  
  const userInitial = userProfile?.firstName?.charAt(0) || userProfile.displayName?.charAt(0) || '';

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8 sm:py-16">
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div
              {...getRootProps()}
              className={`relative group ${isOwnProfile ? 'cursor-pointer' : ''}`}
            >
              <input {...getInputProps()} />
              <Avatar className="h-28 w-28 border-4 border-background ring-2 ring-primary/50">
                <AvatarImage src={userProfile.avatarUrl} alt={userProfile.displayName || ''} className="object-cover" />
                <AvatarFallback className="text-4xl">
                  {isUploading ? <Loader2 className="h-10 w-10 animate-spin" /> : (userInitial ? userInitial.toUpperCase() : <UserCircle className="h-14 w-14" />)}
                </AvatarFallback>
              </Avatar>
              {isOwnProfile && (
                <div className="absolute inset-0 bg-black/60 rounded-full flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                   <Edit className="h-6 w-6 mb-1" />
                   <span className="text-xs font-semibold">Change</span>
                </div>
              )}
            </div>
            <div className="flex-grow text-center sm:text-left">
                 <h2 className="text-3xl font-bold font-headline">{userProfile?.firstName ? `${userProfile.firstName} ${userProfile.lastName}` : userProfile.displayName}</h2>
                 <p className="text-muted-foreground">{userProfile.email}</p>
                 <div className="mt-4 flex justify-center sm:justify-start gap-4">
                    <ProfileSocialStats userId={userId} />
                 </div>
            </div>
            {!isOwnProfile && currentUser && (
                 <div className="flex flex-col gap-2">
                    <Button onClick={handleFollow}>
                      <UserPlus className="mr-2 h-4 w-4" /> Follow
                    </Button>
                     <Button variant="outline">
                      Message
                    </Button>
                </div>
            )}
          </div>
        </CardContent>
      </Card>

      <ProfileContentTabs userId={userId} />

    </div>
  );
}
