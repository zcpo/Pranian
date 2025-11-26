'use client';

import { useEffect, useRef } from 'react';
import './video-player.css';

declare const Plyr: any;
declare const Hls: any;

type VideoPlayerProps = {
  source: string;
  poster: string;
};

const VideoPlayer = ({ source, poster }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !videoRef.current) {
      return;
    }
    
    // Ensure Plyr and Hls are loaded
    if (typeof Plyr === 'undefined' || typeof Hls === 'undefined') {
        console.error('Plyr or HLS.js is not loaded');
        // Optionally retry after a delay
        const timeout = setTimeout(() => {
            if (videoRef.current) {
                // This will re-trigger the useEffect
                videoRef.current.dataset.retry = 'true';
            }
        }, 100);
        return () => clearTimeout(timeout);
    }


    const video = videoRef.current;
    let player: any;
    let hls: any;

    if (video) {
      if (Hls.isSupported()) {
        hls = new Hls();
        hls.loadSource(source);
        hls.attachMedia(video);
        
        player = new Plyr(video, {
          captions: { active: true, update: true, language: 'en' },
        });

        player.on('languagechange', () => {
          setTimeout(() => {
            if (hls) {
              hls.subtitleTrack = player.currentTrack;
            }
          }, 50);
        });

      } else {
        video.src = source;
        player = new Plyr(video, {
            captions: { active: true, update: true, language: 'en' },
        });
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
  }, [source, videoRef.current]);

  return (
    <div className="player-container rounded-lg overflow-hidden shadow-2xl">
      <video ref={videoRef} controls crossOrigin="" playsInline poster={poster}></video>
    </div>
  );
};

export default VideoPlayer;
