import React, { useEffect, useState } from "react";
import { endpoints } from "../../Services/apis";
import { apiConnector } from "../../Services/connector";
// import hiringPage from "../../Images/FAH-Banner.webp";
const { GET_ALL_VACANCY } = endpoints;



const Vacancies = () => {

  // const clientSide = [{
  //   id: "1",
  //   Title: "Nursing Staff",
  //   Experience: "0-5 yrs",
  //   Location: "FAH Super Speciality Hospital Amrapali Yojna , IIM road Lucknow",
  //   Department: "",
  //   Qualification: "B.SC. NURSING, GNM,ANM or other Relevent Qualification",
  //   Info:"Applicants with basic computer knowledge will be preffered"
  // }]

  const [vacancies, setVacancies] = useState(null);
  // eslint-disable-next-line
  const [loading, setLoading] = useState(false);
  const getVacancies = async () => {
    try {
      setLoading(true);
      const response = await apiConnector("POST", GET_ALL_VACANCY);
      setVacancies(response?.data?.data);
      console.log("res", response?.data?.data);
    } catch (error) {
      console.error("Error fetching doctor data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getVacancies();
  }, []);

  

  const VacancyCard = ({vacancy}) => {
    return <div
    key={vacancy._id}
    className="p-4 border border-gray-300 rounded-md bg-white"
  >
    <h2 className="text-xl font-semibold  text-customColor">
      {vacancy.Title}
    </h2>
    
    <div className="text-gray-600">
      <p>
        <span className="font-semibold">Experience Req. :</span>{" "}
        {vacancy.Experience}
      </p>
      <p>
        <span className="font-semibold">Location :</span>{" "}
        {vacancy.Location}
      </p>
      <p>
        <span className="font-semibold">Department :</span>{" "}
        {vacancy.Department}
      </p>
      <p>
        <span className="font-semibold">Qualification :</span>{" "}
        {vacancy.Qualification}
      </p>
      <p className="text-gray-600 mt-2 font-semibold">
      <span>About Hiring :</span>
      {vacancy.Info}
    </p>
    </div>
  </div>
  }


  return (
    <div
      className=" w-full h-[80vh] overflow-y-auto lg:w-[50%]
     my-4 mx-2 lg:p-6"
    >
      <div className="max-w-4xl mx-auto bg-white p-6 shadow-md rounded-md">
        {vacancies ? (
          <h1 className="text-4xl flex gap-2 justify-center font-bold mb-6">
            <span className=" text-customColor">We're</span>
            <span className=" text-slate-700">Hiring</span>
          </h1>
        ) : (
          <h1 className="text-4xl flex gap-2 justify-center font-bold mb-6">
            <span className=" text-customColor">Currently we are not</span>
            <span className=" text-slate-700">Hiring</span>
          </h1>
        )}

        <div className="space-y-4">
          {vacancies?.map((vacancy) => (<VacancyCard vacancy={ vacancy} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vacancies;
