'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Music, PlayCircle } from 'lucide-react';
import { FeedItem } from '@/lib/feed-items';
import Link from 'next/link';

export function SongCard({ item }: { item: FeedItem }) {
  const getActionUrl = () => {
    if (item.action?.type === 'open_song' && item.action.songId) {
      // Assuming a structure like /library/meditation/[slug] or /library/podcast/[slug]
      return item.action.songId.includes('minute') 
        ? `/library/meditation/${item.action.songId}`
        : `/library/podcast/${item.action.songId}`;
    }
    return '#';
  };

  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-primary/10">
      {item.image && (
        <CardHeader className="p-0">
          <div className="relative aspect-[16/9] w-full">
            <Image src={item.image} alt={item.title} fill className="object-cover" />
            <Badge className="absolute top-2 right-2 flex items-center gap-1.5" variant="secondary">
              <Music className="h-3.5 w-3.5" />
              <span className="capitalize">{item.action?.songId.includes('minute') ? 'Meditation' : 'Podcast'}</span>
            </Badge>
          </div>
        </CardHeader>
      )}
      <CardContent className="p-6 flex-grow">
        <h3 className="text-xl font-semibold font-headline text-foreground">{item.title}</h3>
        {item.subtitle && (
          <p className="mt-2 text-muted-foreground text-sm">{item.subtitle}</p>
        )}
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild className="w-full">
          <Link href={getActionUrl()}>
            <PlayCircle className="mr-2 h-5 w-5" />
            {item.action?.buttonText || 'Listen Now'}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
