import { useEffect, useState } from "react";
import "../styles/gallery.css";

const photos = Array.from(
  { length: 17 },
  (_, i) => `/pic${i + 1}.jpg`
);

const quotes = [
  "Your smile lights up every moment ❤️",
  "Keep shining forever ✨",
  "Stay happy always 🌸",
  "Wishing you endless happiness 🎂",
  "May all your dreams come true 💫",
  "You deserve the best ❤️",
  "Smile a little more 😊",
  "Today belongs to you 🎉",
  "Enjoy every moment 🌹",
  "Stay blessed 💖",
  "Keep chasing dreams ✨",
  "Never stop smiling 😊",
  "Beautiful inside and out ❤️",
  "A special day for a special person 🎂",
  "Always be yourself 🌼",
  "Keep glowing ✨",
  "Happy Birthday ❤️"
];

export default function Gallery({ onFinish }) {

  const [index, setIndex] = useState(0);

  useEffect(() => {

    if (index >= photos.length) {

      const end = setTimeout(() => {
        onFinish();
      }, 4000);

      return () => clearTimeout(end);

    }

    const timer = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, 3000);

    return () => clearTimeout(timer);

  }, [index, onFinish]);

  const nextPhoto = () => {

    if (index >= photos.length) {
      onFinish();
      return;
    }

    setIndex((prev) => prev + 1);

  };

  if (index >= photos.length) {

    return (

      <div className="gallery-page" onClick={nextPhoto}>

        <img
          src="/we1.jpg"
          className="gallery-image"
          alt=""
        />

        <h2 className="gallery-text">
          ❤️ We ❤️
        </h2>

        <p className="tap-text">
          👆 Tap anywhere to continue
        </p>

      </div>

    );

  }

  return (

    <div className="gallery-page" onClick={nextPhoto}>

      <img
        src={photos[index]}
        className="gallery-image"
        alt=""
      />

      <p className="gallery-text">
        {quotes[index]}
      </p>

      <p className="tap-text">
        👆 Tap anywhere or wait...
      </p>

    </div>

  );

}