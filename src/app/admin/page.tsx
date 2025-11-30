'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  Rss, BookOpen, Store, Calendar, DollarSign, BookText, Music4, User, Upload,
  Camera, Heart, Wind, Brain, Scroll, Bone, Shuffle, Sparkles, Gem, ToyBrick,
  Leaf, Briefcase, FileText, Bot, Clapperboard, Mic, Loader2, Home, Search, Shield, UserCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useUser } from '@/firebase';
import { ADMIN_EMAILS } from '@/lib/admins';

const mainPages = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/feed', label: 'Feed', icon: Rss },
  { href: '/library', label: 'Library Home', icon: BookOpen },
  { href: '/store', label: 'Store', icon: Store },
  { href: '/events', label: 'Events', icon: Calendar },
  { href: '/pricing', label: 'Pricing', icon: DollarSign },
  { href: '/class-vibes', label: 'Class Vibes', icon: Music4 },
];

const libraryContent = [
    { href: '/library/meditation', label: 'Audio Meditations', icon: Mic },
    { href: '/library/video-meditation', label: 'Video Meditations', icon: Clapperboard },
    { href: '/library/podcast', label: 'Podcasts', icon: Bot },
    { href: '/library/video', label: 'Yoga Videos', icon: BookOpen },
    { href: '/library/search', label: 'Search Page', icon: Search },
];

const yogaLibrarySections = [
    { href: '/library/yoga', label: 'Yoga Home', icon: Leaf },
    { href: '/library/yoga/asana', label: 'Asana', icon: Heart },
    { href: '/library/yoga/pranayama', label: 'Pranayama', icon: Wind },
    { href: '/library/yoga/meditation', label: 'Meditation', icon: Brain },
    { href: '/library/yoga/philosophy', label: 'Philosophy', icon: Scroll },
    { href: '/library/yoga/anatomy', label: 'Anatomy', icon: Bone },
    { href: '/library/yoga/sequencing', label: 'Sequencing', icon: Shuffle },
    { href: '/library/yoga/styles', label: 'Yoga Styles', icon: Sparkles },
    { href: '/library/yoga/chakras', label: 'Chakras', icon: Gem },
    { href: '/library/yoga/props', label: 'Props', icon: ToyBrick },
    { href: '/library/yoga/lifestyle', label: 'Lifestyle', icon: Leaf },
    { href: '/library/yoga/teaching', label: 'Teaching', icon: Briefcase },
    { href: '/library/yoga/glossary', label: 'Glossary', icon: FileText },
];

const userPages = [
  { href: '/journal', label: 'Journal', icon: BookText },
  { href: '/profile', label: 'Profile', icon: User },
  { href: '/upload', label: 'Create Post', icon: Upload },
  { href: '/camera', label: 'Camera', icon: Camera },
  { href: '/actions', label: 'Actions Menu', icon: Sparkles },
  { href: '/login', label: 'Login Page', icon: UserCircle },
];


export default function AdminDashboardPage() {
  const { user, isUserLoading } = useUser();
  const router = useRouter();

  const isAdmin = user && ADMIN_EMAILS.includes(user.email || '');

  useEffect(() => {
    if (!isUserLoading && !isAdmin) {
      router.push('/login?redirect=/admin');
    }
  }, [user, isUserLoading, isAdmin, router]);

  if (isUserLoading || !isAdmin) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  const ActionButton = ({ href, label, icon: Icon }: { href: string; label: string; icon: React.ElementType }) => (
    <Button
      asChild
      variant="outline"
      className="flex flex-col items-center justify-center h-28 w-full p-2 rounded-lg text-center"
    >
      <Link href={href} target="_blank">
        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mb-2 transition-colors">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <span className="text-xs text-muted-foreground text-center">{label}</span>
      </Link>
    </Button>
  );

  return (
    <div className="min-h-screen w-full bg-background/95 backdrop-blur-lg">
      <div className="container mx-auto px-4 py-8 sm:py-16">
        <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tight flex items-center justify-center gap-4"><Shield className="h-12 w-12 text-primary" />Admin Dashboard</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                A complete overview of all pages and sections in the application. Links open in a new tab.
            </p>
        </div>

        <section className="mb-12">
            <h2 className="text-xl font-bold font-headline mb-4 text-primary">Main Pages</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4">
                {mainPages.map(action => <ActionButton key={action.href} {...action} />)}
            </div>
        </section>

        <section className="mb-12">
            <h2 className="text-xl font-bold font-headline mb-4 text-primary">Library Content</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4">
                {libraryContent.map(action => <ActionButton key={action.href} {...action} />)}
            </div>
        </section>
        
        <section className="mb-12">
            <h2 className="text-xl font-bold font-headline mb-4 text-primary">Yoga Library Sections</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4">
                {yogaLibrarySections.map(action => <ActionButton key={action.href} {...action} />)}
            </div>
        </section>

        <section>
            <h2 className="text-xl font-bold font-headline mb-4 text-primary">User Pages & Actions</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4">
                {userPages.map(action => <ActionButton key={action.href} {...action} />)}
            </div>
        </section>
      </div>
    </div>
  );
}
