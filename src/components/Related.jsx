import "./related.scss";
import '../animations.scss';

export default function Related( {menuOpen, setMenuOpen} ) {
  const backImage = 'assets/excalibur-poster8.jpg'
  const backImage2 = 'assets/john-boorman-photo2.jpg';
  return (
    <div className="related" id="related" onClick={ (menuOpen)=>setMenuOpen(!menuOpen) }>
      <div className="left" style={{ backgroundImage: `url('${backImage}')` }}>
        <div className="text-container">
            <h2>RELATED</h2>
            <h1>EXCALIBUR: BEHIND THE MOVIE</h1>
            <h3>NOW STREAMING</h3>
            <button className="button-anim"><span>VIEW DETAILS</span></button>
        </div>
      </div>
      <div className="right" style={{ backgroundImage: `url('${backImage2}')` }} >
        <div className="text-container">
          <h2>DIRECTOR</h2>
          <h1>MORE BY JOHN BOORMAN</h1>
          <button className="button-anim"><span>VIEW DETAILS</span></button>
        </div>
      </div>
      <div className="gradient"></div>
    </div>
  );
}