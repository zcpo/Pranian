'use client';

import React from 'react';
import Image from 'next/image';
import { FeedItem } from '@/lib/feed-items';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { CardContent, CardHeader, CardFooter, CardTitle } from '../ui/card';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Heart, MessageCircle, Repeat2 } from 'lucide-react';
import { Button } from '../ui/button';

dayjs.extend(relativeTime);

export function GenericCard({ item }: { item: FeedItem }) {
  const timeAgo = dayjs(item.createdAt).fromNow();

  const isVideo = item.image && (item.image.includes('youtube.com') || item.image.includes('vimeo.com'));

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
            <div>
              <CardTitle className="text-base">{item.userName || 'User'}</CardTitle>
              <p className="text-xs text-muted-foreground">{timeAgo}</p>
            </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
        {item.subtitle && (
          <p className="text-muted-foreground text-sm">{item.subtitle}</p>
        )}
      </CardContent>
      <CardFooter className="flex justify-between items-center gap-2 border-t pt-4">
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            <Heart className="mr-2 h-4 w-4" /> 
            Like
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            <MessageCircle className="mr-2 h-4 w-4" />
            Comment
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            <Repeat2 className="mr-2 h-4 w-4" />
            Repost
          </Button>
      </CardFooter>
    </>
  );
}
