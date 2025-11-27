
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { UserCircle, Menu } from 'lucide-react';
import * as React from "react"

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Logo from '@/components/logo';
import { ThemeToggle } from '@/components/theme-toggle';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const navLinks = [
  { href: '/library', label: 'Library' },
  { href: '/store', label: 'Store' },
  { href: '/events', label: 'Events' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/journal', label: 'Journal' },
  { href: '/class-vibes', label: 'Class Vibes' },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);


  const NavLink = ({ href, label, className }: { href: string; label: string; className?: string }) => (
    <Link
      href={href}
      onClick={() => setOpen(false)}
      className={cn(
        "text-sm font-medium transition-colors hover:text-primary",
        pathname === href ? "text-foreground" : "text-muted-foreground",
        className
      )}
    >
      {label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo />
          </Link>
        </div>
        
        <div className="flex flex-1 items-center justify-end">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:gap-6">
            {navLinks.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
          </nav>
          
          <div className="flex items-center gap-2 ml-4">
             <ThemeToggle />
             <Button variant="ghost" size="icon" asChild>
                <Link href="/login">
                    <UserCircle className="h-5 w-5" />
                    <span className="sr-only">Login</span>
                </Link>
             </Button>
             
            {/* Mobile Navigation */}
            <div className="md:hidden">
                <Sheet open={open} onOpenChange={setOpen}>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Menu className="h-5 w-5" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right">
                      <div className="flex flex-col gap-4 py-6">
                         <div className="mb-4">
                            <Link href="/" onClick={() => setOpen(false)}>
                                <Logo />
                            </Link>
                         </div>
                        {navLinks.map((link) => (
                           <NavLink key={link.href} {...link} className="text-lg" />
                        ))}
                      </div>
                  </SheetContent>
                </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
