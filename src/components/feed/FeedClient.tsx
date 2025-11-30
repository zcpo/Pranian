
'use client';

import React, { useEffect } from 'react';
import { useFirestore, useUser, useCollection, useMemoFirebase } from '@/firebase';
import { collection, query, orderBy } from 'firebase/firestore';
import type { FeedItem } from '@/lib/feed-items';
import { FeedCard } from '@/components/feed/feed-card';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { FeedCardPlaceholder } from './feed-card-placeholder';
import Link from 'next/link';

export default function FeedClient() {
  const { user } = useUser();
  const firestore = useFirestore();

  const feedQuery = useMemoFirebase(
    () => (firestore ? query(collection(firestore, 'feed_items'), orderBy('createdAt', 'desc')) : null),
    [firestore]
  );
  
  const { data: items, isLoading } = useCollection<FeedItem>(feedQuery);

  return (
    <div className="container mx-auto px-4 py-8">
      {user && (
        <div className="mb-8 max-w-xl mx-auto">
          <Button asChild className="w-full">
            <Link href="/upload">Create Post</Link>
          </Button>
        </div>
      )}
      <div className="flex flex-col items-center w-full">
        <div className="w-full max-w-xl space-y-8">
          {isLoading ? (
            <>
              <FeedCardPlaceholder />
              <FeedCardPlaceholder />
              <FeedCardPlaceholder />
            </>
          ) : items && items.length > 0 ? (
            items.map((item) => <FeedCard key={item.id} item={item} />)
          ) : (
             <p className="text-center text-muted-foreground py-8">The feed is empty. Create the first post!</p>
          )}
        </div>
      </div>
    </div>
  );
}
