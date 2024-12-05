import React from "react";
import cancer from "../../Images/DetailPageSpecialityImages/cancer.png";
import Services from "../Common/Services";
import Footer from "../Common/Footer";
import ConsultToggle from "../Home/ConsultToggle";
import { Link } from "react-router-dom";

const CancerCare = () => {
  return (
    <div className="  text-headingColor bg-center gap-10 items-center flex flex-col bg-lightShade">
      <h1 className=" text-headingColor w-[90%] lg:w-[50vw] mt-6  text-2xl lg:text-3xl text-center font-bold ">
        Empowering Hope Through Personalized Cancer Care by Top Medical Experts
      </h1>
      <div className=" font-garamond w-[90vw] gap-2 flex  flex-col lg:flex-row justify-around items-center">
        <div className=" flex flex-col w-[90vw] lg:w-[40vw] text-justify text-lg lg:text-2xl">
          <p>
            At FAH Hospital, we are dedicated to providing the highest quality
            cancer care through a patient-centered approach that prioritizes
            compassion and innovation. Our multidisciplinary team of
            oncologists, surgeons, radiologists, pathologists, and specialized
            nurses collaborates to create personalized treatment plans tailored
            to each patient's unique needs.
          </p>
          <Link
            className=" p-1 lg:p-4 mt-1 lg:mt-6 w-[60vw] lg:w-[20vw] mx-auto  text-white bg-customColor hover:bg-lightCustomColor hover:scale-95 transition-all duration-200   rounded-md text-center "
            to="/book-appointment"
          >
            Book a Consultation
          </Link>
        </div>
        <div>
          <img className=" w-[90vw] lg:w-[25vw]" src={cancer} alt="cancer" />
        </div>
      </div>
      <ConsultToggle />
      <Services />
      <Footer />
    </div>
  );
};

export default CancerCare;
