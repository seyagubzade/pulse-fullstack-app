import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Img1 from "../../assets/images/slider-1.jpg";
import Img2 from "../../assets/images/slider-2.jpg";
import Img3 from "../../assets/images/slider-3.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.scss";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

export default function Slider() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slider-content">
            <img src={Img1} alt="" />
            <div className="text">
              <h3>Food and more.</h3>
              <span>By Chef Francis Smith</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-content">
            <img src={Img2} alt="" />
            <div className="text">
              <h3>Hygienic Dish.</h3>
              <span>By Chef Francis Smith</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-content">
            <img src={Img3} alt="" />
            <div className="text">
              <h3>Special Dish.</h3>
              <span>By Chef Francis Smith</span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
