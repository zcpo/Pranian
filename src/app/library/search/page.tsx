
'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { ContentCard } from '@/components/content-card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { meditations } from '@/lib/meditations';
import { videoMeditations } from '@/lib/video-meditations';
import { videos } from '@/lib/videos';
import { podcastEpisodes } from '@/lib/podcasts';
import { LoaderCircle } from 'lucide-react';

const allContent = [
  ...meditations.map(item => ({ ...item, type: 'Audio Meditation', href: `/library/meditation/${item.slug}` })),
  ...videoMeditations.map(item => ({ ...item, type: 'Video Meditation', href: `/library/video-meditation/${item.slug}` })),
  ...videos.map(item => ({ ...item, type: 'Video', href: `/library/video/${item.slug}` })),
  ...podcastEpisodes.map(item => ({ ...item, imageId: 'product-podcast', type: 'Podcast', href: `/library/podcast/${item.slug}` })),
];

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q');

  if (!query) {
    return (
      <div className="text-center text-muted-foreground">
        Please enter a search term to begin.
      </div>
    );
  }

  const lowerCaseQuery = query.toLowerCase();
  const filteredContent = allContent.filter(item => 
    item.title.toLowerCase().includes(lowerCaseQuery) ||
    item.description.toLowerCase().includes(lowerCaseQuery) ||
    (item.author && item.author.toLowerCase().includes(lowerCaseQuery))
  );

  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tight">Search Results for "{query}"</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Found {filteredContent.length} result{filteredContent.length !== 1 ? 's' : ''}.
        </p>
      </div>

      {filteredContent.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredContent.map((item, index) => {
            const imageData = PlaceHolderImages.find(img => img.id === item.imageId);
            const imageUrl = (item as any).posterUrl || imageData?.imageUrl.replace(/seed\/[^/]+/, `seed/${item.slug}${index}`) || 'https://picsum.photos/600/400';
            const imageHint = imageData?.imageHint || 'yoga';

            return (
              <ContentCard
                key={`${item.type}-${item.slug}`}
                href={item.href}
                imageUrl={imageUrl}
                imageHint={imageHint}
                category={item.type}
                title={item.title}
                description={item.description}
              />
            );
          })}
        </div>
      ) : (
        <div className="text-center text-muted-foreground py-16">
          <p>No content found matching your search term.</p>
          <p>Try searching for something else.</p>
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <Suspense fallback={<div className="flex justify-center items-center h-64"><LoaderCircle className="h-12 w-12 animate-spin text-primary" /></div>}>
        <SearchResults />
      </Suspense>
    </div>
  );
}
