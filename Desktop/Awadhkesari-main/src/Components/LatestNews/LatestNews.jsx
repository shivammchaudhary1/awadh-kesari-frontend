import React, { useEffect, useState } from 'react';
import SectionCatagory from '../SectionCatagory/SectionCatagory';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { NewsCatagory, TextNewsCard } from '../index';
import usePagination from '../../hooks/usePagination';

const LatestNews = ({ newsData }) => {

  const [data, setData] = useState(newsData);
  const {visibleData, prevPage, nextPage, currentPage, totalPages} = usePagination(data, 6)

  return (
    <div>
      <SectionCatagory name="Latest" color="white" backgroundColor="red">
        <button
          className="border-gray-300 border-2 p-1 mr-2"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          <FaAngleLeft />
        </button>
        <button
          className="border-gray-300 border-2 p-1"
          onClick={nextPage}
          disabled={currentPage === totalPages}
        >
          <FaAngleRight />
        </button>
      </SectionCatagory>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 border-2 border-green-300">
        {visibleData.map((newsItem, index) => (
          <TextNewsCard
            key={index}
            image={newsItem.img}
            date={newsItem.date}
            heading={newsItem.title}
            author={newsItem.author}
            slug={newsItem.slug}
            className="w-full border-2 max-w-[400px] justify-self-center"
            imageHeight="150px"
            imageWidth="100%"
          >
            <NewsCatagory
              catagory={newsItem.category}
              className="absolute top-4 left-4"
              backgroundColor="red"
              color="white"
            />
          </TextNewsCard>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
