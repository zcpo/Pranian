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
    <Card className="flex flex-col overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg">
      {item.image && (
        <CardHeader className="p-0">
          <div className="relative aspect-[16/9] w-full">
            <Image src={item.image} alt={item.title} fill className="object-cover" />
             <Badge className="absolute top-2 right-2 flex items-center gap-1.5" variant="secondary">
              {item.type === 'user_post' ? <User className="h-3.5 w-3.5" /> : <Bell className="h-3.5 w-3.5" />}
              <span className="capitalize">{cardType}</span>
            </Badge>
          </div>
        </CardHeader>
      )}
      <CardContent className="p-6 flex-grow">
         {!item.image && (
            <Badge className="mb-2 flex items-center gap-1.5 w-fit" variant="secondary">
                 {item.type === 'user_post' ? <User className="h-3.5 w-3.5" /> : <Bell className="h-3.5 w-3.5" />}
                <span className="capitalize">{cardType}</span>
            </Badge>
        )}
        <h3 className="text-xl font-semibold font-headline text-foreground">{item.title}</h3>
        {item.subtitle && (
          <p className="mt-2 text-muted-foreground text-sm">{item.subtitle}</p>
        )}
      </CardContent>
        {item.type === 'user_post' && (
            <div className="flex items-center gap-3 p-6 pt-0">
                <Avatar className="h-8 w-8">
                    <AvatarImage src={item.userAvatar} />
                    <AvatarFallback>{item.userName?.charAt(0).toUpperCase()}</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium text-muted-foreground">{item.userName || 'User'}</span>
            </div>
        )}
    </Card>
  );
}
