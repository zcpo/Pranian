
'use client';

import { useState, useRef, useEffect, FC } from 'react';
import Image from 'next/image';
import './music-player.css';
import { cn } from '@/lib/utils';

type Track = {
    title: string;
    artist: string;
    albumArt: string;
    audioSrc: string;
    duration: string;
};

type MusicPlayerProps = {
    track: Track;
};

const clamp = (n: number, min: number, max: number) => Math.min(Math.max(n, min), max);

const formatTime = (s: number) => {
    s = isNaN(s) ? 0 : Math.floor(s);
    const m = Math.floor(s / 60);
    const ss = (s % 60).toString().padStart(2, '0');
    return `${m}:${ss}`;
};

const parseTime = (txt: string) => {
    if (!txt) return 0;
    const m = txt.trim().match(/^(\d+):(\d{1,2})$/);
    return m ? (+m[1] * 60) + (+m[2]) : 0;
};

const PlayIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 5v14l11-7z" />
    </svg>
);

const PauseIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
    </svg>
);

const RewindIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M11 18V6l-8.5 6 8.5 6zm.5-6 8.5 6V6l-8.5 6z"/></svg>
);

const FastForwardIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="m4 18 8.5-6L4 6v12zm9-12v12l8.5-6L13 6z"/></svg>
);

const RepeatIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"/></svg>
);


export const MusicPlayer: FC<MusicPlayerProps> = ({ track }) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const progressBarRef = useRef<HTMLDivElement>(null);
    
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLooping, setIsLooping] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(parseTime(track.duration));

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;
        
        const setAudioData = () => {
            const newDuration = audio.duration;
            if (!isNaN(newDuration) && isFinite(newDuration)) {
              setDuration(newDuration);
            }
        };

        audio.addEventListener('loadedmetadata', setAudioData);
        return () => {
            audio.removeEventListener('loadedmetadata', setAudioData);
        }
    }, [track.audioSrc]);


    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const updateProgress = () => {
            setCurrentTime(audio.currentTime);
        };
        
        const handleEnded = () => {
            if (!isLooping) {
                setIsPlaying(false);
            }
        };

        audio.addEventListener('timeupdate', updateProgress);
        audio.addEventListener('ended', handleEnded);
        
        return () => {
            audio.removeEventListener('timeupdate', updateProgress);
            audio.removeEventListener('ended', handleEnded);
        };
    }, [isLooping]);

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            audio.loop = isLooping;
        }
    }, [isLooping]);

    const handlePlayPause = () => {
        const audio = audioRef.current;
        if (!audio) return;

        if (isPlaying) {
            audio.pause();
        } else {
            audio.play().catch(e => console.error("Error playing audio:", e));
        }
        setIsPlaying(!isPlaying);
    };

    const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
        const audio = audioRef.current;
        const bar = progressBarRef.current;
        if (!audio || !bar || !duration) return;

        const rect = bar.getBoundingClientRect();
        const percent = clamp((e.clientX - rect.left) / rect.width, 0, 1);
        audio.currentTime = percent * duration;
        setCurrentTime(audio.currentTime);
    };
    
    const skip = (seconds: number) => {
        const audio = audioRef.current;
        if (!audio || !duration) return;
        audio.currentTime = clamp(audio.currentTime + seconds, 0, duration);
    };

    return (
        <div className="music-player-container">
             <audio ref={audioRef} src={track.audioSrc} preload="metadata"></audio>
             <div className="music-player-bg" style={{ backgroundImage: `url(${track.albumArt})`}}></div>

            <div className="music-card">
                 <Image src={track.albumArt} alt="Album Cover" width={400} height={400} className="album-art-main" />
                <div className="track-info">
                    <h2 className="title">{track.title}</h2>
                    <p className="artist">{track.artist}</p>
                </div>
                
                <div className="progress-container">
                    <div ref={progressBarRef} className="progress-bar" onClick={handleSeek}>
                        <div className="progress-fill" style={{ width: `${(currentTime / duration) * 100}%` }}></div>
                    </div>
                     <div className="time-labels">
                        <span>{formatTime(currentTime)}</span>
                        <span>{formatTime(duration)}</span>
                    </div>
                </div>

                <div className="player-controls">
                    <button className="control-btn" onClick={() => skip(-15)} aria-label="Rewind 15 seconds">
                        <RewindIcon />
                    </button>
                    <button className="control-btn play-pause-btn" onClick={handlePlayPause} aria-label={isPlaying ? 'Pause' : 'Play'}>
                        {isPlaying ? <PauseIcon /> : <PlayIcon />}
                    </button>
                    <button className="control-btn" onClick={() => skip(15)} aria-label="Fast-forward 15 seconds">
                        <FastForwardIcon />
                    </button>
                    <button className={cn("control-btn", isLooping && "text-primary")} onClick={() => setIsLooping(!isLooping)} aria-label="Toggle loop">
                        <RepeatIcon />
                    </button>
                </div>
            </div>
        </div>
    );
};
