'use client';

import React, { useEffect, useState, useCallback, useRef } from 'react';
import { db } from '@/lib/db';
import { useFirestore } from '@/firebase';
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
import { FeedCard } from '@/components/feed/feed-card';

const PAGE_SIZE = 5;

// Helper to convert Firestore Timestamp or string to Date for sorting
const toDate = (timestamp: any): Date => {
  if (timestamp instanceof Timestamp) {
    return timestamp.toDate();
  }
  // For static items that have ISO strings or other date formats
  return new Date(timestamp);
};

export default function FeedPage() {
  const firestore = useFirestore();
  const [items, setItems] = useState<FeedItem[]>([]);
  const lastDocRef = useRef<QueryDocumentSnapshot | null>(null);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const initialLoadDone = useRef(false);
  const realtimeUnsubscribe = useRef<() => void | null>(null);

  // Function to fetch paginated data
  const loadNextPage = useCallback(async () => {
    if (!firestore || !hasMore || loading) return;

    setLoading(true);

    let q;
    if (lastDocRef.current) {
      q = query(
        collection(firestore, 'feed_items'),
        orderBy('createdAt', 'desc'),
        startAfter(lastDocRef.current),
        limit(PAGE_SIZE)
      );
    } else {
      // First page load
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

      lastDocRef.current = querySnapshot.docs[querySnapshot.docs.length - 1] ?? null;
      setHasMore(newItems.length === PAGE_SIZE);

      setItems((prevItems) => {
        // Deduplicate items based on ID and sort
        const all = lastDocRef.current ? [...prevItems, ...newItems] : [...newItems];
        const uniqueItems = Array.from(new Map(all.map(item => [item.id, item])).values());
        return uniqueItems.sort((a, b) => toDate(b.createdAt).getTime() - toDate(a.createdAt).getTime());
      });

    } catch (error) {
      console.error("Error fetching feed items:", error);
    } finally {
      setLoading(false);
      if (!initialLoadDone.current) {
        initialLoadDone.current = true;
      }
    }
  }, [firestore, hasMore, loading]);
  
  // Load initial data from Dexie cache first, then from network
  useEffect(() => {
    async function loadInitial() {
      const cachedItems = await db.feed.orderBy('createdAt').reverse().limit(PAGE_SIZE).toArray();
      if (cachedItems.length > 0) {
        setItems(cachedItems);
        setLoading(false);
      }
      loadNextPage();
    }
    loadInitial();
  }, [loadNextPage]);


  // Real-time listener for new items
  useEffect(() => {
    if (!firestore || !initialLoadDone.current) return;
    
    if (realtimeUnsubscribe.current) {
        realtimeUnsubscribe.current();
    }

    const newestItem = items.length > 0 ? items[0] : null;

    const q = newestItem?.createdAt
      ? query(
          collection(firestore, 'feed_items'),
          where('createdAt', '>', toDate(newestItem.createdAt))
        )
      : query(
          collection(firestore, 'feed_items'),
          orderBy('createdAt', 'desc'),
          limit(1)
        );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach(change => {
        if (change.type === 'added') {
          const newItem = { id: change.doc.id, ...change.doc.data() } as FeedItem;
          setItems(prevItems => {
            const all = [newItem, ...prevItems];
            const uniqueItems = Array.from(new Map(all.map(item => [item.id, item])).values());
            const sorted = uniqueItems.sort((a, b) => toDate(b.createdAt).getTime() - toDate(a.createdAt).getTime());
            db.feed.bulkPut(sorted).catch(console.error); // Update cache
            return sorted;
          });
        }
      });
    });

    realtimeUnsubscribe.current = unsubscribe;

    return () => unsubscribe();
  }, [firestore, items, initialLoadDone.current]);


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
