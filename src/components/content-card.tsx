
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
      <Card className={cn("overflow-hidden h-full transition-all duration-300 ease-in-out group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/10 flex flex-col", className)}>
        <CardHeader className="p-0">
          <div className={cn("relative w-full overflow-hidden aspect-[3/2]")}>
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              data-ai-hint={imageHint}
            />
          </div>
        </CardHeader>
        <CardContent className="p-4 flex-grow">
          <h3 className="text-md font-semibold font-headline mb-1 text-foreground">{title}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
