'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Play, Pause, Rewind, FastForward, SkipBack, SkipForward } from 'lucide-react';
import { cn } from '@/lib/utils';
import './new-podcast-player.css';

type Track = {
  name: string;
  author: string;
  img: string;
  audio: string;
  duration: string;
};

type NewPodcastPlayerProps = {
  track: Track;
};

export function NewPodcastPlayer({ track }: NewPodcastPlayerProps) {
  const [playlist] = useState<Track[]>([track]);
  const [trackIndex, setTrackIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState('0:00');
  const [isPaused, setIsPaused] = useState(true);

  const playerRef = useRef<HTMLAudioElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const playheadRef = useRef<HTMLDivElement>(null);
  const hoverPlayheadRef = useRef<HTMLDivElement>(null);

  const currentSong = playlist[trackIndex];

  const timeUpdate = () => {
    if (playerRef.current && timelineRef.current && playheadRef.current) {
      const duration = playerRef.current.duration;
      const playPercent = 100 * (playerRef.current.currentTime / duration);
      playheadRef.current.style.width = `${playPercent}%`;
      const newCurrentTime = formatTime(playerRef.current.currentTime);
      setCurrentTime(newCurrentTime);
    }
  };

  const formatTime = (time: number): string => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    let seconds: string | number = Math.floor(time % 60);
    seconds = seconds >= 10 ? seconds : `0${seconds}`;
    return `${minutes}:${seconds}`;
  };

  const playOrPause = () => {
    if (playerRef.current) {
      if (playerRef.current.paused) {
        playerRef.current.play();
        setIsPaused(false);
      } else {
        playerRef.current.pause();
        setIsPaused(true);
      }
    }
  };
  
  const handleEnded = () => {
    setIsPaused(true);
  }

  const changeCurrentTime = (e: React.MouseEvent<HTMLDivElement>) => {
    if (playerRef.current && timelineRef.current) {
      const duration = playerRef.current.duration;
      const timelineWidth = timelineRef.current.offsetWidth;
      const timelineRect = timelineRef.current.getBoundingClientRect();
      const userClickWidth = e.clientX - timelineRect.left;
      const userClickWidthInPercent = (userClickWidth * 100) / timelineWidth;

      if (playheadRef.current) {
        playheadRef.current.style.width = `${userClickWidthInPercent}%`;
      }
      playerRef.current.currentTime = (duration * userClickWidthInPercent) / 100;
    }
  };

  const hoverTimeLine = (e: React.MouseEvent<HTMLDivElement>) => {
    if (playerRef.current && timelineRef.current && hoverPlayheadRef.current) {
      const duration = playerRef.current.duration;
      const timelineWidth = timelineRef.current.offsetWidth;
      const timelineRect = timelineRef.current.getBoundingClientRect();
      const userClickWidth = e.clientX - timelineRect.left;
      const userClickWidthInPercent = (userClickWidth * 100) / timelineWidth;

      if (userClickWidthInPercent <= 100) {
        hoverPlayheadRef.current.style.width = `${userClickWidthInPercent}%`;
      }

      const time = (duration * userClickWidthInPercent) / 100;

      if (time >= 0 && time <= duration) {
        hoverPlayheadRef.current.dataset.content = formatTime(time);
      }
    }
  };

  const resetTimeLine = () => {
    if (hoverPlayheadRef.current) {
      hoverPlayheadRef.current.style.width = '0';
    }
  };
  
  const handleRewind = () => {
    if (playerRef.current) {
        playerRef.current.currentTime = Math.max(0, playerRef.current.currentTime - 15);
    }
  };

  const handleFastForward = () => {
    if (playerRef.current) {
        playerRef.current.currentTime = Math.min(playerRef.current.duration, playerRef.current.currentTime + 15);
    }
  };


  useEffect(() => {
    const player = playerRef.current;
    const timeline = timelineRef.current;

    if (player && timeline) {
      player.addEventListener('timeupdate', timeUpdate, false);
      player.addEventListener('ended', handleEnded, false);
      timeline.addEventListener('click', changeCurrentTime as any, false);
      timeline.addEventListener('mousemove', hoverTimeLine as any, false);
      timeline.addEventListener('mouseout', resetTimeLine, false);

      return () => {
        player.removeEventListener('timeupdate', timeUpdate);
        player.removeEventListener('ended', handleEnded);
        timeline.removeEventListener('click', changeCurrentTime as any);
        timeline.removeEventListener('mousemove', hoverTimeLine as any);
        timeline.removeEventListener('mouseout', resetTimeLine);
      };
    }
  }, []);

  return (
    <div className="card-player">
      <div className="current-song">
        <audio ref={playerRef}>
          <source src={currentSong.audio} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
        <div className="img-wrap">
          <Image src={currentSong.img} alt={currentSong.name} width={270} height={200} unoptimized />
        </div>
        <span className="song-name">{currentSong.name}</span>
        <span className="song-author">{currentSong.author}</span>

        <div className="time">
          <div className="current-time">{currentTime}</div>
          <div className="end-time">{currentSong.duration}</div>
        </div>

        <div ref={timelineRef} id="timeline">
          <div ref={playheadRef} id="playhead"></div>
          <div ref={hoverPlayheadRef} className="hover-playhead" data-content="0:00"></div>
        </div>

        <div className="controls">
          <button onClick={handleRewind} className="prev prev-next current-btn">
            <Rewind />
          </button>
          <button onClick={playOrPause} className="play current-btn">
            {isPaused ? <Play /> : <Pause />}
          </button>
          <button onClick={handleFastForward} className="next prev-next current-btn">
            <FastForward />
          </button>
        </div>
      </div>
      <div className="play-list">
        {playlist.map((music, key) => (
          <div
            key={key}
            className={cn('track', {
              'current-audio': trackIndex === key && !isPaused,
              'play-now': trackIndex === key && isPaused,
            })}
          >
            <div className="track-img relative w-[90px] h-auto">
              <Image className="track-img" src={music.img} alt={music.name} width={90} height={90} unoptimized />
            </div>
            <div className="track-discr">
              <span className="track-name">{music.name}</span>
              <span className="track-author">{music.author}</span>
            </div>
            <span className="track-duration">
              {trackIndex === key ? currentTime : music.duration}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
