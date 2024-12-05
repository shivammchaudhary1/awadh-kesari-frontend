import React, { useEffect, useState } from "react";
import Footer from "../Common/Footer";
import { Link, useParams } from "react-router-dom";
import { apiConnector } from "../../Services/connector";
import img2 from "../../Images/FahBannerDummy.jpg";
import { endpoints } from "../../Services/apis";
const { GET_DOCTOR } = endpoints;

const DoctorProfile = () => {
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const getDoctorById = async (id) => {
    try {
      const response = await apiConnector("POST", GET_DOCTOR(id));
      setDoctor(response?.data?.DoctorData);
      console.log("res", response?.data?.DoctorData);
    } catch (error) {
      console.error("Error fetching doctor data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      getDoctorById(id);
    }
  }, [id]);

  if (loading) {
    return (
      <p className="w-full h-full flex justify-center items-center">
        Loading...
      </p>
    );
  }

  if (!doctor) {
    return (
      <p className="w-full h-full flex justify-center items-center">
        No doctor found
      </p>
    );
  }

  return (
    <div className="w-full bg-green-100 ">
      <div className="flex justify-center mx-auto items-center flex-col w-[98%] my-2 lg:my-0 lg:w-[90%]">
        <h1 className="text-4xl font-serif my-4">{`${doctor?.name}'s Profile`}</h1>
        <div className=" w-full flex  flex-col lg:flex-row justify-around items-center gap-5">
          {/* image of doctor */}
          <img
            src={doctor?.image || img2}
            className="w-[90%]  lg:w-[40%]"
            alt={doctor?.name}
          />
          {/* info of doctor */}
          <div className="flex flex-col  w-[40%]">
            <div className="">
              <div className=" flex items-center gap-2">
                <p className="text-lg font-serif">Name: </p> {doctor?.name}
              </div>
              <div className=" flex  items-center gap-2">
                <p className="text-lg font-serif">Department: </p>{" "}
                {doctor?.department}
              </div>
              <div className=" flex  gap-2">
                <p className="text-lg font-serif">Specialization: </p>{" "}
                {doctor?.specialization}
              </div>
              <div className=" flex  items-center gap-2">
                <p className="text-lg font-serif">Experience: </p>{" "}
                {doctor?.yearsOfExperience}
              </div>

              {/* <div className=" flex items-center gap-2">
                <p className="text-lg font-serif">E-mail:- </p>{" "}
                {doctor?.email}
              </div> */}
            </div>
            <Link
              to="/book-appointment"
              className="mt-8 py-2 px-4 w-full lg:w-[50%] text-center font-garamond font-bold transition-all duration-300 rounded-md bg-customColor hover:bg-lightCustomColor text-white"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
        <p className=" my-4 text-lg w-full lg:w-[60%]">{doctor?.info}</p>
      </div>
      <Footer />
    </div>
  );
};

export default DoctorProfile;
