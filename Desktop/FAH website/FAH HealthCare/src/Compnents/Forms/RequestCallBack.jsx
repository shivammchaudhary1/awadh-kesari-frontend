import React, { useState } from "react";
import { apiConnector } from "../../Services/connector";
import { endpoints } from "../../Services/apis";
import Loader from "../Loader";
const { CONTACT_US } = endpoints;

const RequestCallBack = () => {
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
        // setFormData({
        //   name: "",
        //   email: "",
        //   phone: "",
        //   message: "",
        // });
        setFormErrors({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        alert("Form Submitted Successfully");
        setLoading(false);
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

  return loading ? (
    <Loader />
  ) : (
    <form
      onSubmit={handleSubmit}
      style={{
        boxShadow:
          "10 4px 65px -5px rgba(107, 114, 128, 0.1), 0 2px 4px -1px rgba(107, 114, 128, 0.06)",
      }}
      className="w-[90%] lg:w-[30%] bg-lightShade flex flex-col gap-6 p-4 lg:p-14 rounded-md"
    >
      <h1 className="text-lg lg:text-3xl font-bold text-center">
        Request A Callback
      </h1>
      <label htmlFor="name" className="flex flex-col gap-2">
        <span>
          Name <sup className="text-red-600">*</sup>
        </span>
        <input
          className="border-b bg-lightShade outline-none"
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter Your Name"
        />
        {formErrors.name && (
          <span className="text-red-600">{formErrors.name}</span>
        )}
      </label>
      <label htmlFor="phone" className="flex flex-col gap-2">
        <span>
          Contact Number <sup className="text-red-600">*</sup>
        </span>
        <input
          className="border-b bg-lightShade outline-none"
          type="text"
          name="phone"
          id="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter Your Contact Number"
        />
        {formErrors.phone && (
          <span className="text-red-600">{formErrors.phone}</span>
        )}
      </label>
      <label htmlFor="email" className="flex flex-col gap-2">
        <span>
          Email <sup className="text-red-600">*</sup>
        </span>
        <input
          className="border-b bg-lightShade outline-none"
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter Your E-mail"
        />
        {formErrors.email && (
          <span className="text-red-600">{formErrors.email}</span>
        )}
      </label>
      <label htmlFor="message" className="flex flex-col gap-2">
        <span>
          Message <sup className="text-red-600">*</sup>
        </span>
        <input
          className="border-b bg-lightShade outline-none"
          type="text"
          name="message"
          id="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter Your message"
        />
        {formErrors.message && (
          <span className="text-red-600">{formErrors.message}</span>
        )}
      </label>
      <button
        type="submit"
        disabled={loading}
        className="text-white transition-all font-garamond duration-200 rounded-md p-2 lg:p-4 hover:scale-95 text-2xl bg-lightCustomColor"
      >
        Submit
      </button>
    </form>
  );
};

export default RequestCallBack;
