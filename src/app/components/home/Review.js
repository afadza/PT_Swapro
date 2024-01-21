import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";

function Review() {
  return (
    <div className="w-full h-full">
      <div className="p-8 rounded-full bg-emerald-50 absolute -mt-16">
        <RiDoubleQuotesL className="text-emerald-700 text-5xl" />
      </div>
      <div className="flex w-full justify-between relative pl-20">
        <div className="text-3xl font-semibold">
          <p>
            What our <span className="text-emerald-700">Customer</span>{" "}
          </p>
          <p>are saying</p>
        </div>
        <div className="text-3xl hidden md:flex">
          <GoArrowLeft />
          <GoArrowRight className="text-emerald-700" />
        </div>
      </div>
      <div className="w-full flex gap-4 mt-4">
        <div className="w-full">
          <img
            src="https://i.ibb.co/872vHvD/pngwing-com-2.png"
            alt="logo"
            className="w-20 h-20 object-cover absolute bottom-0 -mb-8 -ml-10"
          />
          <div className="w-full shadow-lg relative rounded-md py-14 px-6">
            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
            <div className="flex items-center mt-4 gap-2">
              <img
                src="https://i.ibb.co/YcmXm7b/background.jpg"
                alt="logo"
                className="w-10 h-10 object-cover rounded-full"
              />
              <div>
                <p className="text-emerald-700 font-semibold">Philip Press</p>
                <p className="text-gray-500 text-sm">Traveller</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full hidden md:block shadow-lg rounded-md py-14 px-6">
          <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
          <div className="flex items-center mt-4 gap-2">
            <img
              src="https://i.ibb.co/YcmXm7b/background.jpg"
              alt="logo"
              className="w-10 h-10 object-cover rounded-full"
            />
            <div>
              <p className="text-emerald-700 font-semibold">Philip Press</p>
              <p className="text-gray-500 text-sm">Traveller</p>
            </div>
          </div>
        </div>
        <div className="w-full hidden md:block shadow-lg rounded-md py-14 px-6">
          <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
          <div className="flex items-center mt-4 gap-2">
            <img
              src="https://i.ibb.co/YcmXm7b/background.jpg"
              alt="logo"
              className="w-10 h-10 object-cover rounded-full"
            />
            <div>
              <p className="text-emerald-700 font-semibold">Philip Press</p>
              <p className="text-gray-500 text-sm">Traveller</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-3xl items-end text-end justify-end mt-10 md:hidden flex">
          <GoArrowLeft />
          <GoArrowRight className="text-emerald-700" />
        </div>
    </div>
  );
}

export default Review;
