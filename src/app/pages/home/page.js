"use client";
import React from "react";
import Main from "@/app/Layout/Main";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Checking from "@/app/components/home/Checking";
import About from "@/app/components/home/About";
import VillaStudio from "@/app/components/home/VillaStudio";
import Vacilities from "@/app/components/home/Vacilities";
import Review from "@/app/components/home/Review";
import Gallery from "@/app/components/home/Gallery";

function page() {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const marginTop = Math.max(-100, -scrollY * 0.1);

      controls.start({ marginTop });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);
  return (
    <Main>
      <motion.div
        initial={{ marginTop: 0 }}
        animate={controls}
        transition={{ duration: 0.2 }}
        className="w-[90%]  md:w-[70%] relative mx-auto"
        style={{
          zIndex: 1,
        }}
      >
        <Checking />
      </motion.div>
      <div className="w-[90%]  md:w-[70%] mx-auto">
        <About />
      </div>
      <div className="w-[90%]  md:w-[70%] mx-auto">
        <VillaStudio />
      </div>
      <div className="w-[90%]  md:w-[70%] mx-auto mt-10">
        <Vacilities />
      </div>
      <div className="w-[90%]  md:w-[70%] mx-auto mt-28">
        <Review />
      </div>
      <div className="w-[90%]  md:w-[70%] mx-auto mt-28">
        <Gallery />
      </div>
    </Main>
  );
}

export default page;
