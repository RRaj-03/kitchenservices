"use client"
import axios from "axios"
import { JSXElementConstructor, Key, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal, useEffect, useState } from "react"

  
  export default function Service() {
    
    const [Services, setServices] = useState<any>([])
    useEffect(() => {
      axios.get("/api/Services").then(
        (res)=>{
          setServices(res.data.value)
          // console.log(res.data)
        }
      )
    }, [])
    return (
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-8 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-4xl font-extrabold text-gray-900">Services</h2>
  
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {Services.map((service: { name: string; images: {
                src: string | undefined; alt: string | undefined 
}[]; href: string | undefined; type: string }) => (
                <div key={service?.name} className="group relative">
                  <div className="relative h-60 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src={service?.images[0].src}
                      alt={service?.images[0].alt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={service?.href}>
                      <span className="absolute inset-0" />
                      {service?.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{service?.type}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }