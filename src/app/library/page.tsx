import { Search, ListFilter } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ContentCard } from '@/components/content-card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const content = [
  { id: 'meditation-1', category: 'Meditation', title: '10-Minute Morning Mindfulness', description: 'Begin your day with clarity and focus.' },
  { id: 'yoga-1', category: 'Yoga', title: 'Gentle Vinyasa Flow', description: 'Connect breath with movement in this gentle flow.' },
  { id: 'meditation-2', category: 'Meditation', title: 'Deep Sleep Guided Meditation', description: 'Drift off into a restful night\'s sleep.' },
  { id: 'yoga-2', category: 'Yoga', title: 'Power Yoga for Strength', description: 'Build heat and strength with this dynamic sequence.' },
  { id: 'meditation-1', seed: 'm3', category: 'Meditation', title: 'Walking Meditation Guide', description: 'Practice mindfulness on the go.' },
  { id: 'yoga-1', seed: 'y3', category: 'Yoga', title: 'Restorative Yoga for Relaxation', description: 'Unwind and release tension with passive stretches.' },
];

export default function LibraryPage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tight">Content Library</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Find your perfect session. Search our collection of guided meditations, yoga classes, and more.
        </p>
      </div>

      <div className="mb-8 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input placeholder="Search for meditations, yoga, etc..." className="pl-10 text-base" />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="shrink-0">
              <ListFilter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Filter by Category</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem checked>Yoga</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked>Meditation</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>Articles</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>Podcasts</DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {content.map((item, index) => {
          const imageData = PlaceHolderImages.find(img => img.id === item.id);
          const imageUrl = imageData?.imageUrl.replace(/seed\/[^/]+/, `seed/${item.seed || item.id}${index}`) || 'https://picsum.photos/600/400';
          const imageHint = imageData?.imageHint || 'yoga meditation';
          return (
            <ContentCard
              key={index}
              href={`/library/${item.category.toLowerCase()}/${index + 1}`}
              imageUrl={imageUrl}
              imageHint={imageHint}
              category={item.category}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </div>
    </div>
  );
}
