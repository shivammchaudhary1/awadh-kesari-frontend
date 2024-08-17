import React, { useState } from 'react'
import {NewsCatagory, SectionCatagory, TextNewsCard} from '../index'

const Technology = ({newsData}) => {
    const [data, setData] = useState(newsData.slice(0, 6));
    const firstData = data[0];
    const remainingData = data.slice(1);

  return (
    <div>
      <SectionCatagory name='Technology' backgroundColor='#2596be' className='mb-7'/>
      <TextNewsCard heading={firstData.title} content={firstData.content} image={firstData.image} imageWidth={'100%'} imageHeight={'230px'} date={firstData.date} author={firstData.author}>
        <NewsCatagory catagory={firstData.category} backgroundColor={'#2596be'} className='absolute top-5 left-5'/>
      </TextNewsCard>
      {
        remainingData.map((item, index)=>(
            <TextNewsCard key={index} className = 'flex gap-4 mt-7' image={item.image} heading={item.title} date={item.date} imageHeight={'90px'} imageWidth={'110px'}/>
        ))
      }
    </div>
  )
}

export default Technology

// {
//     image: 'https://via.placeholder.com/150',
//     slug: 'example-article-1',
//     category: 'प्रौद्योगिकी',
//     title: 'आधुनिक प्रौद्योगिकी में एआई का उदय',
//     date: '2024-08-14',
//     content: 'आर्टिफिशियल इंटेलिजेंस (एआई) आधुनिक प्रौद्योगिकी में क्रांति ला रहा है, जिससे नई संभावनाएं और चुनौतियां उत्पन्न हो रही हैं।'
//   },