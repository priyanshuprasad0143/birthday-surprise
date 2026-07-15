import { useEffect } from "react";
import "../styles/loading.css";

export default function Loading({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="loading-container">
      <div className="loading-heart">❤️</div>

      <h1 className="loading-title">
        Preparing Your Surprise...
      </h1>

      <p className="loading-text">
        Please wait a few seconds ✨
      </p>

      <div className="loading-bar">
        <div className="loading-progress"></div>
      </div>
    </div>
  );
}