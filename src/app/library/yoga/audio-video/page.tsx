
import Image from 'next/image';
import { AudioVideoCard } from '@/components/audio-video-card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const content = [
  { id: 'video-pose', category: 'Video Pose Breakdowns', title: 'Downward-Facing Dog', description: 'Master the foundations of this essential pose.', type: 'video' },
  { id: 'audio-meditation', category: 'Audio Meditations', title: '5-Minute Breathing Exercise', description: 'Center yourself with this short, guided breathwork.', type: 'audio' },
  { id: 'video-class', category: 'Follow-Along Classes', title: 'Morning Energy Flow', description: 'A 20-minute vinyasa class to start your day.', type: 'video' },
  { id: 'audio-breathwork', category: 'Breathwork Recordings', title: 'Nadi Shodhana Pranayama', description: 'Balance your energy with alternate nostril breathing.', type: 'audio' },
];

export default function AudioVideoLibraryPage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-audio-video');
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
            Audio/Video Library
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white/80">
            Video pose breakdowns, follow-along classes, and audio meditations.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 sm:py-16">
        <div className="text-center mb-12">
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Watch, listen, and learn with our collection of guided practices.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.map((item, index) => {
            const imageData = PlaceHolderImages.find(img => img.id === item.id);
            const imageUrl = imageData?.imageUrl || 'https://picsum.photos/600/400';
            const imageHint = imageData?.imageHint || 'yoga';
            return (
              <AudioVideoCard
                key={index}
                imageUrl={imageUrl}
                imageHint={imageHint}
                category={item.category}
                title={item.title}
                description={item.description}
                type={item.type as 'audio' | 'video'}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
