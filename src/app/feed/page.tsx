'use client';

import React, { useEffect, useState, useCallback, useRef } from 'react';
import { feedItems as staticFeedItems } from '@/lib/feed-items';
import { FeedCard } from '@/components/feed/feed-card';
import { useFirestore, useMemoFirebase } from '@/firebase/provider';
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
  DocumentData,
  QueryDocumentSnapshot,
} from 'firebase/firestore';
import type { FeedItem } from '@/lib/feed-items';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

// Helper to convert Firestore Timestamp or string to Date for sorting
const toDate = (timestamp: any): Date => {
  if (timestamp instanceof Timestamp) {
    return timestamp.toDate();
  }
  // For static items that have ISO strings
  return new Date(timestamp);
};

const PAGE_SIZE = 5;

export default function FeedPage() {
  const firestore = useFirestore();
  const [items, setItems] = useState<FeedItem[]>([]);
  const [lastDoc, setLastDoc] = useState<QueryDocumentSnapshot<DocumentData> | null>(null);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const initialLoadDone = useRef(false);

  // Function to fetch paginated data
  const loadNextPage = useCallback(async () => {
    if (!firestore || !hasMore) return;

    setLoading(true);

    let q;
    if (lastDoc) {
      q = query(
        collection(firestore, 'feed_items'),
        orderBy('createdAt', 'desc'),
        startAfter(lastDoc),
        limit(PAGE_SIZE)
      );
    } else {
      // First page load includes static items
      q = query(
        collection(firestore, 'feed_items'),
        orderBy('createdAt', 'desc'),
        limit(PAGE_SIZE)
      );
    }

    try {
      const querySnapshot = await getDocs(q);
      const newItems: FeedItem[] = [];
      querySnapshot.forEach((doc) => {
        newItems.push({ id: doc.id, ...doc.data() } as FeedItem);
      });

      setLastDoc(querySnapshot.docs[querySnapshot.docs.length - 1] ?? null);
      setHasMore(newItems.length === PAGE_SIZE);

      setItems((prevItems) => {
        const all = lastDoc ? [...prevItems, ...newItems] : [...staticFeedItems, ...newItems];
        const uniqueItems = Array.from(new Map(all.map(item => [item.id, item])).values());
        return uniqueItems.sort((a, b) => toDate(b.createdAt).getTime() - toDate(a.createdAt).getTime());
      });

    } catch (error) {
      console.error("Error fetching feed items:", error);
    } finally {
      setLoading(false);
      initialLoadDone.current = true;
    }
  }, [firestore, lastDoc, hasMore]);

  // Initial data load
  useEffect(() => {
    if (firestore && !initialLoadDone.current) {
      loadNextPage();
    }
  }, [firestore, loadNextPage]);

  // Real-time listener for new items
  useEffect(() => {
    if (!firestore) return;

    // Only listen for items newer than the newest item we have
    const newestItem = items.length > 0 ? items[0] : null;
    const now = new Date();

    const q = newestItem?.createdAt
      ? query(
          collection(firestore, 'feed_items'),
          orderBy('createdAt', 'desc'),
          where('createdAt', '>', toDate(newestItem.createdAt))
        )
      : query(
          collection(firestore, 'feed_items'),
          orderBy('createdAt', 'desc'),
          limit(1)
        );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      if (!initialLoadDone.current) return;

      const newItems: FeedItem[] = [];
      snapshot.docChanges().forEach(change => {
        if (change.type === 'added') {
          // Ensure we don't add items from the past
          if (toDate(change.doc.data().createdAt) > (newestItem ? toDate(newestItem.createdAt) : now)) {
            newItems.push({ id: change.doc.id, ...change.doc.data() } as FeedItem);
          }
        }
      });

      if (newItems.length > 0) {
        setItems(prevItems => {
          const all = [...newItems, ...prevItems];
          const uniqueItems = Array.from(new Map(all.map(item => [item.id, item])).values());
          return uniqueItems.sort((a, b) => toDate(b.createdAt).getTime() - toDate(a.createdAt).getTime());
        });
      }
    });

    return () => unsubscribe();
  }, [firestore, items]);

  return (
    <div className="container mx-auto px-4 py-8 sm:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tight">Your Feed</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          The latest updates, new content, and special events just for you.
        </p>
      </div>
      <div className="flex flex-col items-center gap-8">
        {loading && items.length === 0 && (
          <>
            <Skeleton className="w-full max-w-md h-96 rounded-lg" />
            <Skeleton className="w-full max-w-md h-96 rounded-lg" />
          </>
        )}
        {items.map((item) => (
          <div key={item.id} className="w-full max-w-md">
            <FeedCard item={item} />
          </div>
        ))}
        {loading && items.length > 0 && (
            <div className="flex justify-center items-center my-8">
                <Loader2 className="w-8 h-8 text-primary animate-spin" />
            </div>
        )}
        {!loading && hasMore && (
          <Button onClick={loadNextPage} variant="outline" className="mt-8">
            Load More
          </Button>
        )}
         {!loading && !hasMore && items.length > 0 && (
            <p className="text-muted-foreground mt-8">You've reached the end of the feed.</p>
        )}
      </div>
    </div>
  );
}
