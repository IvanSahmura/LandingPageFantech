"use client";

import { useState } from 'react';
import { CiMenuBurger } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full h-28 border-b border-gray-500 text-white bg-black">
      <div className="max-w-screen-xl h-full mx-auto px-4 flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl uppercase font-bold">FANTECH</h1>
        <div className="hidden md:flex items-center flex-grow justify-center">
          <ul className="flex items-center gap-8 uppercase text-sm font-bold">
            <li className="Navbarli">Home</li>
            <li className="Navbarli">Gaming</li>
            <li className="Navbarli">Smart Life</li>
            <li className="Navbarli">Software</li>
          </ul>
        </div>
        <div className="hidden md:flex items-center text-sm md:text-lg uppercase font-bold ml-8">
          Contact Us
        </div>
        
        <div className="md:hidden flex items-center ml-auto">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
            {isOpen ? <RxCross2 /> : <CiMenuBurger />}
          </button>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} absolute w-full bg-black text-white z-50`}>
        <ul className="flex flex-col items-center gap-4 py-4">
          <li className="Navbarli2">Home</li>
          <li className="Navbarli2">Gaming</li>
          <li className="Navbarli2">Smart Life</li>
          <li className="Navbarli2">Software</li>
          <li className="Navbarli2">Lainnya</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
