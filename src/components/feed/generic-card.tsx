'use client';

import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bell } from 'lucide-react';
import { FeedItem } from '@/lib/feed-items';

// A fallback card for unknown or generic item types
export function GenericCard({ item }: { item: FeedItem }) {
  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg">
      {item.image && (
        <CardHeader className="p-0">
          <div className="relative aspect-[16/9] w-full">
            <Image src={item.image} alt={item.title} fill className="object-cover" />
            <Badge className="absolute top-2 right-2 flex items-center gap-1.5" variant="secondary">
              <Bell className="h-3.5 w-3.5" />
              <span className="capitalize">{item.type || 'Update'}</span>
            </Badge>
          </div>
        </CardHeader>
      )}
      <CardContent className="p-6 flex-grow">
         {!item.image && (
            <Badge className="mb-2 flex items-center gap-1.5 w-fit" variant="secondary">
                <Bell className="h-3.5 w-3.5" />
                <span className="capitalize">{item.type || 'Update'}</span>
            </Badge>
        )}
        <h3 className="text-xl font-semibold font-headline text-foreground">{item.title}</h3>
        {item.subtitle && (
          <p className="mt-2 text-muted-foreground text-sm">{item.subtitle}</p>
        )}
      </CardContent>
    </Card>
  );
}
