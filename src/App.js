import './App.css';
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Info from "./components/Info"
import MailingList from "./components/MailingList"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Info />
      <MailingList />
      <Footer />
    </div>
  );
}

export default App;
