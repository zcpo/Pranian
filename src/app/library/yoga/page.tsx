'use client';

import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Link from 'next/link';

const sections = [
  { 
    title: 'Asana (Postures) Library', 
    description: 'Explore a comprehensive guide to yoga postures.',
    href: '/library/yoga/asana',
  },
  {
    title: 'Pranayama (Breathing Techniques)', 
    description: 'Learn various breathing exercises to control your prana or life-force.',
    href: '/library/yoga/pranayama',
  },
  { 
    title: 'Meditation & Mindfulness', 
    description: 'Discover guided meditations and mindfulness practices within the yoga tradition.',
    href: '/library/yoga/meditation',
  },
  { 
    title: 'Philosophy & Foundations', 
    description: 'Understand the core principles and texts of yoga philosophy.',
    href: '/library/yoga/philosophy',
  },
  { 
    title: 'Anatomy & Physiology', 
    description: 'Learn about the body and how it moves in yoga.',
    href: '/library/yoga/anatomy',
  },
  { 
    title: 'Sequencing & Practice Plans', 
    description: 'Find sequences and plans for your personal practice.',
    href: '/library/yoga/sequencing',
  },
  { 
    title: 'Specialty Yoga Styles', 
    description: 'Explore different styles of yoga like Hatha, Vinyasa, and Kundalini.',
    href: '/library/yoga/styles',
  },
  { 
    title: 'Chakras & Energy Work', 
    description: 'Dive into the subtle energy body, chakras, and mudras.',
    href: '/library/yoga/chakras',
  },
  { 
    title: 'Props & Modifications', 
    description: 'Learn how to use props to support and deepen your practice.',
    href: '/library/yoga/props',
  },
  { 
    title: 'Lifestyle & Ayurveda', 
    description: 'Integrate yoga and Ayurveda into your daily life for holistic wellness.',
    href: '/library/yoga/lifestyle',
  },
  { 
    title: 'Teaching Resources', 
    description: 'Resources for yoga teachers to refine their skills.',
    href: '/library/yoga/teaching',
  },
  {
    title: 'Audio/Video Library',
    description: 'Video pose breakdowns, follow-along classes, and audio meditations.',
    href: '/library/yoga/audio-video',
  },
  { 
    title: 'Glossary & Sanskrit Guide', 
    description: 'A guide to Sanskrit terms and pose names.',
    href: '/library/yoga/glossary',
  },
];

export default function YogaLibraryPage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tight">Yoga Library</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Explore our comprehensive collection of yoga resources.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section) => (
            <Link href={section.href} className="group block" key={section.title}>
              <Card className="h-full transition-all duration-300 ease-in-out group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/10 flex flex-col">
                <CardHeader>
                  <h3 className="text-xl font-semibold font-headline text-foreground">{section.title}</h3>
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
          ))}
      </div>
    </div>
  );
}
