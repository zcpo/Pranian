
import Image from 'next/image';
import { ContentCard } from '@/components/content-card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const content = [
  { id: 'props-1', category: 'Props', title: 'Getting Started with Yoga Blocks', description: 'Learn how blocks can bring the floor closer and support alignment.' },
  { id: 'props-2', category: 'Props', title: 'The Versatile Yoga Strap', description: 'Deepen stretches and improve flexibility with a strap.' },
  { id: 'props-3', category: 'Props', title: 'Restorative Poses with a Bolster', description: 'Find ultimate comfort and relaxation using a bolster.' },
  { id: 'props-4', category: 'Props', title: 'Using the Wall as a Prop', description: 'Explore how a wall can assist in inversions and alignment.' },
];

export default function PropsPage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-props');
  return (
    <div>
      <section className="relative h-64 sm:h-96 flex items-center justify-center text-center text-white">
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
            Props & Modifications
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white/80">
            Learn how to use props to support and deepen your practice.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 sm:py-16">
        <div className="text-center mb-12">
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Master using blocks, straps, bolsters, and the wall. Find variations for beginners and modifications for common injuries.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {content.map((item, index) => {
            const imageData = PlaceHolderImages.find(img => img.id === item.id);
            const imageUrl = imageData?.imageUrl || 'https://picsum.photos/600/400';
            const imageHint = imageData?.imageHint || 'yoga props';
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
