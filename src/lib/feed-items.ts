
export type FeedItem = {
  id: string;
  type: 'song' | 'event' | 'promo' | 'reward' | 'user_post' | 'yoga_post';
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

export const MOCK_FEED_ITEMS: Omit<FeedItem, 'id' | 'createdAt'>[] = [
  {
    type: 'song',
    title: 'New Guided Meditation',
    subtitle: 'Find your inner peace with this 15-minute session.',
    image: 'https://picsum.photos/seed/feed-song/1000/1000',
    action: {
      type: 'open_song',
      buttonText: 'Listen Now',
      songId: '10-minute-morning-mindfulness',
    },
  },
  {
    type: 'event',
    title: 'Live Workshop: The Art of Vinyasa',
    subtitle: 'Join us this Saturday for a live-streamed workshop.',
    image: 'https://picsum.photos/seed/feed-event/1000/1000',
    action: {
      type: 'open_event',
      buttonText: 'Register Now',
      eventId: 'vinyasa-workshop-live',
    },
  },
  {
    type: 'promo',
    title: '25% Off All Yoga Mats',
    subtitle: 'Upgrade your practice with a new eco-friendly mat.',
    image: 'https://picsum.photos/seed/feed-promo/1000/1000',
    action: {
      type: 'open_store',
      buttonText: 'Shop Now',
    },
  },
  {
    type: 'reward',
    title: 'You Earned a New Badge!',
    subtitle: 'Congratulations on completing a 7-day practice streak.',
    image: 'https://picsum.photos/seed/feed-reward/1000/1000',
    action: {
      type: 'claim_reward',
      buttonText: 'View Badge',
    },
  },
  {
    type: 'yoga_post',
    title: 'The Power of Sun Salutations',
    subtitle: 'Energize your body and mind with this foundational sequence. Perfect for starting your day with intention and movement.',
    image: 'https://picsum.photos/seed/yoga1/1000/1000',
    userName: 'Yoga Master',
    userAvatar: 'https://i.pravatar.cc/150?u=yogamaster',
  },
  {
    type: 'yoga_post',
    title: 'Hip-Opening Sequence for Flexibility',
    subtitle: 'Release tension in your hips with these gentle yet effective poses. Great for after a long day of sitting.',
    image: 'https://picsum.photos/seed/yoga2/1000/1000',
    userName: 'Flexible Yogi',
    userAvatar: 'https://i.pravatar.cc/150?u=flexibleyogi',
  },
  {
    type: 'yoga_post',
    title: 'Finding Balance: A Guide to Tree Pose',
    subtitle: 'Master Vrksasana with these tips for stability and focus. Remember to breathe and engage your core!',
    image: 'https://picsum.photos/seed/yoga3/1000/1000',
    userName: 'Balanced Being',
    userAvatar: 'https://i.pravatar.cc/150?u=balancedbeing',
  },
  {
    type: 'yoga_post',
    title: 'Restorative Yoga for Deep Relaxation',
    subtitle: 'Melt away stress with this calming sequence using pillows and blankets. Your nervous system will thank you.',
    image: 'https://picsum.photos/seed/yoga4/1000/1000',
    userName: 'Calm Collective',
    userAvatar: 'https://i.pravatar.cc/150?u=calmcollective',
  },
  {
    type: 'meditation_post',
    title: 'Mindfulness of Breath',
    subtitle: 'A simple 5-minute practice to anchor you in the present moment. Just notice your breath, without judgment.',
    image: 'https://picsum.photos/seed/meditation1/1000/1000',
    userName: 'Mindful Moments',
    userAvatar: 'https://i.pravatar.cc/150?u=mindfulmoments',
  },
  {
    type: 'meditation_post',
    title: 'Gratitude Meditation',
    subtitle: 'Shift your perspective by focusing on what you\'re thankful for. What are three things you appreciate today?',
    image: 'https://picsum.photos/seed/meditation2/1000/1000',
    userName: 'Grateful Heart',
    userAvatar: 'https://i.pravatar.cc/150?u=gratefulheart',
  },
  {
    type: 'meditation_post',
    title: 'Loving-Kindness for a Difficult Person',
    subtitle: 'Extend compassion to someone you find challenging. May they be happy, may they be peaceful.',
    image: 'https://picsum.photos/seed/meditation3/1000/1000',
    userName: 'Peaceful Warrior',
    userAvatar: 'https://i.pravatar.cc/150?u=peacefulwarrior',
  },
  {
    type: 'promo',
    title: 'New Course: Yoga for Beginners',
    subtitle: 'Start your journey with our comprehensive 4-week video course. No experience necessary!',
    image: 'https://picsum.photos/seed/promo2/1000/1000',
    action: {
      type: 'open_store',
      buttonText: 'Enroll Now',
    },
  },
];
