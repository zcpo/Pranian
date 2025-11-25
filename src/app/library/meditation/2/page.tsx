
import { Separator } from '@/components/ui/separator';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { NewPodcastPlayer } from '@/components/new-podcast-player';

export default function MeditationPlayerPage() {
  const meditationImage = PlaceHolderImages.find(img => img.id === 'meditation-2');
  const imageUrl = meditationImage?.imageUrl.replace(/seed\/[^/]+/, `seed/meditation2`).replace('1080', '400') || 'https://picsum.photos/400/400';

  const track = {
    name: 'Deep Sleep Guided Meditation',
    author: 'Pranian Wellness',
    img: imageUrl,
    audio: 'https://storage.googleapis.com/studioprod-5112a-assets/assets/pranian/meditation-2.mp3',
    duration: '25:00'
  }

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-8 sm:py-16">
        <div className="flex flex-col items-center">
          
          <NewPodcastPlayer track={track} />
          
          <div className="prose prose-lg dark:prose-invert max-w-4xl w-full mt-12">
              <h1 className="text-4xl font-extrabold font-headline tracking-tight text-center">Deep Sleep Guided Meditation</h1>
              <p className="text-lg text-muted-foreground mt-2 text-center">Drift off into a restful night's sleep.</p>
              
              <Separator className="my-8" />

              <h2 className="font-headline text-2xl font-semibold">About This Meditation</h2>
              <p>
                Struggling with sleep? This guided meditation is designed to help you release the day's tensions and quiet your mind. Through a soothing body scan and gentle breathing techniques, you'll be guided into a state of deep relaxation, preparing your body and mind for a restorative night's sleep.
              </p>

              <ul className="list-disc pl-5">
                <li>Relax your body from head to toe.</li>
                <li>Quiet racing thoughts and anxieties.</li>
                <li>Create a mental state conducive to sleep.</li>
                <li>Improve sleep quality and wake up refreshed.</li>
              </ul>

              <Separator className="my-8" />

              <h2 className="font-headline text-2xl font-semibold">Transcript</h2>
              <p>
                <strong>Guide:</strong> Welcome to this practice for deep sleep. Lie down in a comfortable position, ensuring your body is fully supported. Close your eyes and let go of any need to do anything. Simply be here.
              </p>
              <p>
                Bring your awareness to your breath. Feel the gentle rise and fall of your abdomen with each inhale and exhale. With each breath out, feel your body becoming heavier, sinking deeper into the surface beneath you. Let go of the day...
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
