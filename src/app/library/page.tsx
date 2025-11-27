'use client';

import React, { useEffect } from 'react';
import './library.css';
import Link from 'next/link';

const musicListItems = [
    { title: 'Just Go', creator: 'The Goes' },
    { title: 'Fanboy', creator: 'Young Joe' },
    { title: 'Fly', creator: '20 Cent' },
    { title: 'Jill', creator: 'Don\'t Even' },
    { title: 'Home and Country', creator: 'Wandering Ants' },
    { title: 'Victor Knows', creator: 'The Creatives' },
    { title: 'Roadtrippin\'', creator: 'The Wayfarers' },
    { title: 'However You Want', creator: 'The Shilts' },
    { title: 'Just Say Yes', creator: 'The Tweeters' },
    { title: 'New York', creator: 'V2' },
    { title: 'Hallowed Grounds', creator: 'Paper and Pencil' },
    { title: 'Fanboy', creator: 'Young Joe' },
    { title: 'Roadtrippin\'', creator: 'The Wayfarers' },
    { title: 'Victor Knows', creator: 'The Creatives' },
    { title: 'Home and Country', creator: 'Wandering Ants' },
    { title: 'Hallowed Grounds', creator: 'Paper and Pencil' },
    { title: 'Springtime Forever', creator: 'Near and Far' },
    { title: 'Love Song', creator: 'The Sprints' },
    { title: 'Say It Ain\'t So', creator: 'The Three Beards' },
    { title: 'She Goes', creator: 'The Kilts' },
];

const MusicListItem = ({ item, index }: { item: { title: string, creator: string }, index: number }) => {
    const [bgImage, setBgImage] = React.useState('');

    useEffect(() => {
        const imageUrl = `https://picsum.photos/300/300?sig=${index}`;
        setBgImage(`linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url('${imageUrl}')`);
    }, [index]);

    return (
        <li className="music__list-item" style={{ backgroundImage: bgImage, opacity: 0.8 }}>
            <span className="song__title">{item.title}</span>
            <span className="song__creator">{item.creator}</span>
        </li>
    );
};

export default function LibraryPage() {
    return (
        <div className="wrapper">
            <aside className="sidebar">
                <ul className="sidebar__main-links">
                    <li>Browse</li>
                    <li>Radio</li>
                </ul>
                <ul className="sidebar__music">
                    <h2 className="sidebar__header">Your Music</h2>
                    <li>Your Daily Mix</li>
                    <li>Songs</li>
                    <li>Albums</li>
                    <li>Artists</li>
                    <li>Stations</li>
                    <li>Local Files</li>
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
                    <Link href="#" className="link is-active">Overview</Link>
                    <Link href="#" className="link">Charts</Link>
                    <Link href="#" className="link">Genres and Moods</Link>
                    <Link href="#" className="link">New Releases</Link>
                    <Link href="#" className="link">Discover</Link>
                    <Link href="#" className="link">More</Link>
                </nav>
                <section className="main__playlists">
                    <h2>Featured Lists</h2>
                    <ul className="music__list">
                        {musicListItems.map((item, i) => (
                            <MusicListItem key={i} item={item} index={i} />
                        ))}
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
