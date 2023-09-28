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
        <Intro menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Purchase menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <About menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <VideoGallery menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Gallery menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Related menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <SignUp menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Footer menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
    </div>
  );
}

export default App;
