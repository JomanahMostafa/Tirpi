import React from "react";
import SearchBox from "../Helper/SearchBox";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative w-full h-[70vh] sm:h-[80vh] md:h-screen">
      {/* overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-35"></div>
      <video
        src="/images/222639 (1).mp4"
        autoPlay
        muted
        loop
        preload="metadata"
        playsInline
        className="w-full h-full object-cover"
      />
      {/* text content */}
      <div className="absolute z-100 w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 pt-[10vh] sm:pt-[12vh] md:pt-0">
        <div className="mx-auto w-full max-w-5xl flex items-center justify-center flex-col">
          <div data-aos="fade-up"
           className="w-full max-w-3xl">
            <h1 className="text-[22px] sm:text-[26px] md:text-[35px] lg:text-[45px] mb-3 md:mb-4 text-center whitespace-nowrap leading-tight tracking-normal sm:tracking-wide lg:tracking-[0.7rem] text-white font-bold uppercase">
              Lets Enjoy The Nature
            </h1>
            <p className="text-base sm:text-lg md:text-base text-center text-white font-normal [word-spacing:5px]">
              Get the best prices on 2,000,000+ properties, worldwide
            </p>
          </div>
          {/* search box */}
          <div className="w-full max-w-6xl mt-6 sm:mt-8 px-2 sm:px-4">
            <SearchBox />
            <div className="flex justify-center">
              <Link
                href="#"
                className="rounded px-14 md:px-28 -mt-4 py-2.5 overflow-hidden
              group bg-red-700 relative hover:bg-linear-to-r hover:from-red-700
              hover:to-red-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-red-500 transition-all
              ease-out duration-300"
              >
                <span
                  className="absolute left-0 w-8 h-32 -mt-12 transition-all duration-1000 transform
                -translate-x-12 bg-white opacity-10 rotate-12 group-hover:translate-x-96 ease"
                ></span>
                <span className="relative font-bold">Search</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
