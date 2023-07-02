import Image from 'next/image'
import Navbar from '../Components/Navbar/index'
import { redirect } from 'next/navigation'
export default function Home() {
  redirect('/Home')
  return (
    <>
    {/* <Navbar /> */}
    </>
  )
}
