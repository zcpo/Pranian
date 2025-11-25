import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type ProductCardProps = {
  imageUrl: string;
  imageHint: string;
  name: string;
  price: string;
  href: string;
  className?: string;
};

export function ProductCard({
  imageUrl,
  imageHint,
  name,
  price,
  href,
  className,
}: ProductCardProps) {
  return (
    <Card className={cn("overflow-hidden group h-full flex flex-col transition-all duration-300 ease-in-out hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10", className)}>
      <CardHeader className="p-0">
        <Link href={href} className="block">
          <div className="relative aspect-square w-full overflow-hidden">
            <Image
              src={imageUrl}
              alt={name}
              fill
              className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              data-ai-hint={imageHint}
            />
          </div>
        </Link>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <Link href={href}>
          <h3 className="text-lg font-semibold font-headline text-foreground mb-1">{name}</h3>
        </Link>
        <p className="text-primary font-medium">{price}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button className="w-full" variant="outline">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
