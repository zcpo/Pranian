'use server';

import {
  collection,
  query,
  orderBy,
  limit,
  getDocs,
  Timestamp,
} from 'firebase/firestore';
import { getDb } from '@/firebase/server';
import type { FeedItem } from '@/lib/feed-items';
import FeedClient from '@/components/feed/FeedClient';

const PAGE_SIZE = 5;

const docToFeedItem = (doc: any): FeedItem => {
  const data = doc.data();
  // Ensure createdAt is a serializable string (ISO format)
  const createdAt = data.createdAt instanceof Timestamp 
    ? data.createdAt.toDate().toISOString() 
    : (data.createdAt || new Date().toISOString());

  return { 
    id: doc.id, 
    ...data, 
    createdAt 
  } as FeedItem;
};

export default async function FeedPage() {
  const firestore = getDb();
  let initialItems: FeedItem[] = [];

  try {
    const q = query(
      collection(firestore, 'feed_items'),
      orderBy('createdAt', 'desc'),
      limit(PAGE_SIZE)
    );
    const querySnapshot = await getDocs(q);
    initialItems = querySnapshot.docs.map(docToFeedItem);
  } catch (error) {
    console.error("Error fetching initial feed items on server:", error);
    // You might want to render an error state here
  }
  
  return <FeedClient initialItems={initialItems} />;
}
