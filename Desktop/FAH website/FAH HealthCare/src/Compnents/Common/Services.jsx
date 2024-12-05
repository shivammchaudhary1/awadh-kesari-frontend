import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import servicesData from "../../Data/ServiceData";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  return (
    <div className=" transition-all cursor-pointer  text-customColor duration-200  shadow-blue-500/50  w-[90vw] lg:w-[22vw] h-[26rem] lg:h-[28rem] rounded-md service-card  bg-white p-4 ">
      <img className=" rounded-md overflow-hidden transition-all duration-300 " src={service.image} alt={service.heading} />
      <div className="  gap-2 my-2 lg:my-6 ">
        <h3 className=" my-5 text-2xl font-bold ">{service.heading}</h3>
        <p className="  text-slate-500 font-sans">{service.subheading}</p>
      </div>
      <Link
        to={`${service.nav.navlink}`}
        className="font-bold group w-full lg:w-[50%] flex justify-between items-center"
      >
        <span className="flex justify-center items-center gap-5 group-hover:text-customColor">
          {service.nav.navTitle}
          <FaArrowCircleRight className="group-hover:translate-x-5 group-hover:text-customColor transition-all duration-200" />
        </span>
      </Link>
    </div>
  );
};

const Services = () => {
  return (
    <div
      id="services"
      className="  w-full font-garamond flex bg-lightShade gap-3 flex-col justify-center items-center py-4"
    >
      <h1 className=" font-bold text-4xl mb-4 text-slate-700 "> Services</h1>
      <div className="  flex flex-col lg:flex-row gap-3 justify-around items-center">
        {servicesData.map((item, index) => (
          <ServiceCard key={index} service={item} />
        ))}
      </div>
    </div>
  );
};

export default Services;
