import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
export const Whatsapp = () => {
  return (
    <Link href={'https://wa.me/91'+process.env.PHONE_NUMBER} className='animate-bounce w-10 fixed z-10 bottom-4 left-4'>
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>

    <FontAwesomeIcon icon={faWhatsapp} style={{color: "#00ff1e",}} />
    </Link>
  )
}
export const Call = () => {
  return (
    <Link href={"tel:"+process.env.PHONE_NUMBER} className='animate-bounce w-10 fixed z-10 bottom-4 right-4'>
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
    <FontAwesomeIcon icon={faPhone} style={{color: "#005eff",}} />    
    </Link>
  )
}

