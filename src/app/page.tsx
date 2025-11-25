import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ContentCard } from '@/components/content-card';
import { ProductCard } from '@/components/product-card';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Footer from '@/components/layout/footer';

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');
  const meditationImage1 = PlaceHolderImages.find(img => img.id === 'meditation-1');
  const yogaImage1 = PlaceHolderImages.find(img => img.id === 'yoga-1');
  const productMat = PlaceHolderImages.find(img => img.id === 'product-mat');
  const productBook = PlaceHolderImages.find(img => img.id === 'product-book');

  return (
    <>
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center text-center text-white">
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
            <h1 className="text-4xl md:text-6xl font-extrabold font-headline tracking-tight">
              Find Your Inner Peace
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white/80">
              Discover a sanctuary of calm with our guided meditations, yoga flows, and a community dedicated to mindful living.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/pricing">Start Free Trial</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black">
                <Link href="/library">Explore Library</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Content Section */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline tracking-tight">Featured Sessions</h2>
              <p className="mt-3 max-w-2xl mx-auto text-muted-foreground">
                Start your journey with our most popular yoga and meditation classes.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {meditationImage1 && (
                <ContentCard
                  href="/library/meditation"
                  imageUrl={meditationImage1.imageUrl}
                  imageHint={meditationImage1.imageHint}
                  category="Meditation"
                  title="10-Minute Morning Mindfulness"
                  description="Begin your day with clarity and focus. A perfect session for all levels."
                />
              )}
              {yogaImage1 && (
                <ContentCard
                  href="/library/yoga"
                  imageUrl={yogaImage1.imageUrl}
                  imageHint={yogaImage1.imageHint}
                  category="Yoga"
                  title="Gentle Vinyasa Flow"
                  description="Connect breath with movement in this gentle flow designed to energize your body."
                />
              )}
            </div>
            <div className="text-center mt-12">
               <Button asChild variant="link" className="text-primary text-lg">
                  <Link href="/library">View Full Library <ArrowRight className="ml-2 h-5 w-5"/></Link>
               </Button>
            </div>
          </div>
        </section>
        
        {/* Shop Section */}
        <section className="py-16 sm:py-24 bg-background border-t">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline tracking-tight">Shop Pranian</h2>
              <p className="mt-3 max-w-2xl mx-auto text-muted-foreground">
                Elevate your practice with our curated collection of wellness products.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {productMat && <ProductCard href="/store/product-1" imageUrl={productMat.imageUrl} imageHint={productMat.imageHint} name="The Pranian Mat" price="$89.99" />}
              {productBook && <ProductCard href="/store/product-2" imageUrl={productBook.imageUrl} imageHint={productBook.imageHint} name="Mindfulness for Beginners" price="$24.99" />}
              {PlaceHolderImages.find(img => img.id === 'product-podcast') && <ProductCard href="/store/product-3" imageUrl={PlaceHolderImages.find(img => img.id === 'product-podcast')!.imageUrl} imageHint={PlaceHolderImages.find(img => img.id === 'product-podcast')!.imageHint} name="Podcast: Paths to Peace" price="$9.99" />}
              {PlaceHolderImages.find(img => img.id === 'product-video') && <ProductCard href="/store/product-4" imageUrl={PlaceHolderImages.find(img => img.id === 'product-video')!.imageUrl} imageHint={PlaceHolderImages.find(img => img.id === 'product-video')!.imageHint} name="Advanced Yoga Workshop" price="$49.99" />}

            </div>
             <div className="text-center mt-12">
               <Button asChild variant="link" className="text-primary text-lg">
                  <Link href="/store">Explore The Store <ArrowRight className="ml-2 h-5 w-5"/></Link>
               </Button>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 sm:py-24 bg-background border-t">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold font-headline tracking-tight">Become a Member</h2>
              <p className="mt-3 text-lg text-muted-foreground">
                Unlock unlimited access to our entire library and enjoy exclusive member benefits.
              </p>
            </div>
            <div className="mt-12 max-w-lg mx-auto">
              <Card className="border-primary/50 shadow-lg shadow-primary/10">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-headline flex items-center justify-center gap-2">
                    <Sparkles className="h-6 w-6 text-primary" />
                    Pranian Premium
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-5xl font-bold tracking-tight">$3.99<span className="text-lg font-normal text-muted-foreground">/month</span></p>
                  <ul className="mt-6 space-y-2 text-muted-foreground">
                    <li>Unlimited access to all content</li>
                    <li>Exclusive member-only courses</li>
                    <li>Download for offline access</li>
                    <li>Early access to new releases</li>
                  </ul>
                </CardContent>
                <CardFooter>
                   <Button asChild size="lg" className="w-full">
                      <Link href="/pricing">Get Full Access</Link>
                   </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
