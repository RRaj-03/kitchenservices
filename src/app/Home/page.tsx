import About from '@/Components/Home/About'
import Brand from '@/Components/Home/BrandTile'
import Carousel from '@/Components/Home/Carousel/Index'
import Head from '@/Components/Home/Head'
import Services from '@/Components/Home/Services'
import Stats from '@/Components/Home/Stats'
import Testinomials from '@/Components/Home/Testinomials'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Carousel/>
      <Head/>
      <Services/>
      <About/>
      <Stats/>
      <Testinomials/>
      <Brand/>
    </div>
  )
}

export default Home