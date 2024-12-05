import React, { useState, useEffect, useRef } from "react";
// import logo from "../../Images/FahLogo.png";
import fullLogo from "../../Images/fullLogo.png";
import { BiMessageAltEdit } from "react-icons/bi";
import { HiOutlinePhoneMissedCall } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
import { navData } from "../../Data/NavBarData";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Nnavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navbarRef = useRef(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setIsOpen(false);
      setOpenDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
    setOpenDropdown(null);
  };

  return (
    <div
      ref={navbarRef}
      className="relative z-10 flex bg-slate-200 flex-col lg:flex-row justify-between px-1 lg:px-4 py-1 items-center box-border"
    >
      {/* Logo and Menu Button */}
      <div className="flex justify-between w-full lg:w-auto ">
        <Link className=" flex justify-center" to="/">
          <img
            src={fullLogo}
            className="h-[4rem] lg:h-[5rem] ml-0 lg:ml-16"
            alt="Fah Super Speciality Hospital"
          />
          {/* <p className=" font-garamond">Fah Super Speciality Hospital</p> */}
        </Link>
        <button
          className="lg:hidden text-2xl"
          onClick={() => {
            setIsOpen(!isOpen);
            setOpenDropdown(null); // Close all dropdowns when the menu button is toggled
          }}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Navbar Links */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } lg:flex flex-col lg:flex-row gap-6 text-headingColor w-full lg:w-auto px-4 lg:px-0 mt-4 lg:mt-0`}
      >
        {navData.map((item, index) => (
          <div key={index} className="relative group">
            <div
              className="flex justify-center items-center gap-1 py-2 cursor-pointer lg:cursor-default"
              onClick={() => toggleDropdown(index)}
            >
              <Link
                to={item.nav}
                className="flex justify-center items-center gap-1 py-2"
                onClick={handleLinkClick}
              >
                {item.Item}
              </Link>
              {item.subdata && (
                <IoMdArrowDropdown
                  className={`transition-transform duration-600 ${
                    openDropdown === index ? "rotate-180" : ""
                  }`}
                />
              )}
            </div>
            <div
              className={`${
                openDropdown === index ? "block" : "hidden"
              } lg:hidden bg-white rounded-md text-headingColor`}
            >
              {item?.subdata &&
                item?.subdata.map((subItem, subIndex) => (
                  <Link to={subItem.nav}
                    key={subIndex}
                    className="flex justify-left gap-2 items-center bg-white rounded-md hover:text-black px-4 py-2 border-b"
                  >
                    <img src={subItem?.image} className=" " width={35} alt="" />
                    <p
                      className=" "
                      // href={subItem.nav}`
                      onClick={handleLinkClick}
                    >
                      {subItem.Item}
                    </p>
                  </Link>
                ))}
            </div>
            <div className="hidden lg:group-hover:block absolute top-10 left-1 w-[13rem] bg-white rounded-md text-headingColor">
              {item?.subdata &&
                item?.subdata.map((subItem, subIndex) => (
                  <Link to={subItem.nav}
                    key={subIndex}
                    className="flex justify-left gap-2 items-center bg-wheat hover:bg-lightShade rounded-md px-4 py-2 border-b"
                  >
                    <img src={subItem?.image} className=" " width={35} alt="" />
                    <p
                      className=" "
                      // href={subItem.nav}
                      onClick={handleLinkClick}
                    >
                      {subItem.Item}
                    </p>
                  </Link>
                ))}
            </div>
          </div>
        ))}
      </div>

      {/* Right part CTA Buttons */}
      <div className="hidden lg:flex gap-4 justify-center items-center mt-4 lg:mt-0">
        <Link
          to="/contact-us"
          className="text-2xl border hover:bg-customColor border-customColor rounded-md p-3"
        >
          <BiMessageAltEdit />
        </Link>
        <a
          href="tel:+918433377712"
          className="hover:scale-105 transition-all duration-200 text-white bg-lightCustomColor flex justify-center items-center gap-2 p-3 rounded-md border border-customColor"
        >
          <HiOutlinePhoneMissedCall className="text-lg" /> Request Call Back
        </a>
      </div>
    </div>
  );
};

export default Nnavbar;
