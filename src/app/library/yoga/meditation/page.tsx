
import Image from 'next/image';
import { ContentCard } from '@/components/content-card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const content = [
  { id: 'meditation-1', category: 'Meditation', title: '10-Minute Breath Awareness', description: 'Anchor your mind with the sensation of your breath.' },
  { id: 'meditation-2', category: 'Meditation', title: 'Loving-Kindness Meditation', description: 'Cultivate compassion for yourself and others.' },
  { id: 'yoga-nidra-1', category: 'Yoga Nidra', title: 'Guided Body Scan for Deep Relaxation', description: 'Release tension throughout your entire body.' },
  { id: 'meditation-3', category: 'Mantra', title: 'So Hum Mantra Meditation', description: 'Find your center with a simple yet powerful mantra.' },
];

export default function YogaMeditationPage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-meditation');
  return (
    <div>
      <section className="relative h-96 flex items-center justify-center text-center text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold font-headline tracking-tight">
            Meditation & Mindfulness
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white/80">
            Discover guided meditations and mindfulness practices within the yoga tradition.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 sm:py-16">
        <div className="text-center mb-12">
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Practice with guided meditations, breath-based meditations, mantra meditation, visualization practices, body scans, and Yoga Nidra.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {content.map((item, index) => {
            const imageData = PlaceHolderImages.find(img => img.id === item.id);
            const imageUrl = imageData?.imageUrl || 'https://picsum.photos/600/400';
            const imageHint = imageData?.imageHint || 'meditation';
            return (
              <ContentCard
                key={index}
                href="#"
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
    </div>
  );
}
