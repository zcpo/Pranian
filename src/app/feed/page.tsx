'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { feedItems, FeedItem } from '@/lib/feed-items'; // Using seed data for now
import { Music, Calendar, Gift, Megaphone } from 'lucide-react';
import { cn } from '@/lib/utils';

const iconMap: { [key: string]: React.ElementType } = {
  song: Music,
  event: Calendar,
  reward: Gift,
  promo: Megaphone,
};

function FeedCard({ item }: { item: FeedItem }) {
  const Icon = iconMap[item.type] || Megaphone;

  const getAction = (action: { type: string; [key: string]: any }) => {
    switch (action.type) {
      case 'open_song':
        return `/library/meditation/${action.songId}`;
      case 'open_event':
        return `/events`;
      default:
        return '#';
    }
  };

  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-primary/10">
      {item.image && (
        <CardHeader className="p-0">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
            />
             <Badge className="absolute top-2 right-2 flex items-center gap-1.5" variant="secondary">
                <Icon className="h-3.5 w-3.5" />
                <span className="capitalize">{item.type}</span>
            </Badge>
          </div>
        </CardHeader>
      )}
      <CardContent className="p-6 flex-grow">
        {!item.image && (
             <Badge className="mb-2 flex items-center gap-1.5 w-fit" variant="secondary">
                <Icon className="h-3.5 w-3.5" />
                <span className="capitalize">{item.type}</span>
            </Badge>
        )}
        <h3 className="text-xl font-semibold font-headline text-foreground">{item.title}</h3>
        {item.subtitle && (
          <p className="mt-2 text-muted-foreground text-sm">{item.subtitle}</p>
        )}
      </CardContent>
      {item.action && (
        <CardFooter className="p-6 pt-0">
          <Button asChild className="w-full">
            <a href={getAction(item.action)}>
              {item.action.buttonText || 'View Now'}
            </a>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}

export default function FeedPage() {
  // In a real app, you would fetch this data from Firestore
  // For now, we'll use the seed data
  const items = feedItems;

  return (
    <div className="container mx-auto px-4 py-8 sm:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tight">Your Feed</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          The latest updates, new content, and special events just for you.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <FeedCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
