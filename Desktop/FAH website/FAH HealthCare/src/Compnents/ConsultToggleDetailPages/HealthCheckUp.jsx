import React, { useState } from "react";
import backgroundImage from "../../Images/ToggelBGimages/HealthCheck.webp";
import RequestCallBack from "../Forms/RequestCallBack";
import { FaArrowCircleRight } from "react-icons/fa";
import Footer from "../Common/Footer";
import { Link } from "react-router-dom";

const HealthCheckUp = () => {
  const [showMore, setShowMore] = useState(true);
  return (
    <div>
      <div
        className=" bg-cover bg-center flex flex-col lg:flex-row justify-around items-center gap-6 py-2"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className=" flex flex-col gap-2 font-garamond w-[90%] lg:w-[30%] pt-26 lg:pt-0 text-2xl lg:text-lg text-center font-bold ">
          <p className="leading-relaxed font-garamond  pt-26 lg:pt-0 text-2xl lg:text-4xl text-center font-bold">
            India's Only Preventive Health Program lead by best medical experts
          </p>
          <Link
            className=" p-1 lg:p-4 mt-2 lg:mt-6 mx-2 lg:mx-10 text-white hover:bg-customColor hover:scale-95 transition-all duration-200 bg-lightCustomColor  rounded-md text-center "
            to="/book-appointment"
          >
            Book a Consultation
          </Link>
        </div>
        {/* call back request form  this is imported from ../components/forms */}
        <RequestCallBack />
      </div>
      <div className="   lg:pt-0 font-garamond flex p-6 flex-col lg:flex-row bg-slate-200 justify-center items-center">
        <h1 className="  text-lg lg:text-4xl w-full lg:w-[35vw] text-center font-bold">
          About Fah's Preventive Health Program
        </h1>
        <div className={` font-sans flex ${showMore?"h-[40vh] ":"h-[80vh] "} lg:h-[25vh] lg:text-left text-justify justify-start lg:justify-center flex-col items-start px-6 mt-0 mb-14 lg:mb-0  lg:mt-6 w-[95vw] lg:w-[60vw] `}>
          {showMore ? (
            <p>
              At Fah Hospital, we have transformed the traditional health checks
              from a mere data-gathering checklist into a fully integrated,
              comprehensive 360° evaluation, including physical, mental and
              lifestyle assessments by some of the best medical experts, with
              help of cutting edge diagnostics and radiology services...
            </p>
          ) : (
            <p>
              At Fah Hospital, we have transformed the traditional health checks
              from a mere data-gathering checklist into a fully integrated,
              comprehensive 360° evaluation, including physical, mental and
              lifestyle assessments by some of the best medical experts, with
              help of cutting edge diagnostics and radiology services.Our health
              assessment takes a holistic approach to all aspects, including
              lifestyle, nutrition, physical posture, stress, genomics, as well
              as mental and social wellness.The highly-qualified team helps you
              understand medical reports, explaining the underlying risks and
              working along with them to formulate a health plan based on
              gender, age, lifestyle, previous medical history and current
              health check results.
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
      <Footer />
    </div>
  );
};

export default HealthCheckUp;
