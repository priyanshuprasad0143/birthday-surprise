import { motion } from "framer-motion";
import "../styles/intro.css";

export default function Intro({ onStart }) {
  return (
    <div className="intro-container">

      <div className="stars"></div>

      <motion.div
        className="intro-card"
        initial={{ opacity: 0, scale: 0.8, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h3>✨ Just For You ✨</h3>

        <h1>Happy Birthday 🎂</h1>

        <p>
          Someone spent time creating this little surprise
          only to see you smile ❤️
        </p>

        <button onClick={onStart}>
          Tap To Begin 🎁
        </button>
      </motion.div>

    </div>
  );
}