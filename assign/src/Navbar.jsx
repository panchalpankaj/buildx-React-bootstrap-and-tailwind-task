import React from "react";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { IoSearchCircleSharp } from "react-icons/io5";
import Clouser from "./Clouser";
import ImageandText from "./ImageandText";
import Clickselect from "./Clickselect";
import Tabal from "./Tabal";

const Navbar = () => {
  return (
    <>
      <div className="bg-slate-200 py-2">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div>Have Any Question?</div>
          <div className="flex items-center">
            <p className="flex items-center px-2">
              <FaPhone className="mt-1 mx-1" />
              1234567890
            </p>
            <p className="flex items-center px-3">
              <MdOutlineAlternateEmail className="mt-1 mx-1" />
              Contact@gmail.com
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex justify-between items-center py-4 mb-3 px-4">
        <img src="Image/logo.png" alt="Logo" className="h-9 ml-14" />
        <nav className="flex gap-4 text-lg mr-14">
          <p className="hover:underline cursor-pointer">Home</p>
          <p className="hover:underline cursor-pointer">About Us</p>
          <p className="hover:underline cursor-pointer">Features</p>
          <p className="hover:underline cursor-pointer">Projects</p>
          <p className="hover:underline cursor-pointer">Pages</p>
          <p className="hover:underline cursor-pointer">Contact</p>
          <IoSearchCircleSharp className="text-3xl cursor-pointer" />
        </nav>
      </div>

      <Clouser />

      <div className="flex justify-between bg-yellow-500 text-white w-full h-14 py-2 px-4">
        <p className="flex items-center">
          Lorem ipsum dolor sit amet.
          <span className="text-black underline cursor-pointer"> Contact us Today</span>
        </p>
        <button className="bg-white text-black p-2 rounded-md hover:bg-gray-200 transition">Get A Quote</button>
      </div>

      <ImageandText />

      <div className="flex flex-col items-center mt-9 px-4">
        <p className="text-3xl font-bold">Feature Work</p>
        <p className="w-1/2 text-center mt-3 pb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dolorum fugiat illum voluptatem omnis totam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus ipsam veritatis facilis similique repellat hic!
        </p>
      </div>

      <Clickselect />
      <Tabal />
    </>
  );
};

export default Navbar;
