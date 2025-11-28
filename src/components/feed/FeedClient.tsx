
'use client';

import React, { useEffect, useState, useCallback, useRef } from 'react';
import {
  collection,
  query,
  orderBy,
  limit,
  getDocs,
  startAfter,
  Timestamp,
  where,
  QueryDocumentSnapshot,
} from 'firebase/firestore';
import { useFirestore, useUser } from '@/firebase';
import type { FeedItem } from '@/lib/feed-items';
import { FeedCard } from '@/components/feed/feed-card';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { db } from '@/lib/db';
import { useLiveQuery } from 'dexie-react-hooks';
import { FeedCardPlaceholder } from './feed-card-placeholder';

const PAGE_SIZE = 5;

const toDate = (timestamp: any): Date => {
  if (!timestamp) return new Date(0);
  if (timestamp instanceof Timestamp) return timestamp.toDate();
  if (typeof timestamp === 'string') return new Date(timestamp);
  return new Date(timestamp);
};

const docToFeedItem = (doc: QueryDocumentSnapshot): FeedItem => {
    const data = doc.data();
    const createdAt = toDate(data.createdAt).toISOString();
    return { id: doc.id, ...data, createdAt, status: 'complete' } as FeedItem;
};

export default function FeedClient({ initialItems }: { initialItems: FeedItem[] }) {
  const { user } = useUser();
  const firestore = useFirestore();
  const [items, setItems] = useState<FeedItem[]>(initialItems);
  const lastDocRef = useRef<QueryDocumentSnapshot | null>(null);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const localItems = useLiveQuery(() => db.feed.reverse().sortBy('createdAt'), []);

  const combinedItems = React.useMemo(() => {
    const allItems = [...(localItems || []), ...items];
    const uniqueItems = Array.from(new Map(allItems.map(item => [item.id, item])).values());
    return uniqueItems.sort((a, b) => toDate(b.createdAt).getTime() - toDate(a.createdAt).getTime());
  }, [localItems, items]);

  const loadNextPage = useCallback(async () => {
    if (!firestore || !hasMore || loadingMore) return;
    setLoadingMore(true);

    let q;
    if (lastDocRef.current) {
      q = query(
        collection(firestore, 'feed_items'),
        orderBy('createdAt', 'desc'),
        startAfter(lastDocRef.current),
        limit(PAGE_SIZE)
      );
    } else {
      q = query(collection(firestore, 'feed_items'), orderBy('createdAt', 'desc'), limit(PAGE_SIZE));
    }

    try {
      const querySnapshot = await getDocs(q);
      if (querySnapshot.docs.length > 0) {
        lastDocRef.current = querySnapshot.docs[querySnapshot.docs.length - 1];
      }
      
      const newItems = querySnapshot.docs.map(docToFeedItem);
      setHasMore(newItems.length === PAGE_SIZE);

      if (newItems.length > 0) {
        setItems(prev => [...prev, ...newItems]);
      }
    } catch (error) {
      console.error("Error fetching next page:", error);
    } finally {
      setLoadingMore(false);
    }
  }, [firestore, hasMore, loadingMore]);


  return (
    <div className="container mx-auto px-4 py-8">
      {user && (
        <div className="mb-8 max-w-7xl mx-auto">
          <Button asChild>
            <a href="/upload">Create Post</a>
          </Button>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {combinedItems.map((item) => {
          if (item.status === 'uploading' || item.status === 'error') {
            return <FeedCardPlaceholder key={item.id} item={item} />;
          }
          return <FeedCard key={item.id} item={item} />;
        })}
      </div>

      {loading && (
        <div className="text-center py-8">
          <Loader2 className="w-8 h-8 animate-spin mx-auto text-primary" />
        </div>
      )}

      {hasMore && !loading && (
        <div className="text-center py-8">
          <Button onClick={loadNextPage} disabled={loadingMore}>
            {loadingMore ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Loading...</> : 'Load More'}
          </Button>
        </div>
      )}

      {!hasMore && combinedItems.length > 0 && (
        <p className="text-center text-muted-foreground py-8">You've reached the end of the feed.</p>
      )}

      {!loading && combinedItems.length === 0 && (
          <p className="text-center text-muted-foreground py-8">The feed is empty. Create the first post!</p>
      )}
    </div>
  );
}
