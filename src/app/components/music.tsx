"use client";
import { useEffect, useRef, useState } from "react";

const playlist = [
  "/forever_star_ost.mp3",
  "/august-alsina-ft-nicki-minaj-no-love-remix.mp3",
  "/nicki-minaj_fly-ft-rihanna.mp3",
  "/Tory_Lanez_-_LUV_ScaryBeatz.com.mp3",
  "/seanpaulfeatkellyrowland-howdeepisyourlovedeebrownpromo-2.mp3"
];

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [isMuted, setIsMuted] = useState(true);
  const [currentTrack, setCurrentTrack] = useState(0);
  const hasStarted = useRef(false);

  useEffect(() => {
    const startMusic = async () => {
      if (hasStarted.current) return;

      if (audioRef.current) {
        audioRef.current.src = playlist[currentTrack];
        try {
          await audioRef.current.play();
          audioRef.current.muted = false;
          audioRef.current.volume = 1;
          setIsMuted(false);
          hasStarted.current = true;
        } catch {}
      }

      window.removeEventListener("click", startMusic);
    };

    window.addEventListener("click", startMusic);
    return () => window.removeEventListener("click", startMusic);
  }, [currentTrack]);

  const handleNext = () => {
    const next = (currentTrack + 1) % playlist.length;
    setCurrentTrack(next);

    if (audioRef.current) {
      audioRef.current.src = playlist[next];
      audioRef.current.play();
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !audioRef.current.muted;
    setIsMuted(audioRef.current.muted);
  };

  return (
    <>
      <audio
        id="bg-music" // 🔥 IMPORTANT
        ref={audioRef}
        loop={false}
        onEnded={handleNext}
      />

      <div className="fixed top-4 right-4 z-50">
        <button onClick={toggleMute}>
          {isMuted ? "🔇" : "🔊"}
        </button>
      </div>
    </>
  );
}