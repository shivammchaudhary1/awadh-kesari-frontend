import NavbarservicesData from "./NavbarServiceData";
import specialities from "./Specialities";

const navData = [
  {
    Item: "Home",
    nav: "/",
  },
  {
    Item: "Speciality",
    // nav: "/",
    subdata: specialities,
  },

  {
    Item: "Services",
    // nav: "/",
    subdata: NavbarservicesData,
  },

  {
    Item: "Doctors",
    nav: "/doctors",
  },
  {
    Item: "Contact Us",
    nav: "/contact-us",
  },
  {
    Item: "Careers",
    nav: "/career",
  },
];
const mobileNavData = [
  {
    Item: "Speciality",
    nav: "#speciality",
  },
  {
    Item: "Services",
    nav: "#services",
  },
  {
    Item: "Careers",
    nav: "/career",
  },
  {
    Item: "Book a Consultation",
    nav: "/book-appointment",
  },
  {
    Item: "Contact Us",
    nav: "/contact-us",
  },
];

export { navData, mobileNavData };
