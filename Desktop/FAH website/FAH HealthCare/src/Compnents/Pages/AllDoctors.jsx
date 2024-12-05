import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Common/Footer";
import { apiConnector } from "../../Services/connector";
import { endpoints } from "../../Services/apis";
import  {clientSideDoctors}  from "../../Data/DoctorsData";
const { GET_ALL_DOCTORS } = endpoints;

const AllDoctors = () => {
  const [doctors, setDoctors] = useState(null);
  const [loading, setLoading] = useState(false);

  console.log("client",clientSideDoctors)

  async function getAllDoctors() {
    try {
      setLoading(true)
      console.log("Getting all doctors");
      const response = await apiConnector("POST", GET_ALL_DOCTORS);
      setDoctors(response?.data?.data);
      setLoading(false)
    } catch (error) {
      console.log("Error fetching doctors data:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getAllDoctors();
  }, []);

  useEffect(() => {
    if (doctors) {
      console.log("Updated doctors data:", doctors);
    }
  }, [doctors]);

  const DoctorsCard = ({ doctor }) => {
    return (
      <div className="flex flex-col justify-center items-center w-[95%] lg:w-[25vw] rounded-md doctor-card bg-white p-4">
        <img
          className="transition-all duration-200 rounded-md"
          height={35}
          width={300}
          src={doctor.image}
          alt={doctor.DoctorsName}
        />
        <div className="flex flex-col w-[90%]">
          <h3 className="text-2xl text-slate-700 font-bold">
            Dr. {doctor.name}
          </h3>
          <p className="text-slate-500">{doctor.specialization}</p>
          <p className="text-slate-500 text-lg">
            <span className="text-headingColor">Department: </span>
            {doctor.department ? doctor.department : "NA"}
          </p>
        </div>
        <div className="flex gap-2 lg:gap-0 flex-col lg:flex-row justify-around w-[90%] my-2">
          <Link
            className="bg-customColor text-center hover:text-headingColor hover:bg-lightCustomColor text-white px-6 py-2 rounded-md"
            to="/book-appointment"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col font-garamond justify-center bg-lightCustomColor">
      <h1 className="capitalize mx-auto text-white text-3xl font-bold px-4 py-6">
        OUR DOCTORS
      </h1>
      <div className="pb-10 gap-5 w-full flex flex-wrap justify-center">
        {loading ? (
          clientSideDoctors?.map((doctor, index) => (
            <DoctorsCard key={index} doctor={doctor} />
          ))
        ) :  (
          doctors?.map((doctor, index) => (
            <DoctorsCard key={index} doctor={doctor} />
          ))
        ) }
      </div>
      <Footer />
    </div>
  );
};

export default AllDoctors;
