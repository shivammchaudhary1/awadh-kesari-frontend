import React, { useState } from "react";

const CareerForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    jobPosition: "",
    resumeLink: "",
    coverLetter: "",

    termsAgreed: false,
  });

  const [formErrors, setFormErrors] = useState({
    fullName: "",
    email: "",
    phone: "",
    jobPosition: "",
    resumeLink: "",
    termsAgreed: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("submitting")
    let valid = validateForm()
    console.log("validdddd",valid)
    if (validateForm()) {
      console.log("Form data:", formData);
      // Handle form submission logic (e.g., send data to backend)
      // Reset form after submission (if needed)
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        jobPosition: "",
        otherPosition: "",
        resume: "",
        coverLetter: "",
        termsAgreed: false,
      });
      setFormErrors({
        fullName: "",
        email: "",
        phone: "",
        jobPosition: "",
        // otherPosition: "",
        resume: "",
        termsAgreed: "",
      });
    }
  };

  const validateForm = () => {
    let valid = true;
    const errors = {
      fullName: "",
      email: "",
      phone: "",
      // jobPosition: "",
      // otherPosition: "",
      resume: "",
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
    setFormErrors(errors);
    return valid;
  };

  return (
    <div className=" w-[95%] lg:w-[40vw]  justify-center items-center bg-white p-8 my-10 mx-2  shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-8 text-customColor">Apply online</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            className={`mt-1 block w-full p-2 rounded-md shadow-sm  bg-slate-200 sm:text-sm ${
              formErrors.fullName ? "border-red-500" : "border-red-500"
            }`}
            required
          />
          {formErrors.fullName && (
            <p className="text-xs text-customColor mt-1">
              {formErrors.fullName}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`mt-1 block w-full p-2  border-gray-300 rounded-md shadow-sm bg-slate-200 focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
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
            className="block text-sm font-medium text-gray-700"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className={`mt-1 block w-full p-2  border-gray-300 rounded-md shadow-sm bg-slate-200 focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
              formErrors.phone ? "border-red-500" : ""
            }`}
            required
          />
          {formErrors.phone && (
            <p className="text-xs text-customColor mt-1">{formErrors.phone}</p>
          )}
        </div>
        {formData.jobPosition !== "Other" && (
          <div>
            <label
              htmlFor="jobPosition"
              className="block text-sm font-medium text-gray-700"
            >
              Job Position
            </label>
            <select
              id="jobPosition"
              name="jobPosition"
              value={formData.jobPosition}
              onChange={handleInputChange}
              className={`mt-1 block w-full p-2  border-gray-300 rounded-md shadow-sm bg-slate-200 focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                formErrors.jobPosition ? "border-red-500" : ""
              }`}
              required
            >
              <option value="">Select a job position</option>
              <option value="Doctor">Doctor</option>
              <option value="Nurse">Nurse</option>
              <option value="Technician">Technician</option>
              <option value="Administrative Staff">Administrative Staff</option>
              <option value="Other">Others</option>
              {/* Add more job positions as needed */}
            </select>
            {formErrors.jobPosition && (
              <p className="text-xs text-customColor mt-1">
                {formErrors.jobPosition}
              </p>
            )}
          </div>
        )}

        {formData.jobPosition === "Other" && (
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Specify Job Position
            </label>
            <input
              id="job position"
              name="job position"
              value={formData.otherPosition}
              onChange={handleInputChange}
              className={`mt-1 block w-full p-2  border-gray-300 rounded-md shadow-sm bg-slate-200 focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                formErrors.jobPosition ? "border-red-500" : ""
              }`}
            />
            {formErrors.jobPosition && (
              <p className="text-xs text-customColor mt-1">
                {formErrors.jobPosition}
              </p>
            )}
          </div>
        )}

        <div>
          <label
            htmlFor="resume"
            className="block text-sm font-medium text-gray-700"
          >
            Upload Resume
          </label>
          <input
            type="file"
            id="resume"
            name="resume"
            onChange={handleInputChange}
            className={`mt-1 block w-full p-2  text-gray-500 border-gray-300 rounded-md shadow-sm bg-slate-200 focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
              formErrors.resume ? "border-red-500" : ""
            }`}
            required
          />
          {formErrors.resume && (
            <p className="text-xs text-customColor mt-1">{formErrors.resume}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="coverLetter"
            className="block text-sm font-medium text-gray-700"
          >
            Cover Letter (Optional)
          </label>
          <textarea
            id="coverLetter"
            name="coverLetter"
            value={formData.coverLetter}
            onChange={handleInputChange}
            rows="4"
            className="mt-1 block w-full p-2  border-gray-300 rounded-md shadow-sm bg-slate-200 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
              className="mr-2 focus:ring-blue-500"
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
          type="submit"
          className="inline-block bg-customColor hover:bg-lightCustomColor text-white py-2 px-4 rounded-md shadow-md"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default CareerForm;
