"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, EffectCoverflow, Keyboard, Pagination } from 'swiper';

export default function Aboutus() {
  return (
    <div className='mt-[104px] md:mt-16 py-24'>
        <div className='text-5xl text-slate-200 font-semibold text-center mb-16'>Gallery</div>
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
            delay:2500,
            pauseOnMouseEnter:true,
            disableOnInteraction:true
        }}
        pagination={true}
        loop={true}
        speed={600}
        parallax={{
            enabled:true
        }}
        keyboard={{
            onlyInViewport:true
        }}
        modules={[Keyboard,Autoplay,EffectCoverflow, Pagination]}
        className="mySwiper w-full py-12"
      >
        <SwiperSlide className=' object-cover object-center !w-80 !h-80 overflow-hidden'>
          <img className='absolute  inset-0 w-[130%] max-w-none' src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide className=' object-cover object-center !w-80 !h-80 overflow-hidden'>
          <img className='absolute  inset-0 w-[130%] max-w-none' src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide className=' object-cover object-center !w-80 !h-80 overflow-hidden'>
          <img className='absolute  inset-0 w-[130%] max-w-none' src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide className=' object-cover object-center !w-80 !h-80 overflow-hidden'>
          <img className='absolute  inset-0 w-[130%] max-w-none' src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide className=' object-cover object-center !w-80 !h-80 overflow-hidden'>
          <img className='absolute  inset-0 w-[130%] max-w-none' src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide className=' object-cover object-center !w-80 !h-80 overflow-hidden'>
          <img className='absolute  inset-0 w-[130%] max-w-none' src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide className=' object-cover object-center !w-80 !h-80 overflow-hidden'>
          <img className='absolute  inset-0 w-[130%] max-w-none' src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide className=' object-cover object-center !w-80 !h-80 overflow-hidden'>
          <img className='absolute  inset-0 w-[130%] max-w-none' src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide className=' object-cover object-center !w-80 !h-80 overflow-hidden'>
          <img className='absolute  inset-0 w-[130%] max-w-none' src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide className=' object-cover object-center !w-80 !h-80 overflow-hidden'>
          <img className='absolute  inset-0 w-[130%] max-w-none' src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide className=' object-cover object-center !w-80 !h-80 overflow-hidden'>
          <img className='absolute  inset-0 w-[130%] max-w-none' src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide className=' object-cover object-center !w-80 !h-80 overflow-hidden'>
          <img className='absolute  inset-0 w-[130%] max-w-none' src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide className=' object-cover object-center !w-80 !h-80 overflow-hidden'>
          <img className='absolute  inset-0 w-[130%] max-w-none' src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide className=' object-cover object-center !w-80 !h-80 overflow-hidden'>
          <img className='absolute  inset-0 w-[130%] max-w-none' src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide className=' object-cover object-center !w-80 !h-80 overflow-hidden'>
          <img className='absolute  inset-0 w-[130%] max-w-none' src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide className=' object-cover object-center !w-80 !h-80 overflow-hidden'>
          <img className='absolute  inset-0 w-[130%] max-w-none' src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
