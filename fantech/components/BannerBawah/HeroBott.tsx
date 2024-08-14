"use client";
import { useState } from "react";

function HeroBott() {
  return (
    <div>
      {/* First Section */}
      <div className="relative mb-8">
        <div className="flex items-center text-white max-w-screen-xl mx-auto px-4">
          {/* Image Container */}
          <div className="w-1/2 md:w-1/2 flex-shrink-0 relative overflow-hidden group">
            <img
              src="assets/arti1.jpg"
              alt="Article Thumbnail"
              className="w-full h-auto object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-[1.1] group-hover:mask-image-[linear-gradient(to right, transparent 0%, white 25%, white 75%, transparent 100%)] "
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity duration-700 ease-in-out group-hover:bg-opacity-50 cursor-pointer"></div>
          </div>
          
          {/* Text Container */}
          <div className="bg-slate-400">
            <div className="ml-8 text-left">
              <button>Article, FANTECH AFFILIATE</button>
              <p className="text-lg md:text-xl mb-2">HALO</p>
              <p className="text-2xl font-bold mb-4">GET 40% OFF!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="relative mb-8">
        <div className="flex items-center text-white max-w-screen-xl mx-auto px-4">
          {/* Image Container */}
          <div className="w-1/2 md:w-1/2 flex-shrink-0 relative overflow-hidden group">
            <img
              src="assets/arti2.jpg"
              alt="Article Thumbnail"
              className="w-full h-auto object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-[1.1] group-hover:mask-image-[linear-gradient(to right, transparent 0%, white 25%, white 75%, transparent 100%)]"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity duration-700 ease-in-out group-hover:bg-opacity-50 cursor-pointer"></div>
          </div>
          
          {/* Text Container */}
          <div className="bg-slate-400">
            <div className="ml-8 text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome</h1>
              <p className="text-lg md:text-xl mb-2">Another Offer</p>
              <p className="text-2xl font-bold mb-4">GET 50% OFF!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBott;
