

import { Separator } from '@/components/ui/separator';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { MusicPlayer } from '@/components/music-player';
import { meditations } from '@/lib/meditations';
import { notFound } from 'next/navigation';

export default function MeditationPlayerPage({ params }: { params: { slug: string } }) {
  const meditation = meditations.find(m => m.slug === params.slug);

  if (!meditation) {
    notFound();
  }

  const meditationImage = PlaceHolderImages.find(img => img.id === meditation.imageId);
  const imageUrl = meditationImage?.imageUrl.replace(/seed\/[^/]+/, `seed/${meditation.slug}`).replace('1080', '400') || 'https://picsum.photos/400/400';

  const track = {
    title: meditation.title,
    artist: meditation.author,
    albumArt: imageUrl,
    audioSrc: meditation.audio,
    duration: meditation.duration
  }

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-8 sm:py-16">
        <div className="flex flex-col items-center">
          
          <MusicPlayer track={track} />
          
          <div className="prose prose-lg dark:prose-invert max-w-4xl w-full mt-12">
              <h1 className="text-4xl font-extrabold font-headline tracking-tight text-center">{meditation.title}</h1>
              <p className="text-lg text-muted-foreground mt-2 text-center">{meditation.description}</p>
              
              <Separator className="my-8" />

              <h2 className="font-headline text-2xl font-semibold">About This Meditation</h2>
              <p>
                {meditation.longDescription}
              </p>
              
              <ul className="list-disc pl-5">
                {meditation.bullets.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                ))}
              </ul>

              <Separator className="my-8" />

              <h2 className="font-headline text-2xl font-semibold">Transcript</h2>
              <div dangerouslySetInnerHTML={{ __html: meditation.transcript }} />
            </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return meditations.map((meditation) => ({
    slug: meditation.slug,
  }));
}
