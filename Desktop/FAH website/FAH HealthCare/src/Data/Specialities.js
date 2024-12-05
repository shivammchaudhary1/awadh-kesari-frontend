import cancer from "../Images/specialities/cancerCare.jpg";
import cardiac from "../Images/specialities/cardiacCare.jpg";
import gastro from "../Images/specialities/gastroscience.jpg";
import neuro from "../Images/specialities/neuroscience.jpg";
import ortho from "../Images/specialities/orthopaedic.jpg";
import renal from "../Images/specialities/renalCare.jpg";

const specialities = [
    {
      image: cancer,
      Item: "Cancer Care",
      nav: "/cancer-care",
    },
    {
      image: cardiac,
      Item: "Cardiac Care",
      nav: "/cardiac-care",
    },
    {
      image: neuro,
      Item: "Neurosciences",
      nav: "/neurosciences",
    },
    {
      image: gastro,
      Item: "Gastrosciences",
      nav: "/gastrosciences",
    },
    {
      image: ortho,
      Item: "Orthopaedics",
      nav: "/orthopaedics",
    },
    {
      image: renal,
      Item: "Renal Care",
      nav: "renal-care",
    },
    {
      // image: renal,
      Item: "View All",
      nav: "/all-services",
    },
   
];
  
export default specialities