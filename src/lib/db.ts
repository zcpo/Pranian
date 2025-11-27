import Dexie, { type Table } from 'dexie';
import type { SessionEntry, SyncQueueItem } from './types';

class PranianDexie extends Dexie {
  sessions!: Table<SessionEntry, string>;
  syncQueue!: Table<SyncQueueItem, number>;

  constructor() {
    super('pranianDB');
    this.version(1).stores({
      // Indexing 'id' is implicit. Add compound or other indices here.
      // Indexing by userId allows fetching all sessions for a user.
      // Indexing by modifiedAt helps in fetching the latest updates.
      sessions: 'id, userId, modifiedAt',
      // The sync queue is auto-incrementing. Indexing helps query by userId.
      syncQueue: '++id, userId',
    });
  }
}

export const db = new PranianDexie();
