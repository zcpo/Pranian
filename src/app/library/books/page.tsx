import { ProductCard } from '@/components/product-card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const products = [
    { id: 'product-book', name: 'Mindfulness for Beginners', price: '$24.99' },
    { id: 'product-book', seed: 'book2', name: 'The Art of Breathing', price: '$19.99' },
];

export default function BooksPage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tight">Books</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Expand your knowledge with our curated selection of books on mindfulness, yoga, and well-being.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((item, index) => {
          const imageData = PlaceHolderImages.find(img => img.id === item.id);
          const imageUrl = imageData?.imageUrl.replace(/seed\/[^/]+/, `seed/${item.seed || item.id}${index}`) || 'https://picsum.photos/600/600';
          const imageHint = imageData?.imageHint || 'book';
          return (
            <ProductCard
              key={`${item.id}-${index}`}
              href={`/store/product/${index + 1}`}
              imageUrl={imageUrl}
              imageHint={imageHint}
              name={item.name}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
}