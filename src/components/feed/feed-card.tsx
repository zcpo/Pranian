'use client';

import React from 'react';
import { FeedItem } from '@/lib/feed-items';
import { SongCard } from './song-card';
import { EventCard } from './event-card';
import { PromoCard } from './promo-card';
import { RewardCard } from './reward-card';
import { GenericCard } from './generic-card';
import { cn } from '@/lib/utils';

/**
 * A factory component that determines which card to render
 * based on the feed item's type.
 */
export function FeedCard({ item, className }: { item: FeedItem; className?: string }) {
  // Common wrapper for consistent full-screen layout
  const FullScreenWrapper = ({ children }: { children: React.ReactNode }) => (
    <div className={cn("relative h-full w-full overflow-hidden flex flex-col justify-end text-white", className)}>
        {children}
    </div>
  );

  switch (item.type) {
    case 'song':
      return <FullScreenWrapper><SongCard item={item} /></FullScreenWrapper>;
    case 'event':
      return <FullScreenWrapper><EventCard item={item} /></FullScreenWrapper>;
    case 'promo':
      return <FullScreenWrapper><PromoCard item={item} /></FullScreenWrapper>;
    case 'reward':
      return <FullScreenWrapper><RewardCard item={item} /></FullScreenWrapper>;
    case 'user_post':
      return <FullScreenWrapper><GenericCard item={item} /></FullScreenWrapper>;
    default:
      // Fallback for any unknown card types
      return <FullScreenWrapper><GenericCard item={item} /></FullScreenWrapper>;
  }
}
