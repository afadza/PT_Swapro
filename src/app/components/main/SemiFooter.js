import React from "react";

function SemiFooter() {
  return (
    <div className="w-full h-[500px]">
      <div className="w-full  absolute px-[15%] py-4  text-white">
        <div className="mt-12 md:mt-48 text-3xl font-bold text-center md:text-start">
          <p>Make our comfort is </p>
          <p>our happiness</p>
        </div>
        <div className="text-center md:text-start items-center">
          <button className=" bg-white px-6 py-2 text-emerald-700 rounded-md mt-6">
            Book now
          </button>
        </div>
      </div>
      <img
        src="https://i.ibb.co/YcmXm7b/background.jpg"
        alt="logo"
        className="w-full h-3/4 md:h-full object-cover -z-50"
      />
    </div>
  );
}

export default SemiFooter;
