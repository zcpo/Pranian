
import Dexie, { type Table } from 'dexie';
import type { SessionEntry, SyncQueueItem } from './types';

class PranianDexie extends Dexie {
  sessions!: Table<SessionEntry, string>;
  syncQueue!: Table<SyncQueueItem, number>;

  constructor() {
    super('pranianDB');
    this.version(3).stores({
      sessions: 'id, userId, modifiedAt',
      syncQueue: '++id, userId',
    });
    this.version(4).stores({
      sessions: 'id, userId, modifiedAt',
      syncQueue: '++id, userId',
      // The 'feed' table is removed by not including it in the schema for this version.
    });
  }
}

export const db = new PranianDexie();
