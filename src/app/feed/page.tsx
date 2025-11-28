
'use client';

import FeedClient from '@/components/feed/FeedClient';

export default function FeedPage() {
  // Pass an empty array for initialItems. The FeedClient will handle
  // fetching all data on the client side in real-time.
  return <FeedClient initialItems={[]} />;
}
