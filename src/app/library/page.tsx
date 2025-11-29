
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { meditations } from '@/lib/meditations';
import { videoMeditations } from '@/lib/video-meditations';
import { videos } from '@/lib/videos';
import { PlayCircle, Search } from 'lucide-react';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function LibraryPage() {
    const featuredAudioMeditations = meditations.slice(0, 4);
    const featuredVideoMeditations = videoMeditations.slice(0, 4);
    const featuredYogaVideos = videos.slice(0, 4);
    const [searchQuery, setSearchQuery] = useState('');
    const router = useRouter();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/library/search?q=${encodeURIComponent(searchQuery.trim())}`);
        }
    };

    return (
        <div className="min-h-screen">
            <main className="container mx-auto p-4 md:p-8">
                <header className="mb-8">
                    <h1 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tight">Browse</h1>
                </header>

                <div className="mb-12">
                    <form onSubmit={handleSearch} className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input
                            placeholder="Search songs, artists, podcasts..."
                            className="glass-input pl-12 pr-24 h-12 text-lg rounded-full focus-visible:ring-primary/50"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                         <Button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full h-9" size="sm">Search</Button>
                    </form>
                </div>
                
                <section className="mb-12">
                    <h2 className="text-2xl font-bold font-headline mb-4">Featured Audio Meditations</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                        {featuredAudioMeditations.map((item) => {
                            const imageData = PlaceHolderImages.find(img => img.id === item.imageId);
                            const imageUrl = imageData?.imageUrl.replace(/seed\/[^/]+/, `seed/${item.slug}`) || 'https://picsum.photos/600/400';
                            return (
                                <Link href={`/library/meditation/${item.slug}`} key={item.slug} className="group relative block overflow-hidden rounded-lg">
                                    <Image src={imageUrl} alt={item.title} width={600} height={400} className="w-full h-auto object-cover aspect-video transition-transform duration-300 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/60"></div>
                                    <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                                        <h3 className="font-bold text-lg">{item.title}</h3>
                                        <p className="text-sm opacity-80">{item.author}</p>
                                    </div>
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <PlayCircle size={64} className="text-white/80" />
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold font-headline mb-4">Featured Video Meditations</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                        {featuredVideoMeditations.map((item) => {
                            const imageData = PlaceHolderImages.find(img => img.id === item.imageId);
                            const imageUrl = item.posterUrl || imageData?.imageUrl.replace(/seed\/[^/]+/, `seed/${item.slug}`) || 'https://picsum.photos/600/400';
                            return (
                                <Link href={`/library/video-meditation/${item.slug}`} key={item.slug} className="group relative block overflow-hidden rounded-lg">
                                    <Image src={imageUrl} alt={item.title} width={600} height={400} className="w-full h-auto object-cover aspect-video transition-transform duration-300 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/60"></div>
                                    <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                                        <h3 className="font-bold text-lg">{item.title}</h3>
                                        <p className="text-sm opacity-80">{item.author}</p>
                                    </div>
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <PlayCircle size={64} className="text-white/80" />
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </section>
                
                <section className="mb-12">
                    <h2 className="text-2xl font-bold font-headline mb-4">Popular Yoga Videos</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                        {featuredYogaVideos.map((item) => {
                            const imageData = PlaceHolderImages.find(img => img.id === item.imageId);
                            const imageUrl = item.posterUrl || imageData?.imageUrl.replace(/seed\/[^/]+/, `seed/${item.slug}`) || 'https://picsum.photos/600/400';
                            return (
                                <Link href={`/library/video/${item.slug}`} key={item.slug} className="group relative block overflow-hidden rounded-lg">
                                    <Image src={imageUrl} alt={item.title} width={600} height={400} className="w-full h-auto object-cover aspect-video transition-transform duration-300 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/60"></div>
                                    <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                                        <h3 className="font-bold text-lg">{item.title}</h3>
                                        <p className="text-sm opacity-80">{item.author}</p>
                                    </div>
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <PlayCircle size={64} className="text-white/80" />
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </section>
            </main>
        </div>
    );
}
