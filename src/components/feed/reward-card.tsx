'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import { FeedItem } from '@/lib/feed-items';
import Link from 'next/link';

export function RewardCard({ item }: { item: FeedItem }) {
  const getActionUrl = () => {
    if (item.action?.type === 'claim_reward') {
      return '/profile'; // Link to profile, assuming rewards are shown there
    }
    return '#';
  };

  return (
    <>
      {item.image && (
        <Image src={item.image} alt={item.title || 'Reward image'} fill className="object-cover -z-10" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 via-amber-700/40 to-transparent -z-10" />

      <div className="p-6 flex flex-col justify-end h-full">
        <span className="text-sm uppercase font-semibold text-amber-300 mb-2 drop-shadow-sm">
          Reward Unlocked!
        </span>
        <h3 className="text-2xl font-bold font-headline text-white drop-shadow-md">{item.title}</h3>
        {item.subtitle && (
          <p className="mt-2 text-white/90 text-base drop-shadow-sm">{item.subtitle}</p>
        )}
        <Button asChild className="w-full mt-6 bg-amber-500 hover:bg-amber-600 text-white" size="lg">
          <Link href={getActionUrl()}>
            <Star className="mr-2 h-5 w-5" />
            {item.action?.buttonText || 'Claim Now'}
          </Link>
        </Button>
      </div>
    </>
  );
}
