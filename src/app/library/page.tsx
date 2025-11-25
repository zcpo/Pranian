'use client';

import { ArrowRight, Book, Clapperboard, Headphones, Shirt, BookOpen } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Link from 'next/link';

const sections = [
  { 
    id: 'yoga-1',
    title: 'Yoga', 
    description: 'Flow with our collection of yoga classes for all levels.',
    icon: null,
    href: '/library/yoga',
    imageHint: 'yoga pose'
  },
  {
    id: 'meditation-1',
    title: 'Meditation', 
    description: 'Find your center with guided meditations.',
    icon: null,
    href: '/library/meditation',
    imageHint: 'meditation serene'
  },
  { 
    id: 'product-book',
    title: 'Books', 
    description: 'Expand your knowledge with our curated books.',
    icon: Book,
    href: '/library/books',
    imageHint: 'book meditation'
  },
  { 
    id: 'product-mat',
    title: 'Merchandise', 
    description: 'Gear up for your practice with our merchandise.',
    icon: Shirt,
    href: '/library/merchandise',
    imageHint: 'yoga mat'
  },
  { 
    id: 'product-book',
    seed: 'book2',
    title: 'Ebooks', 
    description: 'Read on the go with our digital collection.',
    icon: BookOpen,
    href: '/library/ebooks',
    imageHint: 'book reading'
  },
  { 
    id: 'product-podcast',
    title: 'Podcast', 
    description: 'Listen to insightful conversations on wellness.',
    icon: Headphones,
    href: '/library/podcast',
    imageHint: 'podcast audio'
  },
  { 
    id: 'product-video',
    title: 'Video', 
    description: 'Watch workshops, tutorials, and more.',
    icon: Clapperboard,
    href: '/library/video',
    imageHint: 'video lesson'
  },
];

export default function LibraryPage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tight">Content Library</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Explore our collection of guided meditations, yoga classes, and more.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {sections.map((section, index) => {
           const imageData = PlaceHolderImages.find(img => img.id === section.id);
           const imageUrl = imageData?.imageUrl.replace(/seed\/[^/]+/, `seed/${section.seed || section.id}${index}`) || 'https://picsum.photos/600/400';
           const imageHint = section.imageHint || 'yoga meditation';
          return (
            <Link href={section.href} className="group block" key={section.title}>
              <Card className="h-full transition-all duration-300 ease-in-out group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/10 flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    {section.icon && <section.icon className="h-8 w-8 text-primary" />}
                    <h3 className="text-2xl font-semibold font-headline text-foreground">{section.title}</h3>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{section.description}</p>
                </CardContent>
                <CardContent>
                   <div className="flex items-center text-sm font-medium text-primary">
                      View Section
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
                    </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}