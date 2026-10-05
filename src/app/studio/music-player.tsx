"use client";

import {
  createContext,
  useContext,
  useRef,
  useState,
} from "react";
import type { ReactNode } from "react";

type MusicContextValue = {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  error: string;
  togglePlayback: () => Promise<void>;
  seek: (time: number) => void;
};

const MusicContext = createContext<MusicContextValue | null>(null);

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds)) return "0:00";
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${minutes}:${remainingSeconds}`;
}

export function StudioMusicProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [error, setError] = useState("");

  async function togglePlayback() {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      setError("");
      try {
        await audio.play();
      } catch {
        setError("Add your song at public/audio/letter-song.mp3 to enable playback.");
      }
    } else {
      audio.pause();
    }
  }

  function seek(time: number) {
    const audio = audioRef.current;
    if (!audio || !Number.isFinite(time)) return;
    audio.currentTime = Math.min(Math.max(time, 0), duration);
    setCurrentTime(audio.currentTime);
  }

  return (
    <MusicContext.Provider
      value={{ isPlaying, currentTime, duration, error, togglePlayback, seek }}
    >
      <audio
        ref={audioRef}
        src="/audio/letter-song.mp3"
        preload="none"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
        onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
        onEnded={() => {
          setIsPlaying(false);
          setCurrentTime(0);
        }}
        onError={() =>
          setError("Add your song at public/audio/letter-song.mp3 to enable playback.")
        }
      />
      {children}
      <MusicDock />
    </MusicContext.Provider>
  );
}

function useStudioMusic() {
  const music = useContext(MusicContext);
  if (!music) {
    throw new Error("Music controls must be rendered inside StudioMusicProvider.");
  }
  return music;
}

export function MusicControls({ compact = false }: { compact?: boolean }) {
  const { isPlaying, currentTime, duration, error, togglePlayback, seek } =
    useStudioMusic();

  return (
    <div className={`music-controls${compact ? " music-controls-compact" : ""}`}>
      <button
        className="music-toggle"
        type="button"
        onClick={() => void togglePlayback()}
        aria-label={isPlaying ? "Pause song" : "Play song"}
      >
        {isPlaying ? (
          <svg viewBox="0 0 20 20" aria-hidden="true">
            <path d="M7 4.5v11m6-11v11" />
          </svg>
        ) : (
          <svg viewBox="0 0 20 20" aria-hidden="true">
            <path d="m7 4.5 9 5.5-9 5.5v-11Z" />
          </svg>
        )}
        {!compact && <span>{isPlaying ? "Pause song" : "Play song"}</span>}
      </button>

      {duration > 0 && (
        <div className="music-timeline">
          <span>{formatTime(currentTime)}</span>
          <input
            aria-label="Seek through song"
            type="range"
            min="0"
            max={duration}
            step="1"
            value={currentTime}
            onChange={(event) => seek(Number(event.target.value))}
          />
          <span>{formatTime(duration)}</span>
        </div>
      )}

      {error && (
        <p className="music-error" role="status">
          {error}
        </p>
      )}
    </div>
  );
}

function MusicDock() {
  const { isPlaying, error, togglePlayback } = useStudioMusic();

  return (
    <aside className="music-dock" aria-label="Persistent music player">
      <div className="dock-record" aria-hidden="true">
        <span />
      </div>
      <div className="dock-track">
        <span className="dock-kicker">OUR SONG</span>
        <span className="dock-title">A little soundtrack</span>
      </div>
      <button
        className="dock-toggle"
        type="button"
        onClick={() => void togglePlayback()}
        aria-label={isPlaying ? "Pause song" : "Play song"}
      >
        {isPlaying ? (
          <svg viewBox="0 0 20 20" aria-hidden="true">
            <path d="M7 4.5v11m6-11v11" />
          </svg>
        ) : (
          <svg viewBox="0 0 20 20" aria-hidden="true">
            <path d="m7 4.5 9 5.5-9 5.5v-11Z" />
          </svg>
        )}
      </button>
      {error && <span className="dock-error">Add your song in public/audio</span>}
    </aside>
  );
}
