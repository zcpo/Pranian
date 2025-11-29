
'use client';

import React, { useEffect, useState } from 'react';
import { useDatabase, useUser } from '@/firebase';
import { ref, onValue, query, orderByChild, limitToLast } from 'firebase/database';
import type { FeedItem } from '@/lib/feed-items';
import { FeedCard } from '@/components/feed/feed-card';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { FeedCardPlaceholder } from './feed-card-placeholder';
import Link from 'next/link';

const PAGE_SIZE = 50;

export default function FeedClient({ initialItems = [] }: { initialItems: FeedItem[] }) {
  const { user } = useUser();
  const database = useDatabase();
  const [items, setItems] = useState<FeedItem[]>(initialItems);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!database) {
      setLoading(false);
      return;
    }

    setLoading(true);
    const feedRef = ref(database, 'feed_items');
    const feedQuery = query(feedRef, orderByChild('createdAt'), limitToLast(PAGE_SIZE));

    const unsubscribe = onValue(
      feedQuery,
      (snapshot) => {
        const data = snapshot.val();
        if (data && typeof data === 'object') {
          // When querying, Firebase returns an array-like object.
          // Convert it to an array and reverse it to show newest items first.
          const newItems: FeedItem[] = Object.keys(data)
            .map((key) => ({ id: key, ...data[key] }))
            .reverse(); // Reverse the array to get descending order
          setItems(newItems);
        } else {
          // Handle the case where the database is empty or returns no data
          setItems([]);
        }
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching real-time feed:", error);
        setItems([]);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [database]);

  return (
    <div className="container mx-auto px-4 py-8">
      {user && (
        <div className="mb-8 max-w-xl mx-auto">
          <Button asChild className="w-full">
            <Link href="/upload">Create Post</Link>
          </Button>
        </div>
      )}
      <div className="flex flex-col items-center w-full">
        <div className="w-full max-w-xl space-y-8">
          {loading ? (
            <>
              <FeedCardPlaceholder />
              <FeedCardPlaceholder />
              <FeedCardPlaceholder />
            </>
          ) : (
            items.map((item) => <FeedCard key={item.id} item={item} />)
          )}
        </div>
      </div>

      {!loading && items.length === 0 && (
        <p className="text-center text-muted-foreground py-8">The feed is empty. Create the first post!</p>
      )}
    </div>
  );
}

    