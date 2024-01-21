"use client";

import React from "react";
import Main from "@/app/Layout/Main";
import Categories from "@/app/components/categories/Categories";
import Review from "@/app/components/home/Review";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Checking from "@/app/components/home/Checking";

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
        className="w-[90%]  md:w-[70%] relative mx-auto block md:hidden"
        style={{
          zIndex: 1,
        }}
      >
        <Checking />
      </motion.div>
      <div className="w-[90%]  md:w-[80%] mx-auto mt-10">
        <Categories />
      </div>
      <div className="w-[90%]  md:w-[80%] mx-auto mt-32">
        <Review />
      </div>
    </Main>
  );
}

export default page;
