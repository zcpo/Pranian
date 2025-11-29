
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { UserCircle, Menu, BookOpen, Store, Calendar, DollarSign, BookText, Music4, Rss as FeedIcon } from 'lucide-react';
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
    <Button asChild variant="ghost" className={cn("text-sm font-medium", pathname === href ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:text-foreground", className)}>
        <Link
        href={href}
        onClick={() => setOpen(false)}
        >
        {label}
        </Link>
    </Button>
  );

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex items-center">
           <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden mr-2"
                aria-label="Toggle Navigation"
              >
                <Menu className="h-5 w-5" />
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
          <Link href="/" className="mr-6 hidden items-center space-x-2 md:flex">
            <Logo />
          </Link>
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 p-1 rounded-md bg-muted/50 border">
            {navLinks.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
          </nav>
        </div>
        
        <div className="flex flex-1 items-center justify-end">
          <div className="flex items-center gap-2">
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
          </div>
        </div>
      </div>
    </header>
  );
}
