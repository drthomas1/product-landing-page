import './topbar.scss';
import { SiWarnerbros } from "react-icons/si";
import { BsTwitter, BsFacebook, BsYoutube, BsInstagram } from "react-icons/bs";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={'topbar ' + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className='logo'><SiWarnerbros/></a>
          <div className="itemContainer">
            <BsTwitter className='icon' />
            <BsFacebook className='icon' />
            <BsYoutube className='icon' />
            <BsInstagram className='icon' />
          </div>
          <div className="itemContainer">
            <a href="intro" className='movies-tv'>MOVIES</a>
            <a href="intro" className='movies-tv'>TV</a>
            <a href="intro" className='movies-tv'>EXPLORE</a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={ ()=>setMenuOpen(!menuOpen) }>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>
  )
}