
import Image from 'next/image';
import { ContentCard } from '@/components/content-card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const content = [
  { id: 'sequencing-1', category: 'Sequencing', title: 'A 20-Minute Morning Flow', description: 'Energize your body and mind for the day ahead.' },
  { id: 'sequencing-2', category: 'Sequencing', title: 'A 30-Minute Evening Wind-Down', description: 'Release tension and prepare for a restful sleep.' },
  { id: 'sequencing-3', category: 'Sequencing', title: 'Yoga for Runners', description: 'A therapeutic sequence to stretch and strengthen key muscles.' },
  { id: 'sequencing-4', category: 'Sequencing', title: '60-Minute Power Vinyasa', description: 'A challenging and dynamic flow for experienced yogis.' },
];

export default function SequencingPage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-sequencing');
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
            Sequencing & Practice Plans
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white/80">
            Find sequences and plans for your personal practice.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 sm:py-16">
        <div className="text-center mb-12">
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Discover beginner sequences, intermediate/advanced flows, morning/evening practices, therapeutic sequences, and sports-specific flows.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {content.map((item, index) => {
            const imageData = PlaceHolderImages.find(img => img.id === item.id);
            const imageUrl = imageData?.imageUrl || 'https://picsum.photos/600/400';
            const imageHint = imageData?.imageHint || 'yoga sequence';
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
