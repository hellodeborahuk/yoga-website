import './App.css';
import { Link } from "react-router-dom";
import Home from "./components/Home"
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";


function App() {
  return (
    <div className="App">
      <nav>
        <div className="left-nav">
          <Link to="/">Home</Link>
          <Link to="/bloglist">Blog</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <h1>Debbie Dann Yoga</h1>
        <div className="right-nav">
          <button>Book your class</button>
        </div>
      </nav>
      <Home />
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
          <a href="/" className="social-icons instagram">
            <FaInstagram />
          </a>
          <a href="/" className="social-icons facebook">
            <FaFacebookSquare />
          </a>
          <img
            src="./images/logo-nameless-small.png"
            alt="logo"
            className="logo"
          />
        </div>
        <div className="footer-nav">
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Terms and Conditions</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
