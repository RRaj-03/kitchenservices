import About from "@/Components/Home/About";
import Brand from "@/Components/Home/BrandTile";
import Carousel from "@/Components/Home/Carousel/Index";
import Head from "@/Components/Home/Head";
import Service from "@/Components/Home/Services";
import Stats from "@/Components/Home/Stats";
import Steps from "@/Components/Home/Steps";
import Testinomials from "@/Components/Home/Testinomials";
import React from "react";

const Home = () => {
  return (
    <div>
      <Head />
      <Service />
      <Carousel />
      <About />
      <Stats />
      <Steps />
      <Brand />
      <Testinomials />
    </div>
  );
};

export default Home;
