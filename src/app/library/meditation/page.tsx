
'use client';

import { ContentCard } from '@/components/content-card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { meditations } from '@/lib/meditations';

export default function PodcastPage() {
    return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tight">Audio Meditations</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Find your center and calm your mind with our collection of guided meditations.
            </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {meditations.map((meditation) => {
              const episodeImage = PlaceHolderImages.find(img => img.id === meditation.imageId);
              const episodeImageUrl = episodeImage?.imageUrl.replace(/seed\/[^/]+/, `seed/${meditation.slug}`) || 'https://picsum.photos/600/400';

              return (
                <ContentCard
                  key={meditation.slug}
                  href={`/library/meditation/${meditation.slug}`}
                  imageUrl={episodeImageUrl}
                  imageHint={episodeImage?.imageHint || 'meditation serene'}
                  category="Audio Meditation"
                  title={meditation.title}
                  description={meditation.description}
                />
              );
            })}
          </div>
      </div>
    </div>
  );
}
