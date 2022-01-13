import './App.css';
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Info from "./components/Info"
import ClassInfo from "./components/ClassInfo"
import MailingList from "./components/MailingList"
import LatestBlog from "./components/LatestBlog"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Info />
      <ClassInfo />
      <MailingList />
      <LatestBlog />
      <Footer />
    </div>
  );
}

export default App;
