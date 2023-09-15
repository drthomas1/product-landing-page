import "./purchase.scss";
import './animations.scss';

export default function Purchase() {
  return (
    <div className="purchase" id="purchase">
      <div className="left">
        <div className="left-inner">
          <div className="text-container">
              <h1>EXCALIBUR</h1>
              <button className="button-anim-2"><span>OWN ON DIGITAL</span></button>
          </div>
          <div className="image-container">
              <img src="assets/excalibur-digital.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className="right">
        <div className="right-inner">
          <div className="text-container">
            <h1>EXCALIBUR</h1>
            <button className="button-anim"><span>BLU-RAY & DVD</span></button>
          </div>
          <div className="image-container">
            <img src="assets/excalibur-blu-ray.png" alt="" />
          </div>
        </div>
      </div>
      <div className="gradient"></div>
    </div>
  );
}