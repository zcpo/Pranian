'use client';

import React from 'react';
import Image from 'next/image';
import { FeedItem } from '@/lib/feed-items';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { CardContent, CardHeader, CardTitle } from '../ui/card';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export function GenericCard({ item }: { item: FeedItem }) {
  const timeAgo = dayjs(item.createdAt).fromNow();

  return (
    <>
      {item.image && (
         <div className="relative w-full aspect-video">
            <Image src={item.image} alt={item.title || 'Feed item image'} fill className="object-cover" />
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
      <CardContent>
        <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
        {item.subtitle && (
          <p className="text-muted-foreground text-sm">{item.subtitle}</p>
        )}
      </CardContent>
    </>
  );
}
