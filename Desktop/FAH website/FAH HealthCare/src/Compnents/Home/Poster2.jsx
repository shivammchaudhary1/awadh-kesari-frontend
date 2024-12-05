import React from "react";
import OTImage from "../../Images/operatontheatre.png";

const Poster2 = () => {
  return (
    <div className="lg:relative bg-white  text-headingColor flex flex-col items-center justify-center">
      <div className="  lg:absolute top-5  text-headingColor flex flex-col items-center justify-center">
        <h1 className=" text-2xl text-center font-bold">Doctors, Pioneers, Life Savers</h1>
        <p className=" text-slate-500 w-[80%] text-center">
          Our superspecialist doctors provide the highest quality of care
          through a team-based, doctor-led model. Trained at some of the world's
          most renowned institutions, our highly experienced doctors are
          distinguished experts in their respective specialities. Our doctors
          work full-time and exclusively across FAH  Super Speciality hospitals. In addition
          to offering superspecialised care in their own field, the FAH  Super Speciality
          organisational structure enables every doctor to help create a culture
          of collaboration and multispecialty care integration.
        </p>
      </div>

      <img className=" w-full h-full" src={OTImage} alt="operationtheatre" />
    </div>
  );
};

export default Poster2;
