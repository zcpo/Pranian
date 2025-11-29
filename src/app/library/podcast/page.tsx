
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { podcastEpisodes } from '@/lib/podcasts';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

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
                    <Link href={`/library/podcast/${podcastEpisodes[0].slug}`}>
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
            {podcastEpisodes.map((episode, index) => {
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
                        {index < podcastEpisodes.length - 1 && <Separator className="my-4" />}
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
