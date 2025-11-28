
import { videoMeditations } from '@/lib/video-meditations';
import { notFound } from 'next/navigation';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import VideoPlayer from '@/components/video-player';

export default function VideoMeditationPlayerPage({ params }: { params: { slug: string } }) {
  const meditation = videoMeditations.find(m => m.slug === params.slug);

  if (!meditation) {
    notFound();
  }
  
  const meditationImage = PlaceHolderImages.find(img => img.id === meditation.imageId);
  const imageUrl = meditation.posterUrl || meditationImage?.imageUrl.replace(/seed\/[^/]+/, `seed/${meditation.slug}`) || 'https://picsum.photos/1920/1080';

  return (
    <div className="bg-black min-h-screen w-full flex items-center justify-center">
        <VideoPlayer source={meditation.videoUrl} poster={imageUrl} />
    </div>
  );
}

export async function generateStaticParams() {
  return videoMeditations.map((meditation) => ({
    slug: meditation.slug,
  }));
}
