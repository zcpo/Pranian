'use client';

import React, { useEffect, useState, useMemo } from 'react';
import { useDatabase, useUser } from '@/firebase';
import { ref, onValue, query, orderByChild, limitToLast } from 'firebase/database';
import type { FeedItem } from '@/lib/feed-items';
import { FeedCard } from '@/components/feed/feed-card';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { db as dexieDB } from '@/lib/db';
import { useLiveQuery } from 'dexie-react-hooks';
import { FeedCardPlaceholder } from './feed-card-placeholder';

const PAGE_SIZE = 10;

const toDate = (timestamp: any): Date => {
  if (!timestamp) return new Date(0);
  // RTDB server timestamps are numbers
  if (typeof timestamp === 'number') return new Date(timestamp);
  if (typeof timestamp === 'string') return new Date(timestamp);
  return new Date(timestamp);
};

const snapshotToFeedItem = (snapshot: any): FeedItem => {
    const data = snapshot.val();
    const createdAt = toDate(data.createdAt).toISOString();
    return { id: snapshot.key, ...data, createdAt, status: 'complete' } as FeedItem;
};

export default function FeedClient({ initialItems }: { initialItems: FeedItem[] }) {
  const { user } = useUser();
  const database = useDatabase();
  const [items, setItems] = useState<FeedItem[]>(initialItems);
  const [loading, setLoading] = useState(true);

  // 1. Get local optimistic posts from Dexie
  const localItems = useLiveQuery(() => dexieDB.feed.where('status').notEqual('complete').reverse().sortBy('createdAt'), []);

  // 2. Setup the real-time listener for the main feed from Realtime Database
  useEffect(() => {
    if (!database) {
        setLoading(false);
        return;
    }

    setLoading(true);
    const feedRef = ref(database, 'feed_items');
    // Query to get the last N items, ordered by creation time
    const feedQuery = query(feedRef, orderByChild('createdAt'), limitToLast(PAGE_SIZE * 2)); // Fetch more to be safe with ordering

    const unsubscribe = onValue(feedQuery, (snapshot) => {
        const newItems: FeedItem[] = [];
        if (snapshot.exists()) {
            snapshot.forEach((childSnapshot) => {
                newItems.push(snapshotToFeedItem(childSnapshot));
            });
        }
        // Reverse because limitToLast gives us ascending order
        setItems(newItems.reverse()); 
        setLoading(false);
    }, (error) => {
        console.error("Error fetching real-time feed:", error);
        setLoading(false);
    });

    return () => unsubscribe();
  }, [database]);


  // 3. Combine local optimistic posts and live RTDB posts
  const combinedItems = useMemo(() => {
    const allItems = [...(localItems || []), ...items];
    const uniqueItemsMap = new Map<string, FeedItem>();

    for (const item of allItems) {
        // Always prioritize the local item if it exists, as it holds the upload status
        if (item.status === 'uploading' || item.status === 'error') {
             if (!uniqueItemsMap.has(item.id)) {
                uniqueItemsMap.set(item.id, item);
             }
        } else {
             // Only add the server item if a local version doesn't already exist
            if (!uniqueItemsMap.has(item.id)) {
                uniqueItemsMap.set(item.id, item);
            }
        }
    }
    
    const uniqueItems = Array.from(uniqueItemsMap.values());
    
    return uniqueItems.sort((a, b) => toDate(b.createdAt).getTime() - toDate(a.createdAt).getTime());
  }, [localItems, items]);


  return (
    <div className="container mx-auto px-4 py-8">
      {user && (
        <div className="mb-8 max-w-xl mx-auto">
          <Button asChild>
            <a href="/upload">Create Post</a>
          </Button>
        </div>
      )}
      <div className="flex flex-col items-center w-full">
        <div className="w-full max-w-xl space-y-8">
            {loading && combinedItems.length === 0 ? (
                Array.from({ length: 3 }).map((_, i) => <FeedCardPlaceholder key={i} item={{ id: `p${i}`, type: 'user_post', title: '', createdAt: new Date().toISOString() }} />)
            ) : (
                combinedItems.map((item) => {
                    if (item.status === 'uploading' || item.status === 'error') {
                        return <FeedCardPlaceholder key={item.id} item={item} />;
                    }
                    return <FeedCard key={item.id} item={item} />;
                })
            )}
        </div>
      </div>

      {!loading && combinedItems.length === 0 && (
          <p className="text-center text-muted-foreground py-8">The feed is empty. Create the first post!</p>
      )}
    </div>
  );
}
