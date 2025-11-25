
import { Separator } from '@/components/ui/separator';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { NewPodcastPlayer } from '@/components/new-podcast-player';

export default function MeditationPlayerPage() {
  const meditationImage = PlaceHolderImages.find(img => img.id === 'meditation-3');
  const imageUrl = meditationImage?.imageUrl.replace(/seed\/[^/]+/, `seed/meditation3`).replace('1080', '400') || 'https://picsum.photos/400/400';

  const track = {
    name: 'Walking Meditation Guide',
    author: 'Pranian Wellness',
    img: imageUrl,
    audio: 'https://storage.googleapis.com/studioprod-5112a-assets/assets/pranian/meditation-3.mp3',
    duration: '15:00'
  }

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-8 sm:py-16">
        <div className="flex flex-col items-center">
          
          <NewPodcastPlayer track={track} />
          
          <div className="prose prose-lg dark:prose-invert max-w-4xl w-full mt-12">
              <h1 className="text-4xl font-extrabold font-headline tracking-tight text-center">Walking Meditation Guide</h1>
              <p className="text-lg text-muted-foreground mt-2 text-center">Practice mindfulness on the go.</p>
              
              <Separator className="my-8" />

              <h2 className="font-headline text-2xl font-semibold">About This Meditation</h2>
              <p>
                Turn your daily walk into a mindfulness practice. This guided audio teaches you how to bring your full attention to the physical act of walking. By focusing on the sensations in your feet and the movement of your body, you can transform a simple walk into a profound meditative experience, whether you are indoors or out in nature.
              </p>
              <ul className="list-disc pl-5">
                <li>Connect your mind and body through movement.</li>
                <li>Practice mindfulness in everyday life.</li>
                <li>Reduce stress while getting gentle exercise.</li>
                <li>Find a new way to engage with your surroundings.</li>
              </ul>

              <Separator className="my-8" />

              <h2 className="font-headline text-2xl font-semibold">Transcript</h2>
              <p>
                <strong>Guide:</strong> Begin by standing still for a moment. Feel the ground beneath your feet. Feel the weight of your body. Take a deep breath. As you begin to walk, do so at a natural, comfortable pace. 
              </p>
              <p>
                Bring your awareness to the sensations in your feet. Notice the feeling of your heel making contact with the ground, the way your weight rolls forward, and the push-off from your toes. Heel, ball, toes. Just notice these sensations, without judgment...
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
