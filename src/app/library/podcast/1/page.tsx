import Image from 'next/image';
import { PodcastPlayer } from '@/components/podcast-player';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function PodcastEpisodePage() {
  const podcastImage = PlaceHolderImages.find(img => img.id === 'product-podcast');

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-8 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-1 flex justify-center">
            {podcastImage && (
              <PodcastPlayer
                imageUrl={podcastImage.imageUrl}
                imageHint={podcastImage.imageHint}
                title="Paths to Peace"
                artist="Pranian Wellness"
                src="https://storage.googleapis.com/studioprod-5112a-assets/assets/pranian/podcast-1.mp3"
              />
            )}
          </div>
          <div className="md:col-span-2">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h1 className="text-4xl font-extrabold font-headline tracking-tight">Paths to Peace</h1>
              <p className="text-lg text-muted-foreground mt-2">Episode 1 | Exploring the journey to inner calm.</p>
              
              <Separator className="my-8" />

              <h2 className="font-headline text-2xl font-semibold">Show Notes</h2>
              <p>
                In this inaugural episode of the Pranian Podcast, we embark on a journey to uncover the various paths to inner peace. We explore ancient wisdom and modern techniques for cultivating a calm and centered mind.
              </p>
              <p>
                Our host sits down with mindfulness expert Jane Doe to discuss the fundamentals of meditation, the importance of self-compassion, and practical steps you can take today to reduce stress and anxiety.
              </p>
              <ul className="list-disc pl-5">
                <li>What is true inner peace?</li>
                <li>Simple breathing exercises for immediate calm.</li>
                <li>The science behind mindfulness and its benefits.</li>
                <li>Building a sustainable meditation practice.</li>
              </ul>

              <Separator className="my-8" />

              <h2 className="font-headline text-2xl font-semibold">Transcript</h2>
              <p>
                <strong>Host:</strong> Welcome to the Pranian Podcast. In our first-ever episode, we're asking a big question: What does it truly mean to find inner peace? I'm here with Jane Doe, a renowned meditation teacher and author...
              </p>
              <p>
                <strong>Jane Doe:</strong> Thank you for having me. It's a wonderful question. I think for many people, peace feels like a distant goal. But it's actually a state of being that's accessible to all of us, right here and now. It's not about eliminating challenges, but about changing our relationship to them.
              </p>
               <p>
                (Transcript continues...)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
