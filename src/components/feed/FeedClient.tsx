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
  onSnapshot,
  where,
  QueryDocumentSnapshot,
} from 'firebase/firestore';
import { useFirestore } from '@/firebase';
import type { FeedItem } from '@/lib/feed-items';
import { FeedCard } from '@/components/feed/feed-card';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useUser } from '@/firebase';

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
    return { id: doc.id, ...data, createdAt } as FeedItem;
};

export default function FeedClient({ initialItems }: { initialItems: FeedItem[] }) {
  const { user } = useUser();
  const firestore = useFirestore();
  const [items, setItems] = useState<FeedItem[]>(initialItems);
  const lastDocRef = useRef<QueryDocumentSnapshot | null>(null);
  const [loading, setLoading] = useState(initialItems.length === 0);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(initialItems.length === PAGE_SIZE);

  const getUniqueSortedItems = (newItems: FeedItem[], existingItems: FeedItem[]): FeedItem[] => {
    const all = [...newItems, ...existingItems];
    const unique = Array.from(new Map(all.map(item => [item.id, item])).values());
    return unique.sort((a, b) => toDate(b.createdAt).getTime() - toDate(a.createdAt).getTime());
  };

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
        setItems(prev => getUniqueSortedItems(newItems, prev));
      }
    } catch (error) {
      console.error("Error fetching next page:", error);
    } finally {
      setLoadingMore(false);
    }
  }, [firestore, hasMore, loadingMore]);

  // Initial load and real-time listener setup
  useEffect(() => {
    if (!firestore) return;
    setLoading(false);

    const newestItemTimestamp = items.length > 0 ? toDate(items[0].createdAt) : new Date(0);
    
    const q = query(
      collection(firestore, 'feed_items'),
      where('createdAt', '>', newestItemTimestamp),
      orderBy('createdAt', 'desc')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newItems: FeedItem[] = [];
      snapshot.docChanges().forEach(change => {
        if (change.type === 'added') {
          newItems.push(docToFeedItem(change.doc));
        }
      });
      
      if (newItems.length > 0) {
        setItems(prevItems => getUniqueSortedItems(newItems, prevItems));
      }
    });

    return () => unsubscribe();
  }, [firestore, user]);

  return (
    <div className="container mx-auto px-4 py-8">
      {user && (
        <div className="mb-8">
          <Button asChild>
            <a href="/upload">Create Post</a>
          </Button>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <FeedCard key={item.id} item={item} />
        ))}
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

      {!hasMore && items.length > 0 && (
        <p className="text-center text-muted-foreground py-8">You've reached the end of the feed.</p>
      )}

      {!loading && items.length === 0 && (
          <p className="text-center text-muted-foreground py-8">The feed is empty. Create the first post!</p>
      )}
    </div>
  );
}
