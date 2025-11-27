
import Image from 'next/image';
import { ContentCard } from '@/components/content-card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const content = [
  { id: 'asana-1', category: 'Asana', title: 'Mountain Pose (Tadasana)', description: 'The foundation for all standing poses.' },
  { id: 'asana-2', category: 'Asana', title: 'Downward-Facing Dog (Adho Mukha Svanasana)', description: 'A foundational full-body stretch.' },
  { id: 'asana-3', category: 'Asana', title: 'Warrior II (Virabhadrasana II)', description: 'Build strength and confidence.' },
  { id: 'asana-4', category: 'Asana', title: 'Triangle Pose (Trikonasana)', description: 'A classic standing pose for stretching and stability.' },
];

export default function AsanaPage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-asana');
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
            Asana (Postures) Library
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white/80">
            Explore a comprehensive guide to yoga postures.
          </p>
        </div>
      </section>
      
      <div className="container mx-auto px-4 py-8 sm:py-16">
        <div className="text-center mb-12">
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Master standing poses, sitting poses, twists, balancing poses, forward folds, backbends, arm balances, inversions, restorative poses, and prenatal variations.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {content.map((item, index) => {
            const imageData = PlaceHolderImages.find(img => img.id === item.id);
            const imageUrl = imageData?.imageUrl || 'https://picsum.photos/600/400';
            const imageHint = imageData?.imageHint || 'yoga pose';
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
