'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Play, Pause, Rewind, FastForward, Speaker, SpeakerX, Dot } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

type PodcastPlayerProps = {
  imageUrl: string;
  imageHint: string;
  title: string;
  artist: string;
  src: string;
};

export function PodcastPlayer({ imageUrl, imageHint, title, artist, src }: PodcastPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const setAudioData = () => {
      setDuration(audio.duration);
      setCurrentTime(audio.currentTime);
    }

    const setAudioTime = () => setCurrentTime(audio.currentTime);

    audio.addEventListener('loadeddata', setAudioData);
    audio.addEventListener('timeupdate', setAudioTime);

    // Play ended
    audio.addEventListener('ended', () => setIsPlaying(false));

    return () => {
      audio.removeEventListener('loadeddata', setAudioData);
      audio.removeEventListener('timeupdate', setAudioTime);
      audio.removeEventListener('ended', () => setIsPlaying(false));
    }
  }, []);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;
    
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeSliderChange = (value: number[]) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = value[0];
    setCurrentTime(value[0]);
  };
  
  const handleRewind = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Math.max(0, audio.currentTime - 15);
  };

  const handleFastForward = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Math.min(duration, audio.currentTime + 15);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const formatTime = (time: number) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
    return '0:00';
  };

  return (
    <Card className="max-w-md mx-auto overflow-hidden shadow-2xl rounded-2xl bg-card/80 backdrop-blur-sm border-white/10">
      <CardContent className="p-6">
        <div className="flex gap-6">
          <div className="relative w-28 h-28 flex-shrink-0">
             <Image 
                src={imageUrl} 
                alt={title} 
                fill 
                className="rounded-lg object-cover" 
                data-ai-hint={imageHint} 
             />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-xl font-bold font-headline text-foreground">{title}</h2>
            <p className="text-sm text-muted-foreground">{artist}</p>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <audio ref={audioRef} src={src} preload="metadata" />
          <Slider
            value={[currentTime]}
            max={duration || 0}
            onValueChange={handleTimeSliderChange}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>{formatTime(currentTime)}</span>
            <span>-{formatTime(duration - currentTime)}</span>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <Button variant="ghost" size="icon" className="text-muted-foreground" onClick={toggleMute}>
            {isMuted ? <SpeakerX className="w-5 h-5" /> : <Speaker className="w-5 h-5" />}
          </Button>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={handleRewind}>
              <Rewind className="w-6 h-6" />
            </Button>
            <Button size="icon" className="w-16 h-16 rounded-full" onClick={togglePlayPause}>
              {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={handleFastForward}>
              <FastForward className="w-6 h-6" />
            </Button>
          </div>
          
          <div className="w-10"></div>
        </div>
      </CardContent>
    </Card>
  );
}
