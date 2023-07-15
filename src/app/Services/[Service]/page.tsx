"use client";
import Brand from "@/Components/Home/BrandTile";
import Testinomials from "@/Components/Home/Testinomials";
import ServiceOverview from "@/Components/Services/Overview";
import Pricing from "@/Components/Services/Pricing";
import useKitchenStore from "@/Helpers/Store/KitchenStore";
import axios from "axios";

import React, { useEffect, useState } from "react";
const index = ({ params }: { params: { Service: string } }) => {
  const [product, setProduct] = useState<any>({
    name: "Loading",
    href: "#",
    breadcrumbs: [],
    images: [],
    description: "Loading...",
    highlights: [],
    Faqs: [],
    details: "Loading...",
    reviews: { href: "#", average: 4, totalCount: 15 },
    pricing: [],
    topindex: 2,
  });
  const fetchdata = async () => {
    const response = await fetch(`/api/Services/${params.Service}`, {
      cache: "no-store",
    });
    const res = await response.json();
    setProduct(res?.value);
    useKitchen.SetForm({ service: res?.value });
  };
  const useKitchen = useKitchenStore();
  useEffect(() => {
    fetchdata();
  }, []);
  const [opneFor, setopneForm] = useState(false);
  return (
    <div>
      <ServiceOverview product={product} />
      {/* <Pricing Price_list={product.pricing} topindex={product.topindex}/> */}
      <Brand />
      <Testinomials />
    </div>
  );
};

export default index;
