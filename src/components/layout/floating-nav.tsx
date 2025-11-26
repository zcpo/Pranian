'use client';

import Link from 'next/link';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';

export function FloatingNav() {
  const pathname = usePathname();

  if (pathname === '/' || pathname.startsWith('/quick-nav')) {
    return null;
  }

  return (
    <Button
      asChild
      size="icon"
      className="fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-2xl z-50 bg-primary hover:bg-primary/90"
    >
      <Link href="/quick-nav">
        <Plus className="h-8 w-8" />
      </Link>
    </Button>
  );
}
