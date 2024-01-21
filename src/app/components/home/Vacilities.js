import React from "react";

function Vacilities() {
  return (
    <div>
      <div className="w-full h-full md:h-60 flex flex-col md:flex-row">
        <img
          src="https://i.ibb.co/872vHvD/pngwing-com-2.png"
          alt="logo"
          className="w-20 h-20 object-cover absolute hidden md:block -ml-10 -mt-10"
        />
        <div className="w-full md:w-[40%] md:text-start text-center h-full relative">
          <p className="text-3xl font-semibold">
            Various<span className="text-emerald-700"> Facilities</span> that
            you can enjoy
          </p>
          <p className="text-gray-500 text-sm mt-2">
            We bring you together with your dream holiday
          </p>
          <button className="text-white px-6 hidden md:block py-2 bg-emerald-700 rounded-md mt-6">
            Explore
          </button>
        </div>
        <div className="w-full flex gap-2 mt-4 md:hidden">
          <img
            src="https://i.ibb.co/YcmXm7b/background.jpg"
            alt="logo"
            className="w-1/2 h-40 md:h-full object-cover"
          />
          <img
            src="https://i.ibb.co/YcmXm7b/background.jpg"
            alt="logo"
            className="w-1/2 h-40 md:h-full object-cover"
          />
        </div>
        <button className="text-white px-6 md:hidden block py-2 bg-emerald-700  mt-6">
            Explore
          </button>
        <div className="hidden md:flex gap-10 w-full md:w-[60%] md:relative">
          <div className="w-full">
            <img
              src="https://i.ibb.co/872vHvD/pngwing-com-2.png"
              alt="logo"
              className="w-20 h-20 object-cover md:absolute bottom-0 -mb-8 -ml-10"
            />
            <img
              src="https://i.ibb.co/YcmXm7b/background.jpg"
              alt="logo"
              className="w-full h-full object-cover hidden md:block relative"
            />
          </div>
          <img
            src="https://i.ibb.co/YcmXm7b/background.jpg"
            alt="logo"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="w-[40%] bg-gray-100 absolute hidden md:block h-60 right-0 -mt-48 -z-50" />
    </div>
  );
}

export default Vacilities;
