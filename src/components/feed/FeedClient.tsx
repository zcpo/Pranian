
'use client';

import React, { useEffect, useState } from 'react';
import { useDatabase, useUser } from '@/firebase';
import { ref, onValue, query, orderByChild, limitToLast } from 'firebase/database';
import type { FeedItem } from '@/lib/feed-items';
import { FeedCard } from '@/components/feed/feed-card';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { FeedCardPlaceholder } from './feed-card-placeholder';

const PAGE_SIZE = 20;

const snapshotToFeedItem = (snapshot: any): FeedItem => {
    const data = snapshot.val();
    // Firebase server timestamps are numbers (milliseconds since epoch)
    const createdAt = new Date(data.createdAt).toISOString();
    return { id: snapshot.key, ...data, createdAt } as FeedItem;
};

export default function FeedClient() {
  const { user } = useUser();
  const database = useDatabase();
  const [items, setItems] = useState<FeedItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!database) {
        setLoading(false);
        return;
    }

    setLoading(true);
    const feedRef = ref(database, 'feed_items');
    const feedQuery = query(feedRef, orderByChild('createdAt'), limitToLast(PAGE_SIZE));

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
            {loading && items.length === 0 ? (
                Array.from({ length: 3 }).map((_, i) => <FeedCardPlaceholder key={i} />)
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
