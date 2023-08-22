import React from 'react';
import { useState } from 'react';
import {thumbs} from "./videoData";
import VideoThumb from './VideoThumb';

import "./test.scss";

export default function Test() {

const [backImage2, setBackImage2] = useState('assets/excalibur9.jpg');

const thumbNails = thumbs.map(thumb => {
    return (
        <VideoThumb 
            key={thumb.id}
            thumb={thumb}
        />
    )
})

  return (
    
    <div className='test' style={{ backgroundImage: `url('${backImage2}')` }}>
        <div className='playlist'>
            {thumbNails}
        </div>
    </div>
  )
}
