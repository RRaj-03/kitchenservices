"use client"
import Brand from '@/Components/Home/BrandTile'
import Testinomials from '@/Components/Home/Testinomials'
import ServiceOverview from '@/Components/Services/Overview'
import Pricing from '@/Components/Services/Pricing'
import axios from 'axios'


import React, { useEffect, useState } from 'react'
const index = ({ params }: { params: { Service: string } }) => { 
  const [product, setProduct] = useState({
    name: 'Loading',
    href: '#',
    breadcrumbs: [],
    images: [],
    description:
      'Loading...',
    highlights: [],
    details:
      'Loading...',
    reviews:
    { href: '#', average: 4, totalCount: 15 },
    pricing:[],
    topindex: 2
  
  })
  useEffect(() => {
    axios.get("/api/Services/Kitchen-Hob").then(
      (res)=>{
        setProduct(res.data.value)
        // console.log(res.data)
      }
    )
  }, [])
  
  const [opneFor, setopneForm] = useState(false)
  return (
    <div>
      <ServiceOverview product={product}/>
      <Pricing Price_list={product.pricing} topindex={product.topindex}/>
      <Brand/>
      <Testinomials/>
    </div>
  )
}

export default index