
import Image from 'next/image';
import { ContentCard } from '@/components/content-card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const content = [
  { id: 'anatomy-1', category: 'Anatomy', title: 'The Spine in Motion', description: 'Understand the mechanics of your spine in various yoga poses.' },
  { id: 'anatomy-2', category: 'Anatomy', title: 'Shoulder Girdle Stability', description: 'Learn to protect and strengthen your shoulders.' },
  { id: 'anatomy-3', category: 'Anatomy', title: 'Hip Openers Explained', description: 'Dive deep into the anatomy of hip-opening postures.' },
  { id: 'anatomy-4', category: 'Anatomy', title: 'Core Engagement', description: 'Discover the true meaning of engaging your core for a safe practice.' },
];

export default function AnatomyPage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-anatomy');
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
            Anatomy & Physiology
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white/80">
            Learn about the body and how it moves in yoga.
          </p>
        </div>
      </section>
      
      <div className="container mx-auto px-4 py-8 sm:py-16">
        <div className="text-center mb-12">
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Explore functional movement, joint actions, muscles in yoga poses, safe alignment principles, and common injuries & modifications.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {content.map((item, index) => {
            const imageData = PlaceHolderImages.find(img => img.id === item.id);
            const imageUrl = imageData?.imageUrl || 'https://picsum.photos/600/400';
            const imageHint = imageData?.imageHint || 'yoga anatomy';
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
