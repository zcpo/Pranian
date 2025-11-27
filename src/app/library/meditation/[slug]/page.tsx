
import { meditations } from '@/lib/meditations';
import { notFound } from 'next/navigation';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { MediaDetailsPage, MediaDetailsPlayer } from '@/components/media-details-page';
import { MusicPlayer } from '@/components/music-player';

export default function MeditationPlayerPage({ params }: { params: { slug: string } }) {
  const meditation = meditations.find(m => m && m.slug === params.slug);

  if (!meditation) {
    notFound();
  }

  const meditationImage = PlaceHolderImages.find(img => img.id === meditation.imageId);
  const imageUrl = meditationImage?.imageUrl.replace(/seed\/[^/]+/, `seed/${meditation.slug}`) || 'https://picsum.photos/1920/1080';

  const track = {
    title: meditation.title,
    artist: meditation.author,
    albumArt: imageUrl.replace('1080', '400'),
    audioSrc: meditation.audio,
    duration: meditation.duration
  }

  const player: MediaDetailsPlayer = {
    type: 'audio',
    component: <MusicPlayer track={track} />,
  };

  return (
    <MediaDetailsPage
      title={meditation.title}
      imageUrl={imageUrl}
      description={meditation.longDescription}
      player={player}
      metadata={{
        duration: meditation.duration,
        author: meditation.author,
        genres: ['Meditation', 'Mindfulness'],
        year: new Date().getFullYear().toString(),
      }}
    />
  );
}

export async function generateStaticParams() {
  return meditations.map((meditation) => ({
    slug: meditation.slug,
  }));
}
