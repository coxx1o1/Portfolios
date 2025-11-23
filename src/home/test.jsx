import React, { useState, useEffect } from "react";
import "./test.css";

function Test() {
  return (
    <div className="relative h-svh flex items-center justify-center text-white text-5xl font-bold bg-gradient-to-l from-cyan-300 to-cyan-950 overflow-hidden">
      <h2>
        I am
        <span>
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

export default Test;
