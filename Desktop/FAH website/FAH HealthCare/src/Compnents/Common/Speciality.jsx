import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import specialities from "../../Data/Specialities";
import Alphabets from "./Alphabets";
import { alphabets } from "../../Data/Alphabets";
// import {alphabets}
// const alphabets = [
//   {
//     alphabet: "A",
//     nav: "",
//   },
//   {
//     alphabet: "B",
//     nav: "",
//   },
//   {
//     alphabet: "C",
//     nav: "",
//   },
//   {
//     alphabet: "D",
//     nav: "",
//   },
//   {
//     alphabet: "E",
//     nav: "",
//   },
//   {
//     alphabet: "F",
//     nav: "",
//   },
//   {
//     alphabet: "G",
//     nav: "",
//   },
//   {
//     alphabet: "H",
//     nav: "",
//   },
//   {
//     alphabet: "I",
//     nav: "",
//   },
//   {
//     alphabet: "J",
//     nav: "",
//   },
//   {
//     alphabet: "K",
//     nav: "",
//   },
//   {
//     alphabet: "L",
//     nav: "",
//   },
//   {
//     alphabet: "M",
//     nav: "",
//   },
//   {
//     alphabet: "N",
//     nav: "",
//   },
//   {
//     alphabet: "O",
//     nav: "",
//   },
//   {
//     alphabet: "P",
//     nav: "",
//   },
//   {
//     alphabet: "Q",
//     nav: "",
//   },
//   {
//     alphabet: "R",
//     nav: "",
//   },
//   {
//     alphabet: "S",
//     nav: "",
//   },
//   {
//     alphabet: "T",
//     nav: "",
//   },
//   {
//     alphabet: "U",
//     nav: "",
//   },
//   {
//     alphabet: "V",
//     nav: "",
//   },
//   {
//     alphabet: "W",
//     nav: "",
//   },
//   {
//     alphabet: "X",
//     nav: "",
//   },
//   {
//     alphabet: "Y",
//     nav: "",
//   },
//   {
//     alphabet: "Z",
//     nav: "",
//   },
// ];

const Speciality = () => {
  return (
    <div
      id="speciality"
      className=" transition-all duration-200 my-14 flex justify-around flex-col lg:flex-row-reverse w-full"
    >
      {/* central section  */}
      <div className="  w-[95vw] mx-4  lg:w-[33%] ">
        {specialities.map((item, index) => {
          return (
            item?.image && (
              <Link
                key={index}
                to={item.nav}
                className=" group  flex justify-around lg:justify-around py-2 border-b border-black w-[95vw] lg:w-full"
              >
                <img
                  className=" bg-transparent "
                  width={50}
                  src={item?.image}
                  alt="imgg"
                />
                <div className=" group-hover:text-customColor  w-[60%] flex items-center justify-around">
                  <p> {item.Item} </p>
                  <p className=" group-hover:translate-x-4 transition-all duration-300 pr-0 lg:pr-5 text-lg">
                    <FaArrowCircleRight />
                  </p>
                </div>
              </Link>
            )
          );
        })}
        <Link
          to="/all-services"
          className=" cursor-pointer group text-center    flex py-4 lg:pt-16 gap-3 items-center"
        >
          <p className=" ">View All Specialities</p>
          <p className=" group-hover:translate-x-4 transition-all duration-300 text-customColor text-lg">
            <FaArrowCircleRight />
          </p>
        </Link>
      </div>
      {/* alphabets search division/  */}
      <div className=" w-full lg:w-[30%] mx- border-l border-2 p-0 lg:p-4">
        {/* <h2 className=" text-3xl mx-auto">Search By</h2> */}
        <div className=" flex justify-around items-center">
          <div className=" cursor-pointer rounded-full border  hover:border-customColor text-white hover:text-headingColor bg-customColor px-2 p-1">
            {" "}
            Ailments
          </div>
          <div className=" cursor-pointer rounded-full border border-black  hover:border-customColor   text-white bg-customColor px-2 p-1">
            {" "}
            Treatments
          </div>
          <div className=" cursor-pointer rounded-full border border-black   hover:border-customColor text-white bg-customColor px-2 p-1">
            {" "}
            Technologies
          </div>
        </div>
        <div className=" flex justify-center my-5 gap-1 flex-wrap">
          {alphabets.map((item, index) => (
            <Alphabets key={index} item={item} />
          ))}
        </div>
        <Link
          to="/all-services"
          className=" cursor-pointer pl-4 group w-full lg:w-[60%]  flex  gap-3 items-center"
        >
          <p>View All Ailments</p>
          <p className=" group-hover:translate-x-4 transition-all duration-300 text-customColor text-lg">
            <FaArrowCircleRight />
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Speciality;
