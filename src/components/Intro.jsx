import './intro.scss';
import '../animations.scss';

export default function Intro( {menuOpen, setMenuOpen} ) {

  return (
    <div className='intro' id="intro" onClick={ (menuOpen)=>setMenuOpen(!menuOpen) }>
      <div className="overlay"></div>
      <video autoPlay loop muted className='bg-video'>
        <source src="assets/excaliburclip2.mp4" type='video/mp4'/>
      </video>
      <div className='content'>
        <img src="/assets/warnerbroswhite.png" id="icon1" alt="warnerbros" />
        <img src="assets/excalibur logo2.webp" id="icon2" alt="excalibur" />
        <a href="https://youtu.be/6QR6_17mn5s" target="_blank" rel="noreferrer">
          <button className='button-anim'><span>WATCH TRAILER</span></button>
        </a>
      </div>
    </div>
  )
}