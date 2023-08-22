import React from 'react'
import "./videoThumb.scss";
import {thumbs} from "./videoData";

export default function VideoThumb(props) {

  return (
    <div className='thumb'>

        <div className="thumb-and-title">
            <img 
                src={props.thumb.backGr}
                alt={props.thumb.alt} 
            />
            <h5>{props.thumb.title}</h5>
        </div>
    </div>

  )
}
