import { ContentCard } from '@/components/content-card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const content = [
  { id: 'product-podcast', category: 'Podcast', title: 'Intro to Vinyasa', description: 'A beginner\'s guide to flow.' },
  { id: 'product-podcast', seed: 'podcast2', category: 'Podcast', title: 'Mastering Downward Dog', description: 'Anatomy of a key pose.' },
  { id: 'yoga-1', seed: 'podcast3', category: 'Podcast', title: 'The Philosophy of Yoga', description: 'Exploring the Yoga Sutras.' },
  { id: 'yoga-2', seed: 'podcast4', category: 'Podcast', title: 'Ujjayi Breathing', description: 'The victorious breath.' },
  { id: 'meditation-1', seed: 'podcast5', category: 'Podcast', title: 'Heart Chakra Meditation', description: 'Opening to Anahata.' },
  { id: 'meditation-2', seed: 'podcast6', category: 'Podcast', title: 'Yin for Hips', description: 'Deep stretches for flexibility.' },
  { id: 'hero-pranayama', seed: 'podcast7', category: 'Podcast', title: 'Building a Home Practice', description: 'Tips for consistency.' },
  { id: 'hero-meditation', seed: 'podcast8', category: 'Podcast', title: 'Ayurveda & Your Dosha', description: 'Eating for your body type.' },
  { id: 'hero-asana', seed: 'podcast9', category: 'Podcast', title: 'The Power of Mantras', description: 'Using sound for focus.' },
  { id: 'hero-chakras', seed: 'podcast10', category: 'Podcast', title: 'Restorative Yoga', description: 'The art of deep relaxation.' },
  { id: 'hero-lifestyle', seed: 'podcast11', category: 'Podcast', title: 'Arm Balance Foundations', description: 'Building strength for flight.' },
  { id: 'hero-teaching', seed: 'podcast12', category: 'Podcast', title: 'Teaching with Confidence', description: 'For aspiring yoga teachers.' },
  { id: 'product-podcast', seed: 'podcast13', category: 'Podcast', title: 'Nadi Shodhana', description: 'Alternate nostril breathing.' },
  { id: 'yoga-1', seed: 'podcast14', category: 'Podcast', title: 'Yoga for Back Pain', description: 'Therapeutic sequences.' },
  { id: 'meditation-1', seed: 'podcast15', category: 'Podcast', title: 'Intro to Ashtanga', description: 'The eight-limbed path.' },
  { id: 'yoga-2', seed: 'podcast16', category: 'Podcast', title: 'Using Yoga Props', description: 'Blocks, straps, and more.' },
  { id: 'hero-pranayama', seed: 'podcast17', category: 'Podcast', title: 'The Yamas & Niyamas', description: 'Ethical guides for living.' },
  { id: 'hero-meditation', seed: 'podcast18', category: 'Podcast', title: 'Yoga for Runners', description: 'Stretch and strengthen.' },
  { id: 'product-book', seed: 'podcast19', category: 'Podcast', title: 'History of Modern Yoga', description: 'From India to the West.' },
  { id: 'hero-asana', seed: 'podcast20', category: 'Podcast', title: 'Chakra Balancing Flow', description: 'Align your energy centers.' },
];

export default function PodcastPage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tight">Podcasts</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Listen to insightful conversations on mindfulness, yoga, and well-being.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {content.map((item, index) => {
          const imageData = PlaceHolderImages.find(img => img.id === item.id);
          const imageUrl = imageData?.imageUrl.replace(/seed\/[^/]+/, `seed/${item.seed || item.id}${index}`) || 'https://picsum.photos/600/600';
          const imageHint = imageData?.imageHint || 'yoga meditation';
          return (
            <ContentCard
              key={index}
              href={`/library/podcast/${(index % 2) + 1}`}
              imageUrl={imageUrl}
              imageHint={imageHint}
              category={item.category}
              title={item.title}
              description={item.description}
              className="aspect-square"
            />
          );
        })}
      </div>
    </div>
  );
}
