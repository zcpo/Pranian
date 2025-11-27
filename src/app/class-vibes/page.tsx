'use client';

import { useState, useEffect, useCallback } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Music4 } from 'lucide-react';

interface Track {
  artworkUrl100: string;
  previewUrl: string;
  trackViewUrl: string;
  collectionViewUrl: string;
  trackName: string;
  collectionName: string;
  artistName: string;
}

const popularCountries = [
  { code: 'US', name: 'United States' },
  { code: 'GB', name: 'Great Britain' },
  { code: 'DE', name: 'Deutschland' },
  { code: 'FR', name: 'France' },
];

function escapeHtml(s: string): string {
  if (!s) return '';
  return s.replace(/[&<>"']/g, (c) => {
    return (
      {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
      }[c] || c
    );
  });
}

function PranianIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
    </svg>
  );
}

export default function ClassVibesPage() {
  const [artist, setArtist] = useState('Enya');
  const [countryCode, setCountryCode] = useState('US');
  const [results, setResults] = useState<Track[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const doSearch = useCallback(() => {
    const term = artist.trim();
    let cc = countryCode.trim().toUpperCase();

    if (!/^[A-Z]{2}$/.test(cc)) {
      cc = 'US';
      setCountryCode('US');
    }

    if (!term) {
      setResults([]);
      setError('Please enter an artist to search for.');
      return;
    }

    const url = new URL('https://itunes.apple.com/search');
    url.searchParams.set('term', term);
    url.searchParams.set('entity', 'song');
    url.searchParams.set('limit', '24');
    url.searchParams.set('country', cc.toLowerCase());

    setLoading(true);
    setError(null);
    setResults([]);

    fetch(url.toString(), { method: 'GET' })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Network response was not ok: ${res.statusText}`);
        }
        return res.json();
      })
      .then((data) => {
        const items = data?.results || [];
        if (items.length === 0) {
          setError(`No results found for "${escapeHtml(term)}" in ${cc}.`);
        }
        setResults(items);
      })
      .catch((err) => {
        console.error('Search failed', err);
        setError('Search failed. Please try again.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [artist, countryCode]);

  useEffect(() => {
    doSearch();
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      doSearch();
    }
  };
  
  const handlePillClick = (cc: string) => {
    setCountryCode(cc);
    // Add a slight delay to allow state to update before searching
    setTimeout(doSearch, 0);
  };
  
  useEffect(() => {
    if (countryCode && artist) {
        doSearch();
    }
  }, [countryCode, artist, doSearch]);

  return (
    <div className="container mx-auto px-4 py-8 sm:py-16">
      <header className="flex justify-between items-baseline gap-3 flex-wrap mb-4">
        <h1 className="text-2xl md:text-3xl font-bold font-headline flex items-center gap-2">
          <Music4 className="h-7 w-7 text-primary"/>
          Pranian Class Vibes
        </h1>
        <p className="text-muted-foreground text-sm">
          Enter an artist and select a country to find your vibe.
        </p>
      </header>

      <section className="flex gap-2 flex-wrap items-center mt-2">
        <Input
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter artist (e.g., Enya)"
          className="min-w-[240px] flex-grow md:flex-grow-0"
        />
        <Input
          value={countryCode}
          onChange={(e) => setCountryCode(e.target.value)}
          onKeyDown={handleKeyDown}
          maxLength={2}
          placeholder="CC"
          className="w-[90px] uppercase"
        />
        <Button onClick={doSearch} disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </Button>
      </section>

      <nav className="flex gap-2 flex-wrap my-4" aria-label="Popular countries">
        {popularCountries.map((c) => (
          <Button
            key={c.code}
            variant={countryCode === c.code ? 'default' : 'outline'}
            size="sm"
            onClick={() => handlePillClick(c.code)}
            className="rounded-full"
          >
            {c.name}
          </Button>
        ))}
      </nav>

      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6" aria-live="polite">
        {loading && <p className="text-muted-foreground col-span-full text-center">Loading...</p>}
        {error && <p className="text-destructive col-span-full text-center">{error}</p>}
        
        {results.map((item, index) => {
          const cover = (item.artworkUrl100 || '').replace('100x100bb', '300x300bb');
          const preview = item.previewUrl;
          const link = item.trackViewUrl || item.collectionViewUrl || '#';
          const name = item.trackName || item.collectionName || 'Unknown Track';
          const artistName = item.artistName || '';

          return (
            <Card key={index} className="overflow-hidden shadow-lg flex flex-col">
              <div className="relative w-full aspect-square">
                <img alt={escapeHtml(name)} src={cover} loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="p-3 flex flex-col flex-grow">
                <h3 className="font-semibold text-sm leading-snug truncate">{escapeHtml(name)}</h3>
                <p className="text-muted-foreground text-xs truncate">{escapeHtml(artistName)}</p>
                <div className="mt-auto pt-3">
                  {preview ? (
                    <audio controls preload="none" src={preview} className="w-full h-10"></audio>
                  ) : (
                    <div className="text-xs text-muted-foreground text-center p-2 border rounded-md">
                      Preview not available
                    </div>
                  )}
                </div>
              </div>
               <div className="p-3 pt-0 border-t">
                  <a
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <PranianIcon />
                    Listen on Pranian Music
                  </a>
                </div>
            </Card>
          );
        })}
      </main>

      <footer className="text-muted-foreground text-xs mt-8 opacity-70">
        <small>
          Previews & links are provided via the iTunes Search API. Audio is streamed directly from Apple servers and is not re-hosted. “Listen on Pranian Music” links open the official Apple Music page.
        </small>
      </footer>
    </div>
  );
}
