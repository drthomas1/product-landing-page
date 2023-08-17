import "./related.scss";

export default function Related() {
  const backImage = 'assets/excalibur-behind-the-movie.jpg'
  const backImage2 = 'assets/john-boorman-photo.jpg';
  return (
    <div className="related" id="related">
      <div className="left" style={{ backgroundImage: `url('${backImage}')` }}>
        <div className="text-container">
            <h2>RELATED</h2>
            <h1>EXCALIBUR: BEHIND THE MOVIE</h1>
            <h3>NOW STREAMING</h3>
            <button>VIEW DETAILS</button>
        </div>
      </div>
      <div className="right" style={{ backgroundImage: `url('${backImage2}')` }} >
        <div className="text-container">
          <h2>DIRECTOR</h2>
          <h1>MORE BY JOHN BOORMAN</h1>
          <button>VIEW DETAILS</button>
        </div>
      </div>
      <div className="gradient"></div>
    </div>
  );
}

// assets/john-boorman-photo.jpg