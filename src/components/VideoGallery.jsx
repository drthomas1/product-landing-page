import React, { useState, useEffect } from 'react';
import { BsYoutube } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import { BiLoaderAlt } from "react-icons/bi";

import Video from './Video';
import videoData from './videoData';

import "./videoGallery.scss";

export default function VideoGallery( {menuOpen, setMenuOpen} ) {

  let videoButton = document.getElementById('video-button');

  const [backImgAndVideoSrc, setBackImgAndVideoSrc] = useState(
    {
      backImage: 'assets/excalibur-background1.jpg',
      videoSrc: 'https://www.youtube.com/embed/6QR6_17mn5s?rel=0',
    }
  );
  
  const [modal, setModal] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);

  const openModal = () => {
    setModal(!modal);
  };

  const spinner = () => {
    setVideoLoading(!videoLoading);
  };

  //to stop mouse scroll when video modal is on
  useEffect(() => {
    if(modal){
      document.body.style.overflow = "hidden";
      videoButton.style.zIndex = '100';
    }
    if(!modal){
      document.body.style.overflow = 'unset';
      if(videoButton){
        videoButton.style.zIndex = '10';
      }
    }
    }, [modal]); //Here is an example of a useEffect Hook that is dependent on a variable. If the modal variable updates, the effect will run again

  const videos = videoData.map(video => {
    return (
     <Video 
      key={video.id}
      setBackImgAndVideoSrc={setBackImgAndVideoSrc}
      {...video}
     /> 
    )
  })

  return (
    <div className="video-gallery" id='video' onClick={ (menuOpen)=>setMenuOpen(!menuOpen) }>
      <div className="left">
        <h1>VIDEOS</h1>
        <br />
        <div className="playlist">
          {videos}
        </div>
      </div>
      <div className='right' style={{ backgroundImage: `url('${backImgAndVideoSrc.backImage}')` }} >
        <div onClick={openModal} className="video-button" id="video-button" >
            <BsYoutube className="icons" />
          {modal ? (
            <section className="modal__bg" >
              <div className="modal__align">
                <div className="modal__content" modal={modal} >
                  <IoCloseOutline
                    className="modal__close"
                    arial-label="Close modal"
                    onClick={(setModal)}
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
                      src={backImgAndVideoSrc.videoSrc}
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
        <div className="gradient"></div>
      </div>
    </div>
  )
}