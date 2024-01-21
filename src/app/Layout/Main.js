"use client";
import SemiFooter from "@/app/components/main/SemiFooter";
import Footer from "@/app/components/main/Footer";
import Hero from "../components/main/Hero";
function Main({ children }) {
  return (
    <div className="w-full h-full">
      <Hero />
      <div className="w-full h-full">{children}</div>
      <div className="w-full mt-28">
        <SemiFooter />
      </div>
      <div className="w-full mb-10 md:mt-10">
        <Footer />
      </div>
    </div>
  );
}

export default Main;
