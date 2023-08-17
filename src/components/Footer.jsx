import "./footer.scss";
import { SiWarnerbros } from "react-icons/si";
import { BsTwitter, BsFacebook, BsYoutube, BsInstagram } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="footer" id="footer">
      <SiWarnerbros className='logo' />
      <div className="text-container">
        <h4>HOME</h4>
        <h4>MOVIES</h4>
        <h4>TV SHOWS</h4>
        <h4>ABOUT</h4>
        <h4>CAREERS</h4>
        <h4>CULTURE</h4>
        <h4>CLASSICS</h4>
      </div>
      <h4 className="follow">FOLLOW WARNER BROTHERS</h4>
      <div className="item-container">
        <BsTwitter className='icon' />
        <BsFacebook className='icon' />
        <BsYoutube className='icon' />
        <BsInstagram className='icon' />
      </div>
      <p>Lorem ipsum dolor ipsum dolor lorem ipsum dolor nintendo sega mastersystem geronimo pincnics fidelity dignity forsooth grain silo twenty Privacy Policy</p>
    </div>
  );
}