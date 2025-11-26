'use client';
import { Separator } from '@/components/ui/separator';
import VideoPlayer from '@/components/video-player';
import { videoMeditations } from '@/lib/video-meditations';
import { notFound } from 'next/navigation';

export default function VideoMeditationPlayerPage({ params }: { params: { slug: string } }) {
  const meditation = videoMeditations.find(m => m.slug === params.slug);

  if (!meditation) {
    notFound();
  }

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-8 sm:py-16">
        <div className="flex flex-col items-center">
          
          <VideoPlayer source={meditation.videoUrl} poster={meditation.posterUrl} />
          
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
            </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return videoMeditations.map((meditation) => ({
    slug: meditation.slug,
  }));
}
