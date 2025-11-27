"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { UserCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Logo from '@/components/logo';
import { ThemeToggle } from '@/components/theme-toggle';

const navLinks = [
  { href: '/library', label: 'Library' },
  { href: '/store', label: 'Store' },
  { href: '/events', label: 'Events' },
  { href: '/pricing', label: 'Pricing' },
];

export default function Header() {
  const pathname = usePathname();

  const NavLink = ({ href, label }: { href: string; label: string }) => (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium transition-colors hover:text-primary",
        pathname === href ? "text-foreground" : "text-muted-foreground"
      )}
    >
      {label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Logo />
        </div>
        
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex md:gap-6">
              {navLinks.map((link) => (
                <NavLink key={link.href} {...link} />
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-2">
             <ThemeToggle />
             <Button variant="ghost" size="icon" asChild>
                <Link href="/login">
                    <UserCircle className="h-5 w-5" />
                    <span className="sr-only">Login</span>
                </Link>
             </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
