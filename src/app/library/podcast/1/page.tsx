
import { Separator } from '@/components/ui/separator';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { MusicPlayer } from '@/components/music-player';

export default function PodcastEpisodePage() {
  const podcastImage = PlaceHolderImages.find(img => img.id === 'product-podcast');
  const track = {
    title: 'Paths to Peace',
    artist: 'Pranian Wellness',
    albumArt: podcastImage?.imageUrl.replace('1080', '400') || 'https://picsum.photos/400/400',
    audioSrc: 'https://storage.googleapis.com/studioprod-5112a-assets/assets/pranian/podcast-1.mp3',
    duration: '28:00'
  }

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-8 sm:py-16">
        <div className="flex flex-col items-center">
          
          <MusicPlayer track={track} />
          
          <div className="prose prose-lg dark:prose-invert max-w-4xl w-full mt-12">
              <h1 className="text-4xl font-extrabold font-headline tracking-tight text-center">Paths to Peace</h1>
              <p className="text-lg text-muted-foreground mt-2 text-center">Episode 1 | Exploring the journey to inner calm.</p>
              
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
  );
}
