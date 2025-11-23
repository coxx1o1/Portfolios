import React, { useState, useEffect } from "react";
import "./hero2.css";

function Hero2() {
  return (
    <div className="relative h-svh flex items-center justify-center text-white text-5xl font-bold overflow-hidden bg-[linear-gradient(to_right,theme(colors.cyan.950),theme(colors.cyan.800),theme(colors.cyan.700),theme(colors.cyan.600),theme(colors.cyan.500),theme(colors.purple.400),theme(colors.purple.500),theme(colors.purple.700),theme(colors.purple.900))]">
      <h2 className="absolute z-10 flex items-baseline gap-1 sm:gap-2 text-xl sm:text-3xl md:text-5xl font-extrabold leading-tight left-4 sm:left-6 md:left-10 top-6 sm:top-8 md:top-10 ">
        I am
        <span className="relative inline-block overflow-hidden h-[1.2em] sm:h-[1.25em] w-[9ch] sm:w-[12ch] md:w-[16ch] whitespace-nowrap text-left ">
          <span>Codexx_u</span>
          <span>a Coder</span>
          <span>a Graphics Designer</span>
          <span>a Programmer</span>
          <span>a developer</span>
        </span>
      </h2>
  
      <span className="block text-right w-100 sm:left-6 md:left-10 top-16 sm:top-20 md:top-24">
        I am a frontend devloper i bring yuor ideas to life and i build responsive websites with React.js and Tailwind CSS.
      </span>

      <img
        src="/my.png"
        alt=""
        className="absolute inset-0 bottom-[20%] bg-contain w-full h-full object-contain object-left  pointer-events-none  opacity-90"
      />
    </div>
  );
}

export default Hero2;
