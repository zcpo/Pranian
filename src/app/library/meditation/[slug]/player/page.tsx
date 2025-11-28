
import { meditations } from '@/lib/meditations';
import { notFound } from 'next/navigation';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { MusicPlayer } from '@/components/music-player';

export default function MeditationPlayerPage({ params }: { params: { slug: string } }) {
  const meditation = meditations.find(m => m && m.slug === params.slug);

  if (!meditation) {
    notFound();
  }

  const meditationImage = PlaceHolderImages.find(img => img.id === meditation.imageId);
  const imageUrl = meditationImage?.imageUrl.replace(/seed\/[^/]+/, `seed/${meditation.slug}`) || 'https://picsum.photos/400/400';

  const track = {
    title: meditation.title,
    artist: meditation.author,
    albumArt: imageUrl,
    audioSrc: meditation.audio,
    duration: meditation.duration
  }

  return (
    <div className="bg-black min-h-screen w-full">
        <MusicPlayer track={track} />
    </div>
  );
}

export async function generateStaticParams() {
  return meditations.map((meditation) => ({
    slug: meditation.slug,
  }));
}
