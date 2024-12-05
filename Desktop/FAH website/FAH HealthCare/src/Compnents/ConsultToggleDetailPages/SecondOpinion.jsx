import React, { useState } from "react";
import backgroundImage from "../../Images/ToggelBGimages/doctorsBgImage.jpg";
import RequestCallBack from "../Forms/RequestCallBack";
import { FaArrowCircleRight } from "react-icons/fa";
import Footer from "../Common/Footer";
import { Link } from "react-router-dom";

const SecondOpinion = () => {
  const [showMore, setShowMore] = useState(true);
  return (
    <div>
      <div
        className="h-screen bg-cover bg-center flex-col lg:flex-row flex justify-around items-center gap-10"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className=" flex flex-col gap-2 font-garamond w-[90%] lg:w-[30%] pt-26 lg:pt-0 text-2xl lg:text-lg text-center font-bold ">
          <p className="leading-relaxed font-garamond   lg:pt-0 text-lg lg:text-4xl text-center font-bold">
            Get a Second opinion from Anywhere Anytime
          </p>
          <Link
            className=" p-1 lg:p-4 mt-2 lg:mt-4 mx-2 lg:mx-10 text-white hover:bg-customColor hover:scale-95 transition-all duration-200 bg-lightCustomColor  rounded-md text-center "
            to="/book-appointment"
          >
            Book a Consultation
          </Link>
        </div>
        {/* call back request form  this is imported from ../components/forms */}
        <RequestCallBack />
      </div>
      <div className="  flex p-6 py-2 lg:py-2 flex-col lg:flex-row  bg-slate-200 justify-center items-center">
        <div className=" flex flex-col gap-2 font-garamond w-[90%] lg:w-[30%] pt-26 lg:pt-0 text-2xl lg:text-lg text-center font-bold ">
          <p className="leading-relaxed font-garamond   lg:pt-0 text-2xl lg:text-4xl text-center font-bold">
            About Second Opinion
          </p>
        </div>
        <div className={`flex ${showMore?"h-[35vh]":"40vh"} font-garamond lg:text-left text-justify lg:h-[25vh] flex-col justify-center items-start px-6 w-[95vw] lg:w-[60vw] `}>
          {showMore ? (
            <p>
              Prioritising your health means understanding all aspects of the
              condition and proposed treatment before making any decisions. If
              you're concerned about interpreting your medical reports
              accurately, we have got you covered...
            </p>
          ) : (
            <p>
              Prioritising your health means understanding all aspects of the
              condition and proposed treatment before making any decisions. If
              you're concerned about interpreting your medical reports
              accurately, we have got you covered. With our Second Opinion
              programme, India's top clinical experts will provide a thorough
              review and personalised guidance based on your reports. Access
              some of the best minds in healthcare through our verified opinions
              and ensure informed decision-making.
            </p>
          )}
          <button
            className=" group flex justify-center items-center gap-4 py-4 text-customColor"
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

export default SecondOpinion;
