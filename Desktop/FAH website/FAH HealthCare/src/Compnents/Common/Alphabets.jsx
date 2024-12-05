import React from "react";
import { Link } from "react-router-dom";

const Alphabets = ({item}) => {
  return (
    <Link
      to={`treatment/${item.alphabet}`}
     
      className=" cursor-pointer flex justify-center  p-4 w-16 hover:bg-customColor hover:text-white  rounded-full bg-white border"
    >
      {item.alphabet}{" "}
    </Link>
  );
};

export default Alphabets;
