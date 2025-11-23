import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col-reverse md:flex-row items-center">
        
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            Build <span className="text-yellow-400">Stunning</span> Interfaces
          </h1>
          <p className="text-lg md:text-xl mb-6 text-gray-200">
            UI-Coxx helps you create modern, responsive websites quickly with pre-built components and Tailwind CSS.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/app"
              className="bg-yellow-400 text-indigo-900 font-bold px-6 py-3 rounded-lg hover:bg-yellow-500 transition inline-block text-center"
            >
              Get Started
            </Link>
            <Link
              to="/learn"
              className="bg-white text-indigo-700 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition inline-block text-center"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Illustration */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0 flex justify-center md:justify-end">
          <img
            src="Gojo-Satoru.png"
            alt="Hero Illustration"
            className="w-full max-w-md rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
