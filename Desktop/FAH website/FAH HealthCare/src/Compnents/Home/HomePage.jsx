import React from 'react'
import Poster1 from './Poster1'
import Speciality from '../Common/Speciality'
import Poster2 from './Poster2'
import Services from '../Common/Services'
import Footer from '../Common/Footer';
import Carousal from '../Carousal'

const HomePage = () => {
  return (
    <div className=' font-serif bg-slate-200'>
      <Poster1 />
      {/* <ConsultToggle /> */}
      <Carousal/>
      <Speciality />
      <Poster2 />
      <Services />
      <Footer/>
    </div>
  )
}

export default HomePage
