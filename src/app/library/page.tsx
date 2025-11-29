
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { meditations } from '@/lib/meditations';
import { videoMeditations } from '@/lib/video-meditations';
import { videos } from '@/lib/videos';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ContentCard } from '@/components/content-card';

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
                                <ContentCard
                                    key={item.slug}
                                    href={`/library/meditation/${item.slug}`}
                                    imageUrl={imageUrl}
                                    imageHint={imageData?.imageHint || 'meditation'}
                                    category="Audio Meditation"
                                    title={item.title}
                                    description={item.author}
                                />
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
                                <ContentCard
                                    key={item.slug}
                                    href={`/library/video-meditation/${item.slug}`}
                                    imageUrl={imageUrl}
                                    imageHint={imageData?.imageHint || 'video meditation'}
                                    category="Video Meditation"
                                    title={item.title}
                                    description={item.author}
                                />
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
                                <ContentCard
                                    key={item.slug}
                                    href={`/library/video/${item.slug}`}
                                    imageUrl={imageUrl}
                                    imageHint={imageData?.imageHint || 'yoga video'}
                                    category="Yoga Video"
                                    title={item.title}
                                    description={item.author}
                                />
                            );
                        })}
                    </div>
                </section>
            </main>
        </div>
    );
}
