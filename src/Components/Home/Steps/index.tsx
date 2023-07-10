import {  DocumentCheckIcon, HomeIcon, PencilSquareIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline'
import React from 'react'
const steps = [
    {
        title: 'Book a Service',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum optio, non omnis hic, asperiores exercitationem voluptate quas excepturi necessitatibus, vitae incidunt officiis unde ipsam obcaecati corrupti inventore est ab. Ipsum!',
        icon:PencilSquareIcon
    },
    {
        title: 'Technician Visit',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum optio, non omnis hic, asperiores exercitationem voluptate quas excepturi necessitatibus, vitae incidunt officiis unde ipsam obcaecati corrupti inventore est ab. Ipsum!',
        icon:HomeIcon
    },
    {
        title: 'Servicing of the Product',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum optio, non omnis hic, asperiores exercitationem voluptate quas excepturi necessitatibus, vitae incidunt officiis unde ipsam obcaecati corrupti inventore est ab. Ipsum!',
        icon:WrenchScrewdriverIcon
    },
    {
        title: 'Give Feedback',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum optio, non omnis hic, asperiores exercitationem voluptate quas excepturi necessitatibus, vitae incidunt officiis unde ipsam obcaecati corrupti inventore est ab. Ipsum!',
        icon:DocumentCheckIcon
    }
]
const Steps = () => {
  return (
    <section className="text-gray-600 body-font bg-white">
        <div className="mx-auto max-w-2xl lg:text-center pt-24 px-8">
        <h2 className="text-base font-semibold leading-7 text-indigo-600">Kitchen Chimney Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
           Easy Steps To A Comfortable Service
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          We are constantly working to give you the best service you can ever wish for and constantly evolving from your feedback.
          </p>
        </div>
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    {
        steps.map((item,Index)=>{
            return<div className={"flex relative sm:items-center md:w-2/3 mx-auto"+(Index===0?" pt-10":"")+(Index===steps.length-1?" pb-10":" pb-20")}>
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">{Index+1}</div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
              <item.icon className="h-10 w-10 text-indigo-500" aria-hidden="true" />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">{item.title}</h2>
                <p className="leading-relaxed">{item.desc}</p>
              </div>
            </div>
          </div>
        })
    }
    
    
  </div>
</section>
  )
}

export default Steps