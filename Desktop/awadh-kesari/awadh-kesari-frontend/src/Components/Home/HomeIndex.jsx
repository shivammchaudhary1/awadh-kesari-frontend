import React from "react";
import HeroSection from "../Common/HeroSection";
import LatestNews from "../Home/LatestNews";
import Top3Category from "./Top3Category";

const HomeIndex = () => {
  return (
    <div className=" w-full flex justify-center items-center ">
      <div className=" w-[95%] lg:w-[80%] ">
        <HeroSection />
        <LatestNews />
        <Top3Category/>
      </div>
    </div>
  );
};

export default HomeIndex;
