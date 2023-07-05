import React from 'react'
import FeatureComponent from './FeatureComponent';
import useKitchenStore from '@/Helpers/Store/KitchenStore';
import { useRouter } from 'next/navigation';

const PriceComponent = (props: { item: any; topindex: any; index: any }) => {
    const {item , topindex , index} = props
    const useKitchen = useKitchenStore()
    const senddata = (title: any,Price: any)=>{
        useKitchen.SetForm({price:`${title} (₹${Price})`})
    }
    const router = useRouter()
  return (
    <div  key={item.title} id={item.title} className="p-4 xl:w-1/4 md:w-1/2 w-full">
    <div key={item.title} className={"h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden"+(topindex!==index?" border-gray-300":" border-indigo-500")}>
      {topindex===index?<span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>:null}
      <h2 className="text-sm tracking-widest title-font mb-1 font-medium">{item.title}</h2>
      <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
        <span>{item.Price}</span>
        <span className="text-lg ml-1 font-normal text-gray-500">/mo</span>
      </h1>
      {item.Features.map((feature: string)=>{
        return <>
        <FeatureComponent title={item.title} feature={feature} topindex={topindex} index={index}/>
        </>
      })}
      
      <button className={"flex items-center mt-auto text-white border-0 py-2 px-4 w-full focus:outline-none  rounded"+(topindex!==index?" bg-gray-400 hover:bg-gray-500":" bg-indigo-500 hover:bg-indigo-600")}
       onClick={()=>{
        senddata(item.title,item.Price)
        router.push("/BookAppointment")
       }}>Button
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
      <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
    </div>
  </div>
  )
}

export default PriceComponent