import React from 'react'

interface props{
  Price_list:{
    title: string;
    Price: string;
    Features: string[];
}[]
  topindex:number
}
const Pricing = ({Price_list,topindex}:props) => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 pb-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Pricing</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.</p>
      
    </div>
    <div className="flex flex-wrap -m-4">
      
      {
        Price_list.map((item,index)=>{
          return<div key={item.title} className="p-4 xl:w-1/4 md:w-1/2 w-full">
          <div className={"h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden"+(topindex!==index?" border-gray-300":" border-indigo-500")}>
            {topindex===index?<span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>:null}
            <h2 className="text-sm tracking-widest title-font mb-1 font-medium">{item.title}</h2>
            <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
              <span>{item.Price}</span>
              <span className="text-lg ml-1 font-normal text-gray-500">/mo</span>
            </h1>
            {item.Features.map((feature)=>{
              return<p key={feature+index} className="flex items-center text-gray-600 mb-2">
              <span className={"w-4 h-4 mr-2 inline-flex items-center justify-center  text-white rounded-full flex-shrink-0"+(topindex!==index?" bg-gray-300":" bg-indigo-500")}>
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>{feature}
            </p>
            })}
            
            <button className={"flex items-center mt-auto text-white border-0 py-2 px-4 w-full focus:outline-none  rounded"+(topindex!==index?" bg-gray-400 hover:bg-gray-500":" bg-indigo-500 hover:bg-indigo-600")}>Button
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
            <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
          </div>
        </div>
        })
      }
      
    </div>
  </div>
</section>
  )
}

export default Pricing