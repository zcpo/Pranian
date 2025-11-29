
import Link from 'next/link';
import {
  Rss, BookOpen, Store, Calendar, DollarSign, BookText, Music4, User, Upload,
  Camera, Heart, Wind, Brain, Scroll, Bone, Shuffle, Sparkles, Gem, Brick,
  Leaf, Briefcase, FileText, Bot, Clapperboard, Mic
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const mainActions = [
  { href: '/feed', label: 'Feed', icon: Rss },
  { href: '/library', label: 'Library', icon: BookOpen },
  { href: '/store', label: 'Store', icon: Store },
  { href: '/events', label: 'Events', icon: Calendar },
  { href: '/pricing', label: 'Pricing', icon: DollarSign },
  { href: '/journal', label: 'Journal', icon: BookText },
  { href: '/class-vibes', label: 'Class Vibes', icon: Music4 },
  { href: '/profile', label: 'Profile', icon: User },
  { href: '/upload', label: 'Create Post', icon: Upload },
  { href: '/camera', label: 'Use Camera', icon: Camera },
];

const yogaActions = [
    { href: '/library/yoga/asana', label: 'Asana', icon: Heart },
    { href: '/library/yoga/pranayama', label: 'Pranayama', icon: Wind },
    { href: '/library/yoga/meditation', label: 'Meditation', icon: Brain },
    { href: '/library/yoga/philosophy', label: 'Philosophy', icon: Scroll },
    { href: '/library/yoga/anatomy', label: 'Anatomy', icon: Bone },
    { href: '/library/yoga/sequencing', label: 'Sequencing', icon: Shuffle },
    { href: '/library/yoga/styles', label: 'Yoga Styles', icon: Sparkles },
    { href: '/library/yoga/chakras', label: 'Chakras', icon: Gem },
    { href: '/library/yoga/props', label: 'Props', icon: Brick },
    { href: '/library/yoga/lifestyle', label: 'Lifestyle', icon: Leaf },
    { href: '/library/yoga/teaching', label: 'Teaching', icon: Briefcase },
    { href: '/library/yoga/glossary', label: 'Glossary', icon: FileText },
];

const mediaActions = [
    { href: '/library/meditation', label: 'Audio Meditations', icon: Mic },
    { href: '/library/video-meditation', label: 'Video Meditations', icon: Clapperboard },
    { href: '/library/podcast', label: 'Podcasts', icon: Bot },
]

export default function ActionsPage() {
  const ActionButton = ({ href, label, icon: Icon }: { href: string; label: string; icon: React.ElementType }) => (
    <Button
      asChild
      variant="ghost"
      className="flex flex-col items-center justify-center h-24 w-24 p-2 rounded-lg text-center"
    >
      <Link href={href}>
        <Icon className="h-8 w-8 mb-2 text-primary" />
        <span className="text-xs text-muted-foreground">{label}</span>
      </Link>
    </Button>
  );

  return (
    <div className="min-h-screen w-full bg-background/95 backdrop-blur-lg">
      <div className="container mx-auto px-4 py-8 sm:py-16">
        <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tight">Quick Actions</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Navigate to any part of the app from here.
            </p>
        </div>

        <section className="mb-12">
            <h2 className="text-xl font-bold font-headline mb-4 text-primary">Main</h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
                {mainActions.map(action => <ActionButton key={action.href} {...action} />)}
            </div>
        </section>
        
        <section className="mb-12">
            <h2 className="text-xl font-bold font-headline mb-4 text-primary">Media Library</h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
                {mediaActions.map(action => <ActionButton key={action.href} {...action} />)}
            </div>
        </section>

        <section>
            <h2 className="text-xl font-bold font-headline mb-4 text-primary">Yoga Library</h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
                {yogaActions.map(action => <ActionButton key={action.href} {...action} />)}
            </div>
        </section>
      </div>
    </div>
  );
}
