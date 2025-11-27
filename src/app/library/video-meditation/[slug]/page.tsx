
import { videoMeditations } from '@/lib/video-meditations';
import { notFound } from 'next/navigation';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { MediaDetailsPage } from '@/components/media-details-page';

export default function VideoMeditationPlayerPage({ params }: { params: { slug: string } }) {
  const meditation = videoMeditations.find(m => m.slug === params.slug);

  if (!meditation) {
    notFound();
  }
  
  const meditationImage = PlaceHolderImages.find(img => img.id === meditation.imageId);
  const imageUrl = meditation.posterUrl || meditationImage?.imageUrl.replace(/seed\/[^/]+/, `seed/${meditation.slug}`) || 'https://picsum.photos/1920/1080';
  
  return (
    <MediaDetailsPage
      title={meditation.title}
      imageUrl={imageUrl}
      description={meditation.longDescription}
      metadata={{
        duration: meditation.duration,
        author: meditation.author,
        genres: ['Video Meditation', 'Mindfulness'],
        year: new Date().getFullYear().toString(),
      }}
    />
  );
}

export async function generateStaticParams() {
  return videoMeditations.map((meditation) => ({
    slug: meditation.slug,
  }));
}
