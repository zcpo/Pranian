'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@/firebase';
import { Loader2 } from 'lucide-react';

/**
 * This page acts as a redirector.
 * If the user is logged in, it redirects them to their own profile page at /profile/[userId].
 * If the user is not logged in, it redirects them to the login page.
 */
export default function ProfileRedirectPage() {
  const { user, isUserLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    // Wait until the authentication state is determined
    if (isUserLoading) {
      return;
    }

    if (user) {
      // If user is logged in, redirect to their specific profile page
      router.replace(`/profile/${user.uid}`);
    } else {
      // If user is not logged in, redirect to the login page
      router.replace('/login');
    }
  }, [user, isUserLoading, router]);

  // Display a loading indicator while the redirect is in progress
  return (
    <div className="flex h-screen items-center justify-center">
      <Loader2 className="h-12 w-12 animate-spin text-primary" />
    </div>
  );
}
