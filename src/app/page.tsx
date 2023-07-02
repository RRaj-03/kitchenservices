import Image from 'next/image'
import Navbar from '../Components/Navbar/index'
import { useRouter } from 'next/router'
export default function Home() {
  const Router = useRouter()
  Router.replace("/Home")
  return (
    <>
    {/* <Navbar /> */}
    </>
  )
}
