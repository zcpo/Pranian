
import { Separator } from '@/components/ui/separator';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { NewPodcastPlayer } from '@/components/new-podcast-player';

export default function MeditationPlayerPage() {
  const meditationImage = PlaceHolderImages.find(img => img.id === 'meditation-1');
  const imageUrl = meditationImage?.imageUrl.replace(/seed\/[^/]+/, `seed/meditation1`).replace('1080', '400') || 'https://picsum.photos/400/400';

  const track = {
    name: '10-Minute Morning Mindfulness',
    author: 'Pranian Wellness',
    img: imageUrl,
    audio: 'https://storage.googleapis.com/studioprod-5112a-assets/assets/pranian/meditation-1.mp3',
    duration: '10:00'
  }

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-8 sm:py-16">
        <div className="flex flex-col items-center">
          
          <NewPodcastPlayer track={track} />
          
          <div className="prose prose-lg dark:prose-invert max-w-4xl w-full mt-12">
              <h1 className="text-4xl font-extrabold font-headline tracking-tight text-center">10-Minute Morning Mindfulness</h1>
              <p className="text-lg text-muted-foreground mt-2 text-center">Begin your day with clarity and focus.</p>
              
              <Separator className="my-8" />

              <h2 className="font-headline text-2xl font-semibold">About This Meditation</h2>
              <p>
                This 10-minute guided mindfulness meditation is designed to be the perfect start to your day. By focusing on the breath and body sensations, you will cultivate a state of calm awareness, setting a positive and centered tone for the hours ahead. No prior meditation experience is necessary.
              </p>
              
              <ul className="list-disc pl-5">
                <li>Ground yourself in the present moment.</li>
                <li>Gently scan the body to release tension.</li>
                <li>Cultivate a non-judgmental awareness.</li>
                <li>Start your day feeling refreshed and focused.</li>
              </ul>

              <Separator className="my-8" />

              <h2 className="font-headline text-2xl font-semibold">Transcript</h2>
              <p>
                <strong>Guide:</strong> Welcome. Find a comfortable seated position, either on a cushion or a chair, with your spine upright but not stiff. Gently close your eyes. Begin by taking a few deep, cleansing breaths. Inhaling through your nose, and exhaling through your mouth...
              </p>
              <p>
                Now, allow your breath to return to its natural rhythm. Don't try to change it. Simply observe the sensation of the breath as it enters and leaves your body. Notice the coolness of the air as you inhale, and the warmth as you exhale...
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
