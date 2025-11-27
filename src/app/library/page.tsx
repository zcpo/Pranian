
'use client';

import { ArrowRight, Book, Clapperboard, Headphones, Shirt, BookOpen, Video } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Link from 'next/link';
import { ContentCard } from '@/components/content-card';

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
    title: 'Audio Meditations', 
    description: 'Find your center with guided audio meditations.',
    icon: Headphones,
    href: '/library/meditation',
    imageHint: 'meditation serene'
  },
  { 
    id: 'video-meditation-1',
    title: 'Video Meditations', 
    description: 'Visual guides to deepen your meditation practice.',
    icon: Video,
    href: '/library/video-meditation',
    imageHint: 'video meditation'
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
           const imageUrl = imageData?.imageUrl.replace(/seed\/[^/]+/, `seed/${section.id}${index}`) || 'https://picsum.photos/600/400';
           const imageHint = section.imageHint || 'yoga meditation';
          return (
            <ContentCard
              key={index}
              href={section.href}
              imageUrl={imageUrl}
              imageHint={imageHint}
              category={section.title}
              title={section.title}
              description={section.description}
            />
          );
        })}
      </div>
    </div>
  );
}
