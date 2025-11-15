"use client";
import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import Destination from "./Destination/Destination";
import Hotel from "./Hotel/Hotel";
import WhyChoose from "./WhyChoose/WhyChoose";
import Reviews from "./Reviews/Reviews";
import News from "./News/News";
import Newsletter from "./NewsLetter/Newsletter";

// @ts-ignore: no types available for 'aos'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Home = () => {
  useEffect(() => {
    const initAos = async () => {
      const AOSLib = (await import('aos')).default || (await import('aos'));
      AOSLib.init({
        duration: 1000,
        easing: 'ease',
        once: true,
        anchorPlacement: 'top-bottom',
      });
    };
    initAos();
    
  }, []);

  return (
    <div className="overflow-hidden ">
      <Hero />
      <Destination />
      <Hotel />
      <WhyChoose/>
      <Reviews/>
      <News/>
      <Newsletter/>
      
    </div>
  );
};

export default Home;

