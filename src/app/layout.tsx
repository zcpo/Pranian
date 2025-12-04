import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { ClientProviders } from '@/components/layout/client-providers';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-poppins',
});

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
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel='stylesheet' href='https://unpkg.com/plyr@3/dist/plyr.css' />
      </head>
      <body className="dark font-body antialiased text-foreground">
        <ClientProviders>
          <div className="flex flex-col min-h-screen">
            <main className="flex-1">
              {children}
            </main>
          </div>
          <Toaster />
        </ClientProviders>
      </body>
    </html>
  );
}
