
import { videos } from '@/lib/videos';
import { notFound } from 'next/navigation';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import VideoPlayer from '@/components/video-player';

export default function VideoPlayerPage({ params }: { params: { slug: string } }) {
  const video = videos.find(m => m.slug === params.slug);

  if (!video) {
    notFound();
  }

  const videoImage = PlaceHolderImages.find(img => img.id === video.imageId);
  const imageUrl = video.posterUrl || videoImage?.imageUrl.replace(/seed\/[^/]+/, `seed/${video.slug}`) || 'https://picsum.photos/1920/1080';
  
  return (
     <div className="bg-black min-h-screen w-full flex items-center justify-center">
        <VideoPlayer source={video.videoUrl} poster={imageUrl} />
    </div>
  );
}

export function generateStaticParams() {
  return videos.map((video) => ({
    slug: video.slug,
  }));
}
