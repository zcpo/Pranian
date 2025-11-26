'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Plus,
  X,
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
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import Logo from '../logo';

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/library', label: 'Library', icon: BookOpen },
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

export function FloatingNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          size="icon"
          className="fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-2xl z-50"
        >
          <Plus className="h-8 w-8" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="bottom"
        className="h-screen w-screen rounded-none p-0 flex flex-col"
      >
        <SheetHeader className="p-6 border-b text-left">
          <SheetTitle className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Logo />
              <span className="text-xl font-headline tracking-tight">Quick Navigation</span>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </SheetTitle>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="group flex flex-col items-center justify-center p-4 rounded-lg bg-secondary/50 hover:bg-primary/10 text-center transition-colors"
              >
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/20 text-primary mb-2">
                    <item.icon className="h-8 w-8" />
                </div>
                <span className="text-sm font-medium text-foreground group-hover:text-primary">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
