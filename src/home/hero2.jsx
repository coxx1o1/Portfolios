import React, { useState, useEffect } from "react";
import "./hero2.css";

function Hero2() {
  return (
    <div className="relative h-svh flex items-center justify-center text-white text-5xl font-bold bg-gradient-to-l from-cyan-300 to-cyan-950 overflow-hidden">
      <h2 className="relative z-10 flex items-baseline gap-1 sm:gap-2 text-2xl sm:text-4xl md:text-6xl font-extrabold leading-tight">
        I am
        <span className="relative inline-block overflow-hidden h-[1.2em] sm:h-[1.25em] w-[10ch] sm:w-[14ch] md:w-[18ch] whitespace-nowrap text-left">
          <span>Codexx_u</span>
          <span>a Coder</span>
          <span>a Graphics Designer</span>
          <span>a Programmer</span>
          <span>a developer</span>
        </span>
      </h2>

      <img
        src="/my.png"
        alt=""
        className="absolute inset-0 bottom-[20%] bg-contain w-full h-full object-contain object-left  pointer-events-none  opacity-90"
      />
    </div>
  );
}

export default Hero2;
