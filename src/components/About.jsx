import "./about.scss";
import { SiWarnerbros } from "react-icons/si";

export default function About() {
  return (
    <div className="about" id="about">
      <div className="left">
        <div className="left-inner">
          <h1>ABOUT</h1>
          <p>Raised by Merlin, young Arthur draws the mystical sword of Excalibur from the stone and becomes King. He grows to manhood and with his wife Guenevere and first knight Lancelot unites the country and founds the Knights of the Round Table. But the love between Lancelot and Guenevere, and the treachery of his sister Morgana and son Mordred cause King Arthur's pride to jeopardize the kingdom. An epic battle between the knights of good and evil decides the fate of Camelot.</p>
          <SiWarnerbros className='logo'/>
          <h4>Cast:</h4>
          <ul>
            <li>Nigel Terry</li>
            <li>Helen Mirren</li>
            <li>Nicol Williamson</li>
            <li>Nicholas Clay</li>
            <li>Cherie Lunghi</li>
            <li>Paul Geoffrey</li>
            <li>Robert Addie</li>
            <li>Gabriel Byrne</li>
            <li>Liam Neeson</li>
            <li>Patrick Stewart</li>
          </ul>
          <br />
          <h4>Crew:</h4>
          <ul>
            <li>John Boorman (Director)</li>
            <li>Rospo Pallenberg (Writer)</li>
            <li>Michael Dryhurst (Associate Producer)</li>
            <li>Robert A. Eisenstein (Executive Producer)</li>
            <li>Edgar F. Gross (Executive Producer)</li>
            <li>Trevor Jones (Music)</li>
            <li>Alex Thomson (Cinematography)</li>
          </ul>
          <img src="assets/orion-logo.png" className='logo' alt="orion pictures logo" />
          <p className="p-under-orion-logo">On Blu-Ray, DVD & Digital</p>
          <p>1981</p>
          <p>141 Minutes</p>
          <img src="assets/age-rating-image.jpg" alt="age rating (15)" />
        </div>
      </div>
      <div className="right">
        <img src="assets/excalibur-poster6.jpg" alt="excalibur poster" />
      </div>
    </div>
  );
}