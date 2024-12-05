import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {ImagesData} from "../Data/carousalImages"

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Carousal = () => {
    console.log("hello",ImagesData)
  return (
    <Carousel autoPlay={true} autoPlaySpeed={3000} itemClass=" gap " infinite={true} responsive={responsive}>
          {ImagesData.map((item,index) => <img className=" mt-16 lg:mt-4 border border-black px-0 lg:px-4  " key={index} src={item} alt={index} />
     )} 
      
    </Carousel>
  );
};

export default Carousal;
