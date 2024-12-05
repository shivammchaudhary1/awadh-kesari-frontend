import React from "react";
import ortho from "../../Images/DetailPageSpecialityImages/ortho.png";
import Services from "../Common/Services";
import Footer from "../Common/Footer";
import ConsultToggle from "../Home/ConsultToggle";
import { Link } from "react-router-dom";

const OrthoPaedics = () => {
  return (
    <div className="  text-headingColor bg-center gap-12 items-center flex flex-col bg-lightShade ">
      <h1 className=" text-headingColor w-[90%] lg:w-[50vw] mt-6  text-4xl text-center font-bold ">
        Personalized Cardiac Care by Top Medical Experts: Empowering Hope
      </h1>
      <div className=" font-serif w-[90vw] gap-2 flex  flex-col lg:flex-row justify-around items-center">
        <div className=" flex flex-col w-[90vw] lg:w-[40vw] text-center text-lg lg:text-2xl">
          <p>
            {" "}
            At FAH Hospital, we are dedicated to providing the highest quality
            care in orthopaedics through a patient-centered approach that
            prioritizes compassion and innovation. Our multidisciplinary team,
            consisting of orthopaedic surgeons, radiologists, pathologists,
            physical therapists, and specialized nurses, collaborates to create
            personalized treatment plans tailored to each patient's unique
            needs. Orthopaedic surgeons diagnose and treat musculoskeletal
            conditions and perform advanced surgical procedures. Radiologists
            provide detailed imaging of bones and joints, and pathologists
            analyze tissue samples for accurate diagnosis.
          </p>
          <Link
            className=" p-1 lg:p-4 mt-1 lg:mt-6 w-[60vw] lg:w-[20vw] mx-auto  text-white bg-customColor hover:bg-lightCustomColor hover:scale-95 transition-all duration-200   rounded-md text-center "
            to="/book-appointment"
          >
            Book a Consultation
          </Link>
        </div>
        <div>
          <img className=" w-[90vw] lg:w-[25vw]" src={ortho} alt="cardiac" />
        </div>
      </div>
      <ConsultToggle />
      <Services />
      <Footer />
    </div>
  );
};

export default OrthoPaedics;
