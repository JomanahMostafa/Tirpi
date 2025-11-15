import React from "react";
import { BsEnvelopePaper } from "react-icons/bs";

const Newsletter = () => {
  return (
    <div className="bg-black pt-16 pb-16 flex flex-col items-center justify-center gap-3">
      <BsEnvelopePaper className="w-16 h-16 text-white" />
      <h1 className="text-lg sm:text-xl md:text-2xl text-white font-semibold tracking-widest text-center">
        Your Travel Journey Start Here
      </h1>
      <p className="text-white text-xs sm:text-sm text-center">
        Sign Up and we&apos;ll send the best deals to you
      </p>
      {/* subscription input & button*/}
      <div className="w-full">
        <input type="text" className="px-6 py-3.5 bg-white mt-3 w-[95%] sm:w-[80%] md:w-[60%]
        lg:w-[60%] block mx-auto rounded-lg outline-none" placeholder="Email"/>
        <button className="px-6 py-3.5 bg-gradient-to-r from-red-700 to-red-800 text-white font-semibold
         mt-8 w-[95%] sm:w-[80%] md:w-[60%] lg:w-[60%] block mx-auto rounded-lg outline-none
         relative overflow-hidden group shadow-lg shadow-red-900/50
         transition-all duration-300 ease-out
         hover:bg-gradient-to-r hover:from-red-600 hover:to-red-700
         hover:scale-105 hover:shadow-xl hover:shadow-red-800/60
         active:scale-95 active:shadow-md
         focus:outline-none focus:ring-4 focus:ring-red-500/50 focus:ring-offset-2 focus:ring-offset-black">
          {/* Shimmer effect */}
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
          -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
          <span className="relative z-10 flex items-center justify-center gap-2">
            Submit
          </span>
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
