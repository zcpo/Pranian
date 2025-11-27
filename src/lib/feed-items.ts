
export type FeedItem = {
  id: string;
  type: 'song' | 'event' | 'promo' | 'reward' | 'user_post';
  title: string;
  subtitle?: string;
  image?: string;
  createdAt: any; // Can be ISO string or Firestore Timestamp
  action?: {
    type: string;
    buttonText?: string;
    [key: string]: any; // for songId, eventId, etc.
  };
  // User post specific fields
  userId?: string;
  userName?: string;
  userAvatar?: string;
};
