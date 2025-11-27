
'use client';

import React from 'react';
import Link from 'next/link';
import './media-details-page.css';
import { Button } from './ui/button';
import { Plus, Play, PartyPopper } from 'lucide-react';
import { usePathname } from 'next/navigation';

type MediaMetadata = {
  duration: string;
  year: string;
  author: string;
  genres: string[];
};

export type MediaDetailsPlayer = {
  type: 'audio' | 'video';
  component: React.ReactNode;
}

type MediaDetailsPageProps = {
  title: string;
  imageUrl: string;
  description: string;
  metadata: MediaMetadata;
};

export function MediaDetailsPage({ title, imageUrl, description, metadata }: MediaDetailsPageProps) {
  const pathname = usePathname();
  
  return (
    <div
      className="w-full bg-no-repeat min-h-screen lg:bg-center bg-cover bg-top text-white relative flex items-center"
      style={{
        backgroundImage: `linear-gradient(to right, #0f171e 40%, transparent), url('${imageUrl}')`,
      }}
    >
      <div className="w-full lg:w-7/12 mt-10" style={{ padding: '5% 3%' }}>
        
        <h1 className="text-4xl lg:text-5xl font-bold font-headline">{title}</h1>

        <div className="mt-5 flex text-slate-300 items-center text-md flex-wrap">
          <span className="ml-3">{metadata.duration}</span>
          <span className="ml-3">{metadata.year}</span>
          <span className="border border-slate-400 text-xs px-1 rounded-sm font-bold mx-3">
            U/A 13+
          </span>
          <span className="border border-slate-400 text-xs px-1 rounded-sm font-bold">
            4K
          </span>
        </div>

        <p className="mt-4 text-lg max-w-2xl">{description}</p>

        <div className="flex flex-wrap lg:flex-nowrap items-center mt-8">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 mr-2.5 mb-3" asChild>
            <Link href={`${pathname}/player`}>
              <Play className="mr-2 h-5 w-5 fill-current" />
              Play
            </Link>
          </Button>

          <Button variant="ghost" size="icon" className="bg-slate-700/50 hover:bg-slate-700 p-3 rounded-full shadow-sm mr-2.5 text-gray-300 mb-3 h-12 w-12">
            <Plus />
          </Button>
          
          <Button variant="ghost" size="icon" className="bg-slate-700/50 hover:bg-slate-700 p-3 rounded-full shadow-sm mr-2.5 text-gray-300 mb-3 h-12 w-12">
            <PartyPopper />
          </Button>
        </div>

        <div className="text-slate-300 mt-6 text-md max-w-xl">
          <div className="flex">
            <p className="w-36 font-bold">Starring</p>
            <p className="text-blue-300 truncate">{metadata.author}</p>
          </div>

          <div className="flex">
            <p className="w-36 font-bold">Genres</p>
            <p className="text-blue-300 truncate">{metadata.genres.join(', ')}</p>
          </div>

          <div className="flex">
            <p className="w-36 font-bold">Subtitles</p>
            <p className="text-blue-300 truncate">English</p>
          </div>
        </div>
      </div>
    </div>
  );
}
