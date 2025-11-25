import { ContentCard } from '@/components/content-card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const content = [
  { id: 'product-podcast', category: 'Podcast', title: 'Paths to Peace', description: 'Exploring the journey to inner calm.' },
  { id: 'product-podcast', seed: 'podcast2', category: 'Podcast', title: 'Mindful Conversations', description: 'Interviews with wellness experts.' },
];

export default function PodcastPage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tight">Podcasts</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Listen to insightful conversations on mindfulness, yoga, and well-being.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {content.map((item, index) => {
          const imageData = PlaceHolderImages.find(img => img.id === item.id);
          const imageUrl = imageData?.imageUrl.replace(/seed\/[^/]+/, `seed/${item.seed || item.id}${index}`) || 'https://picsum.photos/600/400';
          const imageHint = imageData?.imageHint || 'podcast audio';
          return (
            <ContentCard
              key={index}
              href={`/library/podcast/${index + 1}`}
              imageUrl={imageUrl}
              imageHint={imageHint}
              category={item.category}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </div>
    </div>
  );
}