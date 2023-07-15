import { ArrowDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import React from 'react'

const About = () => {
    return (
        <div className='mt-[104px] md:mt-16 pt-8 bg-stone-100 pb-16 min-h-[calc(100vh-104px)] md:min-h-[calc(100vh-64px)] flex items-center justify-center' >

            {/* <div className=" px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="mb-6 text-4xl font-medium leading-10 tracking-tight text-gray-50 md:text-6xl">
                            <span className="text-red-500 font-bold">Delivering Services</span>
                            <br className="inline-block" /><span className=" font-normal text-3xl">at your Doorstep</span>
                    </h2>

                    
                    <p className="mb-6 tracking-wide text-gray-300 sm:mt-5 sm:text-md sm:max-w-xl sm:mx-auto md:mt-5">
                        We have experienced professionals for all the services, fulfilling customers’ requirements at the requested date and time.</p>

                   
                    <div className="justify-center sm:flex">
                        <div className="">
                            <Link  href={"/BookAppointment"}
                                className="flex items-center justify-center w-full px-8 py-3  bg-blue-600 rounded-md shadow hover:bg-blue-500 text-white whitespace-nowrap bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium  text-center">
                                Book Now</Link>
                        </div>
                        <div className="mt-3 sm:mt-0 sm:ml-3">
                            <a href={'#Gallery'}
                                className="flex items-center justify-center w-full px-8 py-3 text-blue-600 bg-gray-100 rounded-md shadow hover:text-gray-100 hover:bg-blue-500 scroll-smooth">
                                <span>Gallery</span><ArrowDownIcon className=' h-5 w-5'/></a>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="flex flex-wrap px-4">
                <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
                    <div className="lg:max-w-md">
                        <div className="px-4 pl-4 mb-6 border-l-4 border-blue-500">
                            <span className="text-sm text-gray-600 uppercase ">Who we are?</span>
                            <h1 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl ">
                                About Us
                            </h1>
                        </div>
                        <p className="px-4 mb-10 text-base leading-7 text-gray-500 ">
                        We are experienced professionals working for fulfilling customer's requirements at the requested date and time.
                        </p>
                        <div className="flex flex-wrap items-center">
                            <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                                <div className="p-6 bg-white ">
                                    <span className="text-blue-500 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" 
                                            fill="currentColor" className="h-10 w-10  bi bi-file-earmark-text" viewBox="0 0 16 16">
                                            <path
                                                d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                                            <path
                                                d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                                        </svg>
                                    </span>
                                    <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 ">10+
                                    </p>
                                    <h2 className="text-sm text-gray-700 ">Sevices</h2>
                                </div>
                            </div>
                            <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                                <div className="p-6 bg-white ">
                                    <span className="text-blue-500 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" 
                                            fill="currentColor" className="h-10 w-10  bi bi-people-fill" viewBox="0 0 16 16">
                                            <path
                                                d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                            <path fill-rule="evenodd"
                                                d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z" />
                                            <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                                        </svg>
                                    </span>
                                    <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 ">5k+
                                    </p>
                                    <h2 className="text-sm text-gray-700 ">Satisfied Customer</h2>
                                </div>
                            </div>
                            <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                                <div className="p-6 bg-white ">
                                    <span className="text-blue-500 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" 
                                            fill="currentColor" className="h-10 w-10  bi bi-person-fill" viewBox="0 0 16 16">
                                            <path
                                                d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                        </svg>
                                    </span>
                                    <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 ">100+
                                    </p>
                                    <h2 className="text-sm text-gray-700 ">Experts</h2>
                                </div>
                            </div>
                            <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                                <div className="p-6 bg-white ">
                                    <span className="text-blue-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" 
                                            fill="currentColor" className="h-10 w-10  bi bi-alarm-fill" viewBox="0 0 16 16">
                                            <path
                                                d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zm2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527z" />
                                        </svg>
                                    </span>
                                    <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 ">24/7
                                    </p>
                                    <h2 className="text-sm text-gray-700 ">Timing</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                    <img src="https://i.postimg.cc/9MW8G96J/pexels-the-coach-space-2977565.jpg" alt=""
                        className="relative object-cover w-full h-full rounded"/>
                </div>
            </div>
        </div>
    )
}

export default About