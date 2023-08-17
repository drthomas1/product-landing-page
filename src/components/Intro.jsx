import './intro.scss';

export default function Intro() {

  return (
    <div className='intro'>
      <div className="overlay"></div>
      <video autoPlay loop muted className='bg-video'>
        <source src="assets/excaliburclip2.mp4" type='video/mp4'/>
      </video>
      <div className='content'>
        <img src="/assets/warnerbroswhite.png" id="icon1" alt="warnerbros" />
        <img src="assets/excalibur logo2.webp" alt="excalibur" />
        <a href="https://youtu.be/6QR6_17mn5s" target="_blank" rel="noreferrer">
          <button>WATCH TRAILER</button>
        </a>
      </div>
    </div>
  )
}