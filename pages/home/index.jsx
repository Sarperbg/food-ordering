import Campaigns from "../../components/Campaigns";
import Carousel from "../../components/Carousel";
import React from 'react'
import MenuWrapper from "@/components/products/MenuWrapper";
import About from "@/components/About";
import Reservation from "@/components/Reservation";

const Index = () => {
  return (
    <div>
      <Carousel />
      <Campaigns />
      <MenuWrapper/>
      <About />
      <Reservation />
    </div>
  )
}

export default Index
