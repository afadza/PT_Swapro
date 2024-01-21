import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="w-full h-screen pt-20">
      <div data-aos="fade-down" className="flex justify-between w-[90%]">
        <p className="text-xl md:text-4xl font-bold">
          About Villa
          <spa className="text-xl md:text-4xl font-bold text-emerald-700">
            {" "}
            Amadaha
          </spa>
        </p>
        <img
          src="https://i.ibb.co/872vHvD/pngwing-com-2.png"
          alt="logo"
          className="w-20 h-20 hidden md:blok object-cover -mt-2 -ml-2"
        />
      </div>
      <div className="w-full flex flex-col md:flex-row mt-10 md:mt-14">
        <div className="mr-0 md:mr-20">
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className=" w-full md:w-[300px] h-[300px] border-emerald-600 border ml-2"
          >
            <img
              src="https://i.ibb.co/YcmXm7b/background.jpg"
              alt="logo"
              className="w-full h-full object-cover -mt-2 -ml-2"
            />
          </div>
        </div>
        <div>
          <div data-aos="fade-left" className="mt-10 md:mt-0">
            <p>Villa Amadaha consist of Two Luxury Villas and one</p>
            <p>Traditional Javanese House surrounded by a </p>
            <p>tranquil rain forest setting, traditional Indonesian</p>
            <p>houses anda a farm overlooking the area.</p>
          </div>
          <div data-aos="fade-up" className="flex gap-6 mt-10 md:mt-28">
            <div className="flex flex-col gap-2">
              <p className="text-3xl font-semibold">
                + 6 <span className="text-xl text-emerald-700">/ Room</span>
              </p>
              <p>Room options</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-3xl font-semibold">
                + 2{" "}
                <span className="text-xl text-emerald-700">/ Vacilities</span>
              </p>
              <p>Vacilities available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
