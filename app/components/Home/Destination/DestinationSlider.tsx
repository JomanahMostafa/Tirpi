"use client";
import { destinationData } from "@/app/data/data";
import React from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  desktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 3000, min: 1324 },
    items: 5,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 754, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const DestinationSlider = () => {
  return (
    <Carousel
      responsive={responsive}
      infinite
      autoPlay={true}
      autoPlaySpeed={5000}
      keyBoardControl={true}
    >
      {destinationData.map((data) => {
        return (
          <div key={data.id} className="m-3">
            {/* Image Div*/}
            {/* responsive height so images aren't extremely tall */}
            <div className="relative h-64 sm:h-72 md:h-80 lg:h-96">
              <div className="absolute inset-0 bg-black opacity-25 rounded-lg"></div>
              {/* image */}
              <Image
                src={data.image}
                alt={data.country}
                width={500}
                height={500}
                className="h-full w-full object-cover rounded-lg"
              />
              {/* text content */}
              
            </div>
            <h1 className="text-lg font-semibold mt-4">{data.country}</h1>
              <p className="text-sm text-gray-600">{data.travelers}Travelers</p>
          </div>
        );
      })}
    </Carousel>
  );
};

export default DestinationSlider;
