'use client';

import React, { useEffect } from 'react';
import { feedItems as staticFeedItems } from '@/lib/feed-items';
import { FeedCard } from '@/components/feed/feed-card';
import { useCollection } from '@/firebase';
import { collection, query, orderBy, Timestamp } from 'firebase/firestore';
import { useFirestore, useMemoFirebase } from '@/firebase/provider';
import type { FeedItem } from '@/lib/feed-items';
import { Skeleton } from '@/components/ui/skeleton';

// Helper to convert Firestore Timestamp to Date for sorting
const toDate = (timestamp: any): Date => {
  if (timestamp instanceof Timestamp) {
    return timestamp.toDate();
  }
  // For static items that have ISO strings
  return new Date(timestamp);
};


export default function FeedPage() {
  const firestore = useFirestore();

  const feedQuery = useMemoFirebase(
    () => (firestore ? query(collection(firestore, 'feed_items'), orderBy('createdAt', 'desc')) : null),
    [firestore]
  );
  
  const { data: dynamicItems, isLoading } = useCollection<FeedItem>(feedQuery);

  // Combine static and dynamic items, then sort
  const combinedItems = React.useMemo(() => {
    const allItems = [...staticFeedItems, ...(dynamicItems || [])];
    // Sort by createdAt date, newest first
    return allItems.sort((a, b) => toDate(b.createdAt).getTime() - toDate(a.createdAt).getTime());
  }, [dynamicItems]);


  return (
    <div className="container mx-auto px-4 py-8 sm:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tight">Your Feed</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          The latest updates, new content, and special events just for you.
        </p>
      </div>
      <div className="flex flex-col items-center gap-8">
        {isLoading && (
            <>
                <Skeleton className="w-full max-w-md h-96 rounded-lg" />
                <Skeleton className="w-full max-w-md h-96 rounded-lg" />
            </>
        )}
        {combinedItems.map((item) => (
          <div key={item.id} className="w-full max-w-md">
            <FeedCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
