import { useEffect, useState } from "react";
import "../styles/floatingHearts.css";

export default function FloatingHearts() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Date.now();

      setHearts((prev) => [
        ...prev,
        {
          id,
          left: Math.random() * 100,
          size: 20 + Math.random() * 30,
          duration: 6 + Math.random() * 4,
        },
      ]);

      setTimeout(() => {
        setHearts((prev) =>
          prev.filter((heart) => heart.id !== id)
        );
      }, 10000);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="floating-heart"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            animationDuration: `${heart.duration}s`,
          }}
        >
          ❤️
        </span>
      ))}
    </>
  );
}