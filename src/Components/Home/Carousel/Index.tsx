"use client";
import React, { useEffect, useRef, useState } from "react";

import fs from "fs";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Keyboard, Autoplay, Pagination, Navigation } from "swiper";
import Image from "next/image";
const Images = ["Banner1", "Banner2", "Banner3", "Banner4"];
const MobileImages = ["Mobile1", "Mobile2", "Mobile3"];
export default function Carousel() {
  return (
    <>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        modules={[Keyboard, Autoplay, Pagination, Navigation]}
        className="mySwiper h-[400px] w-full !hidden sm:!block"
      >
        {Images.map((img) => {
          return (
            <SwiperSlide className="object-cover">
              <Image
                width={1920}
                height={800}
                className="w-full  object-center h-full object-cover"
                src={"/Images/Banner&Background/" + img + ".jpg"}
                alt={img}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        modules={[Keyboard, Autoplay, Pagination, Navigation]}
        className="mySwiper h-[400px] w-full sm:!hidden"
      >
        {MobileImages.map((img) => {
          return (
            <SwiperSlide className="object-contain ">
              <Image
                width={920}
                height={800}
                className="w-full  object-center h-full object-contain"
                src={"/Images/Mobile/" + img + ".jpg"}
                alt={img}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
