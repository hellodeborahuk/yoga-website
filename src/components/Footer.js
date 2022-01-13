import { FaInstagram } from "react-icons/fa";
import {FaFacebookSquare} from "react-icons/fa"

export default function Footer() {
  return (
    <footer>
      <div>
        <p>
          Hi, I’m Debbie! I am a proud mum of two girls and live in Andover,
          Hampshire. I completed my Yoga Alliance Professional accredited RYT
          200hrs teacher training with Jill Jones Yoga. Doing yoga and
          meditation keeps me calm and helps me cope with daily family life.
        </p>
      </div>
      <div className="social">
        <a href="/" className="social-icons">
          <FaInstagram />
        </a>
        <a href="/" className="social-icons">
          <FaFacebookSquare />
        </a>
        <img src="./images/logo-nameless-small.png" alt="logo" className="logo" />
      </div>
      <div>menu</div>
    </footer>
  );
}
