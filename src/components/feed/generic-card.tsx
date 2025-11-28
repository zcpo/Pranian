
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FeedItem } from '@/lib/feed-items';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { CardContent, CardHeader, CardFooter, CardTitle } from '../ui/card';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Heart, MessageCircle, Repeat2, UserPlus, Bookmark } from 'lucide-react';
import { Button } from '../ui/button';
import { useUser, useFirestore } from '@/firebase';
import { doc, setDoc, deleteDoc } from 'firebase/firestore';

dayjs.extend(relativeTime);

export function GenericCard({ item }: { item: FeedItem }) {
  const { user } = useUser();
  const firestore = useFirestore();
  const timeAgo = item.createdAt ? dayjs(item.createdAt).fromNow() : 'just now';
  const isVideo = item.image && (item.image.includes('youtube.com') || item.image.includes('vimeo.com'));

  // Placeholder states
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleLike = async () => {
    if (!user || !firestore || !item.id) return;
    
    // With RTDB, the logic for likes would also change.
    // This Firestore logic is now a placeholder.
    console.log("Like functionality needs to be adapted for RTDB.");
    setIsLiked(!isLiked);
  };
  
  const handleFollow = async () => {
    if (!user || !firestore || !item.userId || user.uid === item.userId) return;

    // This logic also needs to be adapted for RTDB if you want to keep it.
    const followingRef = doc(firestore, 'users', user.uid, 'following', item.userId);
    const followerRef = doc(firestore, 'users', item.userId, 'followers', user.uid);

    // In a real app, you'd check if the user is already followed
    await setDoc(followingRef, { userId: item.userId, createdAt: new Date().toISOString() });
    await setDoc(followerRef, { userId: user.uid, createdAt: new Date().toISOString() });
    alert(`You are now following ${item.userName}`);
  };

  return (
    <>
      {item.image && (
         <div className="relative w-full aspect-video bg-muted">
            {isVideo ? (
                 <iframe
                    src={item.image.replace('watch?v=', 'embed/')}
                    title={item.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                ></iframe>
            ) : (
                <Image src={item.image} alt={item.title || 'Feed item image'} fill className="object-cover" />
            )}
         </div>
      )}
      <CardHeader>
        <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10 border-2 border-white/50">
                <AvatarImage src={item.userAvatar} />
                <AvatarFallback>{item.userName?.charAt(0).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="flex-grow">
              <CardTitle className="text-base">{item.userName || 'User'}</CardTitle>
              <p className="text-xs text-muted-foreground">{timeAgo}</p>
            </div>
            {user && item.userId && user.uid !== item.userId && (
                 <Button size="sm" variant="outline" onClick={handleFollow}>
                    <UserPlus className="h-4 w-4" />
                </Button>
            )}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
        {item.subtitle && (
          <p className="text-muted-foreground text-sm">{item.subtitle}</p>
        )}
      </CardContent>
      <CardFooter className="flex justify-between items-center gap-2 border-t pt-4">
          <div className="flex gap-1">
            <Button variant="ghost" size="sm" className="text-muted-foreground" onClick={handleLike}>
                <Heart className={`mr-2 h-4 w-4 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} /> 
                Like
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground">
                <MessageCircle className="mr-2 h-4 w-4" />
                Comment
            </Button>
          </div>
          <Button variant="ghost" size="icon" className="text-muted-foreground" onClick={() => setIsSaved(!isSaved)}>
              <Bookmark className={`h-5 w-5 ${isSaved ? 'fill-foreground' : ''}`} />
          </Button>
      </CardFooter>
    </>
  );
}
