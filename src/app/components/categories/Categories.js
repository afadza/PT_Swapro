import { Dropdown } from "flowbite-react";
import { FaBed } from "react-icons/fa";
import { IoPeopleOutline } from "react-icons/io5";

function Categories() {
  return (
    <div className="w-full  items-center">
      <div className="w-full flex justify-between">
        <p className="text-xl md:text-3xl text-gray-500 font-semibold">
          Our choise of <span className="text-emerald-700">Villa Studios</span>
        </p>
        <div className="flex gap-4 items-center">
          <p className="text-emerald-700 hidden md:block">Sorting :</p>
          <Dropdown
            label="Popularity"
            dismissOnClick={false}
            inline
            style={{ backgroundColor: "transparent", padding: 0, zIndex: 9999 }}
            theme={"light"}
          >
            <Dropdown.Item>About</Dropdown.Item>
            <Dropdown.Item>Villa Categories</Dropdown.Item>
            <Dropdown.Item>Gallery</Dropdown.Item>
          </Dropdown>
        </div>
      </div>
      <img
        src="https://i.ibb.co/872vHvD/pngwing-com-2.png"
        alt="logo"
        className="w-20 h-20 object-cover absolute hidden md:block -ml-10"
      />
      <div className="w-full mt-10 flex flex-col gap-4 md:gap-8 relative">
        <div className="w-full flex gap-8">
          <div className="shadow-lg rounded-md p-4 w-full bg-white  z-50">
            <img
              src="https://i.ibb.co/YcmXm7b/background.jpg"
              alt="logo"
              className="w-full h-40 md:h-64 object-cover -z-50 rounded-sm"
            />
            <p className="text-emerald-700 mt-4">4 Bedroom villa</p>
            <div className="md:flex w-full justify-between my-4 hidden">
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
              <p className="text-xl text-emerald-700 font-semibold mt:4 md:mt-0">
                Rp. 3.749.000{" "}
                <span className="text-gray-500 text-sm hidden md:flex font-thin">
                  /night
                </span>
              </p>
            </div>
          </div>
          <div className="shadow-lg rounded-md p-4 w-full bg-white  z-50">
            <img
              src="https://i.ibb.co/YcmXm7b/background.jpg"
              alt="logo"
              className="w-full h-40 md:h-64 object-cover -z-50 rounded-sm"
            />
            <p className="text-emerald-700 mt-4">4 Bedroom villa</p>
            <div className="md:flex w-full justify-between my-4 hidden">
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
              <p className="text-xl text-emerald-700 font-semibold mt:4 md:mt-0">
                Rp. 3.749.000{" "}
                <span className="text-gray-500 text-sm hidden md:flex font-thin">
                  /night
                </span>
              </p>
            </div>
          </div>
          <div className="shadow-lg hidden md:block rounded-md p-4 w-full">
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
      </div>
      <div className="w-full mt-4 md:hidden flex flex-col gap-4 md:gap-8 relative">
        <div className="w-full flex gap-8">
          <div className="shadow-lg rounded-md p-4 w-full bg-white  z-50">
            <img
              src="https://i.ibb.co/YcmXm7b/background.jpg"
              alt="logo"
              className="w-full h-40 md:h-64 object-cover -z-50 rounded-sm"
            />
            <p className="text-emerald-700 mt-4">4 Bedroom villa</p>
            <div className="md:flex w-full justify-between my-4 hidden">
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
              <p className="text-xl text-emerald-700 font-semibold mt:4 md:mt-0">
                Rp. 3.749.000{" "}
                <span className="text-gray-500 text-sm hidden md:flex font-thin">
                  /night
                </span>
              </p>
            </div>
          </div>
          <div className="shadow-lg rounded-md p-4 w-full bg-white  z-50">
            <img
              src="https://i.ibb.co/YcmXm7b/background.jpg"
              alt="logo"
              className="w-full h-40 md:h-64 object-cover -z-50 rounded-sm"
            />
            <p className="text-emerald-700 mt-4">4 Bedroom villa</p>
            <div className="md:flex w-full justify-between my-4 hidden">
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
              <p className="text-xl text-emerald-700 font-semibold mt:4 md:mt-0">
                Rp. 3.749.000{" "}
                <span className="text-gray-500 text-sm hidden md:flex font-thin">
                  /night
                </span>
              </p>
            </div>
          </div>
          <div className="shadow-lg hidden md:block rounded-md p-4 w-full">
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
      </div>
    </div>
  );
}

export default Categories;
