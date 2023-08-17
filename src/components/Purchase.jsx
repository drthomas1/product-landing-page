import "./purchase.scss";

export default function Purchase() {
  return (
    <div className="purchase" id="purchase">
      <div className="left">
        <div className="text-container">
            <h1>EXCALIBUR</h1>
            <button>OWN ON DIGITAL</button>
        </div>
        <div className="image-container">
            <img src="assets/excalibur-digital.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="text-container">
          <h1>EXCALIBUR</h1>
          <button>BLU-RAY & DVD</button>
        </div>
        <div className="image-container">
          <img src="assets/excalibur-blu-ray.png" alt="" />
        </div>
      </div>
    </div>
  );
}