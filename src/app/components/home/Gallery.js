import React from "react";

function Gallery() {
  return (
    <div className="w-full h-full">
      <p className="text-3xl font-semibold text-center mb-8">
        Our <span className="text-emerald-700">Gallery</span>
      </p>
      <div className="w-full h-60 flex gap-4">
        <div className="w-full h-full">
          <img
            src="https://i.ibb.co/YcmXm7b/background.jpg"
            alt="logo"
            className="w-full h-[286px] object-cover"
          />
        </div>
        <div className="w-full h-full flex flex-col gap-4">
          <img
            src="https://i.ibb.co/YcmXm7b/background.jpg"
            alt="logo"
            className="w-full h-[135px] object-cover"
          />
          <img
            src="https://i.ibb.co/YcmXm7b/background.jpg"
            alt="logo"
            className="w-full h-[135px] object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
