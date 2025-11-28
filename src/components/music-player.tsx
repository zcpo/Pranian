
'use client';

import { useState, useRef, useEffect, FC } from 'react';
import Image from 'next/image';
import './music-player.css';

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

export const MusicPlayer: FC<MusicPlayerProps> = ({ track }) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const progressBarRef = useRef<HTMLDivElement>(null);
    const progressFillRef = useRef<HTMLDivElement>(null);
    
    const [isPlaying, setIsPlaying] = useState(false);
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
        const handleCanPlay = () => {
          if (!isPlaying) {
             // Optional: auto-play when ready
             // handlePlayPause();
          }
        }

        audio.addEventListener('loadedmetadata', setAudioData);
        audio.addEventListener('canplay', handleCanPlay);
        return () => {
            audio.removeEventListener('loadedmetadata', setAudioData);
            audio.removeEventListener('canplay', handleCanPlay);
        }
    }, [track.audioSrc]);


    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const updateProgress = () => {
            setCurrentTime(audio.currentTime);
        };
        
        const handleEnded = () => setIsPlaying(false);

        audio.addEventListener('timeupdate', updateProgress);
        audio.addEventListener('ended', handleEnded);
        
        return () => {
            audio.removeEventListener('timeupdate', updateProgress);
            audio.removeEventListener('ended', handleEnded);
        };
    }, []);

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
    
    const SkipIcon = () => (
        <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
        </svg>
    );

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
                    <button className="control-btn" onClick={() => skip(-15)} style={{ transform: 'scaleX(-1)'}}>
                        <SkipIcon />
                    </button>
                    <button className="control-btn play-pause-btn" onClick={handlePlayPause}>
                        {isPlaying ? <PauseIcon /> : <PlayIcon />}
                    </button>
                    <button className="control-btn" onClick={() => skip(15)}>
                        <SkipIcon />
                    </button>
                </div>
            </div>
        </div>
    );
};
