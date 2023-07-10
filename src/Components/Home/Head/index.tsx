"use client"
import Link from "next/link"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Pagination } from 'swiper';
import Image from "next/image";

const HeroImg = ["Hero1","Hero2","Hero3","Hero4","Hero5","Hero6"]

export default function Head() {
  return (
    <section className="text-gray-700 body-font mt-16">
      <div className="container mx-auto flex px-5 md:px-16 bg-gray-100 my-16 rounded-lg pb-12 pt-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-2xl mb-6 font-medium text-black">
<span className="text-red-500 font-bold">Delivering Services</span>
            <br className="inline-block" /><span className=" font-normal text-3xl">at your Doorstep</span>
          </h1>
          <p className="mb-8 leading-relaxed">In Business Since 1992
Urban Repairing is a leading and the most trusted home and kitchen services platform, with an established presence in Pune, Mumbai, and Hyderabad. Hundreds of customers choose us every month for home maintenance, repairing, and installation solutions. 
</p>
          <p className="mb-8 leading-relaxed">
We have experienced professionals for all the services, fulfilling customers’ requirements at the requested date and time.</p>
          
          <div className="flex justify-center mt-4">
            <Link

              href={"/BookAppointment"}
              key={"Book Now"}
              className={'text-white whitespace-nowrap bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 md:px-2 lg:px-5 py-2.5 text-center'
              }
            // onClick={() => {
            //   useKitchen.SetModalOpen(true)
            // }}
            >
              {"Book Now"}
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:block hidden border-solid border-4 rounded-lg border-indigo-400">
        <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2500,
          pauseOnMouseEnter: true,
          disableOnInteraction:true
        }}
        loop={true}
        modules={[Pagination,Autoplay]}
        className="mySwiper h-[400px]"
      >
        {
          HeroImg.map((img)=>{
            return<SwiperSlide className="h-auto object-cover" ><Image height={500} width={400} className="rounded-lg object-cover object-center  w-full h-full" alt="hero" src={'/Images/Hero/'+img+'.png'} /></SwiperSlide>
          })
        }
       
      </Swiper>
        </div>
      </div>
    </section>
  )
}
