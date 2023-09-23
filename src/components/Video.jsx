import React from 'react'

export default function Video(props) {

  return (
    <div className="thumb-and-title" 
      onClick={() => props.setBackImgAndVideoSrc({backImage: `assets/${props.backImg}`, videoSrc: `https://www.youtube.com/embed/${props.vidSrc}`})}
      > 
        <img src={`assets/${props.img}`} alt={props.alt} />
        <h5>{props.title}</h5>
    </div>
  )
}
