"use client"
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

const brands=['Prestige','Elica','Hindware','Pigeon','Philips','Surya','Sunflame','Bosch','Bajaj','Whirlpool','Godrej','LG'
]
import Image from "next/image"
export default function Brand() {
    return (
      <div className="bg-transparent py-16 ">
        <div className="mx-auto  px-6 lg:px-0">
          <h2 className="text-center text-lg font-semibold leading-8 text-slate-200">
            Trusted by the world’s most innovative teams
          </h2>
         
          <Swiper
          // slidesPerView={'auto'}
        // centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 3,
            slidesPerGroup:1,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5,
            slidesPerGroup:1,
            spaceBetween: 0,
          }
        }}
      //  spaceBetween={30}
        loop={true}
        modules={[Autoplay, Pagination,Navigation]}
        className="mySwiper h-[200px] sm:w-[620px] lg:w-[1000px]"
      >
        {brands.map((brand)=>{
              return <SwiperSlide style={{width:'200px'}} className='m-0 w-auto !flex items-center justify-center'>
                <div className='glassMorphism'>
                <Image
              className=" mr-0 w-[160px]   inline-block object-contain lg:col-span-1"
              src={'/Images/Brands/'+brand+'.png'}
              alt={brand}
              width={200}
              height={200}
            />
                </div>
              </SwiperSlide>
            })}
        
      </Swiper>
            
          
        </div>
      </div>
    )
  }
  