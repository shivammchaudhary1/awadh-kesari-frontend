import React, { useState } from 'react'
import {NewsCatagory, PhotoNewsCard, SectionCatagory, TextNewsCard} from '../index'

const PopularNews = ({newsData}) => {
    const [data, setData] = useState(newsData.slice(0,5))
    const firstData = data[0];
    const remainingData = data.slice(1);
  return (
    <>
      <SectionCatagory name='POPULAR NEWS' className='mb-7'/>
      <PhotoNewsCard catagory={firstData.category} contentPadding='30px' title={firstData.title} date={firstData.date} slug={firstData.slug} height='200px' width={'100%'} catagoryBackground={'black'} catagoryColor={'white'} backgroundImage={firstData.image}/>
      {
        remainingData.map((item, index)=>(
            <TextNewsCard key={index} image={item.image} date = {item.date} heading={item.title} className = 'flex gap-4 mt-7' imageHeight='90px' imageWidth='110px' slug={item.slug} dateClasses='text-gray-500'>
                <NewsCatagory catagory={item.category} backgroundColor={'black'} className='absolute text-xs'/>
            </TextNewsCard>  
        ))
      }
    </>
  )
}

export default PopularNews
