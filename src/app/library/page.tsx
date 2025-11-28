
'use client';

import React from 'react';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { meditations } from '@/lib/meditations';
import { videoMeditations } from '@/lib/video-meditations';
import { videos } from '@/lib/videos';
import { PlayCircle } from 'lucide-react';

export default function LibraryPage() {
    const featuredMeditations = meditations.slice(0, 4);
    const featuredVideoMeditations = videoMeditations.slice(0, 4);
    const featuredVideos = videos.slice(0, 4);

    return (
        <div className="flex flex-col lg:flex-row min-h-screen">
            <aside className="w-full lg:w-52 shrink-0 p-4 lg:p-6 border-b lg:border-b-0 lg:border-r">
                <ul className="space-y-2 mb-6">
                    <li><Link href="/library" className="font-semibold text-foreground hover:text-primary transition-colors">Browse</Link></li>
                    <li><Link href="/class-vibes" className="text-muted-foreground hover:text-primary transition-colors">Radio</Link></li>
                </ul>
                <h2 className="text-sm font-semibold tracking-wider uppercase text-muted-foreground mb-3">Your Music</h2>
                <ul className="space-y-2 mb-6">
                    <li><Link href="/library/yoga" className="text-muted-foreground hover:text-primary transition-colors">Yoga</Link></li>
                    <li><Link href="/library/meditation" className="text-muted-foreground hover:text-primary transition-colors">Audio Meditations</Link></li>
                    <li><Link href="/library/video-meditation" className="text-muted-foreground hover:text-primary transition-colors">Video Meditations</Link></li>
                    <li><Link href="/library/podcast" className="text-muted-foreground hover:text-primary transition-colors">Podcasts</Link></li>
                    <li><Link href="/library/video" className="text-muted-foreground hover:text-primary transition-colors">Videos</Link></li>
                </ul>
                <h2 className="text-sm font-semibold tracking-wider uppercase text-muted-foreground mb-3">Playlists</h2>
                <ul className="space-y-2 text-muted-foreground">
                    <li>Liked from Radio</li>
                    <li>Indie Pop</li>
                    <li>Roadtrip</li>
                </ul>
            </aside>
            <main className="flex-1 p-4 md:p-8">
                <header className="mb-8">
                    <h1 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tight">Browse</h1>
                </header>
                <nav className="border-b mb-8">
                    <div className="flex gap-4 sm:gap-6 -mb-px">
                        <Link href="/library" className="pb-3 border-b-2 border-primary text-primary font-semibold text-sm">Overview</Link>
                        <Link href="#" className="pb-3 border-b-2 border-transparent text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors text-sm">Charts</Link>
                        <Link href="/library/yoga/styles" className="pb-3 border-b-2 border-transparent text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors text-sm">Genres & Moods</Link>
                        <Link href="/feed" className="pb-3 border-b-2 border-transparent text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors text-sm">New Releases</Link>
                    </div>
                </nav>
                
                <section className="mb-12">
                    <h2 className="text-2xl font-bold font-headline mb-4">Featured Audio Meditations</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                        {featuredMeditations.map((item) => {
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

                <section>
                    <h2 className="text-2xl font-bold font-headline mb-4">Featured Videos</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                        {featuredVideos.map((item, index) => {
                            const imageData = PlaceHolderImages.find(img => img.id === item.imageId);
                            const imageUrl = item.posterUrl || imageData?.imageUrl.replace(/seed\/[^/]+/, `seed/${item.slug}${index}`) || 'https://picsum.photos/600/400';
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
            <aside className="hidden xl:block w-52 shrink-0 p-6 border-l">
                <h2 className="text-lg font-semibold mb-4">Friend Activity</h2>
                <button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/80 text-sm py-2 rounded-full">Find Friends</button>
            </aside>
        </div>
    );
}
