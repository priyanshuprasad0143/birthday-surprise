import { useEffect, useRef } from "react";

export default function MusicPlayer({ play }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) return;

    if (play) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  }, [play]);

  return (
    <audio ref={audioRef} loop>
      <source src="/birthday-music.mp3" type="audio/mpeg" />
    </audio>
  );
}