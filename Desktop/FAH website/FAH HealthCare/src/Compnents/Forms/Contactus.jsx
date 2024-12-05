import React, { useState } from "react";
import Footer from "../Common/Footer";
import contactUsbackground from "../../Images/FahBannerDummy.jpg";
import { BiSolidMessageDetail } from "react-icons/bi";
import { MdAddIcCall } from "react-icons/md";
import { apiConnector } from "../../Services/connector";
import { endpoints } from "../../Services/apis";
import Loader from "../Loader";
const { CONTACT_US } = endpoints;

const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        setLoading(true);
        const response = await apiConnector("POST", CONTACT_US, formData);
        console.log("Form data sent:", response.data);
        // Reset form after submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        setFormErrors({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        setLoading(false);
        alert("Form Submitted Successfully");
      } catch (error) {
        console.error("Error sending form data:", error);
        setLoading(false);
      }
    }
  };

  const validateForm = () => {
    let valid = true;
    const errors = {
      name: "",
      email: "",
      phone: "",
      message: "",
    };

    if (!formData.name.trim()) {
      errors.name = "Name is required";
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
    if (!formData.message.trim()) {
      errors.message = "Message is required";
      valid = false;
    }

    setFormErrors(errors);
    setLoading(false);
    return valid;
  };
  // if (loading) {
  //   return;
  // }

  return (
    <div>
      <div
        style={{ backgroundImage: `url(${contactUsbackground})` }}
        className="box-border bg-cover gap-10 p-6 lg:p-0 flex flex-col lg:flex-row justify-around items-center min-h-screen bg-gray-100"
      >
        <div className="lg:p-4 p-2 h-full lg:h-[70vh] flex flex-col rounded-lg bg-white border-2 shadow-lg">
          <h1 className="px-2 text-center text-3xl font-bold font-serif my-2">
            Get in touch With us
          </h1>
          <div className="px-2 flex flex-col ">
            <p className="text-red-900 font-bold text-xl">Address:</p>
            <p className="py-1">
              Fah Super Speciality Hospital, IIM Road, Amrapali Yojna
              <br /> Dubagga, Lucknow
            </p>
          </div>
          <div className="px-2 flex flex-col my-2 ">
            <h1 className="text-red-900 font-bold text-xl">Contact Info:</h1>
            <div className="flex items-center gap-2 font-bold">
              <MdAddIcCall /> <a href="tel:+918433377712"> +91-8433377712 </a>
            </div>
            <div className="flex items-center gap-2 font-bold">
              <BiSolidMessageDetail /> <a href="tel:+918433377712"> E-mail</a>
            </div>
          </div>
          <iframe
            title="Contact Form"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.387079286235!2d80.8572926!3d26.8912079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bff1d29a904bd%3A0x9714e343f9bb2317!2sFah%20Super%20Speciality%20Hospital!5e0!3m2!1sen!2sin!4v1719577138131!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <form
          className="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Us</h2>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                formErrors.name ? "border-red-500" : ""
              }`}
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {formErrors.name && (
              <p className="text-xs text-customColor mt-1">{formErrors.name}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                formErrors.email ? "border-red-500" : ""
              }`}
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {formErrors.email && (
              <p className="text-xs text-customColor mt-1">
                {formErrors.email}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                formErrors.phone ? "border-red-500" : ""
              }`}
              id="phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            {formErrors.phone && (
              <p className="text-xs text-customColor mt-1">
                {formErrors.phone}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                formErrors.message ? "border-red-500" : ""
              }`}
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            />
            {formErrors.message && (
              <p className="text-xs text-customColor mt-1">
                {formErrors.message}
              </p>
            )}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="w-full p-2 mt-6 mx-10 font-garamond text-white text-2xl hover:bg-lightCustomColor hover:scale-95 transition-all duration-200 bg-customColor rounded-md text-center"
              type="submit"
            >
             {loading?<Loader /> :"Send"} 
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
