import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './gallery.scss';

// import required modules
import { FreeMode, Navigation, Thumbs, Pagination } from 'swiper/modules';

export default function Gallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className='gallery' id='gallery'>
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
        <SwiperSlide>
          <img src="assets/excalibur1.jpg" alt="excalibur1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets/excalibur2.jpg" alt="excalibur2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets/excalibur3.jpg" alt="excalibur3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets/excalibur4.jpg" alt="excalibur4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets/excalibur5.jpg" alt="excalibur5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets/excalibur6.jpg" alt="excalibur6" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets/excalibur7.jpg" alt="excalibur7" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets/excalibur8.jpg" alt="excalibur8" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets/excalibur9.jpg" alt="excalibur9" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets/excalibur10.png" alt="excalibur10" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets/excalibur12.jpg" alt="excalibur12" />
        </SwiperSlide>
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
        <SwiperSlide>
          <img src="assets/excalibur1.jpg" alt="excalibur1 thumbnail" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets/excalibur2.jpg" alt="excalibur2 thumbnail" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets/excalibur3.jpg" alt="excalibur3 thumbnail" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets/excalibur4.jpg" alt="excalibur4 thumbnail" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets/excalibur5.jpg" alt="excalibur5 thumbnail" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets/excalibur6.jpg" alt="excalibur6 thumbnail" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets/excalibur7.jpg" alt="excalibur7 thumbnail" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets/excalibur8.jpg" alt="excalibur8 thumbnail" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets/excalibur9.jpg" alt="excalibur9 thumbnail" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets/excalibur10.png" alt="excalibur10 thumbnail" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets/excalibur12.jpg" alt="excalibur12 thumbnail" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
