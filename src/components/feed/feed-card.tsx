'use client';

import React from 'react';
import { FeedItem } from '@/lib/feed-items';
import { SongCard } from './song-card';
import { EventCard } from './event-card';
import { PromoCard } from './promo-card';
import { RewardCard } from './reward-card';
import { GenericCard } from './generic-card';

/**
 * A factory component that determines which card to render
 * based on the feed item's type.
 */
export function FeedCard({ item }: { item: FeedItem }) {
  switch (item.type) {
    case 'song':
      return <SongCard item={item} />;
    case 'event':
      return <EventCard item={item} />;
    case 'promo':
      return <PromoCard item={item} />;
    case 'reward':
      return <RewardCard item={item} />;
    default:
      // Fallback for any unknown card types
      return <GenericCard item={item} />;
  }
}
