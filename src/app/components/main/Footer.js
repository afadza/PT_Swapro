import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
function Footer() {
  return (
    <div className="w-full h-full">
      <div className="px-4 md:px-[15%] grid grid-cols-3 text-sm">
        <div className="w-full">
          <p className="text-xl font-semibold mb-4">Quick Links</p>
          <div>
            <p>About</p>
            <p>Facility</p>
            <p>Gallery</p>
          </div>
        </div>
        <div className="w-full">
          <p className="text-xl font-semibold mb-4 block md:hidden">
            Categorys
          </p>
          <p className="text-xl font-semibold mb-4 hidden md:block">
            Rooms Categorys
          </p>
          <div>
            <p>4 Bedroom villa</p>
            <p>2 Bedroom villa</p>
            <p>Joglo House</p>
            <p>Bamboo Studio</p>
            <p>Bamboo House</p>
          </div>
        </div>
        <div className="w-full">
          <p className="text-xl font-semibold mb-4">Contact Us</p>
          <div className="flex gap-4 md:hidden">
            <FaMapMarkerAlt />
            <FaPhoneAlt />
            <MdEmail />
          </div>
          <div className="hidden md:block">
            <div className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-0.5" />
              <p>
                J. Bukit Pelangi,Gunung Geulis, Sukoraja, Kab. Bogor, Jawa Barat
              </p>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt />
              <p>+ 62812345878</p>
            </div>
            <div className="flex items-center gap-2">
              <MdEmail />
              <p>example@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
