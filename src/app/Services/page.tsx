import Brand from '@/Components/Home/BrandTile'
import Testinomials from '@/Components/Home/Testinomials'
import ServiceOverview from '@/Components/Services/Overview'
import Pricing from '@/Components/Services/Pricing'
import React from 'react'
import Service from '@/Components/Home/Services'
import ServiceFeature from '@/Components/Services/Features'
const Services = () => {
  return (
    <div>
      <ServiceFeature/>
      <Service/>
    </div>
  )
}

export default Services