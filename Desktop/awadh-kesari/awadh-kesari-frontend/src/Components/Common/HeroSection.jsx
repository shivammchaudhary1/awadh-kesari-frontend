import React from "react";
import bookAtestRideForm from "../../bookAtestRideForm.png";

const HeroSection = () => {
  return (
    <div className=" mx-auto my-4 flex flex-col justify-between items-center lg:flex-row gap-2">
      <div className="relative w-full lg:w-[55%] h-full group overflow-hidden">
        <img
          src={bookAtestRideForm}
          alt="Smartwatch"
          className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-110"
        />
        <div className="absolute h-[50%] inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>
        <div className="absolute top-0 left-0 p-4 text-white z-20">
          <span className="bg-gray-800 px-2 py-1 rounded">GADGET</span>
          <h1 className="mt-2 text-2xl font-bold">
            Samsung Gear S3 review: A whimper, when smartwatches need a bang
          </h1>
          <p className="mt-1">March 16, 2017</p>
        </div>
      </div>

      <div className=" w-full lg:w-[45%] gap-2 flex flex-col  justify-between ">
        <div className="relative group overflow-hidden w-full lg:w-[81%]">
          <img
            src={bookAtestRideForm}
            alt="Smartwatch"
            className="w-full object-cover transition-transform duration-500 transform group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>
          <div className="absolute top-0 left-0 p-4 text-white z-20">
            <span className="bg-gray-800 px-2 py-1 rounded">GADGET</span>
            <h1 className="mt-2 text-2xl font-bold">
              Samsung Gear S3 review: A whimper, when smartwatches need a bang
            </h1>
            <p className="mt-1">March 16, 2017</p>
          </div>
        </div>
        <div className=" gap-2 justify-between lg:justify-start flex">
          <div className="relative group overflow-hidden max-w-[40%] ">
            <img
              src={bookAtestRideForm}
              alt="Smartwatch"
              className=" transition-transform duration-500 transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>
            <div className="absolute top-0 left-0 p-4 text-white z-20">
              <span className="bg-gray-800 px-2 py-1 rounded">GADGET</span>
              <h1 className="mt-2 text-lg font-bold">
                Samsung Gear S3 review: A whimper, when smartwatches need a bang
              </h1>
              <p className="mt-1">March 16, 2017</p>
            </div>
          </div>
          <div className="relative group overflow-hidden max-w-[40%]  ">
            <img
              src={bookAtestRideForm}
              alt="Smartwatch"
              className=" transition-transform duration-500 transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>
            <div className="absolute top-0 left-0 p-4 text-white z-20">
              <span className="bg-gray-800 px-2 py-1 rounded">GADGET</span>
              <h1 className="mt-2  text-lg font-bold">
                Samsung Gear S3 review: A whimper, when smartwatches need a bang
              </h1>
              <p className="mt-1">March 16, 2017</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
