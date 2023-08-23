import "./about.scss";
import { SiWarnerbros } from "react-icons/si";

export default function About() {
  return (
    <div className="about" id="about">
      <div className="left">
        <div className="left-inner">
          <h1>ABOUT</h1>
          <br />
          <p>Raised by Merlin, young Arthur draws the mystical sword of Excalibur from the stone and becomes King. He grows to manhood and with his wife Guenevere and first knight Lancelot unites the country and founds the Knights of the Round Table. But the love between Lancelot and Guenevere, and the treachery of his sister Morgana and son Mordred cause King Arthur's pride to jeopardize the kingdom. An epic battle between the knights of good and evil decides the fate of Camelot.</p>
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