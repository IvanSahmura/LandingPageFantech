"use client";
import { useState } from "react";

function HeroBott() {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  return (
    <div>
      {/** First Section **/}
      <div className="relative mb-8">
        <div className="flex items-center text-white max-w-screen-xl mx-auto px-4">
          {/** Image Container **/}
          <div className={`w-1/2 md:w-1/2 flex-shrink-0 relative overflow-hidden group ${isHovered1 ? 'hover' : ''}`}>
            <img
              src="assets/arti1.jpg"
              alt="Article Thumbnail"
              className={`w-full h-auto object-cover transform transition-transform duration-700 ease-in-out ${isHovered1 ? 'scale-[1.1] mask-image-[linear-gradient(to_right,_transparent_0%,_white_25%,_white_75%,_transparent_100%)]' : ''}`}
            />
            <div className={`absolute inset-0 bg-black transition-opacity duration-700 ease-in-out cursor-pointer ${isHovered1 ? 'bg-opacity-50' : 'bg-opacity-0'}`}></div>
          </div>
          {/** Text Container **/}
          <div className="bg-slate-400 rounded-md">
            <div className="ml-8 text-left"
                 onMouseEnter={() => setIsHovered1(true)}
                 onMouseLeave={() => setIsHovered1(false)}>
              <button className="px-4 py-2 rounded-md bg-red-700 mb-5">ARTICLE, FANTECH AFFILIATE</button>
              <p className="text-lg md:text-xl mb-2">10 Ide Kerja Sampingan, Hasilin Duit Banyak dan Isi Waktu Luang</p>
              <p className="text-2xl font-bold mb-4">Bagi sebagian orang selain mencari penghasilan utama, Kerja sampingan dapat m... </p>
              <div className="flex items-center justify-center h-full">
                <a className="text-lg md:text-xl mb-2 hover:text-red-700 duration-300" href="http://">Continue Reading</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/** Second Section **/}
      <div className="relative mb-8">
        <div className="flex items-center text-white max-w-screen-xl mx-auto px-4">
          {/** Image Container **/}
          <div className={`w-1/2 md:w-1/2 flex-shrink-0 relative overflow-hidden group ${isHovered2 ? 'hover' : ''}`}>
            <img
              src="assets/arti2.jpg"
              alt="Article Thumbnail"
              className={`w-full h-auto object-cover transform transition-transform duration-700 ease-in-out ${isHovered2 ? 'scale-[1.1] mask-image-[linear-gradient(to_right,_transparent_0%,_white_25%,_white_75%,_transparent_100%)]' : ''}`}
            />
            <div className={`absolute inset-0 bg-black transition-opacity duration-700 ease-in-out cursor-pointer ${isHovered2 ? 'bg-opacity-50' : 'bg-opacity-0'}`}></div>
          </div>
          {/** Text Container **/}
          <div className="bg-slate-400 rounded-md">
            <div className="ml-8 text-left"
                 onMouseEnter={() => setIsHovered2(true)}
                 onMouseLeave={() => setIsHovered2(false)}>
              <button className="px-4 py-2 rounded-md bg-red-700 mb-5">ARTICLE, KARIR, PRODUKTIFITAS</button>
              <p className="text-lg md:text-xl mb-2">10 Ide Kerja Sampingan, Hasilin Duit Banyak dan Isi Waktu Luang</p>
              <p className="text-2xl font-bold mb-4">Bagi sebagian orang selain mencari penghasilan utama, Kerja sampingan dapat m... </p>
              <div className="flex items-center justify-center h-full">
                <a className="text-lg md:text-xl mb-2 hover:text-red-700 duration-300" href="http://">Continue Reading</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBott;