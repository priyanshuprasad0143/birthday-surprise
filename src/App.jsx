import { useState } from "react";

import "./App.css";
import "./styles/loading.css";
import "./styles/intro.css";
import "./styles/gift.css";
import "./styles/gallery.css";
import "./styles/letter.css";
import "./styles/celebration.css";
import "./styles/popup.css";
import "./styles/floatingHearts.css";

import Loading from "./components/Loading";
import Intro from "./components/Intro";
import MusicPlayer from "./components/MusicPlayer";
import GiftBox from "./components/GiftBox";
import Gallery from "./components/Gallery";
import Letter from "./components/Letter";
import Celebration from "./components/Celebration";
import FinalPopup from "./components/FinalPopup";
import FloatingHearts from "./components/FloatingHearts";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [started, setStarted] = useState(false);
  const [giftOpened, setGiftOpened] = useState(false);
  const [galleryFinished, setGalleryFinished] = useState(false);
  const [letterFinished, setLetterFinished] = useState(false);
  const [celebrationFinished, setCelebrationFinished] = useState(false);

  return (
    <>
      <FloatingHearts />

      <MusicPlayer play={started} />

      {loading ? (
        <Loading
          onComplete={() => setLoading(false)}
        />
      ) : !started ? (
        <Intro
          onStart={() => setStarted(true)}
        />
      ) : !giftOpened ? (
        <GiftBox
          onOpen={() => setGiftOpened(true)}
        />
      ) : !galleryFinished ? (
        <Gallery
          onFinish={() => setGalleryFinished(true)}
        />
      ) : !letterFinished ? (
        <Letter
          onFinish={() => setLetterFinished(true)}
        />
      ) : !celebrationFinished ? (
        <Celebration
          onFinish={() => setCelebrationFinished(true)}
        />
      ) : (
        <FinalPopup />
      )}
    </>
  );
}