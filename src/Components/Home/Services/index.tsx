"use client"
import useKitchenStore from "@/Helpers/Store/KitchenStore"
import Image from "next/image"
import Link from "next/link"



export default function Service() {
  const Services = useKitchenStore(state => state.Services)
  const Imagesrc = useKitchenStore(state=>state.ImageString)
  
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-8 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-4xl font-extrabold  text-gray-900">Services</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {Services.map((service: {
              name: string; images: {
                src: string; alt: string
              }[]; href: string; type: string
            }) => (
              <div key={service?.name} className="group relative">
                <div className="relative h-60 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <Image
                  loader={Imagesrc}
                    src={service?.images[1].src}
                    alt={service?.images[1].alt}
                    height={240}
                    width={360}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <Link href={service?.href}>
                    <span className="absolute inset-0" />
                    {service?.name}
                  </Link>
                </h3>
                <p className="text-base font-semibold text-gray-900">{service?.type}</p>
              </div>
            ))}
            {
              Services?.length === 0 ? <div className="group relative animate-pulse">
                <div className="relative h-60 w-full overflow-hidden rounded-lg bg-gray-300 sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">

                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <div >
                    <span className="absolute inset-0" />
                    <div className="h-3 bg-slate-300 my-2 rounded w-[60%]"></div>
                  </div>
                </h3>
                <p className="text-base font-semibold text-gray-900"></p>
              </div> : null
            }
          </div>
        </div>
      </div>
    </div>
  )
}