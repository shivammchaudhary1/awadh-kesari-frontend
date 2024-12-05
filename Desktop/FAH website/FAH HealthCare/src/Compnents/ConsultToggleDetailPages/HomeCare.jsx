import React, { useState } from "react";
import backgroundImage from "../../Images/ToggelBGimages/HomeCare.jpg";
import RequestCallBack from "../Forms/RequestCallBack";
import { FaArrowCircleRight } from "react-icons/fa";
import Footer from "../Common/Footer";
import { Link } from "react-router-dom";

const HomeCare = () => {
  const [showMore, setShowMore] = useState(true);
  return (
    <div>
      <div
        className="h-screen bg-cover bg-center flex flex-col lg:flex-row justify-around items-center gap-10"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className=" flex flex-col gap-2 font-garamond w-[90%] lg:w-[30%] pt-26 lg:pt-0 text-2xl lg:text-lg text-center font-bold ">
          <p className="leading-relaxed font-garamond  pt-26 lg:pt-0 text-2xl lg:text-4xl text-center font-bold">
            Home Care
          </p>
          <Link
            className=" p-2 lg:p-4 mt-2 lg:mt-6 mx-2 lg:mx-10 text-white hover:bg-customColor hover:scale-95 transition-all duration-200 bg-lightCustomColor  rounded-md text-center "
            to="/book-appointment"
          >
            Book a Consultation
          </Link>
        </div>
        {/* call back request form  this is imported from ../components/forms */}
        <RequestCallBack />
      </div>
      <div className=" flex p-6 py-6 lg:py-10 flex-col lg:flex-row bg-slate-200 justify-center items-center">
        <h1 className=" text-4xl w-full lg:w-[35vw] text-center font-bold">
          About Fah's Home Care
        </h1>
        <div className= {`flex ${showMore?"h-[62vh]":"h-full"} font-garamond lg:text-left text-justify lg:h-[31vh] flex-col justify-center items-start px-6 w-[95vw] lg:w-[60vw] `}>
          {showMore ? (
            <p>
              Fah Hospital Homecare is a trusted partner in promoting well-being,
              ensuring that quality healthcare is always within reach. Our care
              doesn’t end at the hospital exit. We continue to give you the best
              care possible even when you are at home. Fah Hospital Homecare offers
              comprehensive and compassionate healthcare solutions in the
              comfort of the patient’s home....
            </p>
          ) : (
            <p>
              Fah Hospital Homecare is a trusted partner in promoting well-being,
              ensuring that quality healthcare is always within reach. Our care
              doesn’t end at the hospital exit. We continue to give you the best
              care possible even when you are at home. Fah Hospital Homecare offers
              comprehensive and compassionate healthcare solutions in the
              comfort of the patient’s home. With a commitment to care, we offer
              a range of services, including expert clinical procedures, patient
              attendant services, and in-home doctor consultations. Fah Hospital
              Homecare specialises in physiotherapy and rehabilitation by
              bringing tailored recovery programs to the patient’s doorstep.
              Fah Hospital’s ICU@Home services ensure advanced care with
              round-the-clock monitoring, while home sample collection and
              medication management offer convenience for the patients and peace
              of mind for the caregivers.
            </p>
          )}
          <button
            className=" group flex justify-center items-center gap-4 py-2 text-customColor"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Show More" : "Show less"}
            <FaArrowCircleRight className="  transition-all duration-200  group-hover:translate-x-5" />
          </button>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default HomeCare;
