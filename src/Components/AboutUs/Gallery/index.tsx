"use client";
import useKitchenStore from "@/Helpers/Store/KitchenStore";
import Image from "next/image";
import React from "react";
// Import Swiper React components

let images = [
  {
    title: "Image0",
    desc: `Lorem ipsum dolor sit amet consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam`,
    src: "https://drive.google.com/file/d/1c10VO_jdrDz3IEysx7mZzV8ktc1hqgl2/view?usp=drive_link",
  },
  {
    title: "Image0",
    desc: `Lorem ipsum dolor sit amet consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam`,
    src: "https://drive.google.com/file/d/1cDS4c9q4HDMNeE8W6rxrfelff2kv3Q4J/view?usp=drive_link",
  },
  {
    title: "Image0",
    desc: `Lorem ipsum dolor sit amet consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam`,
    src: "https://drive.google.com/file/d/1cLUGFTVCiLFseCzkd4wlQCND71JCRwdI/view?usp=drive_link",
  },
  {
    title: "Image0",
    desc: `Lorem ipsum dolor sit amet consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam`,
    src: "https://drive.google.com/file/d/1cAXJVp9eBFlvgNAmBFIXbFTLgCk7wMAk/view?usp=drive_link",
  },
  {
    title: "Image0",
    desc: `Lorem ipsum dolor sit amet consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam`,
    src: "https://drive.google.com/file/d/1bn9zCRWtou5kpgmVZRSzaWYzKFShVDV7/view?usp=drive_link",
  },

  {
    title: "Image0",
    desc: `Lorem ipsum dolor sit amet consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam`,
    src: "https://drive.google.com/file/d/1bdTjomRYA79p260SqIF58Nd7JhwLNDDp/view?usp=drive_link",
  },

  {
    title: "Image0",
    desc: `Lorem ipsum dolor sit amet consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam`,
    src: "https://drive.google.com/file/d/1bZlfwfBaNbVdXTPjHGagDJNqtNirrT2k/view?usp=drive_link",
  },

  {
    title: "Image0",
    desc: `Lorem ipsum dolor sit amet consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam`,
    src: "https://drive.google.com/file/d/1bW2eIFMykmNpzX--pOuyFyWlA7sySH1_/view?usp=drive_link",
  },

  {
    title: "Image0",
    desc: `Lorem ipsum dolor sit amet consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam`,
    src: "https://drive.google.com/file/d/1dZ-nXNzk2uwkc5guSmD6w1wVTyWJTqEf/view?usp=drive_link",
  },

  {
    title: "Image0",
    desc: `Lorem ipsum dolor sit amet consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam`,
    src: "https://drive.google.com/file/d/1bURmJfk5h2XRRdqL6IV6zR4Ed0GWYfwP/view?usp=drive_link",
  },

  {
    title: "Image0",
    desc: `Lorem ipsum dolor sit amet consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam`,
    src: "https://drive.google.com/file/d/1dPQKCjcCHKrp5pEaFa3s6QK9gT4Oacgg/view?usp=drive_link",
  },

  {
    title: "Image0",
    desc: `Lorem ipsum dolor sit amet consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam`,
    src: "https://drive.google.com/file/d/1dIz-Ezno1Wcc5sKoiCPcA8LiiquPWMYu/view?usp=drive_link",
  },

  {
    title: "Image0",
    desc: `Lorem ipsum dolor sit amet consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam`,
    src: "https://drive.google.com/file/d/1dF1JbUIAFJIWnu_-Uo_wPGMRLg5vrZ7Z/view?usp=drive_link",
  },
  {
    title: "Image0",
    desc: `Lorem ipsum dolor sit amet consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam`,
    src: "https://drive.google.com/file/d/1dKjXeaFt6gGuwFWo4hVy1_Ww7XT79uo3/view?usp=drive_link",
  },
  {
    title: "Image0",
    desc: `Lorem ipsum dolor sit amet consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam`,
    src: "https://drive.google.com/file/d/1dTEJVmfMMsAUWfTzvcf9w05wY_B57TM1/view?usp=drive_link",
  },
  {
    title: "Image0",
    desc: `Lorem ipsum dolor sit amet consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam`,
    src: "https://drive.google.com/file/d/1dGpZdGYH5rULUyRGqzsALaaIZ25EUy2-/view?usp=drive_link",
  },
];

export default function Gallery() {
  const Imgsrc = useKitchenStore((state) => state.ImageString);
  return (
    <div className="  pt-16 pb-4 " id="Gallery">
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
        {images.map((ele: any, index: number) => {
          return (
            <div className="w-full px-4 mb-4 lg:w-2/5">
              <div className="relative overflow-hidden shadow-lg group">
                <Image
                  width={300}
                  height={350}
                  loader={Imgsrc}
                  alt={"Gallery" + index}
                  src={ele.src}
                  className="group-hover:origin-center group-hover:scale-105 transition inset-0 object-cover object-center  duration-500 w-full h-[350px]"
                />
                <div className="absolute inset-0 z-0 group-hover:bg-black opacity-60"></div>
                <div className="absolute hidden p-4 text-center content left-4 bottom-4 right-4 group-hover:block">
                  <div className="mb-2 text-2xl font-semibold text-gray-100 dark:text-white ">
                    {ele.title}
                  </div>
                  <h2 className="mb-0 text-sm font-light text-gray-300 dark:text-gray-300 ">
                    {ele.desc}
                  </h2>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
