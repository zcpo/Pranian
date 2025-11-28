
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
  const containerRef = useRef<HTMLDivElement>(null);

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
        // Casting requires additional setup with the Google Cast SDK
        // but we enable the button in the UI.
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
  }, [source, videoRef.current]);

  return (
    <div ref={containerRef} className="player-container w-full h-screen">
      <video ref={videoRef} controls crossOrigin="" playsInline poster={poster}></video>
    </div>
  );
};

export default VideoPlayer;
