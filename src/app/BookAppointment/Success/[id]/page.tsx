"use client"
import ThankYou from '@/Components/Thankyou'
import useKitchenStore from '@/Helpers/Store/KitchenStore'
import Error from 'next/error'
import React from 'react'

const page = ({ params }: { params: { id: string } }) => {
    const AppointmentId = useKitchenStore(state=>state?.AppointmentID)
    if(AppointmentId){
  return (
    <>
    <ThankYou id={AppointmentId}/>
    </>
  )
}
else{
    return <div className='h-[calc(100vh-104px)] md:h-[calc(100vh-64px)] w-full mt-[104px] md:mt-16 py-32 flex justify-center items-center text-center '><div className='text-slate-200 text-4xl'><span className='font-bold '> 401 </span>|<span className='font-semibold'> Unauthorized Access </span></div></div>
}
}

export default page