
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');

  return (
    <>
      <div className="flex flex-col min-h-[calc(100vh-3.6rem)]">
        {/* Hero Section */}
        <section className="relative flex-1 flex items-center justify-center text-center text-white">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover"
              priority
              data-ai-hint={heroImage.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-headline tracking-tight">
              Find Your Inner Peace
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white/80">
              Discover a sanctuary of calm with our guided meditations, yoga flows, and a community dedicated to mindful living.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/pricing">Start Free Trial</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black">
                <Link href="/library">Explore Library</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
