import "./footer.scss";
import { SiWarnerbros } from "react-icons/si";
import { BsTwitter, BsFacebook, BsYoutube, BsInstagram } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="footer" id="footer">
      <SiWarnerbros className='logo' />
      <br />
      <div className="text-container">
        <h5>HOME</h5>
        <h5>MOVIES</h5>
        <h5>TV SHOWS</h5>
        <h5>ABOUT</h5>
        <h5>CAREERS</h5>
        <h5>CULTURE</h5>
        <h5>CLASSICS</h5>
      </div>
      <br />
      <br />
      <h5>FOLLOW WARNER BROTHERS</h5>
      <br />
      <div className="item-container">
        <BsTwitter className='icon' />
        <BsFacebook className='icon' />
        <BsYoutube className='icon' />
        <BsInstagram className='icon' />
      </div>
      <br />
      <p>Lorem ipsum dolor ipsum dolor lorem ipsum dolor nintendo sega mastersystem geronimo pincnics fidelity dignity forsooth grain silo twenty Privacy Policy</p>
    </div>
  );
}