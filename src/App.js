import './App.css';
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Info from "./components/Info"
import MailingList from "./components/MailingList"
import Blog from "./components/Blog"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Info />
      <MailingList />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
