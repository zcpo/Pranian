'use client';
import { useRouter } from 'next/navigation';
import {
  Home,
  BookOpen,
  Headphones,
  Video,
  Clapperboard,
  Store,
  Calendar,
  DollarSign,
  User,
  Heart,
  Brain,
  Podcast,
  Sparkles,
  BookText,
  X,
  Camera,
  Upload,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/library', label: 'Library', icon: BookOpen },
  { href: '/journal', label: 'Journal', icon: BookText },
  { href: '/camera', label: 'Camera', icon: Camera },
  { href: '/upload', label: 'Upload', icon: Upload },
  { href: '/library/yoga', label: 'Yoga', icon: Heart },
  { href: '/library/meditation', label: 'Audio Meditations', icon: Headphones },
  { href: '/library/video-meditation', label: 'Video Meditations', icon: Video },
  { href: '/library/podcast', label: 'Podcast', icon: Podcast },
  { href: '/library/video', label: 'Videos', icon: Clapperboard },
  { href: '/store', label: 'Store', icon: Store },
  { href: '/events', label: 'Events', icon: Calendar },
  { href: '/pricing', label: 'Pricing', icon: DollarSign },
  { href: '/login', label: 'Login', icon: User },
  { href: '/library/yoga/philosophy', label: 'Philosophy', icon: Brain },
  { href: '/library/yoga/chakras', label: 'Chakras', icon: Sparkles },
];

function NavButton({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ElementType;
  label: string;
}) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Simulate a small delay to ensure loader is visible
    setTimeout(() => {
      router.push(href);
    }, 150);
  };

  return (
    <button
      onClick={handleClick}
      className="group flex flex-col items-center justify-center p-4 rounded-lg bg-secondary/50 hover:bg-primary/10 text-center transition-colors"
    >
      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/20 text-primary mb-2">
        <Icon className="h-8 w-8" />
      </div>
      <span className="text-sm font-medium text-foreground group-hover:text-primary">
        {label}
      </span>
    </button>
  );
}

export default function QuickNavPage() {
  const router = useRouter();

  return (
    <div className="h-screen w-screen bg-background flex flex-col">
      <div className="flex justify-end p-4">
        <Button variant="ghost" size="icon" onClick={() => router.back()}>
          <X className="h-8 w-8" />
        </Button>
      </div>
      <div className="flex-1 overflow-y-auto p-6 pt-0">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {navItems.map((item) => (
            <NavButton
              key={item.href}
              href={item.href}
              icon={item.icon}
              label={item.label}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
