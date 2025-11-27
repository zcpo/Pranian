'use client';

import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bell, User } from 'lucide-react';
import { FeedItem } from '@/lib/feed-items';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

// A fallback card for unknown or generic item types
export function GenericCard({ item }: { item: FeedItem }) {

  const cardType = item.type === 'user_post' ? 'Post' : (item.type || 'Update');

  return (
    <>
      {item.image && (
        <Image src={item.image} alt={item.title || 'Feed item image'} fill className="object-cover -z-10" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent -z-10" />
      
      <div className="p-6 flex flex-col justify-end h-full">
        <div className="flex items-center gap-3 mb-4">
            <Avatar className="h-10 w-10 border-2 border-white/50">
                <AvatarImage src={item.userAvatar} />
                <AvatarFallback>{item.userName?.charAt(0).toUpperCase()}</AvatarFallback>
            </Avatar>
            <span className="text-base font-semibold text-white">{item.userName || 'User'}</span>
        </div>
        <h3 className="text-2xl font-bold font-headline text-white drop-shadow-md">{item.title}</h3>
        {item.subtitle && (
          <p className="mt-2 text-white/90 text-base drop-shadow-sm">{item.subtitle}</p>
        )}
      </div>
    </>
  );
}
