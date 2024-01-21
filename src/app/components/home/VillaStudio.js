import React from "react";
import { FaBed } from "react-icons/fa";
import { IoPeopleOutline } from "react-icons/io5";

function VillaStudio() {
  return (
    <div className="w-full h-full md:h-screen items-center">
      <div>
        <p className="text-3xl text-gray-500 font-semibold text-center">
          Our choise of <span className="text-emerald-700">Villa Studios</span>
        </p>
      </div>
      <img
        src="https://i.ibb.co/872vHvD/pngwing-com-2.png"
        alt="logo"
        className="w-20 h-20 object-cover absolute -ml-10"
      />
      <div className="w-full mt-10 flex gap-4 md:gap-8 relative z-50">
        <div className="shadow-lg rounded-md p-4 w-full bg-white">
          <img
            src="https://i.ibb.co/YcmXm7b/background.jpg"
            alt="logo"
            className="w-full h-40 md:h-64 object-cover -z-50 rounded-sm"
          />
          <p className="text-emerald-700 mt-4">4 Bedroom villa</p>
          <div className="hidden md:flex w-full justify-between my-4">
            <p className="w-full text-[12px]">Main Facilities</p>
            <p className="w-full text-[12px]">
              Wifi provide, TV & Karaoke, Kitchen, Swimming pool
            </p>
          </div>
          <div className="text-gray-500 hidden md:flex justify-between mb-4">
            <div className="flex items-center gap-2 w-full text-[12px]">
              <FaBed />
              <p>4 Bed</p>
            </div>
            <div className="flex items-center gap-2 w-full text-[12px]">
              <IoPeopleOutline />
              <p>4 Persons</p>
            </div>
          </div>
          <div>
            <p className="text-xl text-emerald-700 font-semibold mt-5 md:mt-0">
              Rp. 3.749.000{" "}
              <span className="text-gray-500 text-sm font-thin hidden md:blok">
                /night
              </span>
            </p>
          </div>
        </div>
        <div className="shadow-lg rounded-md p-4 w-full bg-emerald-700 text-white">
          <img
            src="https://i.ibb.co/YcmXm7b/background.jpg"
            alt="logo"
            className="w-full h-40 md:h-64 object-cover -z-50 rounded-sm"
          />
          <p className="t mt-4">4 Bedroom villa</p>
          <div className="hidden md:flex w-full justify-between my-4">
            <p className="w-full text-[12px]">Main Facilities</p>
            <p className="w-full text-[12px]">
              Wifi provide, TV & Karaoke, Kitchen, Swimming pool
            </p>
          </div>
          <div className=" hidden md:flex justify-between mb-4">
            <div className="flex items-center gap-2 w-full text-[12px]">
              <FaBed />
              <p>4 Bed</p>
            </div>
            <div className="flex items-center gap-2 w-full text-[12px]">
              <IoPeopleOutline />
              <p>4 Persons</p>
            </div>
          </div>
          <div>
            <p className="text-xl font-semibold mt-5 md:mt-0">
              Rp. 3.749.000{" "}
              <span className=" text-sm font-thin hidden md:blok">/night</span>
            </p>
          </div>
        </div>
        <div className="shadow-lg rounded-md hidden md:blok p-4 w-full">
          <img
            src="https://i.ibb.co/YcmXm7b/background.jpg"
            alt="logo"
            className="w-full h-64 object-cover -z-50 rounded-sm"
          />
          <p className="text-emerald-700 mt-4">4 Bedroom villa</p>
          <div className="flex w-full justify-between my-4">
            <p className="w-full text-[12px]">Main Facilities</p>
            <p className="w-full text-[12px]">
              Wifi provide, TV & Karaoke, Kitchen, Swimming pool
            </p>
          </div>
          <div className="text-gray-500 flex justify-between mb-4">
            <div className="flex items-center gap-2 w-full text-[12px]">
              <FaBed />
              <p>4 Bed</p>
            </div>
            <div className="flex items-center gap-2 w-full text-[12px]">
              <IoPeopleOutline />
              <p>4 Persons</p>
            </div>
          </div>
          <div>
            <p className="text-xl text-emerald-700 font-semibold">
              Rp. 3.749.000{" "}
              <span className="text-gray-500 text-sm font-thin">/night</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full mt-8">
        <button className="bg-emerald-100 px-6 py-2 text-emerald-700 rounded-md">
          See More villas
        </button>
      </div>
    </div>
  );
}

export default VillaStudio;
