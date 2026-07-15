import { motion } from "framer-motion";
import "../styles/popup.css";

export default function FinalPopup() {

  const phone = "919341620200"; // Apna number

  const message =
    "Hey 😊❤️ I just watched your birthday surprise. Thank you so much, it was really beautiful. 💖";

  const openWhatsapp = () => {
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="ending">

      <div className="overlay"></div>

      <motion.div
        className="ending-card"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >

        <img
          src="/we2.jpg"
          alt=""
          className="ending-image"
        />

        <div className="ending-content">

          <h3>❤️ A Small Message ❤️</h3>

          <h1>Happy Birthday 🎂</h1>

          <p>{`Some people become memories...

Some become a reason to smile...

And some become both. ❤️

Thank you for every smile,
every memory,
and every beautiful moment.

Stay happy.
Stay blessed.
Keep shining forever. ✨`}</p>

          <button onClick={openWhatsapp}>
            💚 Say Thank You On WhatsApp
          </button>

        </div>

      </motion.div>

    </div>
  );
}