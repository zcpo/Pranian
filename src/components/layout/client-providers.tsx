'use client';

import React from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { FirebaseClientProvider } from '@/firebase';
import Header from '@/components/layout/header';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import Logo from '@/components/logo';

const navLinks = [
  { href: '/feed', label: 'Feed' },
  { href: '/library', label: 'Library' },
  { href: '/store', label: 'Store' },
  { href: '/events', label: 'Events' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/journal', label: 'Journal' },
  { href: '/class-vibes', label: 'Class Vibes' },
];

export function ClientProviders({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  return (
    <FirebaseClientProvider>
      <Header />
      {children}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="default"
            size="icon"
            className="fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-2xl bg-background/50 backdrop-blur-sm border-white/20 border text-white md:hidden"
            aria-label="Toggle Navigation"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>
              <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
                <Logo />
              </Link>
            </SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-4 py-4">
            {navLinks.map((link) => (
              <Button asChild variant="ghost" className="justify-start text-base" key={link.href}>
                <Link href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              </Button>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </FirebaseClientProvider>
  );
}
