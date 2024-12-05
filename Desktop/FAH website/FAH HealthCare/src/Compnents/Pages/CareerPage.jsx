import React from "react";
import Footer from "../Common/Footer";
import Vacancies from "./Vacancies";
import CareerForm from "../Forms/CareerForm";

const CareerPage = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center bg-gradient-to-b from-lightCustomColor to-lightShade ">
      <div className="flex flex-col  justify-center  lg:flex-row">
        <Vacancies />
        <CareerForm />
      </div>
      <Footer />
    </div>
  );
};

export default CareerPage;
