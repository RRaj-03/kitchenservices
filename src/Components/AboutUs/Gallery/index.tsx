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

export default function Gallery() {
  return (
    <div className='  pt-16 pb-4 ' id='Gallery'>
        {/* <div className='text-5xl text-black font-semibold text-center mb-16'>Gallery</div> */}
        {/* <Swiper
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
        className="mySwiper w-full py-12 h-full"
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
      </Swiper> */}
      <div className="flex flex-wrap ">
                <div className="w-full px-4 mb-4 lg:w-2/5 ">
                    <div className="relative overflow-hidden shadow-lg group">
                        <img src="https://i.postimg.cc/hPvHtWNV/pexels-antoni-shkraba-4348404.jpg"
                            className="group-hover:origin-center group-hover:scale-105 transition inset-0 object-cover object-center  duration-500 w-full h-[350px]"
                            alt=""/>
                        <div className="absolute inset-0 z-0 group-hover:bg-black opacity-60"></div>
                        <div className="absolute hidden p-4 text-center content left-4 bottom-4 right-4 group-hover:block">
                            <a href="#" className="mb-2 text-2xl font-semibold text-gray-100 dark:text-white ">
                                Lorem ipsum</a>
                            <h2 className="mb-0 text-sm font-light text-gray-300 dark:text-gray-300 ">
                                Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam</h2>
                        </div>
                    </div>
                </div>
                <div className="w-full px-4 mb-8 lg:w-3/5 ">
                    <div className="relative overflow-hidden shadow-lg group">
                        <img src="https://i.postimg.cc/mgDMnVzL/pexels-caio-56759.jpg"
                            className="group-hover:origin-center group-hover:scale-105 transition inset-0 object-cover object-center  duration-500 w-full h-[350px]"
                            alt=""/>
                        <div className="absolute inset-0 z-0 group-hover:bg-black opacity-60"></div>
                        <div className="absolute hidden p-4 text-center content left-4 bottom-4 right-4 group-hover:block">
                            <a href="#" className="mb-2 text-2xl font-semibold text-gray-100 dark:text-white ">
                                Lorem ipsum</a>
                            <h2 className="mb-0 text-sm font-light text-gray-300 dark:text-gray-300 ">
                                Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam</h2>
                        </div>
                    </div>
                </div>
                <div className="w-full px-4 mb-8 lg:w-3/5 ">
                    <div className="relative overflow-hidden shadow-lg group">
                        <img src="https://i.postimg.cc/Jhf3wJZs/pexels-visual-tag-mx-2566581.jpg"
                            className="group-hover:origin-center group-hover:scale-105 transition inset-0 object-cover object-center  duration-500 w-full h-[350px]"
                            alt=""/>
                        <div className="absolute inset-0 z-0 group-hover:bg-black opacity-60"></div>
                        <div className="absolute hidden p-4 text-center content left-4 bottom-4 right-4 group-hover:block">
                            <a href="#" className="mb-2 text-2xl font-semibold text-gray-100 dark:text-white ">
                                Lorem ipsum</a>
                            <h2 className="mb-0 text-sm font-light text-gray-300 dark:text-gray-300 ">
                                Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam</h2>
                        </div>
                    </div>
                </div>
                <div className="w-full px-4 mb-8 lg:w-2/5 ">
                    <div className="relative overflow-hidden shadow-lg group">
                        <img src="https://i.postimg.cc/mgrb8Ztg/pexels-pixabay-38271.jpg"
                            className="group-hover:origin-center group-hover:scale-105 transition inset-0 object-cover object-center  duration-500 w-full h-[350px]"
                            alt=""/>
                        <div className="absolute inset-0 z-0 group-hover:bg-black opacity-60"></div>
                        <div className="absolute hidden p-4 text-center content left-4 bottom-4 right-4 group-hover:block">
                            <a href="#" className="mb-2 text-2xl font-semibold text-gray-100 dark:text-white ">
                                Lorem ipsum</a>
                            <h2 className="mb-0 text-sm font-light text-gray-300 dark:text-gray-300 ">
                                Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam</h2>
                        </div>
                    </div>
                </div>
                <div className="w-full px-4 mb-8 lg:w-2/5 ">
                    <div className="relative overflow-hidden shadow-lg group">
                        <img src="https://i.postimg.cc/GtBxvn8V/pexels-thisisengineering-3861958.jpg"
                            className="group-hover:origin-center group-hover:scale-105 transition inset-0 object-cover object-center  duration-500 w-full h-[350px]"
                            alt=""/>
                        <div className="absolute inset-0 z-0 group-hover:bg-black opacity-60"></div>
                        <div className="absolute hidden p-4 text-center content left-4 bottom-4 right-4 group-hover:block">
                            <a href="#" className="mb-2 text-2xl font-semibold text-gray-100 dark:text-white ">
                                Lorem ipsum</a>
                            <h2 className="mb-0 text-sm font-light text-gray-300 dark:text-gray-300 ">
                                Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam</h2>
                        </div>
                    </div>
                </div>
                <div className="w-full px-4 mb-8 lg:w-3/5 ">
                    <div className="relative overflow-hidden shadow-lg group">
                        <img src="https://i.postimg.cc/JnPkrd2d/pexels-marc-mueller-380769.jpg"
                            className="group-hover:origin-center group-hover:scale-105 transition inset-0 object-cover object-center  duration-500 w-full h-[350px]"
                            alt=""/>
                        <div className="absolute inset-0 z-0 group-hover:bg-black opacity-60"></div>
                        <div className="absolute hidden p-4 text-center content left-4 bottom-4 right-4 group-hover:block">
                            <a href="#" className="mb-2 text-2xl font-semibold text-gray-100 dark:text-white ">
                                Lorem ipsum</a>
                            <h2 className="mb-0 text-sm font-light text-gray-300 dark:text-gray-300 ">
                                Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam</h2>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  );
}
