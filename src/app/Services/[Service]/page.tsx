import Brand from '@/Components/Home/BrandTile'
import Testinomials from '@/Components/Home/Testinomials'
import ServiceOverview from '@/Components/Services/Overview'
import Pricing from '@/Components/Services/Pricing'
import React from 'react'
const index = ({ params }: { params: { Service: string } }) => { 
  return (
    <div>
    <ServiceOverview Service={params.Service}/>
      <Pricing/>
      <Brand/>
      <Testinomials/>
    </div>
  )
}

export default index