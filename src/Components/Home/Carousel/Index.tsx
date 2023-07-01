"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Keyboard,Autoplay, Pagination, Navigation } from 'swiper';
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
        modules={[Keyboard,Autoplay, Pagination, Navigation]}
        className="mySwiper h-[300px] w-full"
      >
        <SwiperSlide><img className='w-full' src="https://swiperjs.com/demos/images/nature-1.jpg" /></SwiperSlide>
        <SwiperSlide><img className='w-full' src="https://swiperjs.com/demos/images/nature-2.jpg" /></SwiperSlide>
        <SwiperSlide><img className='w-full' src="https://swiperjs.com/demos/images/nature-3.jpg" /></SwiperSlide>
        <SwiperSlide><img className='w-full' src="https://swiperjs.com/demos/images/nature-4.jpg" /></SwiperSlide>
        <SwiperSlide><img className='w-full' src="https://swiperjs.com/demos/images/nature-5.jpg" /></SwiperSlide>
        <SwiperSlide><img className='w-full' src="https://swiperjs.com/demos/images/nature-6.jpg" /></SwiperSlide>
        <SwiperSlide><img className='w-full' src="https://swiperjs.com/demos/images/nature-7.jpg" /></SwiperSlide>
        <SwiperSlide><img className='w-full' src="https://swiperjs.com/demos/images/nature-8.jpg" /></SwiperSlide>
        
        
      </Swiper>
    </>
  );
}
