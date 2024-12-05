import React from "react";
import banner from "../../Images/banner.jpg";
import ConsultToggle from "./ConsultToggle";
import razaSirPosterC from "../../Images/razaSirPosterCropppedpng.png";
import backgroundImage from "../../Images/BGWALLPAPER.jpg";

const Poster1 = () => {
  return (
    <div className="bg-cover   bg-center h-[45vh] lg:h-[63vh] flex justify-center flex-col items-center ">
      <img src={banner} className=" hidden lg:block" alt="banner" />

      {/* mobile version poster  */}
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
        className=" -z- relative w-full flex lg:hidden "
      >
        <img
          src={razaSirPosterC}
          className=" h-[85%] relative -bottom-16 -left-4"
          alt="razaSirPoster"
        />
        <div className=" flex flex-col items-end absolute mb-5 mr-2 bottom-0 w-[70%] right-0">
          <p className=" text-left w-[88%] mb-16">
            Our vision is Simple: Exceptional Healthcare for everyone,no matter
            their wealth.Because every life deserves the best
            care-compassinate,affordable,and world-class,{" "}
            <strong>for everyone</strong>
          </p>
          <div className=" rounded-md bg-white opacity-[0.8]  pl-2 text-base lg:text-lg">
            <p>Dr. Ahmad Raza Khan</p>
            <p>Managing Director</p>
            <p>Fah Health Care Pvt. Ltd.</p>
          </div>
        </div>
      </div>
      <div className=" hidden lg:block absolute top-[60%]">
        <ConsultToggle />
      </div>
    </div>
  );
};

export default Poster1;
