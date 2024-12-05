import React from "react";
import gastro from "../../Images/DetailPageSpecialityImages/gastro.png";
import Services from "../Common/Services";
import Footer from "../Common/Footer";
import ConsultToggle from "../Home/ConsultToggle";
import { Link } from "react-router-dom";

const GastroSciences = () => {
  return (
    <div className="  text-headingColor bg-center gap-12 items-center flex flex-col bg-lightShade ">
      <h1 className=" text-headingColor w-[90%] lg:w-[50vw] mt-6  text-4xl text-center font-bold ">
        Empowering Hope Through Personalized cardiac Care By best medical
        experts
      </h1>
      <div className=" font-serif w-[90vw] gap-2 flex  flex-col lg:flex-row justify-around items-center">
        <div className=" flex flex-col w-[90vw] lg:w-[45vw] text-center text-lg lg:text-2xl">
          <p>
            
            At FAH Hospital, we are dedicated to providing the highest quality
            care in gastrosciences through a patient-centered approach that
            prioritizes compassion and innovation. Our multidisciplinary team,
            consisting of gastroenterologists, gastrointestinal surgeons,
            radiologists, pathologists, and specialized nurses, collaborates to
            create personalized treatment plans tailored to each patient's
            unique needs. Gastroenterologists diagnose and manage digestive
            conditions, while gastrointestinal surgeons perform advanced
            surgical procedures.
          </p>
          <Link
            className=" p-1 lg:p-4 mt-1 lg:mt-6 w-[60vw] lg:w-[20vw] mx-auto  text-white bg-customColor hover:bg-lightCustomColor hover:scale-95 transition-all duration-200   rounded-md text-center "
            to="/book-appointment"
          >
            Book a Consultation
          </Link>
        </div>
        <div>
          <img className=" w-[90vw] lg:w-[25vw]" src={gastro} alt="cardiac" />
        </div>
      </div>
      <ConsultToggle />
      <Services />
      <Footer />
    </div>
  );
};

export default GastroSciences;
