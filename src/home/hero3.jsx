import React from "react"

function Hero3() {
    return(
<section class="min-h-screen bg-gray-800 text-white flex flex-col md:flex-row items-center bg-gradient-to-r from-blue-600 to-indigo-700 justify-center p-10 gap-10">

 
  <div class="md:w-1/2 text-center md:text-left ">
    <h1 class="text-5xl font-bold mb-3">Build Stunning UIs with ME</h1>
    <p class="mt-4 text-gray-300 text-lg">
    using Tailwind CSS design fast, clean, and responsive.
    </p>
    <button class="mt-6 px-6 py-3 bg-white text-gray-800 font-semibold rounded-xl hover:bg-amber-400 hover:scale-110 shadow-xl rounded-3xl ">
      Get Started
    </button>
  </div>

 
  <div class="md:w-1/2">
    <img src="https://picsum.photos/500" class="rounded-2xl shadow-2xl hover:scale-105 transition " />
  </div>

</section>)}

export default Hero3;

