import Image from 'next/image';
import { PodcastPlayer } from '@/components/podcast-player';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function PodcastEpisodePage() {
  const podcastImage = PlaceHolderImages.find(img => img.id === 'product-podcast');
  const imageUrl = podcastImage?.imageUrl.replace(/seed\/[^/]+/, `seed/podcast2`) || 'https://picsum.photos/600/400';


  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-8 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-1 flex justify-center">
            {podcastImage && (
              <PodcastPlayer
                imageUrl={imageUrl}
                imageHint={podcastImage.imageHint}
                title="Mindful Conversations"
                artist="Pranian Wellness"
                src="https://storage.googleapis.com/studioprod-5112a-assets/assets/pranian/podcast-2.mp3"
              />
            )}
          </div>
          <div className="md:col-span-2">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h1 className="text-4xl font-extrabold font-headline tracking-tight">Mindful Conversations</h1>
              <p className="text-lg text-muted-foreground mt-2">Episode 2 | Interviews with wellness experts.</p>
              
              <Separator className="my-8" />

              <h2 className="font-headline text-2xl font-semibold">Show Notes</h2>
              <p>
                In this episode, we sit down with Dr. Leo Martinez, a neuroscientist and long-time yoga practitioner, to discuss the intersection of ancient practices and modern science. How does yoga physically change our brains? What's happening on a neurological level when we meditate?
              </p>
              <p>
                Join us for a fascinating conversation that bridges the gap between the spiritual and the scientific, offering a deeper appreciation for these transformative practices.
              </p>
              <ul className="list-disc pl-5">
                <li>Neuroplasticity and meditation.</li>
                <li>How Vinyasa flow affects brainwave patterns.</li>
                <li>The vagus nerve and its role in relaxation.</li>
                <li>Practical tips for applying neuroscience to your practice.</li>
              </ul>

              <Separator className="my-8" />

              <h2 className="font-headline text-2xl font-semibold">Transcript</h2>
              <p>
                <strong>Host:</strong> Welcome back to Mindful Conversations. Today, we're honored to have Dr. Leo Martinez with us. Dr. Martinez, your work on the neuroscience of contemplative practices is groundbreaking. Can you start by explaining neuroplasticity for our listeners?
              </p>
              <p>
                <strong>Dr. Martinez:</strong> Absolutely. It's a pleasure to be here. Simply put, neuroplasticity is the brain's ability to reorganize itself by forming new neural connections. Think of it as the brain being 'malleable.' For a long time, we thought the adult brain was fixed, but we now know it's constantly changing in response to our experiences. And practices like meditation are a very powerful way to direct that change intentionally...
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
