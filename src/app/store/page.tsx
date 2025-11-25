import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ProductCard } from '@/components/product-card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const products = {
  all: [
    { id: 'product-mat', name: 'The Pranian Mat', price: '$89.99' },
    { id: 'product-book', name: 'Mindfulness for Beginners', price: '$24.99' },
    { id: 'product-mat', seed: 'mat2', name: 'Travel Yoga Mat', price: '$59.99' },
    { id: 'product-book', seed: 'book2', name: 'The Art of Breathing', price: '$19.99' },
    { id: 'product-book', seed: 'ebook1', name: 'Digital Mindfulness', price: '$14.99' },
    { id: 'product-book', seed: 'ebook2', name: 'Yoga on the Go', price: '$9.99' },
  ],
  merchandise: [
    { id: 'product-mat', name: 'The Pranian Mat', price: '$89.99' },
    { id: 'product-mat', seed: 'mat2', name: 'Travel Yoga Mat', price: '$59.99' },
  ],
  books: [
    { id: 'product-book', name: 'Mindfulness for Beginners', price: '$24.99' },
    { id: 'product-book', seed: 'book2', name: 'The Art of Breathing', price: '$19.99' },
  ],
  ebooks: [
    { id: 'product-book', seed: 'ebook1', name: 'Digital Mindfulness', price: '$14.99' },
    { id: 'product-book', seed: 'ebook2', name: 'Yoga on the Go', price: '$9.99' },
  ],
};

type Product = {
  id: string;
  seed?: string;
  name: string;
  price: string;
};

type Category = keyof typeof products;

const ProductGrid = ({ category }: { category: Category }) => {
  const items = products[category] as Product[];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {items.map((item, index) => {
        const imageData = PlaceHolderImages.find(img => img.id === item.id);
        const imageUrl = imageData?.imageUrl.replace(/seed\/[^/]+/, `seed/${item.seed || item.id}${index}`) || 'https://picsum.photos/600/600';
        const imageHint = imageData?.imageHint || 'product';
        return (
          <ProductCard
            key={`${category}-${index}`}
            href={`/store/product/${index + 1}`}
            imageUrl={imageUrl}
            imageHint={imageHint}
            name={item.name}
            price={item.price}
          />
        );
      })}
    </div>
  );
};


export default function StorePage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tight">Our Store</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Enhance your practice with our curated selection of merchandise, books, and courses.
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="merchandise">Merchandise</TabsTrigger>
            <TabsTrigger value="books">Books</TabsTrigger>
            <TabsTrigger value="ebooks">Ebooks</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="all">
          <ProductGrid category="all" />
        </TabsContent>
        <TabsContent value="merchandise">
          <ProductGrid category="merchandise" />
        </TabsContent>
        <TabsContent value="books">
          <ProductGrid category="books" />
        </TabsContent>
        <TabsContent value="ebooks">
           <ProductGrid category="ebooks" />
        </TabsContent>
      </Tabs>
    </div>
  );
}
