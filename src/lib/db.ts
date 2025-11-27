import Dexie, { type Table } from 'dexie';
import type { SessionEntry, SyncQueueItem } from './types';
import type { FeedItem } from './feed-items';

class PranianDexie extends Dexie {
  feed!: Table<FeedItem, string>;
  sessions!: Table<SessionEntry, string>;
  syncQueue!: Table<SyncQueueItem, number>;

  constructor() {
    super('pranianDB');
    this.version(3).stores({
      sessions: 'id, userId, modifiedAt',
      syncQueue: '++id, userId',
      feed: 'id, createdAt, status', // Added status for optimistic UI
    });
  }
}

export const db = new PranianDexie();
