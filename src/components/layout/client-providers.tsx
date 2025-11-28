'use client';

import { FirebaseClientProvider } from '@/firebase';
import Header from '@/components/layout/header';

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <FirebaseClientProvider>
      <Header />
      {children}
    </FirebaseClientProvider>
  );
}
