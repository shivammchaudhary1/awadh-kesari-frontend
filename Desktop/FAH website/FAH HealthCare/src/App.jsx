import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  FaAmbulance,
  FaShareAlt,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import HomePage from "./Compnents/Home/HomePage";
import SecondOpinion from "./Compnents/ConsultToggleDetailPages/SecondOpinion";
import HomeCare from "./Compnents/ConsultToggleDetailPages/HomeCare";
import RenalCare from "./Compnents/Specializations/RenalCare";
import CancerCare from "./Compnents/Specializations/CancerCare";
import CardiacCare from "./Compnents/Specializations/CardiacCare";
import GastroSciences from "./Compnents/Specializations/GastroSciences";
import NeuroSciences from "./Compnents/Specializations/NeuroSciences";
import Orthopaedics from "./Compnents/Specializations/OrthoPaedics";
import ContactUs from "./Compnents/Forms/Contactus";
import Emergency from "./Compnents/Pages/Emergency";
import ConsultationBookingForm from "./Compnents/Forms/ConsultationBookingForm";
import CareerPage from "./Compnents/Pages/CareerPage";
import AllDoctors from "./Compnents/Pages/AllDoctors";
import DoctorProfile from "./Compnents/Pages/DoctorProfile";
import Nnavbar from "./Compnents/Common/Nnavbar";
import HealthCheckUp from "./Compnents/ConsultToggleDetailPages/HealthCheckUp";
import TransitionWrapper from "./Config/TransitionConfig/TransitionWrapper";
import ScrollToTop from "./Config/TransitionConfig/ScrollToTop";
import AllSpecilities from "./Compnents/Pages/AllSpecilities";
import AlphabetsDetails from "./Compnents/Pages/AlphabetsDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Nnavbar />
      <ScrollToTop />
      <TransitionWrapper>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/all-services" element={<AllSpecilities />} />
          <Route path="/second-opinion" element={<SecondOpinion />} />
          <Route path="/health-check" element={<HealthCheckUp />} />
          <Route path="/home-care" element={<HomeCare />} />
          <Route path="/renal-care" element={<RenalCare />} />
          <Route path="/cancer-care" element={<CancerCare />} />
          <Route path="/cardiac-care" element={<CardiacCare />} />
          <Route path="/gastrosciences" element={<GastroSciences />} />
          <Route path="/neurosciences" element={<NeuroSciences />} />
          <Route path="/orthopaedics" element={<Orthopaedics />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/career" element={<CareerPage />} />
          <Route
            path="/book-appointment"
            element={<ConsultationBookingForm />}
          />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/doctors" element={<AllDoctors />} />
          <Route path="doctors/:id" element={<DoctorProfile />} />
          <Route path="treatment/:alphabet" element={<AlphabetsDetails />} />

        </Routes>
      </TransitionWrapper>
      {/* SOS Button */}
      <a href="tel:8433377712" className="sos-button">
        <FaAmbulance />
      </a>
      <div className=" transition-all duration-500 flex gap-2 hover:mt-1 flex-col group social-button">
        <div className=" share">
          <FaShareAlt />
        </div>
        <div className="hidden  group-hover:flex flex-col gap-2">
          <a
            className="sicon mx-auto hover:hue-rotate-180 transition-all duration-300"
            href="https://www.instagram.com/fahhealthcare/"
            target="_blank" rel="noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            className="sicon mx-auto hover:hue-rotate-180 transition-all duration-300"
            href="https://www.linkedin.com/in/fah-super-speciality-hospital-b59b4a318/"
            target="_blank" rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
