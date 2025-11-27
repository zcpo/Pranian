
import Image from 'next/image';
import { ContentCard } from '@/components/content-card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const content = [
  { id: 'pranayama-1', category: 'Pranayama', title: 'Ujjayi (Victorious Breath)', description: 'Learn to create a gentle, audible breath to focus the mind.' },
  { id: 'pranayama-2', category: 'Pranayama', title: 'Nadi Shodhana (Alternate Nostril Breathing)', description: 'Balance the right and left sides of the brain.' },
  { id: 'pranayama-3', category: 'Pranayama', title: 'Kapalabhati (Skull Shining Breath)', description: 'An energizing and cleansing breathing technique.' },
  { id: 'pranayama-4', category: 'Pranayama', 'title': 'Sitali (Cooling Breath)', 'description': 'A simple technique to cool the body and calm the mind.' },
];

export default function PranayamaPage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-pranayama');
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
            Pranayama (Breathing Techniques)
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white/80">
            Learn various breathing exercises to control your prana or life-force.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 sm:py-16">
        <div className="text-center mb-12">
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Explore basic breath awareness, Ujjayi, Nadi Shodhana, Kapalabhati, Bhastrika, cooling breaths (Sitali, Sitkari), and retention techniques (Kumbhaka).
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {content.map((item, index) => {
            const imageData = PlaceHolderImages.find(img => img.id === item.id);
            const imageUrl = imageData?.imageUrl || 'https://picsum.photos/600/400';
            const imageHint = imageData?.imageHint || 'breathwork';
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
