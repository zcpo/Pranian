
import Image from 'next/image';
import { ContentCard } from '@/components/content-card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const content = [
  { id: 'chakra-1', category: 'Chakras', title: 'Root Chakra (Muladhara)', description: 'Ground your energy and find stability.' },
  { id: 'chakra-2', category: 'Chakras', title: 'Heart Chakra (Anahata)', description: 'Open yourself to love and compassion.' },
  { id: 'chakra-3', category: 'Chakras', title: 'Third Eye Chakra (Ajna)', description: 'Tap into your intuition and inner wisdom.' },
  { id: 'chakra-4', category: 'Chakras', title: 'Crown Chakra (Sahasrara)', description: 'Connect with the divine and higher consciousness.' },
];

export default function ChakrasPage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-chakras');
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
            Chakras & Energy Work
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white/80">
            Dive into the subtle energy body, chakras, and mudras.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 sm:py-16">
        <div className="text-center mb-12">
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Learn about Chakra descriptions, corresponding poses, mudras, mantras, and energetic balancing sequences.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {content.map((item, index) => {
            const imageData = PlaceHolderImages.find(img => img.id === item.id);
            const imageUrl = imageData?.imageUrl || 'https://picsum.photos/600/400';
            const imageHint = imageData?.imageHint || 'chakra energy';
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
