"use client";
import React from "react";
import { navLinks } from "./constant/constant";
import Link from "next/link";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav: () => void;
}

const MobileNav = ({closeNav,showNav}:Props) => {

  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div className={`fixed inset-0 z-10000 transition-all duration-500 ${showNav ? 'visible' : 'invisible'}`}>
      { /* Overlay */}
      <div 
        onClick={closeNav}
        className={`fixed inset-0 transform transition-all duration-500 bg-black w-full h-screen ${
          showNav ? 'opacity-70' : 'opacity-0'
        }`}
      ></div>
      { /* navLinks */}
      <div className={`text-white ${navOpen} fixed left-0 top-0 justify-center flex flex-col h-full transform 
      transition-all duration-500 w-[80%] sm:w-[60%] bg-red-950 space-y-6 z-10050`}>
        {navLinks.map((link) => {
     return (
       <Link key={link.id} href={link.url} onClick={closeNav}>
        <p className="text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 
        border-white sm:text-[30px]">
          {link.label}
        </p>
       </Link>
  );
        })}
         { /* Close Button */}
       <CgClose onClick={closeNav} 
       className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 cursor-pointer"/>
      </div>
    </div>
  );
};

export default MobileNav;