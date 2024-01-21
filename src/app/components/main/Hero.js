import React from "react";
import Navbar from "./Navbar";
import Caption from "./Caption";

function Hero() {
  return (
    <div>
      <div className="w-full h-screen absolute px-4 md:px-20 py-4 bg-gradient-to-t from-black to-transparent text-white">
        <div className="w-full">
          <Navbar />
        </div>
        <div className="mt-60">
          <Caption />
        </div>
        <div className="flex flex-col md:flex-row px-20 md:px-0">
          <button className=" bg-emerald-700 px-6 py-2 md:hidden text-center text-white rounded-none md:rounded-md mt-6">
            Login
          </button>
          <button className=" bg-white px-6 py-2 text-emerald-700 rounded-none md:rounded-md mt-6">
            Explore Rooms
          </button>
        </div>
      </div>
      <img
        src="https://i.ibb.co/YcmXm7b/background.jpg"
        alt="logo"
        className="w-full h-screen object-cover -z-50"
      />
    </div>
  );
}

export default Hero;
