
'use client';

import { useEffect, useRef } from 'react';
import './video-player.css';
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';
import { X } from 'lucide-react';

declare const Plyr: any;
declare const Hls: any;

type VideoPlayerProps = {
  source: string;
  poster: string;
};

const VideoPlayer = ({ source, poster }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof window === 'undefined' || !videoRef.current) {
      return;
    }
    
    if (typeof Plyr === 'undefined' || typeof Hls === 'undefined') {
        const timeout = setTimeout(() => {
            if (videoRef.current) {
                videoRef.current.dataset.retry = 'true';
            }
        }, 100);
        return () => clearTimeout(timeout);
    }


    const video = videoRef.current;
    let player: any;
    let hls: any;

    if (video) {
      const plyrOptions = {
        captions: { active: true, update: true, language: 'en' },
        controls: [
          'play-large', 'rewind', 'play', 'fast-forward', 'progress', 
          'current-time', 'duration', 'mute', 'volume', 'captions', 
          'settings', 'pip', 'airplay', 'fullscreen'
        ],
        loop: { active: true },
        googleCast: { active: true }, 
      };

      if (Hls.isSupported()) {
        hls = new Hls();
        hls.loadSource(source);
        hls.attachMedia(video);
        
        player = new Plyr(video, plyrOptions);

        player.on('languagechange', () => {
          setTimeout(() => {
            if (hls) {
              hls.subtitleTrack = player.currentTrack;
            }
          }, 50);
        });

      } else {
        video.src = source;
        player = new Plyr(video, plyrOptions);
      }
    }

    return () => {
      if (player) {
        player.destroy();
      }
      if (hls) {
        hls.destroy();
      }
    };
  }, [source]);

  return (
    <div ref={containerRef} className="player-container w-full h-screen relative">
      <Button variant="ghost" size="icon" onClick={() => router.back()} className="absolute top-4 right-4 z-50 text-white bg-black/30 hover:bg-black/50">
        <X className="h-6 w-6" />
      </Button>
      <video ref={videoRef} controls crossOrigin="" playsInline poster={poster}></video>
    </div>
  );
};

export default VideoPlayer;
