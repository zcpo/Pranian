import Link from 'next/link';
import { Twitter, Instagram, Facebook } from 'lucide-react';
import Logo from '@/components/logo';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Logo className="text-white" />
            <p className="mt-4 text-sm text-white/80">
              Find your inner peace.
            </p>
            <div className="mt-6 flex space-x-4">
              <Link href="#" className="text-white/80 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white/80 hover:text-white">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white/80 hover:text-white">
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Content</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/library" className="text-sm text-white/80 hover:text-white">Library</Link></li>
              <li><Link href="#" className="text-sm text-white/80 hover:text-white">Videos</Link></li>
              <li><Link href="#" className="text-sm text-white/80 hover:text-white">Podcasts</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Shop</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/store" className="text-sm text-white/80 hover:text-white">Merchandise</Link></li>
              <li><Link href="/store" className="text-sm text-white/80 hover:text-white">Books</Link></li>
              <li><Link href="/events" className="text-sm text-white/80 hover:text-white">Events</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="#" className="text-sm text-white/80 hover:text-white">About</Link></li>
              <li><Link href="/pricing" className="text-sm text-white/80 hover:text-white">Pricing</Link></li>
              <li><Link href="#" className="text-sm text-white/80 hover:text-white">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/20 pt-8">
          <p className="text-sm text-white/80 text-center">
            &copy; {new Date().getFullYear()} Pranian. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
