
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { UserCircle, Menu, BookOpen, Store, Calendar, DollarSign, BookText, Music4, Heart, Headphones, Video, Podcast, Clapperboard, Brain, Sparkles, Rss as FeedIcon } from 'lucide-react';
import * as React from "react"
import { signOut } from 'firebase/auth';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Logo from '@/components/logo';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useUser, useAuth } from '@/firebase';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { GlassNavLink } from './glass-nav-link';


const navLinks = [
  { href: '/feed', label: 'Feed', icon: FeedIcon },
  { href: '/library', label: 'Library', icon: BookOpen },
  { href: '/store', label: 'Store', icon: Store },
  { href: '/events', label: 'Events', icon: Calendar },
  { href: '/pricing', label: 'Pricing', icon: DollarSign },
  { href: '/journal', label: 'Journal', icon: BookText },
  { href: '/class-vibes', label: 'Class Vibes', icon: Music4 },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const { user } = useUser();
  const auth = useAuth();

  const handleSignOut = () => {
    if (auth) {
      signOut(auth);
    }
  };

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
        
        <div className="flex flex-1 items-center justify-between md:justify-end">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:gap-4 lg:gap-6">
            {navLinks.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
          </nav>
          
          <div className="flex items-center gap-2 md:ml-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    {user ? (
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={user.photoURL || ''} alt={user.displayName || 'User'} />
                        <AvatarFallback>
                          {user.displayName ? user.displayName.charAt(0).toUpperCase() : <UserCircle className="h-5 w-5" />}
                        </AvatarFallback>
                      </Avatar>
                    ) : (
                      <UserCircle className="h-5 w-5" />
                    )}
                    <span className="sr-only">User menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {user ? (
                    <>
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem asChild>
                        <Link href="/profile">Profile</Link>
                      </DropdownMenuItem>
                       <DropdownMenuItem asChild>
                        <Link href="/journal">Journal</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>Billing</DropdownMenuItem>
                      <DropdownMenuItem>Settings</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={handleSignOut}>Log out</DropdownMenuItem>
                    </>
                  ) : (
                    <>
                      <DropdownMenuItem asChild>
                        <Link href="/login">Log in</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/login">Sign up</Link>
                      </DropdownMenuItem>
                    </>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
             
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
                      <SheetHeader className="border-b pb-4 mb-4">
                        <SheetTitle>
                           <Link href="/" onClick={() => setOpen(false)}>
                                <Logo />
                            </Link>
                        </SheetTitle>
                        <SheetDescription>
                          Navigate through the Pranian app.
                        </SheetDescription>
                      </SheetHeader>
                      <div className="flex flex-col gap-2">
                        {navLinks.map((link) => (
                           <GlassNavLink 
                             key={link.href} 
                             href={link.href} 
                             label={link.label}
                             icon={link.icon} 
                             active={pathname === link.href}
                             onClick={() => setOpen(false)}
                           />
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
