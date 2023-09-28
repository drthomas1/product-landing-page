import "./about.scss";
import { SiWarnerbros } from "react-icons/si";

export default function About( {menuOpen, setMenuOpen} ) {
  return (
    <div className="about" id="about" onClick={ (menuOpen)=>setMenuOpen(!menuOpen) }>
      <div className="left">
        <div className="left-inner">
          <h1>ABOUT</h1>
          <br />
          <p>Merlin the magician helps Arthur Pendragon unite the Britons around the Round Table of Camelot, even as dark forces conspire to tear it apart.</p>
          <br />
          <h4>Cast:</h4>
          <ul>
            <li>Nigel Terry (Arthur)</li>
            <li>Helen Mirren (Morgana Le Fay)</li>
            <li>Nicol Williamson (Merlin)</li>
            <li>Nicholas Clay (Lancelot)</li>
            <li>Cherie Lunghi (Guinevere)</li>
            <li>Paul Geoffrey (Perceval)</li>
            <li>Robert Addie (Mordred)</li>
            <li>Gabriel Byrne (Uther)</li>
            <li>Liam Neeson (Gawain)</li>
            <li>Patrick Stewart (Leodegrance)</li>
          </ul>
          <br />
          <h4>Director:</h4>
          <ul>
            <li>John Boorman</li>
          </ul>
          <br />
          <div className="logo-container">
            <SiWarnerbros className='logo'/>
            <img src="assets/orion-logo.png" className='logo' alt="orion pictures logo" />
          </div>
          <br />
          <div className="minor-info-container">
            <p className="p-under-orion-logo">On Blu-Ray, DVD & Digital</p>
            <br />
            <p>1981</p>
            <p>141 Minutes</p>
            <br />
            <img src="assets/age-rating-image.jpg" alt="age rating (15)" />
          </div>
        </div>
      </div>
      <div className="right">
        <img src="assets/excalibur-poster6.jpg" alt="excalibur poster" />
      </div>
    </div>
  );
}