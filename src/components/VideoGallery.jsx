import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BsYoutube } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import { BiLoaderAlt } from "react-icons/bi";

import "./videoGallery.scss";

export default function VideoGallery() {
  const [backImage, setBackImage] = useState('assets/excalibur-background3.jpg');
  const [videoSrc, setVideoSrc] = useState('https://www.youtube.com/embed/4UZrsTqkcW4');
  const [modal, setModal] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);

  const openModal = () => {
    setModal(!modal);
  };

  const spinner = () => {
    setVideoLoading(!videoLoading);
  };

  //do .map instead
  const handleClick1 = () => {
    setBackImage('assets/excalibur-background3.jpg');
    setVideoSrc('https://www.youtube.com/embed/6QR6_17mn5s?rel=0');
  };
  const handleClick2 = () => {
    setBackImage('assets/excalibur10.png');
    setVideoSrc('https://www.youtube.com/embed/WCoqdyjVnkk?rel=0?rel=0');
  };
  const handleClick3 = () => {
    setBackImage('assets/excalibur-background1.jpg');
    setVideoSrc('https://www.youtube.com/embed/2C8fB8p6crY?rel=0');
  };
  const handleClick4 = () => {
    setBackImage('assets/excalibur-background2.png');
    setVideoSrc('https://www.youtube.com/embed/H2hbov4Rb6g?rel=0');
  };


  //to stop mouse scroll when video modal is on
  useEffect(() => {
    if(modal){
      document.body.style.overflow = "hidden";
    }
    if(!modal){
    document.body.style.overflow = 'unset';
    }
    }, [modal]); //Here is an example of a useEffect Hook that is dependent on a variable. If the modal variable updates, the effect will run again


  return (
    <div className="video-gallery" style={{ backgroundImage: `url('${backImage}')` }}>
      <div onClick={openModal} className="video-button">
          <BsYoutube className="icons" />
        {modal ? (
          <section className="modal__bg" >
            <div className="modal__align">
              <div className="modal__content" modal={modal} >
                <IoCloseOutline
                  className="modal__close"
                  arial-label="Close modal"
                  onClick={setModal}
                />
                <div className="modal__video-align">
                  {videoLoading ? (
                    <div className="modal__spinner">
                      <BiLoaderAlt
                        className="modal__spinner-style"
                        fadein="none"
                      />
                    </div>
                  ) : null}
                  <iframe 
                    className="modal__video-style"
                    onLoad={spinner}
                    loading="lazy"
                    width="100%"
                    height="100%"
                    src={videoSrc}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
        ) : null}
      </div>


      {/* <div className="button">
        <BsYoutube className="icons" />
      </div> */}
      <div className="left">
        <h1>VIDEOS</h1>
        <div className="playlist">
          <div className="thumb-and-title" onClick={handleClick1}>
            <img src="assets/excalibur9.jpg" alt="excalibur9" />
            <h5>Official Trailer</h5>
          </div>
          <div className="thumb-and-title" onClick={handleClick2}>
            <img src="assets/excalibur10.png" alt="excalibur10" />
            <h5>Official Trailer 2</h5>
          </div>
          <div className="thumb-and-title" onClick={handleClick3}>
            <img src="assets/excalibur-background1.jpg" alt="excalibur arthur closeup" />
            <h5>Trailer 3</h5>
          </div>
          <div className="thumb-and-title" onClick={handleClick4}>
            <img src="assets/excalibur-background2.png" alt="excalibur merlin" />
            <h5>Trailer 4</h5>
          </div>
        </div>
      </div>
      {/* <div className="right">
      </div> */}
      <div className="gradient"></div>
    </div>
  )
}