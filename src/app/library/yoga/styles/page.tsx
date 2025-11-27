
import Image from 'next/image';
import { ContentCard } from '@/components/content-card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const content = [
  { id: 'style-hatha', category: 'Style', title: 'Introduction to Hatha Yoga', description: 'Learn the fundamentals of this foundational yoga style.' },
  { id: 'style-vinyasa', category: 'Style', title: 'The Fluidity of Vinyasa', description: 'Connect breath with movement in a dynamic flow.' },
  { id: 'style-yin', category: 'Style', title: 'Deep Stretching with Yin Yoga', description: 'Hold poses for longer to target deep connective tissues.' },
  { id: 'style-restorative', category: 'Style', title: 'The Art of Restorative Yoga', description: 'Use props to fully relax and release tension.' },
];

export default function StylesPage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-styles');
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
            Specialty Yoga Styles
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white/80">
            Explore different styles of yoga like Hatha, Vinyasa, and Kundalini.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 sm:py-16">
        <div className="text-center mb-12">
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Discover the unique characteristics of Hatha, Vinyasa, Ashtanga, Iyengar, Yin, Restorative, Kundalini, Power Yoga, and Adaptive/Chair Yoga.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {content.map((item, index) => {
            const imageData = PlaceHolderImages.find(img => img.id === item.id);
            const imageUrl = imageData?.imageUrl || 'https://picsum.photos/600/400';
            const imageHint = imageData?.imageHint || 'yoga style';
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
