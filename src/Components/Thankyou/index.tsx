"use client"
import { ShieldCheckIcon } from '@heroicons/react/20/solid'
import React from 'react'

const ThankYou = ({ id }: { id: string }) => {
    const Print = () => {

        console.log('print');
        var divContents = document.getElementById("printablediv")?.innerHTML;
        var a = window.open('', '', 'height=500, width=500');
        a?.document.write('<html>');
        a?.document.write('<body >');
        a?.document.write(divContents || "");
        a?.document.write('</body></html>');
        a?.document.close();
        a?.print();

    }

    return (
        <>
            <iframe id="ifmcontentstoprint" style={{ height: '0px', width: '0px', position: 'absolute' }}></iframe>
            <div className='w-full isolate h-full mt-[104px] md:mt-16 py-24  bg-white' style={{ width: '100%', height: "100%", marginTop: '104px', paddingTop: '6rem', paddingBottom: '6rem' }} id='printablediv'><div className="  w-full mx-auto text-center" id="header" style={{ width: '100%', margin: 'auto', textAlign: 'center' }}>
                <div className="absolute inset-x-0 top-[0rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
                    <div className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]" style={{ clipPath: ' polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
                </div>
                <h1 className="font-extrabold text-6xl text-green-400" data-lead-id="site-header-title" style={{ color: 'green', fontWeight: 800, fontSize: '3.75rem' }}>THANK YOU </h1> <span className='font-semibold' style={{ fontWeight: 600 }}>For Contacting </span><span className='text-red-500 font-semibold' style={{ color: 'red', fontWeight: 600 }}> Kitchen Chimney Services</span>
            </div>

                <div className="text-center flex flex-col justify-center items-center font-serif font-extralight" style={{ textAlign: "center", display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: "center", fontFamily: 'serif', fontWeight: 200 }}>
                    <ShieldCheckIcon className='text-green-500 h-24 w-24 mt-8' style={{ color: "green", height: '6rem', width: '6rem', marginTop: '2rem' }} />

                    <p className="main-content__body" data-lead-id="main-content-body">Your Appointment Id is <span className='font-black' style={{ fontWeight: 900 }}>{id}</span></p>
                    <p className="main-content__body" data-lead-id="main-content-body"><br />We are working 24/7 to make your life comfortable. <br /> We will Call you back soon!.</p>
                </div>
                <div className="absolute inset-x-0 bottom-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:bottom-[-20rem]" aria-hidden="true">
                    <div className="relative right-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]" style={{ clipPath: ' polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
                </div>
            </div>
            <div><div


                key={"Print"}
                className={'cursor-pointer text-white whitespace-nowrap bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium  text-sm px-5 md:px-2 lg:px-5 py-2.5 text-center z-[5] relative'
                }
                onClick={() => {
                    Print()
                }}
            >
                {"Print"}
            </div></div>
        </>
    )
}

export default ThankYou