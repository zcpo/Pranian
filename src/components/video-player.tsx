
'use client';

import { useEffect, useRef } from 'react';
import './video-player.css';
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';
import { X } from 'lucide-react';
import Hls from 'hls.js';
import Plyr from 'plyr-react';
import 'plyr-react/dist/plyr.css';


type VideoPlayerProps = {
  source: string;
  poster: string;
};

const VideoPlayer = ({ source, poster }: VideoPlayerProps) => {
  const ref = useRef<any>(null);
  const router = useRouter();

  useEffect(() => {
    const videoElement = document.getElementById('plyr-video');
    if (videoElement && Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(source);
        hls.attachMedia(videoElement as HTMLMediaElement);
    }
  }, [source]);

  const plyrOptions = {
      captions: { active: true, update: true, language: 'en' },
      controls: [
        'play-large', 'rewind', 'play', 'fast-forward', 'progress', 
        'current-time', 'duration', 'mute', 'volume', 'captions', 
        'settings', 'pip', 'airplay', 'fullscreen'
      ],
  };

  return (
    <div className="player-container w-full h-screen relative">
      <Button variant="ghost" size="icon" onClick={() => router.back()} className="absolute top-4 right-4 z-50 text-white bg-black/30 hover:bg-black/50">
        <X className="h-6 w-6" />
      </Button>
      <Plyr
        id="plyr-video"
        ref={ref}
        source={{
            type: 'video',
            sources: [
                {
                    src: source,
                    type: 'application/x-mpegURL',
                },
            ],
            poster: poster,
        }}
        options={plyrOptions}
      />
    </div>
  );
};

export default VideoPlayer;
