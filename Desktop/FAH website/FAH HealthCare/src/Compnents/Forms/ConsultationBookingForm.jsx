import React, { useState } from "react";
import Footer from "../Common/Footer";
import bgImage from "../../Images/ConsultpgBgImage.jpg";
import ConsultToggle from "../Home/ConsultToggle";
import Services from "../Common/Services";
import { apiConnector } from "../../Services/connector";
import { endpoints } from "../../Services/apis";
const { BOOK_APPOINTMENT } = endpoints;

const ConsultationBookingForm = () => {
  let doctorList = [{
    name: "Noopur Singh",
    speciality: "Gynecologist",
    qualification: "MBBS,MS",
  },{
    name: "Ankur Agarwal",
    speciality: "Cardiologist",
    qualification: "MD,DM(CARDIO)",
    
  },{
    name: "T.H. Faruqui",
    speciality: "General Medicine",
    qualification:"MBBS,MD"
    
  },{
    name: "Alka Saini ",
    speciality: "Gynecologist",
    qualification:"MBBS,DGO"
    
  },{
    name: "Vikram Singh",
    speciality: "Urologist",
    qualification:"MS,MCh"
    
  },{
    name: "Anany Gupta",
    speciality: "Gastroenterology",
    qualification:"MD,DM"
    
  }]
  const [loading,Setloading]=useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    doctor: "",
    date: "",
    time: "",
    symptoms: "",
    preferredContact: "phone",
    termsAgreed: false,
  });

  const [formErrors, setFormErrors] = useState({
    fullName: "",
    email: "",
    phone: "",
    doctor: "",
    date: "",
    time: "",
    termsAgreed: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        Setloading(true)
        const response = await apiConnector("POST", BOOK_APPOINTMENT, formData);
        console.log("Form data:", response.data);
        // Reset form after submission
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          doctor: "",
          date: "",
          time: "",
          symptoms: "",
          preferredContact: "phone",
          termsAgreed: false,
        });
        setFormErrors({
          fullName: "",
          email: "",
          phone: "",
          doctor: "",
          date: "",
          time: "",
          termsAgreed: "",
        });
        alert("Thank You! Please Check Your Mail for futher Updates, Our team will reach out to you Shortly");
        Setloading(false)
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("Error submitting form. Please try again.");
        Setloading(false)
      }
    }
  };

  const validateForm = () => {
    let valid = true;
    const errors = {
      fullName: "",
      email: "",
      phone: "",
      doctor: "",
      date: "",
      time: "",
      termsAgreed: "",
    };

    // Validation logic
    if (!formData.fullName.trim()) {
      errors.fullName = "Full Name is required";
      valid = false;
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email format";
      valid = false;
    }
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
      valid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = "Phone number should be 10 digits";
      valid = false;
    }
    if (!formData.doctor.trim()) {
      errors.doctor = "Please select a doctor";
      valid = false;
    }
    if (!formData.date.trim()) {
      errors.date = "Date is required";
      valid = false;
    }
    if (!formData.time.trim()) {
      errors.time = "Time is required";
      valid = false;
    }
    if (!formData.termsAgreed) {
      errors.termsAgreed = "You must agree to the terms";
      valid = false;
    }

    setFormErrors(errors);
    return valid;
  };

  // if (loading) {
  //   return ( <p className=" w-full h-[100vh] bg-customColor  flex justify-center items-center text-2xl font-garamond">Loading...</p> )
  // }

  return (
    <div
      className=" bg-UltraLlightCustomColor bg-cover bg-center bg-no-repeat w-full pt-4  flex-col"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className=" w-[96vw] lg:w-[50vw] font-bold bg-lightShade mx-auto lg:mx-10 p-8 shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-4">Consultation Booking</h2>
        <form onSubmit={handleSubmit} className="space-y-4 font-bold">
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-bold text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className={`mt-1 block outline-none p-2    w-full border-gray-300 rounded-md shadow-sm  text-black sm:text-sm ${
                formErrors.fullName ? "border-red-500" : ""
              }`}
              required
            />
            {formErrors.fullName && (
              <p className="text-xs text-customColor mt-1">{formErrors.fullName}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-bold text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`mt-1 block w-full outline-none p-2    border-gray-300 rounded-md shadow-sm  text-black sm:text-sm ${
                formErrors.email ? "border-red-500" : ""
              }`}
              required
            />
            {formErrors.email && (
              <p className="text-xs text-customColor mt-1">{formErrors.email}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-bold text-gray-700"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={`mt-1 block w-full outline-none p-2  border-gray-300 rounded-md shadow-sm   text-black sm:text-sm ${
                formErrors.phone ? "border-red-500" : ""
              }`}
              required
            />
            {formErrors.phone && (
              <p className="text-xs text-customColor mt-1">{formErrors.phone}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="doctor"
              className="block text-sm font-bold text-gray-700"
            >
              Select Doctor
            </label>
            <select
              id="doctor"
              name="doctor"
              value={formData.doctor}
              onChange={handleInputChange}
              className={`mt-1 block w-full outline-none p-2  border-gray-300 rounded-md shadow-sm  text-black sm:text-sm ${
                formErrors.doctor ? "border-red-500" : ""
              }`}
              required
            >
              <option value="">Select a doctor</option>
              {
                  doctorList.map((item,index)=><option key={index} value={item.name}>Dr. {item.name}  ({item?.qualification}) | {item?.speciality} </option>)
              }
            </select>
            {formErrors.doctor && (
              <p className="text-xs text-customColor mt-1">{formErrors.doctor}</p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="date"
                className="block text-sm font-bold text-gray-700"
              >
                Preferred Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className={`mt-1 block w-full outline-none p-2  border-gray-300 rounded-md shadow-sm  text-black sm:text-sm ${
                  formErrors.date ? "border-red-500" : ""
                }`}
                required
              />
              {formErrors.date && (
                <p className="text-xs text-customColor mt-1">{formErrors.date}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="time"
                className="block text-sm font-bold text-gray-700"
              >
                Preferred Time
              </label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                className={`mt-1 block w-full outline-none p-2  border-gray-300 rounded-md shadow-sm  text-black sm:text-sm ${
                  formErrors.time ? "border-red-500" : ""
                }`}
                required
              />
              {formErrors.time && (
                <p className="text-xs text-customColor mt-1">{formErrors.time}</p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="symptoms"
              className="block text-sm font-bold text-gray-700"
            >
              Symptoms (Optional)
            </label>
            <textarea
              id="symptoms"
              name="symptoms"
              value={formData.symptoms}
              onChange={handleInputChange}
              rows="3"
              className="mt-1 block w-full outline-none p-2  border-gray-300 rounded-md shadow-sm  text-black sm:text-sm"
            ></textarea>
          </div>

          

          {/* <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                id="termsAgreed"
                name="termsAgreed"
                checked={formData.termsAgreed}
                onChange={handleInputChange}
                className="mr-2"
              />
              <span className="text-sm text-gray-700">
                I agree to the terms and conditions
              </span>
            </label>
            {formErrors.termsAgreed && (
              <p className="text-xs text-customColor mt-1">
                {formErrors.termsAgreed}
              </p>
            )}
          </div> */}

          <button
            disabled={loading}
            type="submit"
            className={`inline-block  text-white bg-customColor hover:bg-lightCustomColor py-2 px-4 rounded-md shadow-md`}
          >
           {loading?"Submitting ":"Book Consultation"} 
          </button>
        </form>
      </div>
      <ConsultToggle />
      <Services/>
      <Footer />
    </div>
  );
};

export default ConsultationBookingForm;
