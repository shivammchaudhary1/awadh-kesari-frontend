// src/components/Emergency.js
import React from "react";
import Footer from "../Common/Footer";
import Services from "../Common/Services";
import ConsultToggle from "../Home/ConsultToggle";

function Emergency() {
  return (
    <div className="     mx-auto flex flex-col  items-center ">
      <div className="  bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl lg:text-4xl font-bold text-center mb-4 text-blue-600">
          Emergency Services
        </h1>
        <p className="text-xl text-center mb-4 text-gray-700">
          Available 24/7 to provide immediate and comprehensive care.
        </p>
        <p className="text-center mb-8 text-red-600 font-bold">
          If you are experiencing a medical emergency, please call
          <strong>911</strong> immediately.
        </p>

        <div className="flex justify-around flex-col lg:flex-row">
          {/* left side div  */}
          <div className=" w-full lg:w-[40vw]">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Our Emergency Department
              </h2>
              <p className="text-gray-700">
                The Fah Hospital Emergency Department is dedicated to providing
                the highest level of emergency care to patients of all ages. Our
                team of experienced and compassionate medical professionals is
                available 24 hours a day, 7 days a week, to handle any emergency
                situation.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                What to Expect
              </h2>
              <p className="text-gray-700">
                When you arrive at our Emergency Department, you will be triaged
                by a registered nurse who will assess the severity of your
                condition. Patients with the most critical needs will be seen
                first. Our goal is to provide prompt and efficient care while
                ensuring that each patient receives the attention they need.
              </p>
            </div>
          </div>
          {/* right div  */}
          <div className=" w-[95vw] lg:w-[40vw] flex flex-col mx-auto items-centr justify-center">
            <div className="mb-8 ">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Services Offered
              </h2>
              <ul className="list-disc list-inside text-gray-700">
                <li>Immediate medical evaluation and treatment</li>
                <li>Trauma care</li>
                <li>Cardiac care</li>
                <li>Stroke care</li>
                <li>Pediatric emergency services</li>
                <li>On-site imaging and laboratory services</li>
                <li>Emergency surgery</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Important Information
              </h2>
              <p className="text-gray-700">
                Please bring the following with you when you visit the Emergency
                Department:
              </p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Identification (Driver’s License, Passport, etc.)</li>
                <li>Insurance card</li>
                <li>List of current medications</li>
                <li>Medical history information</li>
                <li>Contact information for your primary care physician</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Contact Us
          </h2>
          <p className="text-gray-700">
            If you have any questions about our emergency services, please
            contact us at:
          </p>
          <p className="mt-2 text-gray-700">
            Phone: <strong>+91-8433377712</strong>
            <br />
            Address:{" "}
            <strong>
              Fah Hospital, Amrapali Yojna, IIM Road, Dubagga Lucknow
            </strong>
          </p>
        </div>

        <p className="text-center text-gray-700">
          We are committed to providing the best possible care for our patients
          and their families. Your health and well-being are our top priorities.
        </p>
      </div>
      <ConsultToggle/>
      <Services />
      <Footer />
    </div>
  );
}

export default Emergency;
