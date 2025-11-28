
'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { ContentCard } from '@/components/content-card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { meditations } from '@/lib/meditations';
import { videoMeditations } from '@/lib/video-meditations';
import { videos } from '@/lib/videos';
import { LoaderCircle } from 'lucide-react';

const podcastEpisodes = [
  { slug: '1', seed: 'podcast1', title: 'Paths to Peace', duration: '28 min', description: 'Exploring the journey to inner calm and mindfulness.', author: 'Pranian Wellness' },
  { slug: '2', seed: 'podcast2', title: 'Mindful Conversations', duration: '35 min', description: 'Interviews with leading wellness experts on science and spirituality.', author: 'Pranian Wellness' },
  { slug: '3', seed: 'podcast3', title: 'The Philosophy of Yoga', duration: '42 min', description: 'A deep dive into the Yoga Sutras of Patanjali.', author: 'Pranian Wellness' },
  { slug: '4', seed: 'podcast4', title: 'Ujjayi: The Victorious Breath', duration: '15 min', description: 'Master the foundational pranayama technique.', author: 'Pranian Wellness' },
  { slug: '5', seed: 'podcast5', title: 'Heart Chakra Meditation', duration: '22 min', description: 'Anahata: Cultivating love, compassion, and connection.', author: 'Pranian Wellness' },
  { slug: '6', seed: 'podcast6', title: 'Yin for Deep Hip Opening', duration: '45 min', description: 'A slow, deep practice to release tension and increase flexibility.', author: 'Pranian Wellness' },
  { slug: '7', seed: 'podcast7', title: 'Building a Home Practice', duration: '30 min', description: 'Practical tips and motivation to stay consistent with your yoga journey.', author: 'Pranian Wellness' },
  { slug: '8', seed: 'podcast8', title: 'Ayurveda & Your Dosha', duration: '38 min', description: 'Discover your unique constitution and how to eat for balance.', author: 'Pranian Wellness' },
  { slug: '9', seed: 'podcast9', title: 'The Power of Mantras', duration: '25 min', description: 'Using sound and vibration to focus the mind and elevate consciousness.', author: 'Pranian Wellness' },
  { slug: '10', seed: 'podcast10', title: 'Restorative Yoga for Deep Rest', duration: '55 min', description: 'The art of active relaxation to heal the body and mind.', author: 'Pranian Wellness' },
];

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
