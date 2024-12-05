import React from "react";
import { medicalInfoArray } from "../../Data/Alphabets"; // Adjust the import path as per your file structure
import { useParams } from "react-router-dom";
import Footer from "../Common/Footer";
// import Alphabets from "../Common/Alphabets";

const AlphabetsDetails = () => {
  const { alphabet } = useParams();

  // Find the data for the selected alphabet
  const alphabetData = medicalInfoArray.find((item) => item.alpha === alphabet);
  console.log(alphabetData);

  // If no data is found for the selected alphabet, show a message
  if (!alphabetData) {
    return <div className="p-6">No data found for this alphabet.</div>;
  }

  const HealthCard = ({ description }) => {
    const title = description.split(":");
    return (
      <div className=" bg-slate-200 flex flex-col justify-center items-center text-slate-700 shadow-lg rounded-xl p-6 lg:h-[35vh] hover:shadow-2xl transition-shadow duration-300 ease-in-out">
        <h2 className=" font-semibold mb-4">{title[0]}</h2>
        <p className="">{title[1]}</p>
      </div>
    );
  };

  return (
    <div className=" flex flex-col items-center bg-lightCustomColor">
      {" "}
      <h1 className=" text-3xl my-1 lg:mt-4 text-white font-garamond" >Ailment and cure</h1>{" "}
      <div className="grid  grid-cols-1 min:h-[100vh] sm:grid-cols-2 lg:grid-cols-2 gap-6 p-6">
        {/* Render the conditions for the selected alphabet */}
        {[alphabetData.info1, alphabetData.info2, alphabetData.info3].map(
          (condition, index) => (
            <HealthCard
              key={index}
              // Or any other title you want
              description={condition}
            />
          )
        )}
        {/* <Alphabets/> */}
      </div>
      <Footer />
    </div>
  );
};

export default AlphabetsDetails;
