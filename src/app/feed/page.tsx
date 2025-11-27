'use client';

import React from 'react';
import { feedItems } from '@/lib/feed-items';
import { FeedCard } from '@/components/feed/feed-card';

export default function FeedPage() {
  // In a real app, you would fetch this data from Firestore,
  // handle pagination, and manage loading/error states.
  const items = feedItems;

  return (
    <div className="container mx-auto px-4 py-8 sm:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tight">Your Feed</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          The latest updates, new content, and special events just for you.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <FeedCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
