'use client';

import React from 'react';
import Image from 'next/image';
import { FeedItem } from '@/lib/feed-items';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Card, CardContent, CardHeader, CardFooter, CardTitle } from '../ui/card';
import { Heart, MessageCircle, Repeat2, AlertTriangle } from 'lucide-react';
import { Button } from '../ui/button';
import { Progress } from '../ui/progress';

export function FeedCardPlaceholder({ item }: { item: FeedItem }) {
  const isError = item.status === 'error';

  return (
    <Card className="flex flex-col relative overflow-hidden opacity-70">
      {isError && (
        <div className="absolute inset-0 bg-destructive/80 z-10 flex flex-col items-center justify-center text-destructive-foreground p-4 text-center">
            <AlertTriangle className="h-10 w-10 mb-4" />
            <p className="font-bold">Upload Failed</p>
            <p className="text-sm">Could not post. Please try again.</p>
        </div>
      )}
      {item.image && (
         <div className="relative w-full aspect-video bg-muted">
            <Image src={item.image} alt={item.title || 'Feed item image'} fill className="object-cover" />
            <div className="absolute inset-0 bg-black/30" />
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
              <p className="text-xs text-muted-foreground">Posting now...</p>
            </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
        {item.subtitle && (
          <p className="text-muted-foreground text-sm">{item.subtitle}</p>
        )}
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-2 border-t pt-4">
        <div className="flex justify-between items-center w-full">
            <div className="flex gap-2">
                <Button variant="ghost" size="sm" className="text-muted-foreground" disabled>
                    <Heart className="mr-2 h-4 w-4" /> Like
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-foreground" disabled>
                    <MessageCircle className="mr-2 h-4 w-4" /> Comment
                </Button>
            </div>
            <Button variant="ghost" size="sm" className="text-muted-foreground" disabled>
                <Repeat2 className="mr-2 h-4 w-4" /> Repost
            </Button>
        </div>
        {!isError && (
            <Progress value={item.uploadProgress || 0} className="h-1 w-full mt-2" />
        )}
      </CardFooter>
    </Card>
  );
}
