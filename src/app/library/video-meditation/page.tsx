'use client';

import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { videoMeditations } from '@/lib/video-meditations';

export default function VideoMeditationLibraryPage() {
    const heroImage = PlaceHolderImages.find(img => img.id === 'video-meditation-1');
    const heroImageUrl = heroImage?.imageUrl.replace(/seed\/[^/]+/, `seed/main-video-meditation`) || 'https://picsum.photos/600/400';

    return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 items-center mb-12">
          <div className="relative aspect-square w-full max-w-xs mx-auto md:max-w-none rounded-lg overflow-hidden shadow-2xl">
             {heroImage && (
                <Image
                    src={heroImageUrl}
                    alt="Pranian Video Meditations"
                    fill
                    className="object-cover"
                    data-ai-hint={heroImage.imageHint}
                />
             )}
          </div>
          <div className="md:col-span-2 lg:col-span-3 text-center md:text-left">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-primary">Visual Guides</h3>
            <h1 className="mt-2 text-4xl md:text-6xl font-extrabold font-headline tracking-tight">
              Video Meditations
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto md:mx-0">
              Deepen your practice with our collection of guided video meditations.
            </p>
            <div className="mt-6 flex gap-4 justify-center md:justify-start">
                <Button size="lg" asChild>
                    <Link href={`/library/video-meditation/${videoMeditations[0].slug}`}>
                        Play Latest Video
                    </Link>
                </Button>
            </div>
          </div>
        </div>

        <div>
            <h2 className="text-2xl font-bold font-headline tracking-tight mb-4">All Video Meditations</h2>
             <div className="space-y-4">
            {videoMeditations.map((meditation) => {
              const episodeImage = PlaceHolderImages.find(img => img.id === meditation.imageId);
              const episodeImageUrl = meditation.posterUrl || episodeImage?.imageUrl.replace(/seed\/[^/]+/, `seed/${meditation.slug}`) || 'https://picsum.photos/100/100';

              return (
                <Link href={`/library/video-meditation/${meditation.slug}`} key={meditation.slug} className="block group">
                    <div>
                        <div className="flex items-center gap-4 group-hover:bg-muted/50 rounded-md transition-colors p-2 -m-2">
                            <div className="w-24 h-24 relative flex-shrink-0">
                                <Image
                                    src={episodeImageUrl}
                                    alt={meditation.title}
                                    fill
                                    className="rounded-md object-cover"
                                    data-ai-hint={episodeImage?.imageHint || 'video meditation'}
                                />
                            </div>
                            <div className="flex-grow">
                                <h3 className="font-semibold text-lg font-headline text-foreground group-hover:underline">{meditation.title}</h3>
                                <p className="text-muted-foreground text-sm line-clamp-2 mt-1">{meditation.description}</p>
                                <p className="text-xs text-muted-foreground mt-2">{meditation.duration}</p>
                            </div>
                             <Button variant="ghost" asChild className="ml-auto hidden sm:inline-flex">
                                <div>Play</div>
                             </Button>
                        </div>
                        <Separator className="my-4" />
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
