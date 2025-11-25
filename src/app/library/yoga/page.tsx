import { ContentCard } from '@/components/content-card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const content = [
  { id: 'yoga-1', category: 'Yoga', title: 'Gentle Vinyasa Flow', description: 'Connect breath with movement in this gentle flow.' },
  { id: 'yoga-2', category: 'Yoga', title: 'Power Yoga for Strength', description: 'Build heat and strength with this dynamic sequence.' },
  { id: 'yoga-1', seed: 'y3', category: 'Yoga', title: 'Restorative Yoga for Relaxation', description: 'Unwind and release tension with passive stretches.' },
];

export default function YogaPage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tight">Yoga</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Flow with our collection of yoga classes for all levels, from beginner to advanced.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {content.map((item, index) => {
          const imageData = PlaceHolderImages.find(img => img.id === item.id);
          const imageUrl = imageData?.imageUrl.replace(/seed\/[^/]+/, `seed/${item.seed || item.id}${index}`) || 'https://picsum.photos/600/400';
          const imageHint = imageData?.imageHint || 'yoga meditation';
          return (
            <ContentCard
              key={index}
              href={`/library/yoga/${index + 1}`}
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