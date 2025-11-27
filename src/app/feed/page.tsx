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
  QueryDocumentSnapshot,
} from 'firebase/firestore';
import type { FeedItem } from '@/lib/feed-items';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { FeedCard } from '@/components/feed/feed-card';

const PAGE_SIZE = 5;

// Helper to convert Firestore Timestamp or string to Date for sorting/comparison
const toDate = (timestamp: any): Date => {
  if (!timestamp) return new Date(0); // Return epoch for null/undefined timestamps
  if (timestamp instanceof Timestamp) {
    return timestamp.toDate();
  }
  return new Date(timestamp);
};

const docToFeedItem = (doc: QueryDocumentSnapshot): FeedItem => {
    const data = doc.data();
    // Convert Firestore Timestamp to ISO string for serialization and consistent date handling
    const createdAt = data.createdAt instanceof Timestamp ? data.createdAt.toDate().toISOString() : data.createdAt;
    return { id: doc.id, ...data, createdAt } as FeedItem;
};


export default function FeedPage() {
  const firestore = useFirestore();
  const [items, setItems] = useState<FeedItem[]>([]);
  const [lastDoc, setLastDoc] = useState<QueryDocumentSnapshot | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const realtimeUnsubscribeRef = useRef<() => void | null>(null);
  
  // Memoize the collection reference
  const feedCollectionRef = useRef(firestore ? collection(firestore, 'feed_items') : null);
  useEffect(() => {
    if (firestore && !feedCollectionRef.current) {
        feedCollectionRef.current = collection(firestore, 'feed_items');
    }
  }, [firestore]);


  // Function to fetch the first page of data
  const loadFirstPage = useCallback(async () => {
    if (!firestore) return;
    setLoading(true);
    setHasMore(true);

    // 1. Try to load from cache first
    const cachedItems = await db.feed.orderBy('createdAt').reverse().limit(PAGE_SIZE).toArray();
    if (cachedItems.length > 0) {
      setItems(cachedItems);
    }
    
    // 2. Fetch from Firestore
    const q = query(collection(firestore, 'feed_items'), orderBy('createdAt', 'desc'), limit(PAGE_SIZE));
    try {
      const querySnapshot = await getDocs(q);
      const newItems = querySnapshot.docs.map(docToFeedItem);

      setLastDoc(querySnapshot.docs[querySnapshot.docs.length - 1] ?? null);
      setHasMore(newItems.length === PAGE_SIZE);

      // Merge cached and fresh data, then update cache
      const allItems = [...newItems, ...cachedItems];
      const uniqueItems = Array.from(new Map(allItems.map(item => [item.id, item])).values())
        .sort((a, b) => toDate(b.createdAt).getTime() - toDate(a.createdAt).getTime());
      
      setItems(uniqueItems);
      await db.feed.bulkPut(uniqueItems);

    } catch (error) {
      console.error("Error fetching first page:", error);
    } finally {
      setLoading(false);
    }
  }, [firestore]);

  // Function to fetch subsequent paginated data
  const loadNextPage = useCallback(async () => {
    if (!firestore || !hasMore || loadingMore) return;

    setLoadingMore(true);

    const q = query(
        collection(firestore, 'feed_items'),
        orderBy('createdAt', 'desc'),
        startAfter(lastDoc!),
        limit(PAGE_SIZE)
    );

    try {
      const querySnapshot = await getDocs(q);
      const newItems = querySnapshot.docs.map(docToFeedItem);

      setLastDoc(querySnapshot.docs[querySnapshot.docs.length - 1] ?? null);
      setHasMore(newItems.length === PAGE_SIZE);

      if (newItems.length > 0) {
        setItems((prevItems) => {
           const all = [...prevItems, ...newItems];
           const uniqueItems = Array.from(new Map(all.map(item => [item.id, item])).values())
             .sort((a, b) => toDate(b.createdAt).getTime() - toDate(a.createdAt).getTime());
          
           db.feed.bulkPut(uniqueItems).catch(console.error); // Update cache
           return uniqueItems;
        });
      }
    } catch (error) {
      console.error("Error fetching next page:", error);
    } finally {
      setLoadingMore(false);
    }
  }, [firestore, hasMore, loadingMore, lastDoc]);

  // Effect to load initial data
  useEffect(() => {
    loadFirstPage();
  }, [loadFirstPage]);
  
  // Real-time listener for NEW items
  useEffect(() => {
    if (!firestore || loading) return;

    // Stop any previous listener
    if (realtimeUnsubscribeRef.current) {
      realtimeUnsubscribeRef.current();
    }
    
    const newestItemTimestamp = items.length > 0 ? toDate(items[0].createdAt) : new Date(0);
    
    // Query for items newer than the newest one we have
    const q = query(
      collection(firestore, 'feed_items'),
      where('createdAt', '>', newestItemTimestamp),
      orderBy('createdAt', 'desc')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      if (snapshot.empty) return;

      const newItems: FeedItem[] = [];
      snapshot.docChanges().forEach(change => {
        if (change.type === 'added') {
          newItems.push(docToFeedItem(change.doc));
        }
      });
      
      if (newItems.length > 0) {
        setItems(prevItems => {
            const all = [...newItems, ...prevItems];
            const uniqueItems = Array.from(new Map(all.map(item => [item.id, item])).values())
              .sort((a, b) => toDate(b.createdAt).getTime() - toDate(a.createdAt).getTime());

            db.feed.bulkPut(uniqueItems).catch(console.error); // Update cache
            return uniqueItems;
        });
      }
    });

    realtimeUnsubscribeRef.current = unsubscribe;

    return () => {
        if (realtimeUnsubscribeRef.current) {
            realtimeUnsubscribeRef.current();
        }
    };
  }, [firestore, items, loading]); // Rerun when items list changes to update the 'where' clause


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
        {loadingMore && (
            <div className="flex justify-center items-center my-8">
                <Loader2 className="w-8 h-8 text-primary animate-spin" />
            </div>
        )}
        {!loading && hasMore && !loadingMore && (
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
