import React from "react";
import allSpecialitiesData from "../../Data/allSpecialitiesData";
import Footer from "../Common/Footer";
import { Link } from "react-router-dom";

const InfoCard = ({ data }) => {
  const { image, Item } = data;
  console.log("infoooo", image, Item);
  return (
    <Link
      to="/book-appointment"
      className="w-[45%] lg:w-[22%] mx-auto bg-white hover:bg-slate-300 from-slate-400 to-slate-200 cursor-pointer transition-all duration-500 rounded-lg shadow-lg p-2 lg:p-4"
    >
      <div className="flex flex-col items-center dotted-background">
        <img
          src={data?.image} // Replace with your image path
          alt="Cardiac Care"
          className=" w-[40%] my-4 mb-4"
        />
        <h2 className=" text-lg lg:text-xl text-center font-bold mb-2">{data?.Item}</h2>
        {/* <Link
          to="/contact-us"
          className="text-red-600 bg-customColor rounded-md w-full text-center  flex items-center mt-4"
        >
          Know More
        </Link> */}
      </div>
    </Link>
  );
};

const AllSpecilities = () => {
  // console.log("allll", allSpecialitiesData);
  return (
    <div className=" gap-5 text-gray-700  flex flex-col items-center">
      <h1 className=" text-3xl font-garamond font-bold my-2 ">
        Our Specialities
      </h1>
      <div className=" w-full lg:w-[90%] flex flex-wrap gap-3 mx-1 lg:mx-6">
        {allSpecialitiesData.map((item, index) => (
          <InfoCard key={index} data={item} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default AllSpecilities;
