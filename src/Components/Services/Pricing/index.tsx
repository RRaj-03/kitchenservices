"use client"
import useKitchenStore from '@/Helpers/Store/KitchenStore';
import React from 'react'
import PriceComponent from './PriceComponent';


const Pricing = ({Price_list,topindex}:any) => {

  return (
    <section className="text-gray-600 bg-white body-font overflow-hidden">
  <div className="container px-5 pb-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Pricing</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.</p>
      
    </div>
    <div className="flex flex-wrap -m-4">
      
      {
       Price_list.map((item: { title: string ;Price:string; Features: any[]; },index: any)=>{
        return (<PriceComponent key={item?.title} item={item} index={index} topindex={topindex}/>)
       })
      }
      
    </div>
  </div>
</section>
  )
}

export default Pricing