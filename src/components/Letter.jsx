import { useEffect, useState } from "react";
import "../styles/letter.css";

const message = `Happy Birthday Sonam ❤️

I hope today brings you countless smiles,
beautiful memories and endless happiness.

May every dream you have come true.

Keep smiling,
keep shining,
and never stop being the wonderful person you are.

Thank you for being you.

Have an amazing birthday! 🎂✨`;

export default function Letter({ onFinish }) {
  const [text, setText] = useState("");

  useEffect(() => {
    let i = 0;

    const timer = setInterval(() => {
      setText(message.slice(0, i));
      i++;

      if (i > message.length) {
        clearInterval(timer);

        setTimeout(() => {
          onFinish();
        }, 4000);
      }
    }, 40);

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <div className="letter-page">
      <div className="letter-card">
        <pre className="letter-text">{text}</pre>
      </div>
    </div>
  );
}