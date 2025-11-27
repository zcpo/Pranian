'use client';

import React from 'react';
import { FeedItem } from '@/lib/feed-items';
import { SongCard } from './song-card';
import { EventCard } from './event-card';
import { PromoCard } from './promo-card';
import { RewardCard } from './reward-card';
import { GenericCard } from './generic-card';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';


export function FeedCard({ item, className }: { item: FeedItem; className?: string }) {
  const CardContentComponent = () => {
    switch (item.type) {
      case 'song':
        return <SongCard item={item} />;
      case 'event':
        return <EventCard item={item} />;
      case 'promo':
        return <PromoCard item={item} />;
      case 'reward':
        return <RewardCard item={item} />;
      case 'user_post':
        return <GenericCard item={item} />;
      case 'yoga_post':
        return <GenericCard item={item} />;
      default:
        return <GenericCard item={item} />;
    }
  }

  return (
    <Card className={cn("overflow-hidden h-full flex flex-col", className)}>
        <CardContentComponent />
    </Card>
  );
}
