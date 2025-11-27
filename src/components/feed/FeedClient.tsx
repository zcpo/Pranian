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
import { db as localDB } from '@/lib/db';
import type { FeedItem } from '@/lib/feed-items';
import { FeedCard } from '@/components/feed/feed-card';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const PAGE_SIZE = 5;

const toDate = (timestamp: any): Date => {
  if (!timestamp) return new Date(0);
  if (timestamp instanceof Timestamp) return timestamp.toDate();
  return new Date(timestamp);
};

const docToFeedItem = (doc: QueryDocumentSnapshot): FeedItem => {
    const data = doc.data();
    const createdAt = data.createdAt instanceof Timestamp ? data.createdAt.toDate().toISOString() : data.createdAt;
    return { id: doc.id, ...data, createdAt } as FeedItem;
};

export default function FeedClient({ initialItems }: { initialItems: FeedItem[] }) {
  const firestore = useFirestore();
  const [items, setItems] = useState<FeedItem[]>(initialItems);
  const lastDocRef = useRef<QueryDocumentSnapshot | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(initialItems.length === PAGE_SIZE);
  const realtimeUnsubscribeRef = useRef<() => void | null>(null);
  const loaderRef = useRef(null);

  // Function to sort and deduplicate items
  const getUniqueSortedItems = (newItems: FeedItem[]): FeedItem[] => {
    const all = [...items, ...newItems];
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
        // This case should ideally not be hit if initial load is handled correctly, but as a fallback
         q = query(collection(firestore, 'feed_items'), orderBy('createdAt', 'desc'), limit(PAGE_SIZE));
    }


    try {
      const querySnapshot = await getDocs(q);
      const newItems = querySnapshot.docs.map(docToFeedItem);
      
      if (querySnapshot.docs.length > 0) {
        lastDocRef.current = querySnapshot.docs[querySnapshot.docs.length - 1];
      }
      
      setHasMore(newItems.length === PAGE_SIZE);

      if (newItems.length > 0) {
        setItems(prev => {
          const combined = [...prev, ...newItems];
          const unique = Array.from(new Map(combined.map(item => [item.id, item])).values());
          return unique.sort((a, b) => toDate(b.createdAt).getTime() - toDate(a.createdAt).getTime());
        });
        await localDB.feed.bulkPut(newItems);
      }
    } catch (error) {
      console.error("Error fetching next page:", error);
    } finally {
      setLoadingMore(false);
    }
  }, [firestore, hasMore, loadingMore]);

  // Effect for initial setup and loading from cache
  useEffect(() => {
    const setup = async () => {
      // Load from cache first for instant UI
      const cachedItems = await localDB.feed.orderBy('createdAt').reverse().limit(PAGE_SIZE * 2).toArray();
      if (cachedItems.length > 0) {
        setItems(cachedItems);
      }

      // Reconcile with initial server data
      const reconciledItems = getUniqueSortedItems(initialItems);
      setItems(reconciledItems);
      setLoading(false);
      
      if(initialItems.length > 0){
        // We can't serialize a QueryDocumentSnapshot, so we have to re-fetch the last doc ref client-side
        // based on the last item from SSR. This is a small price for SSR.
        // A more complex solution might avoid this, but this is robust.
      }
      
      // If there are initial items, start pagination from the last of them.
      // This is a simplified approach. A robust one would need to query for the doc.
      if (initialItems.length < PAGE_SIZE) {
          setHasMore(false);
      }
    };
    setup();
  }, []); // Run only once

  // Real-time listener for NEW items
  useEffect(() => {
    if (!firestore || loading) return;

    if (realtimeUnsubscribeRef.current) realtimeUnsubscribeRef.current();
    
    // Listen for items newer than the newest one we have
    const newestItemTimestamp = items.length > 0 ? toDate(items[0].createdAt) : new Date(0);
    
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
            const unique = Array.from(new Map(all.map(item => [item.id, item])).values())
              .sort((a, b) => toDate(b.createdAt).getTime() - toDate(a.createdAt).getTime());
            localDB.feed.bulkPut(unique).catch(console.error);
            return unique;
        });
      }
    });

    realtimeUnsubscribeRef.current = unsubscribe;
    return () => unsubscribe();
  }, [firestore, items, loading]);

  // Infinite scroll observer
  useEffect(() => {
    if (loading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadNextPage();
        }
      },
      { threshold: 1.0, rootMargin: '200px' }
    );

    const currentLoader = loaderRef.current;
    if (currentLoader) {
      observer.observe(currentLoader);
    }

    return () => {
      if (currentLoader) {
        observer.unobserve(currentLoader);
      }
    };
  }, [loading, hasMore, loadNextPage]);

  return (
    <div className="h-screen w-screen bg-black overflow-y-auto overflow-x-hidden snap-y snap-mandatory">
      {loading && items.length === 0 && (
        <div className="snap-start h-screen w-screen flex items-center justify-center text-white">
          <Loader2 className="w-12 h-12 animate-spin text-primary" />
        </div>
      )}
      
      {items.map((item) => (
        <div key={item.id} className="snap-start h-screen w-screen flex items-center justify-center relative">
          <div className="h-full w-full max-w-md">
             <FeedCard item={item} />
          </div>
        </div>
      ))}

      <div ref={loaderRef} className={cn("snap-start h-screen w-screen flex items-center justify-center text-white", !hasMore && "hidden")}>
        {loadingMore && <Loader2 className="w-12 h-12 animate-spin text-primary" />}
      </div>

      {!loading && !hasMore && items.length > 0 && (
        <div className="snap-start h-screen w-screen flex items-center justify-center">
            <p className="text-muted-foreground text-center">You've reached the end of the feed.</p>
        </div>
      )}
    </div>
  );
}
