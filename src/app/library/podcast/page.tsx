import { ContentCard } from '@/components/content-card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const content = [
  { id: 'product-podcast', category: 'Podcast', title: 'Paths to Peace', description: 'Exploring the journey to inner calm.' },
  { id: 'product-podcast', seed: 'podcast2', category: 'Podcast', title: 'Mindful Conversations', description: 'Interviews with wellness experts.' },
  { id: 'yoga-1', seed: 'podcast3', category: 'Podcast', title: 'The Art of Stillness', description: 'Finding silence in a noisy world.' },
  { id: 'yoga-2', seed: 'podcast4', category: 'Podcast', title: 'Flow State', description: 'The neuroscience of peak performance.' },
  { id: 'meditation-1', seed: 'podcast5', category: 'Podcast', title: 'Breathwork for Beginners', description: 'An introduction to pranayama.' },
  { id: 'meditation-2', seed: 'podcast6', category: 'Podcast', title: 'Yoga Philosophy Today', description: 'Applying ancient wisdom to modern life.' },
  { id: 'hero-pranayama', seed: 'podcast7', category: 'Podcast', title: 'Digital Detox', description: 'Mindfulness in the age of technology.' },
  { id: 'hero-meditation', seed: 'podcast8', category: 'Podcast', title: 'Sleep Stories', description: 'Guided tales for a restful night.' },
  { id: 'hero-asana', seed: 'podcast9', category: 'Podcast', title: 'Anatomy of a Pose', description: 'Deep dive into asana alignment.' },
  { id: 'hero-chakras', seed: 'podcast10', category: 'Podcast', title: 'Chakra Balancing', description: 'Align your energy centers.' },
  { id: 'hero-lifestyle', seed: 'podcast11', category: 'Podcast', title: 'Ayurvedic Eating', description: 'Nourish your body and mind.' },
  { id: 'hero-teaching', seed: 'podcast12', category: 'Podcast', title: 'The Teacher\'s Path', description: 'Interviews with yoga instructors.' },
  { id: 'product-podcast', seed: 'podcast13', category: 'Podcast', title: 'Zen Mind', description: 'Cultivating a beginner\'s mindset.' },
  { id: 'yoga-1', seed: 'podcast14', category: 'Podcast', title: 'Restorative Sessions', description: 'The power of deep rest.' },
  { id: 'meditation-1', seed: 'podcast15', category: 'Podcast', title: 'Walking Meditations', description: 'Mindfulness in motion.' },
  { id: 'yoga-2', seed: 'podcast16', category: 'Podcast', title: 'Partner Yoga', description: 'Connect through shared practice.' },
  { id: 'hero-pranayama', seed: 'podcast17', category: 'Podcast', title: 'Sound Bath Healings', description: 'Vibrational therapy for relaxation.' },
  { id: 'hero-meditation', seed: 'podcast18', category: 'Podcast', title: 'Gratitude Practices', description: 'Shift your perspective.' },
  { id: 'product-book', seed: 'podcast19', category: 'Podcast', title: 'Reading the Sutras', description: 'Unpacking Patanjali\'s wisdom.' },
  { id: 'hero-asana', seed: 'podcast20', category: 'Podcast', title: 'Morning Affirmations', description: 'Start your day with intention.' },
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
