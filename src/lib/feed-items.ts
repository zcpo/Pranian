
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
  {
    id: 'yoga-1',
    type: 'user_post',
    title: 'Morning Flow',
    subtitle: 'Started the day with a refreshing vinyasa flow. Feeling energized and ready for the day!',
    image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxtb3JuaW5nJTIweW9nYXxlbnwwfHx8fDE3MjE4NzYxNzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    createdAt: new Date(Date.now() - 518400000).toISOString(),
    userName: 'YogaLover22',
  },
  {
    id: 'yoga-2',
    type: 'user_post',
    title: 'New Mat!',
    subtitle: 'My new Pranian mat arrived! The grip is amazing. Can\'t wait to break it in this weekend.',
    image: 'https://images.unsplash.com/photo-1591291621060-89264efbeaed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHx5b2dhJTIwbWF0fGVufDB8fHx8MTc2NDA5MjIyOHww&ixlib=rb-4.1.0&q=80&w=1080',
    createdAt: new Date(Date.now() - 604800000).toISOString(),
    userName: 'MindfulMark',
  },
  {
    id: 'yoga-3',
    type: 'user_post',
    title: 'Headstand Progress',
    subtitle: 'Finally held my headstand for 30 seconds without the wall! Practice makes progress.',
    image: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHx5b2dhJTIwcG9zZXxlbnwwfHx8fDE3NjQwNzE2Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    createdAt: new Date(Date.now() - 691200000).toISOString(),
    userName: 'FlexyLexi',
  },
  {
    id: 'yoga-4',
    type: 'user_post',
    title: 'Sunset Savasana',
    subtitle: 'Nothing beats savasana on the beach as the sun goes down. Pure bliss.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHlvZ2F8ZW58MHx8fHwxNzE2NDAxOTU5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    createdAt: new Date(Date.now() - 777600000).toISOString(),
    userName: 'BeachBumYogi',
  },
  {
    id: 'yoga-5',
    type: 'user_post',
    title: 'Yoga with Friends',
    subtitle: 'Loved the outdoor class today! So great to connect with the community.',
    image: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHx5b2dhJTIwY2xhc3N8ZW58MHx8fHwxNzY0MDkxMDM3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    createdAt: new Date(Date.now() - 864000000).toISOString(),
    userName: 'CommunityChris',
  },
  {
    id: 'yoga-6',
    type: 'user_post',
    title: 'Restorative evening',
    subtitle: 'A quiet restorative session to end the week. My body and mind are so grateful.',
    image: 'https://images.unsplash.com/photo-1591343395902-1adcb454c4e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxyZXN0b3JhdGl2ZSUyMHlvZ2F8ZW58MHx8fHwxNzIxODc2MjAxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    createdAt: new Date(Date.now() - 950400000).toISOString(),
    userName: 'ZenZoe',
  },
  {
    id: 'yoga-7',
    type: 'user_post',
    title: 'The little yogi',
    subtitle: 'My daughter wanted to join me for yoga today. Starting them young!',
    image: 'https://images.unsplash.com/photo-1606893994803-75a7a7b3a1a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxraWQlMjB5b2dhfGVufDB8fHx8MTcyMTg4MjU4NHww&ixlib=rb-4.1.0&q=80&w=1080',
    createdAt: new Date(Date.now() - 1036800000).toISOString(),
    userName: 'ProudPapa',
  },
  {
    id: 'yoga-8',
    type: 'user_post',
    title: 'Chakra alignment',
    subtitle: 'Focused on the heart chakra today. Feeling so open and full of love.',
    image: 'https://images.unsplash.com/photo-1622952736534-4ca61f7992fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxoZWFydCUyMGNoYWtyYXxlbnwwfHx8fDE3NjQxMDM0MjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    createdAt: new Date(Date.now() - 1123200000).toISOString(),
    userName: 'AnahataAnna',
  },
  {
    id: 'yoga-9',
    type: 'user_post',
    title: 'Just breathe',
    subtitle: 'Sometimes the most important part of the practice is just breathing. Took time for some pranayama.',
    image: 'https://images.unsplash.com/photo-1611629154254-f601125d8417?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxwcmFuYXlhbWElMjBicmVhdGh8ZW58MHx8fHwxNzY0MTAzNDIwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    createdAt: new Date(Date.now() - 1209600000).toISOString(),
    userName: 'InhaleExhale',
  },
  {
    id: 'yoga-10',
    type: 'user_post',
    title: 'Philosophy reading',
    subtitle: 'Reading the Yoga Sutras again. Always discover something new.',
    image: 'https://images.unsplash.com/photo-1557512724-931547195611?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHx5b2dhJTIwc3V0cmFzfGVufDB8fHx8MTc2NDEwMzQyMHww&ixlib=rb-4.1.0&q=80&w=1080',
    createdAt: new Date(Date.now() - 1296000000).toISOString(),
    userName: 'PatanjaliFan',
  },
];

    