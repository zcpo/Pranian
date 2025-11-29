
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FeedItem } from '@/lib/feed-items';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { CardContent, CardHeader, CardFooter, CardTitle } from '../ui/card';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Heart, MessageCircle, Repeat2, UserPlus, Bookmark, Trash2 } from 'lucide-react';
import { Button } from '../ui/button';
import { useUser, useDatabase } from '@/firebase';
import { ref, remove } from "firebase/database";
import { ADMIN_EMAILS } from '@/lib/admins';
import { useToast } from '@/hooks/use-toast';

dayjs.extend(relativeTime);

export function GenericCard({ item }: { item: FeedItem }) {
  const { user } = useUser();
  const database = useDatabase();
  const { toast } = useToast();
  const timeAgo = item.createdAt ? dayjs(item.createdAt).fromNow() : 'just now';
  const isVideo = item.image && (item.image.includes('youtube.com') || item.image.includes('vimeo.com'));
  const isAdmin = user && ADMIN_EMAILS.includes(user.email || '');

  // Placeholder states
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleLike = async () => {
    if (!user || !item.id) return;
    console.log("Like functionality needs to be adapted for RTDB.");
    setIsLiked(!isLiked);
  };
  
  const handleFollow = async () => {
    if (!user || !item.userId || user.uid === item.userId) return;
    alert(`Follow functionality needs to be implemented for user ${item.userName}`);
  };

  const handleDelete = async () => {
    if (!isAdmin || !database || !item.id) return;

    if (confirm('Are you sure you want to delete this post? This action cannot be undone.')) {
      try {
        const postRef = ref(database, `feed_items/${item.id}`);
        await remove(postRef);
        toast({
          title: 'Post Deleted',
          description: 'The post has been successfully removed from the feed.',
        });
      } catch (error) {
        console.error("Error deleting post:", error);
        toast({
          variant: 'destructive',
          title: 'Error',
          description: 'Failed to delete the post. Please try again.',
        });
      }
    }
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
            {user && item.userId && user.uid !== item.userId && !isAdmin && (
                 <Button size="sm" variant="outline" onClick={handleFollow}>
                    <UserPlus className="h-4 w-4" />
                </Button>
            )}
            {isAdmin && (
              <Button size="sm" variant="destructive" onClick={handleDelete}>
                <Trash2 className="h-4 w-4" />
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
