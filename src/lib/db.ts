import Dexie, { type Table } from 'dexie';
import type { SessionEntry, SyncQueueItem } from './types';
import type { FeedItem } from './feed-items';

class PranianDexie extends Dexie {
  sessions!: Table<SessionEntry, string>;
  syncQueue!: Table<SyncQueueItem, number>;
  feed!: Table<FeedItem, string>;

  constructor() {
    super('pranianDB');
    this.version(2).stores({
      sessions: 'id, userId, modifiedAt',
      syncQueue: '++id, userId',
      feed: 'id, createdAt', // Added feed table
    });
  }
}

export const db = new PranianDexie();
