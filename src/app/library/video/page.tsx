

import { ContentCard } from '@/components/content-card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { videos } from '@/lib/videos';

export default function VideoPage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tight">Videos</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Watch workshops, tutorials, and guided sessions from our experts.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {videos.map((item, index) => {
          const imageData = PlaceHolderImages.find(img => img.id === item.imageId);
          const imageUrl = item.posterUrl || imageData?.imageUrl.replace(/seed\/[^/]+/, `seed/${item.slug}${index}`) || 'https://picsum.photos/600/400';
          const imageHint = imageData?.imageHint || 'video lesson';
          return (
            <ContentCard
              key={index}
              href={`/library/video/${item.slug}`}
              imageUrl={imageUrl}
              imageHint={imageHint}
              category="Video"
              title={item.title}
              description={item.description}
            />
          );
        })}
      </div>
    </div>
  );
}
