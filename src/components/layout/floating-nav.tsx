
'use client';

import Link from 'next/link';
import { Plus } from 'lucide-react';
import { usePathname } from 'next/navigation';
import '@/app/quick-nav/glass-button.css'; // Import the new CSS file

export function FloatingNav() {
  const pathname = usePathname();

  // Do not render the button on the root path or the quick-nav page itself
  if (pathname === '/' || pathname.startsWith('/quick-nav')) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link href="/quick-nav" passHref>
        <div className="glass-container">
          <div className="glass-filter"></div>
          <div className="glass-overlay"></div>
          <div className="glass-specular"></div>
          <div className="glass-content">
            <Plus className="h-8 w-8 text-white" />
          </div>
        </div>
      </Link>
    </div>
  );
}
