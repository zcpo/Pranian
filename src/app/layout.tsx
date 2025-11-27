import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/header';
import { Toaster } from "@/components/ui/toaster";
import { FloatingNav } from '@/components/layout/floating-nav';
import { FirebaseClientProvider } from '@/firebase';

export const metadata: Metadata = {
  title: 'Pranian - Yoga & Meditation',
  description: 'Find your inner peace with our collection of yoga classes, meditations, and wellness products.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Poppins:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel='stylesheet' href='https://unpkg.com/plyr@3/dist/plyr.css' />
        <script src="https://cdn.rawgit.com/video-dev/hls.js/18bb552/dist/hls.min.js" async></script>
        <script src='https://unpkg.com/plyr@3' async></script>
      </head>
      <body className="dark font-body antialiased text-foreground">
          <FirebaseClientProvider>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-1">
                {children}
              </main>
            </div>
            <Toaster />
            <FloatingNav />
          </FirebaseClientProvider>
      </body>
    </html>
  );
}
