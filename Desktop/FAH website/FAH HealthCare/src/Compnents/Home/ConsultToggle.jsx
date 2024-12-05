import React from "react";
import { Link } from "react-router-dom";

const ToggleData = [
  {
    image: "",
    Data: "Book appointment",
    nav: "/book-appointment",
  },
  {
    image: "",
    Data: "Second opinion",
    nav: "/second-opinion",
  },
  {
    image: "",
    Data: "Get health checkup",
    nav: "/health-check",
  },
  {
    image: "",
    Data: "Book consultantion",
    nav: "/book-appointment",
  },
  {
    image: "",
    Data: "Home care",
    nav: "/home-care",
  },
  {
    image: "",
    Data: "Book  Test",
    nav: "/book-appointment",
  },
];

const ConsultToggle = () => {
  return (
    <div className="flex justify-center items-center font-serif flex-col">
      {/* <h1 className=" text-4xl text-headingColor my-4 font-bold">Our Services</h1> */}
      <div className=" w-[80vw] my-4 border-2 lg:mx-16 text-headingColor rounded-md bg-white border-headingColor flex flex-col lg:flex-row justify-between  items-center ">
        {ToggleData.map((item, index) => {
          return (
            <Link
              to={item.nav}
              key={index}
              className={`${
                index === 0 ? "bg-customColor text-white" : " bg-white "
              } transition-all duration-500  cursor-pointer hover:bg-customColor hover:text-white border-none  py-6 lg:py-6 h-full text-center flex justify-center items-center w-full `}
            >
              <img src={item.image} alt="" />
              <p> {item.Data} </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ConsultToggle;
