'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
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
    <>
      {item.image && (
        <Image src={item.image} alt={item.title || 'Song artwork'} fill className="object-cover -z-10" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent -z-10" />

      <div className="p-6 flex flex-col justify-end h-full">
        <span className="text-sm uppercase font-semibold text-primary mb-2 drop-shadow-sm">
          {item.action?.songId.includes('minute') ? 'New Meditation' : 'New Podcast'}
        </span>
        <h3 className="text-2xl font-bold font-headline text-white drop-shadow-md">{item.title}</h3>
        {item.subtitle && (
          <p className="mt-2 text-white/90 text-base drop-shadow-sm">{item.subtitle}</p>
        )}
        <Button asChild className="w-full mt-6" size="lg">
          <Link href={getActionUrl()}>
            <PlayCircle className="mr-2 h-5 w-5" />
            {item.action?.buttonText || 'Listen Now'}
          </Link>
        </Button>
      </div>
    </>
  );
}
