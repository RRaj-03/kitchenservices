import { ArrowDownTrayIcon, BuildingOffice2Icon, HomeIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const featurelist = [{
  name:'RESIDENTIAL SOLUTIONS',
  desc:'Quick services for gas stove, chimney, geyser, and cooking range.',
  icon:HomeIcon
},
{
  name:'COMMERCIAL SOLUTIONS',
  desc:'Serving all industries with reliable maintenance & repair services.',
  icon:BuildingOffice2Icon
},
{
  name:'INSTALLATION & TESTING',
  desc:'End-to-end LPG gas/copper pipeline installation services.',
  icon:ArrowDownTrayIcon
}]
const ServiceFeature = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="mx-auto max-w-2xl lg:text-center pt-24">
        <h2 className="text-base font-semibold leading-7 text-indigo-600">Kitchen Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
           Featured Works
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          We are working on different scales to provide every Custome best Service, So that they can enjoy their lifestyle.
          </p>
        </div>
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      {featurelist.map((feature)=>{
        return <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image className="bg-gray-300 lg:h-48 md:h-36 w-full object-cover object-center" height={144} width={200} src={"/Images/Service_feature/"+feature.name.split(" ")[0]+".jpg"} alt="blog"/>
          <div className='rounded-full bg-gray-200 inline-block absolute -translate-y-6 translate-x-4'>
          <feature.icon className="h-12 w-12 p-2 text-indigo-500  " aria-hidden="true"/>
          </div>
          <div className="p-6 mt-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Featured Works</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{feature.name}</h1>
            <p className="leading-relaxed mb-3">{feature.desc}</p>
            {/* <div className="flex items-center flex-wrap ">
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div> */}
          </div>
        </div>
      </div>
      })}
     
    </div>
  </div>
</section>
  )
}

export default ServiceFeature