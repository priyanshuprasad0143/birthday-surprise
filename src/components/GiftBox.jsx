import { motion } from "framer-motion";
import "../styles/gift.css";

export default function GiftBox({ onOpen }) {
  return (
    <div className="gift-page">
      <motion.div
        className="gift-box"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
        onClick={onOpen}
      >
        🎁
      </motion.div>

      <h1>Your Birthday Gift</h1>

      <p>Click the gift to open your surprise ❤️</p>
    </div>
  );
}