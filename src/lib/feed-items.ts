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

export const feedItems: FeedItem[] = [
  {
    id: 'feed-1',
    type: 'song',
    title: 'New Meditation Added!',
    subtitle: 'Find your inner peace with our new 10-minute morning mindfulness session.',
    image: 'https://images.unsplash.com/photo-1617824426121-e2ade63a1092?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxtZWRpdGF0aW9uJTIwc2VyZW5lfGVufDB8fHx8MTc2NDAxOTU5OHww&ixlib=rb-4.1.0&q=80&w=1080',
    createdAt: new Date().toISOString(),
    action: {
      type: 'open_song',
      songId: '10-minute-morning-mindfulness',
      buttonText: 'Listen Now'
    },
  },
  {
    id: 'feed-2',
    type: 'promo',
    title: 'Summer Sale!',
    subtitle: 'Get 20% off all items in our store for a limited time. Use code SUMMER20.',
    image: 'https://images.unsplash.com/photo-1591291621060-89264efbeaed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHx5b2dhJTIwbWF0fGVufDB8fHx8MTc2NDA5MjIyOHww&ixlib=rb-4.1.0&q=80&w=1080',
    createdAt: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
    action: {
      type: 'open_store',
      buttonText: 'Shop Now'
    },
  },
  {
    id: 'feed-3',
    type: 'event',
    title: 'Live Workshop: The Art of Breathing',
    subtitle: 'Join us this Saturday for a live online workshop on pranayama techniques. Limited spots available!',
    image: 'https://images.unsplash.com/photo-1611629154254-f601125d8417?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxwcmFuYXlhbWElMjBicmVhdGh8ZW58MHx8fHwxNzY0MTAzNDIwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    createdAt: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
    action: {
      type: 'open_event',
      eventId: 'pranayama-workshop-1',
      buttonText: 'Register Here'
    },
  },
  {
    id: 'feed-4',
    type: 'reward',
    title: 'You Earned a Reward!',
    subtitle: 'For completing 7 days of meditation, you\'ve unlocked a new guided session. Congratulations!',
    image: 'https://images.unsplash.com/photo-1692136608271-e6327cb14e51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjcm93biUyMGNoYWtyYXxlbnwwfHx8fDE3NjQxMDM0MjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    createdAt: new Date(Date.now() - 259200000).toISOString(), // 3 days ago
    action: {
      type: 'claim_reward',
      buttonText: 'Claim Your Reward'
    },
  },
  {
    id: 'feed-5',
    type: 'song',
    title: 'New Podcast Episode',
    subtitle: 'Listen to "Paths to Peace", our latest podcast episode on finding inner calm.',
    image: 'https://images.unsplash.com/photo-1709846486283-de18cb67bc67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxwb2RjYXN0JTIwYXVkaW98ZW58MHx8fHwxNzY0MTAwNzU4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    createdAt: new Date(Date.now() - 345600000).toISOString(), // 4 days ago
    action: {
      type: 'open_song',
      songId: '1',
      buttonText: 'Listen to Podcast'
    },
  },
   {
    id: 'feed-6',
    type: 'promo',
    title: 'Go Premium',
    subtitle: 'Unlock unlimited access to all content and features by upgrading to Premium today.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHlvZ2F8ZW58MHx8fHwxNzE2NDAxOTU5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    createdAt: new Date(Date.now() - 432000000).toISOString(), // 5 days ago
    action: {
      type: 'open_pricing',
      buttonText: 'View Pricing'
    },
  },
];
