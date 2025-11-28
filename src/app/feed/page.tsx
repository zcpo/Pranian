'use client';

import FeedClient from '@/components/feed/FeedClient';

export default function FeedPage() {
  // The initial items will now be fetched on the client side by FeedClient
  // to bypass the server-side permission error.
  return <FeedClient initialItems={[]} />;
}
