
import Image from 'next/image';
import { ContentCard } from '@/components/content-card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const content = [
  { id: 'lifestyle-1', category: 'Lifestyle', title: 'Introduction to Ayurveda', description: 'Discover your dosha and how it influences your well-being.' },
  { id: 'lifestyle-2', category: 'Lifestyle', title: 'Yoga for Better Digestion', description: 'Learn poses and practices to support a healthy gut.' },
  { id: 'lifestyle-3', category: 'Lifestyle', title: 'Building a Morning Routine (Dinacharya)', description: 'Start your day with intention and yogic practices.' },
  { id: 'lifestyle-4', category: 'Lifestyle', title: 'Seasonal Yoga Practices', description: 'Align your practice with the rhythms of nature.' },
];

export default function LifestylePage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-lifestyle');
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
            Lifestyle & Ayurveda
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white/80">
            Integrate yoga and Ayurveda into your daily life for holistic wellness.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 sm:py-16">
        <div className="text-center mb-12">
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Explore Ayurvedic doshas, yoga and nutrition, daily routines (dinacharya), and seasonal practices for a balanced life.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {content.map((item, index) => {
            const imageData = PlaceHolderImages.find(img => img.id === item.id);
            const imageUrl = imageData?.imageUrl || 'https://picsum.photos/600/400';
            const imageHint = imageData?.imageHint || 'yoga lifestyle';
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
