import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Hero from "./components/Hero";
import Info from "./components/Info";
import ClassInfo from "./components/ClassInfo";
import MailingList from "./components/MailingList";
import LatestBlog from "./components/LatestBlog";
import Gallery from "./components/Gallery";
import {FaFacebookSquare, FaInstagram} from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <div className="left-nav">
            <a href="/">Home</a>
            <a href="/">Blog</a>
            <a href="/">Contact</a>
          </div>
          <h1>Debbie Dann Yoga</h1>
          <div className="right-nav">
            <button>Book your class</button>
          </div>
        </nav>
        <Hero />
        <Info />
        <ClassInfo />
        <MailingList />
        <LatestBlog />
        <Gallery />
        <footer>
          <div>
            <p>
              Hi, I’m Debbie! I am a proud mum of two girls and live in Andover,
              Hampshire. I completed my Yoga Alliance Professional accredited
              RYT 200hrs teacher training with Jill Jones Yoga. Doing yoga and
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
        </footer>{" "}
      </Router>
    </div>
  );
}

export default App;
