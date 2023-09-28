import React, { useState } from 'react';

import galleryData from './galleryData';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './gallery.scss';

import { FreeMode, Navigation, Thumbs, Pagination } from 'swiper/modules';

export default function Gallery( {menuOpen, setMenuOpen} ) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const images = galleryData.map(image => {
    return (
      <SwiperSlide key={image.id} >
          <img src={`assets/${image.img}`} alt={image.alt} key={image.id} />
      </SwiperSlide>
    )
  })

  return (
    <div className='gallery' id='gallery' onClick={ (menuOpen)=>setMenuOpen(!menuOpen) }>
      <h1>GALLERY</h1>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        speed={900}
        navigation={true}
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={0}
        // pagination={true}
        thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}} //fixed the issue https://stackoverflow.com/questions/73046820/swiper-react-cannot-convert-undefined-or-null-to-object
        modules={[FreeMode, Navigation, Thumbs, Pagination]}
        className="mySwiper2"
      >
        {images}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {images}
      </Swiper>
    </div>
  );
}
