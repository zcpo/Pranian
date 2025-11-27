
'use client';

import React from 'react';
import './library.css';
import Link from 'next/link';
import { ContentCard } from '@/components/content-card';
import { meditations } from '@/lib/meditations';
import { videoMeditations } from '@/lib/video-meditations';
import { videos } from '@/lib/videos';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { PlayCircle } from 'lucide-react';

export default function LibraryPage() {
    // Get a few items from each category to feature
    const featuredMeditations = meditations.slice(0, 4);
    const featuredVideoMeditations = videoMeditations.slice(0, 4);
    const featuredVideos = videos.slice(0, 4);

    return (
        <div className="wrapper">
            <aside className="sidebar">
                <ul className="sidebar__main-links">
                    <li><Link href="/library" className="link is-active">Browse</Link></li>
                    <li><Link href="/class-vibes" className="link">Radio</Link></li>
                </ul>
                <ul className="sidebar__music">
                    <h2 className="sidebar__header">Your Music</h2>
                     <li><Link href="/library/yoga" className="link">Yoga</Link></li>
                    <li><Link href="/library/meditation" className="link">Audio Meditations</Link></li>
                    <li><Link href="/library/video-meditation" className="link">Video Meditations</Link></li>
                    <li><Link href="/library/podcast" className="link">Podcasts</Link></li>
                    <li><Link href="/library/video" className="link">Videos</Link></li>
                </ul>
                <ul className="sidebar__playlists">
                    <h2 className="sidebar__header">Playlists</h2>
                    <li>Liked from Radio</li>
                    <li>Indie Pop</li>
                    <li>Roadtrip</li>
                    <li>Release Radar</li>
                    <li>Focus</li>
                    <li>Piano Mood</li>
                    <li>Your Summer Rewind</li>
                    <li>Inspire</li>
                    <li>Alternative Faves</li>
                </ul>
            </aside>
            <main>
                <header className="main__header">
                    <h1>Browse</h1>
                </header>
                <nav className="main__nav">
                    <Link href="/library" className="link is-active">Overview</Link>
                    <Link href="#" className="link">Charts</Link>
                    <Link href="/library/yoga/styles" className="link">Genres and Moods</Link>
                    <Link href="/feed" className="link">New Releases</Link>
                    <Link href="#" className="link">Discover</Link>
                </nav>
                
                <section className="main__playlists">
                    <h2 className="section__title">Featured Audio Meditations</h2>
                    <ul className="music__list">
                        {featuredMeditations.map((item) => {
                            const imageData = PlaceHolderImages.find(img => img.id === item.imageId);
                            const imageUrl = imageData?.imageUrl.replace(/seed\/[^/]+/, `seed/${item.slug}`) || 'https://picsum.photos/600/400';
                            return (
                                <li className="music__list-item" key={item.slug} style={{backgroundImage: `url(${imageUrl})`}}>
                                    <div className="music__list-item-hover">
                                        <h3 className="song__title">{item.title}</h3>
                                        <p className="song__creator">{item.author}</p>
                                        <button className="play-button">
                                            <PlayCircle size={48} />
                                        </button>
                                    </div>
                                    <Link href={`/library/meditation/${item.slug}`} className="absolute inset-0" aria-label={`Play ${item.title}`} />
                                </li>
                            );
                        })}
                    </ul>
                </section>

                <section className="main__playlists">
                    <h2 className="section__title">Featured Video Meditations</h2>
                    <ul className="music__list">
                         {featuredVideoMeditations.map((item) => {
                            const imageData = PlaceHolderImages.find(img => img.id === item.imageId);
                             const imageUrl = item.posterUrl || imageData?.imageUrl.replace(/seed\/[^/]+/, `seed/${item.slug}`) || 'https://picsum.photos/600/400';
                            return (
                                <li className="music__list-item" key={item.slug} style={{backgroundImage: `url(${imageUrl})`}}>
                                    <div className="music__list-item-hover">
                                        <h3 className="song__title">{item.title}</h3>
                                        <p className="song__creator">{item.author}</p>
                                        <button className="play-button">
                                            <PlayCircle size={48} />
                                        </button>
                                    </div>
                                    <Link href={`/library/video-meditation/${item.slug}`} className="absolute inset-0" aria-label={`Play ${item.title}`} />
                                </li>
                            );
                        })}
                    </ul>
                </section>

                <section className="main__playlists">
                    <h2 className="section__title">Featured Videos</h2>
                    <ul className="music__list">
                        {featuredVideos.map((item, index) => {
                            const imageData = PlaceHolderImages.find(img => img.id === item.imageId);
                            const imageUrl = item.posterUrl || imageData?.imageUrl.replace(/seed\/[^/]+/, `seed/${item.slug}${index}`) || 'https://picsum.photos/600/400';
                            return (
                                 <li className="music__list-item" key={item.slug} style={{backgroundImage: `url(${imageUrl})`}}>
                                    <div className="music__list-item-hover">
                                        <h3 className="song__title">{item.title}</h3>
                                        <p className="song__creator">{item.author}</p>
                                        <button className="play-button">
                                            <PlayCircle size={48} />
                                        </button>
                                    </div>
                                     <Link href={`/library/video/${item.slug}`} className="absolute inset-0" aria-label={`Play ${item.title}`} />
                                </li>
                            );
                        })}
                    </ul>
                </section>

            </main>
            <aside className="activity">
                <h2>Friend Activity</h2>
                <button className="button">Find Friends</button>
            </aside>
            <footer className="footer">
                <div className="now-playing">
                    <img className="album__image" src="https://images.unsplash.com/photo-1515233451477-90d9cd4d57ed?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=cade564aeff757d648625aaac06e837c" alt="Album cover" />
                    <div className="album__info">
                        <span className="album__title">Stay There Now</span>
                        <span className="album__musician">The Harmonics</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}
