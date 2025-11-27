
import Image from 'next/image';
import { ContentCard } from '@/components/content-card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const content = [
  { id: 'philosophy-1', category: 'Philosophy', title: 'The Eight Limbs of Yoga: An Overview', description: 'Explore the complete path of yoga beyond the mat.' },
  { id: 'philosophy-2', category: 'Philosophy', title: 'Introduction to the Yamas & Niyamas', description: 'Learn the ethical principles of yoga.' },
  { id: 'philosophy-3', category: 'Philosophy', title: 'Demystifying the Yoga Sutras of Patanjali', description: 'A beginner\'s guide to this foundational text.' },
  { id: 'philosophy-4', category: 'Philosophy', title: 'Understanding Prana, Koshas, and Nadis', description: 'Explore the subtle energy body in yogic thought.' },
];

export default function PhilosophyPage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-philosophy');
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
            Philosophy & Foundations
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white/80">
            Understand the core principles and texts of yoga philosophy.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 sm:py-16">
        <div className="text-center mb-12">
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Dive into the Eight Limbs of Yoga, key texts like the Yoga Sutras and Bhagavad Gita, the Yamas & Niyamas, and concepts like prana, chakras, koshas, and nadis.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {content.map((item, index) => {
            const imageData = PlaceHolderImages.find(img => img.id === item.id);
            const imageUrl = imageData?.imageUrl || 'https://picsum.photos/600/400';
            const imageHint = imageData?.imageHint || 'yoga philosophy';
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
