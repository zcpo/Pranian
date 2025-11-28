
import Dexie, { type Table } from 'dexie';
import type { SessionEntry, SyncQueueItem } from './types';
import type { FeedItem } from './feed-items';

class PranianDexie extends Dexie {
  // feed!: Table<FeedItem, string>; // No longer needed for optimistic UI
  sessions!: Table<SessionEntry, string>;
  syncQueue!: Table<SyncQueueItem, number>;

  constructor() {
    super('pranianDB');
    this.version(4).stores({ // Incremented version
      sessions: 'id, userId, modifiedAt',
      syncQueue: '++id, userId',
      feed: null, // Remove the feed table
    });
    // For Dexie v3 and earlier, you'd do this:
    // this.version(3).stores({
    //   sessions: 'id, userId, modifiedAt',
    //   syncQueue: '++id, userId',
    // });
    // this.version(4).stores({
    //   feed: null
    // });
  }
}

export const db = new PranianDexie();
