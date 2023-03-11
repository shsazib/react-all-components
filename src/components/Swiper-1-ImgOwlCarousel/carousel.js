import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Img from "./img/image-1.jpg";
import Img2 from "./img/All-bike.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./carousel.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const carousel = () => {
  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="content">
            <h1>Hello </h1>
          </div>
          <img src={Img} alt="Tst img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img2} alt="Tst img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img} alt="Tst img" />
        </SwiperSlide>
      </Swiper>
      <h2>Content</h2>
      <h2>Content</h2>
      <h2>Content</h2>
      <h2>Content</h2>
      <h2>Content</h2>
      <h2>Content</h2>
      <h2>Content</h2>
    </>
  );
};

export default carousel;
