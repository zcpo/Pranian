
import { videos } from '@/lib/videos';
import { notFound } from 'next/navigation';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { MediaDetailsPage } from '@/components/media-details-page';


export default function VideoPlayerPage({ params }: { params: { slug: string } }) {
  const video = videos.find(m => m.slug === params.slug);

  if (!video) {
    notFound();
  }

  const videoImage = PlaceHolderImages.find(img => img.id === video.imageId);
  const imageUrl = video.posterUrl || videoImage?.imageUrl.replace(/seed\/[^/]+/, `seed/${video.slug}`) || 'https://picsum.photos/1920/1080';

  return (
     <MediaDetailsPage
      title={video.title}
      imageUrl={imageUrl}
      description={video.longDescription}
      metadata={{
        duration: video.duration,
        author: video.author,
        genres: ['Yoga', 'Instructional'],
        year: new Date().getFullYear().toString(),
      }}
    />
  );
}

export function generateStaticParams() {
  return videos.map((video) => ({
    slug: video.slug,
  }));
}
