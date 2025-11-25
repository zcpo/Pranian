import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';

type ContentCardProps = {
  imageUrl: string;
  imageHint: string;
  category: string;
  title: string;
  description: string;
  href: string;
  className?: string;
};

export function ContentCard({
  imageUrl,
  imageHint,
  category,
  title,
  description,
  href,
  className,
}: ContentCardProps) {
  return (
    <Link href={href} className="group block">
      <Card className={cn("overflow-hidden h-full transition-all duration-300 ease-in-out group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/10", className)}>
        <CardHeader className="p-0">
          <div className="relative aspect-[3/2] w-full overflow-hidden">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              data-ai-hint={imageHint}
            />
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <Badge variant="secondary" className="mb-2 bg-primary/10 text-primary border-primary/20">{category}</Badge>
          <h3 className="text-xl font-semibold font-headline mb-2 text-foreground">{title}</h3>
          <p className="text-muted-foreground text-sm mb-4">{description}</p>
          <div className="flex items-center text-sm font-medium text-primary">
            Read More
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
