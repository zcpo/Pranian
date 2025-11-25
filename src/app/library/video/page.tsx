import { ContentCard } from '@/components/content-card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const content = [
  { id: 'product-video', category: 'Video', title: 'Advanced Yoga Workshop', description: 'Deepen your practice with advanced techniques.' },
  { id: 'product-video', seed: 'video2', category: 'Video', title: 'Meditation for Beginners Series', description: 'A guided introduction to mindfulness.' },
];

export default function VideoPage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tight">Videos</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Watch workshops, tutorials, and guided sessions from our experts.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {content.map((item, index) => {
          const imageData = PlaceHolderImages.find(img => img.id === item.id);
          const imageUrl = imageData?.imageUrl.replace(/seed\/[^/]+/, `seed/${item.seed || item.id}${index}`) || 'https://picsum.photos/600/400';
          const imageHint = imageData?.imageHint || 'video lesson';
          return (
            <ContentCard
              key={index}
              href={`/library/video/${index + 1}`}
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