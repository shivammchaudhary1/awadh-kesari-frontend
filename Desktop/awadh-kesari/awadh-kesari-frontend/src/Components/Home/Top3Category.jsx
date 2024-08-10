import React from "react";
import bookAtestRideForm from "../../bookAtestRideForm.png";

const CategoryNews = ({ item, showLatestNews }) => {
  return (
    <div className="relative w-full lg:w-[30%] flex flex-col py-4 gap-4 border-t border-red-600">
      {showLatestNews && (
        <div className="absolute -top-8 left-0 bg-red-600 text-white px-2 py-1 font-bold inline-block">
          Category
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-red-600"></div>
        </div>
      )}

      <div className="relative group overflow-hidden">
        <img
          src={bookAtestRideForm}
          alt="Smartwatch"
          className="transition-transform duration-500 transform group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>
        <div className="absolute top-0 left-0 p-4 text-white z-20">
          <span className="bg-gray-800 px-2 py-1 rounded">GADGET</span>
          <h1 className="mt-2 text-lg font-bold">
            Samsung Gear S3 review: A whimper, when smartwatches need a bang
          </h1>
          <p className="mt-1">March 16, 2017</p>
        </div>
      </div>
      <div className="flex gap-2">
        <img
          src={bookAtestRideForm}
          alt="Smartwatch"
          className="w-[30%] transition-transform duration-500 transform group-hover:scale-110"
        />
        <div>
          <h1>News Headline</h1>
          <p>Date</p>
          <p>Author</p>
        </div>
      </div>
    </div>
  );
};

const Top3Category = () => {
  let categories = [1, 2, 3];
  return (
    <div className="relative w-full flex flex-col lg:flex-row justify-normal lg:justify-between">
      {categories.map((category, index) => (
        <CategoryNews key={category} item={category} showLatestNews={true} />
      ))}
    </div>
  );
};

export default Top3Category;
