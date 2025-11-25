import { ContentCard } from '@/components/content-card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const content = [
  { id: 'meditation-1', category: 'Meditation', title: '10-Minute Morning Mindfulness', description: 'Begin your day with clarity and focus.' },
  { id: 'meditation-2', category: 'Meditation', title: 'Deep Sleep Guided Meditation', description: 'Drift off into a restful night\'s sleep.' },
  { id: 'meditation-1', seed: 'm3', category: 'Meditation', title: 'Walking Meditation Guide', description: 'Practice mindfulness on the go.' },
];

export default function MeditationPage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tight">Meditation</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Find your center and calm your mind with our guided meditations.
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
              href={`/library/meditation/${index + 1}`}
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