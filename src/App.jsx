import Topbar from "./components/Topbar";
import Menu from "./components/Menu";
import Intro from './components/Intro';
import Purchase from "./components/Purchase";
import About from './components/About';
import Gallery from './components/Gallery';
import Related from "./components/Related";
import VideoGallery from "./components/VideoGallery";
import SignUp from './components/SignUp';
import Footer from "./components/Footer";
import './App.scss';
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div>
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Purchase/>
        <About />
        <VideoGallery />
        <Gallery />
        <Related />
        <SignUp />
        <Footer />
      </div>
    </div>
  );
}

export default App;
