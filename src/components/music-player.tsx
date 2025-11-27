'use client';

import { useState, useRef, useEffect, FC } from 'react';
import Image from 'next/image';
import './music-player.css';

type Track = {
    title: string;
    artist: string;
    albumArt: string;
    audioSrc: string;
    duration: string; // e.g., "3:53"
};

type MusicPlayerProps = {
    track: Track;
};

const clamp = (n: number, min: number, max: number) => Math.min(Math.max(n, min), max);

const formatTime = (s: number) => {
    s = Math.max(0, Math.floor(s));
    const m = Math.floor(s / 60);
    const ss = (s % 60).toString().padStart(2, '0');
    return `${m}:${ss}`;
};

const parseTime = (txt: string) => {
    if (!txt) return NaN;
    const m = txt.trim().match(/^(\d+):(\d{1,2})$/);
    return m ? (+m[1] * 60) + (+m[2]) : NaN;
};

export const MusicPlayer: FC<MusicPlayerProps> = ({ track }) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const progressBarRef = useRef<HTMLDivElement>(null);
    const progressFillRef = useRef<HTMLDivElement>(null);
    const timeLabelRef = useRef<HTMLSpanElement>(null);
    
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(parseTime(track.duration) || 0);

    // Initial setup
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
        return () => audio.removeEventListener('loadedmetadata', setAudioData);
    }, [track.audioSrc]);


    // Time updates and progress bar
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const updateProgress = () => {
            setCurrentTime(audio.currentTime);
            const progressPercent = (audio.currentTime / duration) * 100;
            if (progressFillRef.current) {
                progressFillRef.current.style.width = `${clamp(progressPercent, 0, 100)}%`;
            }
            if (timeLabelRef.current) {
                timeLabelRef.current.textContent = formatTime(audio.currentTime);
            }
        };
        
        const handleEnded = () => setIsPlaying(false);

        audio.addEventListener('timeupdate', updateProgress);
        audio.addEventListener('ended', handleEnded);
        
        return () => {
            audio.removeEventListener('timeupdate', updateProgress);
            audio.removeEventListener('ended', handleEnded);
        };
    }, [duration]);

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
        if (!audio || !bar) return;

        const rect = bar.getBoundingClientRect();
        const percent = clamp((e.clientX - rect.left) / rect.width, 0, 1);
        audio.currentTime = percent * duration;
        setCurrentTime(audio.currentTime);
    };
    
    const skip = (seconds: number) => {
        const audio = audioRef.current;
        if (!audio) return;
        audio.currentTime = clamp(audio.currentTime + seconds, 0, duration);
    };

    const PlayIcon = () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 4l15 8-15 8V4z" />
        </svg>
    );

    const PauseIcon = () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
        </svg>
    );
    
    const PrevNextIcon = () => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
           <path d="M6 4l15 8-15 8V4z"/>
        </svg>
    );

    return (
        <div className="music-card card-1">
            <audio ref={audioRef} src={track.audioSrc} preload="metadata"></audio>
            <div className="card-main-content">
                <div className="album-section">
                    <Image src={track.albumArt} alt="Album Cover" width={60} height={60} className="album-cover-rect" />
                </div>
                <div className="content-section">
                    <div className="text-and-search">
                        <div className="track-info-rect">
                            <h3 className="track-title-rect">{track.title}</h3>
                            <p className="artist-name-rect">{track.artist}</p>
                        </div>
                    </div>
                    <div className="controls-and-time">
                        <div className="player-controls">
                            <button className="control-btn prev-btn" onClick={() => skip(-15)}>
                                <PrevNextIcon />
                            </button>
                            <button className="control-btn play-btn-main" onClick={handlePlayPause}>
                                {isPlaying ? <PauseIcon /> : <PlayIcon />}
                            </button>
                            <button className="control-btn next-btn" onClick={() => skip(15)}>
                                <PrevNextIcon />
                            </button>
                        </div>
                        <div className="time-info">
                            <span ref={timeLabelRef} className="current-time">{formatTime(currentTime)}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="progress-container">
                <div ref={progressBarRef} className="progress-bar-rect" onClick={handleSeek}>
                    <div ref={progressFillRef} className="progress-fill" style={{ width: `${(currentTime / duration) * 100}%` }}></div>
                </div>
            </div>
        </div>
    );
};
