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
import { Loader2 } from 'lucide-react';
import { FeedCard } from '@/components/feed/feed-card';

const PAGE_SIZE = 5;

const toDate = (timestamp: any): Date => {
  if (!timestamp) return new Date(0);
  if (timestamp instanceof Timestamp) {
    return timestamp.toDate();
  }
  return new Date(timestamp);
};

const docToFeedItem = (doc: QueryDocumentSnapshot): FeedItem => {
    const data = doc.data();
    const createdAt = data.createdAt instanceof Timestamp ? data.createdAt.toDate().toISOString() : data.createdAt;
    return { id: doc.id, ...data, createdAt } as FeedItem;
};

export default function FeedPage() {
  const firestore = useFirestore();
  const [items, setItems] = useState<FeedItem[]>([]);
  const lastDocRef = useRef<QueryDocumentSnapshot | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const realtimeUnsubscribeRef = useRef<() => void | null>(null);
  const loaderRef = useRef(null);

  const loadNextPage = useCallback(async () => {
    if (!firestore || !hasMore || loadingMore) return;

    setLoadingMore(true);

    const q = query(
        collection(firestore, 'feed_items'),
        orderBy('createdAt', 'desc'),
        startAfter(lastDocRef.current!),
        limit(PAGE_SIZE)
    );

    try {
      const querySnapshot = await getDocs(q);
      const newItems = querySnapshot.docs.map(docToFeedItem);
      
      lastDocRef.current = querySnapshot.docs[querySnapshot.docs.length - 1] ?? null;
      setHasMore(newItems.length === PAGE_SIZE);

      if (newItems.length > 0) {
        setItems((prevItems) => {
           const all = [...prevItems, ...newItems];
           const uniqueItems = Array.from(new Map(all.map(item => [item.id, item])).values())
             .sort((a, b) => toDate(b.createdAt).getTime() - toDate(a.createdAt).getTime());
          
           db.feed.bulkPut(uniqueItems).catch(console.error);
           return uniqueItems;
        });
      }
    } catch (error) {
      console.error("Error fetching next page:", error);
    } finally {
      setLoadingMore(false);
    }
  }, [firestore, hasMore, loadingMore]);

  // Initial load
  useEffect(() => {
    const loadFirstPage = async () => {
      if (!firestore) return;
      setLoading(true);
      setHasMore(true);

      const cachedItems = await db.feed.orderBy('createdAt').reverse().limit(PAGE_SIZE).toArray();
      if (cachedItems.length > 0) {
        setItems(cachedItems);
        setLoading(false); // Show cached data immediately
      }
      
      const q = query(collection(firestore, 'feed_items'), orderBy('createdAt', 'desc'), limit(PAGE_SIZE));
      try {
        const querySnapshot = await getDocs(q);
        const newItems = querySnapshot.docs.map(docToFeedItem);

        lastDocRef.current = querySnapshot.docs[querySnapshot.docs.length - 1] ?? null;
        setHasMore(newItems.length === PAGE_SIZE);

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
    };
    
    loadFirstPage();
  }, [firestore]);
  
  // Real-time listener for new items
  useEffect(() => {
    if (!firestore || loading) return;

    if (realtimeUnsubscribeRef.current) realtimeUnsubscribeRef.current();
    
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
            const uniqueItems = Array.from(new Map(all.map(item => [item.id, item])).values())
              .sort((a, b) => toDate(b.createdAt).getTime() - toDate(a.createdAt).getTime());

            db.feed.bulkPut(uniqueItems).catch(console.error);
            return uniqueItems;
        });
      }
    });

    realtimeUnsubscribeRef.current = unsubscribe;
    return () => unsubscribe();
  }, [firestore, items, loading]);

  // Infinite scroll observer
  useEffect(() => {
    if (loading || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadNextPage();
        }
      },
      { threshold: 1.0 }
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

      {hasMore && (
        <div ref={loaderRef} className="snap-start h-screen w-screen flex items-center justify-center text-white">
          {loadingMore && <Loader2 className="w-12 h-12 animate-spin text-primary" />}
        </div>
      )}

      {!loading && !hasMore && items.length > 0 && (
        <div className="snap-start h-screen w-screen flex items-center justify-center">
            <p className="text-muted-foreground text-center">You've reached the end of the feed.</p>
        </div>
      )}
    </div>
  );
}
