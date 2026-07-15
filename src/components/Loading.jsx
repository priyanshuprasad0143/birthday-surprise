import { useEffect } from "react";
import "../styles/loading.css";

export default function Loading({ onComplete }) {

  useEffect(() => {

    // Gallery images preload
    for (let i = 1; i <= 17; i++) {
      const img = new Image();
      img.src = `/pic${i}.jpg`;
    }

    // Final images preload
    ["we1.jpg", "we2.jpg"].forEach((file) => {
      const img = new Image();
      img.src = `/${file}`;
    });

    // Music preload
    const audio = new Audio("/birthday-music.mp3");
    audio.preload = "auto";

    const timer = setTimeout(() => {
      onComplete();
    }, 3500);

    return () => clearTimeout(timer);

  }, [onComplete]);

  return (
    <div className="loading-container">

      <div className="loading-heart">
        ❤️
      </div>

      <div className="loading-content">

        <h1 className="loading-title">
          Preparing Your
          <br />
          Surprise...
        </h1>

        <p className="loading-text">
          Please wait a few seconds ✨
        </p>

        <div className="loading-bar">
          <div className="loading-progress"></div>
        </div>

      </div>

    </div>
  );
}