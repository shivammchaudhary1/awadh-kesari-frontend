import React from "react";
import cardiac from "../../Images/DetailPageSpecialityImages/cardiac.png";
import Services from "../Common/Services";
import Footer from "../Common/Footer";
import ConsultToggle from "../Home/ConsultToggle";
import { Link } from "react-router-dom";

const CardiacCare = () => {
  return (
    <div className="font-garamond   text-slate-800 bg-center gap-2 lg:gap-12  items-center flex flex-col bg-lightShade ">
      <h1 className=" text-slate-700 w-[90%] lg:w-[50vw] mt-6 text-xl  lg:text-4xl text-center font-bold ">
        Empowering Hope Through Personalized cardiac Care By best medical
        experts
      </h1>
      <div className=" font-garamond w-[90vw] gap-2 flex  flex-col lg:flex-row justify-around items-center">
        <div className=" flex flex-col w-[96vw] lg:w-[40vw] text-center text-lg lg:text-2xl">
          <p>
            {" "}
            At FAH Hospital, we are dedicated to providing the highest quality
            cardiac care through a patient-centered approach that prioritizes
            compassion and innovation. Our multidisciplinary team, consisting of
            cardiologists, cardiac surgeons, radiologists, pathologists, and
            specialized nurses, collaborates to create personalized treatment
            plans tailored to each patient's unique needs. Cardiologists
            diagnose and manage heart conditions, while cardiac surgeons perform
            advanced surgical procedures. Radiologists provide detailed cardiac
            imaging, and pathologists analyze tissue samples for accurate
            diagnosis.
          </p>
          <Link
            className=" p-1 lg:p-4 mt-1 lg:mt-6 w-[60vw] lg:w-[20vw] mx-auto  text-white bg-customColor hover:bg-lightCustomColor hover:scale-95 transition-all duration-200   rounded-md text-center "
            to="/book-appointment"
          >
            Book a Consultation
          </Link>
        </div>

        <div>
          <img className=" w-[90vw] lg:w-[25vw]" src={cardiac} alt="cardiac" />
        </div>
      </div>
      <ConsultToggle />
      <Services />
      <Footer />
    </div>
  );
};

export default CardiacCare;
