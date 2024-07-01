import { Carousel } from 'flowbite-react'
import React from 'react'
import heroImg1 from "../assets/hero1.avif"
import heroImg2 from "../assets/hero2.avif"
import heroImg3 from "../assets/hero3.avif"


const Hero = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 md:pt-5">
      <Carousel slideInterval={5000}>
        <img src={heroImg1} alt="banner img" />
        <img src={heroImg2} alt="banner img" />
        <img src={heroImg3} alt="banner img" />
      </Carousel>
    </div>
  )
}

export default Hero