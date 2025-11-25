'use client';

import Image from 'next/image';
import { Play, Music } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';

type AudioVideoCardProps = {
  imageUrl: string;
  imageHint: string;
  category: string;
  title: string;
  description: string;
  type: 'audio' | 'video';
  className?: string;
};

export function AudioVideoCard({
  imageUrl,
  imageHint,
  category,
  title,
  description,
  type,
  className,
}: AudioVideoCardProps) {
  return (
      <Card className={cn("overflow-hidden h-full transition-all duration-300 ease-in-out group", className)}>
        <CardHeader className="p-0">
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              data-ai-hint={imageHint}
            />
             <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <button className="flex items-center justify-center h-16 w-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white transition-all duration-300 ease-in-out hover:bg-white/30 hover:scale-110">
                    {type === 'video' ? <Play className="h-8 w-8 fill-current" /> : <Music className="h-8 w-8" />}
                </button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <Badge variant="secondary" className="mb-2 bg-primary/10 text-primary border-primary/20">{category}</Badge>
          <h3 className="text-xl font-semibold font-headline mb-2 text-foreground">{title}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </CardContent>
      </Card>
  );
}
