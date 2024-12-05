// src/Navbar.js
import React, { useState } from "react";
import MobileLogo from "../../Images/cropped-Fah-1.webp";
import  { mobileNavData } from '../../Data/NavBarData';
import { Link } from "react-router-dom";

// this navbar will be hidden in small screen and navbar Component will be displayed due to the hidden and block property using css


const MobileNavbar = () => {
    // console.log(navData)
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" relative">
      <nav className="  block lg:hidden  bg-black">
        <div className="   max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0">
                <img className="h-12 w-40" src={MobileLogo} alt="Logo" />
              </Link>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    href="/className"
                    className="text-white px-3 py-2 text-sm font-medium"
                  >
                    Home
                  </a>
                  <a
                    href="/className"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 text-sm font-medium"
                  >
                    About
                  </a>
                  <a
                    href="/className"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 text-sm font-medium"
                  >
                    Services
                  </a>
                  <a
                    href="/className"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 text-sm font-medium"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <div
          className={` absolute bg-black w-full  md:hidden ${
            isOpen ? "block" : "hidden"
          }`}
          id="mobile-menu"
        >
          <div className="px-2  py-2 rounded-full  space-y-1 sm:px-3">
            {mobileNavData.map((item, index) => {
              return (
                <a key={index}
                  href="/"
                  className="text-right text-white block px-2 py-2 border-b text-base font-medium"
                >
                  {item.Item}
                </a>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MobileNavbar;
