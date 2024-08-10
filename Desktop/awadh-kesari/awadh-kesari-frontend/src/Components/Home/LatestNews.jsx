import React from "react";

const LatestNewsCard = () => {
  return (
    <div className="card relative transition-all  w-[95%] lg:w-[23%] duration-500 bg-base-100 shadow-xl">
      <figure className="relative">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
          className="transition-all duration-500 hover:scale-110"
        />
        <div className="absolute text-sm top-5 left-5 bg-red-600 text-white px-2 py-1 font-bold inline-block">
          Category
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-red-600"></div>
        </div>
      </figure>
      <div className=" p-4">
        <h2 className="card-title">
          *news HeadLine* If a dog chews shoes whose shoes does he choose?
        </h2>
        <div className="flex gap-3 my-2 ">
          <h3 className=" font-bold">By:Author</h3>
          <p className="">| 19 Aug,2017</p>
        </div>
      </div>
    </div>
  );
};

const LatestNews = () => {
  let newsData = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className=" relative my-6 lg:my-16 border-t   border-red-500">
      <div className="absolute -top-8 left-0 bg-red-600 text-white px-2 py-1 font-bold inline-block">
        LATEST NEWS
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-red-600"></div>
      </div>
      <div className=" flex justify-around gap-5 flex-wrap py-6 lg:py-12">
        {newsData.map((news) => (
          <LatestNewsCard key={news} />
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
