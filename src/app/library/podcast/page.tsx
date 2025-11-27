
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const episodes = [
  { slug: '1', seed: 'podcast1', title: 'Paths to Peace', duration: '28 min', description: 'Exploring the journey to inner calm and mindfulness.' },
  { slug: '2', seed: 'podcast2', title: 'Mindful Conversations', duration: '35 min', description: 'Interviews with leading wellness experts on science and spirituality.' },
  { slug: '3', seed: 'podcast3', title: 'The Philosophy of Yoga', duration: '42 min', description: 'A deep dive into the Yoga Sutras of Patanjali.' },
  { slug: '4', seed: 'podcast4', title: 'Ujjayi: The Victorious Breath', duration: '15 min', description: 'Master the foundational pranayama technique.' },
  { slug: '5', seed: 'podcast5', title: 'Heart Chakra Meditation', duration: '22 min', description: 'Anahata: Cultivating love, compassion, and connection.' },
  { slug: '6', seed: 'podcast6', title: 'Yin for Deep Hip Opening', duration: '45 min', description: 'A slow, deep practice to release tension and increase flexibility.' },
  { slug: '7', seed: 'podcast7', title: 'Building a Home Practice', duration: '30 min', description: 'Practical tips and motivation to stay consistent with your yoga journey.' },
  { slug: '8', seed: 'podcast8', title: 'Ayurveda & Your Dosha', duration: '38 min', description: 'Discover your unique constitution and how to eat for balance.' },
  { slug: '9', seed: 'podcast9', title: 'The Power of Mantras', duration: '25 min', description: 'Using sound and vibration to focus the mind and elevate consciousness.' },
  { slug: '10', seed: 'podcast10', title: 'Restorative Yoga for Deep Rest', duration: '55 min', description: 'The art of active relaxation to heal the body and mind.' },
];

export default function PodcastPage() {
    const podcastCover = PlaceHolderImages.find(img => img.id === 'product-podcast');
    const heroImage = podcastCover?.imageUrl.replace(/seed\/[^/]+/, `seed/main-podcast`) || 'https://picsum.photos/600/400';

    return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        
        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center mb-12">
          <div className="relative aspect-square w-full max-w-xs mx-auto md:max-w-none rounded-lg overflow-hidden shadow-2xl">
             {podcastCover && (
                <Image
                    src={heroImage}
                    alt="Pranian Podcast Cover"
                    fill
                    className="object-cover"
                    data-ai-hint={podcastCover.imageHint}
                />
             )}
          </div>
          <div className="md:col-span-2 text-center md:text-left">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-primary">Podcast</h3>
            <h1 className="mt-2 text-4xl md:text-5xl font-extrabold font-headline tracking-tight">
              The Pranian Podcast
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto md:mx-0">
              Mindful conversations on yoga, meditation, and well-being. Join us as we explore the path to inner peace.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button size="lg" asChild>
                    <Link href={`/library/podcast/${episodes[0].slug}`}>
                        Play Latest Episode
                    </Link>
                </Button>
                <Button size="lg" variant="outline">
                    Subscribe
                </Button>
            </div>
          </div>
        </div>

        {/* Episodes List */}
        <div>
            <h2 className="text-2xl font-bold font-headline tracking-tight mb-4">All Episodes</h2>
             <div className="space-y-4">
            {episodes.map((episode, index) => {
              const episodeImage = PlaceHolderImages.find(img => img.id === 'product-podcast');
              const episodeImageUrl = episodeImage?.imageUrl.replace(/seed\/[^/]+/, `seed/${episode.seed || 'podcast'}${index}`) || 'https://picsum.photos/100/100';

              return (
                <Link href={`/library/podcast/${episode.slug}`} key={episode.slug} className="block group">
                    <div >
                        <div className="flex items-center gap-4 group-hover:bg-muted/50 rounded-md transition-colors p-2 -m-2">
                            <div className="w-16 h-16 sm:w-24 sm:h-24 relative flex-shrink-0">
                                <Image
                                    src={episodeImageUrl}
                                    alt={episode.title}
                                    fill
                                    className="rounded-md object-cover"
                                    data-ai-hint={episodeImage?.imageHint || 'podcast audio'}
                                />
                            </div>
                            <div className="flex-grow">
                                <h3 className="font-semibold text-base sm:text-lg font-headline text-foreground group-hover:underline">{episode.title}</h3>
                                <p className="text-muted-foreground text-sm line-clamp-2 mt-1">{episode.description}</p>
                                <p className="text-xs text-muted-foreground mt-2">{episode.duration}</p>
                            </div>
                             <Button variant="ghost" asChild className="ml-auto hidden sm:inline-flex">
                                <div>Play</div>
                             </Button>
                        </div>
                        {index < episodes.length - 1 && <Separator className="my-4" />}
                    </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
