
'use client';

import React from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { FirebaseClientProvider, useUser } from '@/firebase';
import Header from '@/components/layout/header';
import { Button } from '@/components/ui/button';

const FloatingActionButton = () => {
  const { user } = useUser();

  if (!user) {
    return null;
  }

  return (
    <Button
      asChild
      variant="default"
      size="icon"
      className="fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-2xl bg-background/50 backdrop-blur-sm border-white/20 border text-white"
      aria-label="Open Actions Menu"
    >
      <Link href="/actions">
        <Menu className="h-6 w-6" />
      </Link>
    </Button>
  );
};

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <FirebaseClientProvider>
      <Header />
      {children}
      <FloatingActionButton />
    </FirebaseClientProvider>
  );
}
