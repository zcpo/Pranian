'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { FeedItem } from '@/lib/feed-items';
import Link from 'next/link';

export function PromoCard({ item }: { item: FeedItem }) {
  const getActionUrl = () => {
    if (item.action?.type === 'open_store') {
      return '/store';
    }
    if (item.action?.type === 'open_pricing') {
        return '/pricing';
    }
    return '#';
  };

  return (
    <>
      {item.image && (
        <Image src={item.image} alt={item.title || 'Promotion image'} fill className="object-cover -z-10" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent -z-10" />

      <div className="p-6 flex flex-col justify-end h-full">
        <span className="text-sm uppercase font-semibold text-primary mb-2 drop-shadow-sm">
          Special Offer
        </span>
        <h3 className="text-2xl font-bold font-headline text-white drop-shadow-md">{item.title}</h3>
        {item.subtitle && (
          <p className="mt-2 text-white/90 text-base drop-shadow-sm">{item.subtitle}</p>
        )}
        <Button asChild className="w-full mt-6" size="lg">
          <Link href={getActionUrl()}>
             <ShoppingCart className="mr-2 h-5 w-5" />
            {item.action?.buttonText || 'Learn More'}
          </Link>
        </Button>
      </div>
    </>
  );
}
