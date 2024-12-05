import React from "react";
import { HiOutlinePhoneMissedCall } from "react-icons/hi";
import { BiMessageAltEdit } from "react-icons/bi";
import FooterData from "../../Data/FooterData";
// import FooterLogo from "../../Images/footerLogo.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" w-full bg-gray-800 text-white py-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row  md:justify-between">
          {FooterData.map((category, index) => {
            const categoryName = Object.keys(category)[0];
            const items = category[categoryName];

            return (
              <div key={index} className=" ml-6 mb-8 md:mb-0 md:w-1/4">
                <h4 className="text-xl font-semibold mb-4">
                    {categoryName.replace(/([A-Z])/g, " $1").trim()}
                  </h4>
                  <ul>
                  {items.map((item, idx) => (
                    <li key={idx} className="mb-2">
                      <a href={item.nav} className="hover:underline font-sans">
                        {item.Item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}

          {/* This is for the fourth column of the footer for contact information */}
          <div className=" flex flex-col mx-auto  mb-8 md:mb-0 md:w-1/4">
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <a
              href="https://maps.app.goo.gl/M83NrSM9wLkdh7gw7"
              className=" my-4 group relative"
              target="_blank"
              rel="noreferrer"
            >
              Location:-{" "}
              <span className=" text-white">
                Amrapali Yojna, IIM Road, <br />
                Dubagga Lucknow
              </span>
              <p className=" hidden group-hover:block z-10 rounded-md text-white absolute -top-9 bg-customColor py-1 px-16">
                {" "}
                Map Location{" "}
              </p>
              <span className="hidden group-hover:block absolute left-1 -top-6 bg-customColor px-4 rotate-45 z-0">
                .
              </span>
            </a>
            <a className=" my-4 font-sans" href="tel:+8433377712 ">
              Call Now: <span className=" text-white">+91-8433377712</span>{" "}
            </a>
            <Link
              className=" p-4 hover:bg-lightCustomColor hover:scale-95 transition-all duration-200 bg-customColor mr-0 lg:mr-4 rounded-md text-center my-2"
              to="/book-appointment"
            >
              Book a Consultation
            </Link>
            <div className="flex lg:hidden gap-4 justify-between items-center mt-4 lg:mt-0">
              <Link
                to="/contact-us"
                className="text-2xl border border-customColor rounded-md p-3"
              >
                <BiMessageAltEdit />
              </Link>
              <a
                href="tel:+918433377712"
                className="hover:scale-105 transition-all duration-200 text-white bg-customColor flex justify-center items-center gap-2 p-3 rounded-md border border-customColor"
              >
                <HiOutlinePhoneMissedCall className="text-lg" /> Request Call
                Back
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
