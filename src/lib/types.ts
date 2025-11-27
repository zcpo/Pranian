export interface Pose {
  id: string;
  name: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  durationDefault?: number; // in seconds
  description?: string;
  imageUrl?: string;
}

export interface PoseInSequence {
  poseId: string;
  name: string;
  holdSeconds: number;
}

export interface SessionEntry {
  id: string; // uuid
  userId: string;
  title: string;
  date: string; // YYYY-MM-DD
  duration: number; // total seconds
  style?: string;
  intensity?: number; // 1-5
  poseSequence?: PoseInSequence[];
  instructor?: string;
  location?: string;
  mediaUrl?: string;
  caloriesBurned?: number;
  mood?: string;
  notes?: string;
  startAt?: string; // ISO8601
  endAt?: string; // ISO8601
  createdAt: string; // ISO8601
  modifiedAt: string; // ISO8601
  completed?: boolean;
}

export interface SyncQueueItem {
  id?: number;
  userId: string;
  operation: 'create' | 'update' | 'delete';
  docId: string;
  payload?: any;
  timestamp: number;
}
