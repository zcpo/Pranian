import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/header';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from '@/components/theme-provider';
import { FloatingNav } from '@/components/layout/floating-nav';
import Footer from '@/components/layout/footer';

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel='stylesheet' href='https://unpkg.com/plyr@3/dist/plyr.css' />
        <script src="https://cdn.rawgit.com/video-dev/hls.js/18bb552/dist/hls.min.js" async></script>
        <script src='https://unpkg.com/plyr@3' async></script>
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />
          <FloatingNav />
        </ThemeProvider>
      </body>
    </html>
  );
}
