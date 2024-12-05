import checkup from "../Images/services/checkup.png";
import air from "../Images/services/emergency.jpg";
import healthCare from "../Images/services/healthCare.jpg";
import homeCare from "../Images/services/homeCare.png";

const servicesData = [
    {
      image: healthCare,
      heading: "Health Care",
      subheading:
        "Confirm Diagnosis and take  informed decision about your treatment plan with some of india top experts.",
      nav: {
        navlink: "/health-care",
        navTitle: "Know More",
      },
      icon: "",
    },
    {
      image: homeCare,
      heading: "Home Services",
      subheading:
        "We Continue to give you the best care possible, Even after you reach home",
      nav: {
        navlink: "/home-care",
        navTitle: "Know More",
      },
      icon: "",
    },
  
    {
      image: checkup,
      heading: "Health Check",
      subheading:
        "Take Charge of your well-Being with a health experience customized for you",
      nav: {
        navlink: "/health-check",
        navTitle: "Know More",
      },
      icon: "",
    },
  
    {
      image: air,
      heading: "Emergency 24*7 ",
      subheading:
        "We are equipped with 24*7 emergency Services to treat and transport the critically ill patients across the country",
      nav: {
        navlink: "/emergency",
        navTitle: "Know More",
      },
      icon: "",
    },
];
  export default servicesData