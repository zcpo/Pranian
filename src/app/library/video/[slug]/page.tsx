
'use client';
import { Separator } from '@/components/ui/separator';
import VideoPlayer from '@/components/video-player';
import { videos } from '@/lib/videos';
import { notFound } from 'next/navigation';

export default function VideoPlayerPage({ params }: { params: { slug: string } }) {
  const video = videos.find(m => m.slug === params.slug);

  if (!video) {
    notFound();
  }

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-8 sm:py-16">
        <div className="flex flex-col items-center">
          
          <VideoPlayer source={video.videoUrl} poster={video.posterUrl} />
          
          <div className="prose prose-lg dark:prose-invert max-w-4xl w-full mt-12">
              <h1 className="text-4xl font-extrabold font-headline tracking-tight text-center">{video.title}</h1>
              <p className="text-lg text-muted-foreground mt-2 text-center">{video.description}</p>
              
              <Separator className="my-8" />

              <h2 className="font-headline text-2xl font-semibold">About This Video</h2>
              <p>
                {video.longDescription}
              </p>
            </div>
        </div>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return videos.map((video) => ({
    slug: video.slug,
  }));
}
