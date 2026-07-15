import { useEffect } from "react";
import Confetti from "react-confetti";
import "../styles/celebration.css";

export default function Celebration({ onFinish }) {

  useEffect(() => {

    const timer = setTimeout(() => {
      onFinish();
    },7000);

    return ()=>clearTimeout(timer);

  },[]);

  return(

<div className="celebration">

<Confetti recycle={true}/>

<h1>
  🎉 Happy Birthday
  <br />
  Sonam 🎉
</h1>

<h2>May your life always be filled with happiness ❤️</h2>

<div className="emoji">

🎂 🎈 🎁 🌹 ❤️ ✨

</div>

</div>

  )

}