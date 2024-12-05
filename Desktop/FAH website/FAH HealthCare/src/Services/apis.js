// const BASE_URL = "http://localhost:4000/fah/v1";
const BASE_URL = "https://fah-backend.onrender.com/fah/v1";

export const endpoints = {
  //   CREATE_DOCTOR: BASE_URL + "/createdoctor",   not needed in this frontend it only needed in admin panel
  GET_ALL_DOCTORS: BASE_URL + "/getalldoctors",
  GET_DOCTOR: (id) => BASE_URL + `/getdoctorbyid/${id}`,
  //   CREATE_VACANCY: BASE_URL + "/createvacancy",    not needed in this frontend it only needed in admin panel
  //   DELETE_VACANCY: BASE_URL + "/deletevacancy",          not needed in this frontend it only needed in admin panel
  GET_ALL_VACANCY: BASE_URL + "/getallvacancy",
  APPLY: BASE_URL + "/apply",
  BOOK_APPOINTMENT: BASE_URL + "/bookappointment",
  CONTACT_US: BASE_URL + "/contactus",
};
