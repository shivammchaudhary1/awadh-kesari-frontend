import React, { useState } from 'react'
import { NewsCatagory, PhotoNewsCard, SectionCatagory, TextNewsCard } from '../index'

const LifeStyle = ({ newsData }) => {
    const [data, setData] = useState(newsData.slice(0, 10));
    const firstData = data.slice(0,2);
    const remainingData = data.slice(2);

    return (
        <div>
            <SectionCatagory name='LifeStyle' backgroundColor='#e29818' className='mb-7' />
                {
                    firstData.map((item, index) => (                        
                        <PhotoNewsCard catagory={item.category} catagoryBackground={'#e29818'} key={index} title={item.title} backgroundImage={item.image} width={'100%'} height={'230px'} date={item.date}/>
                    ))
                }
            {
                remainingData.map((item, index) => (
                    <TextNewsCard key={index} className='flex gap-4 mt-7' image={item.image} heading={item.title} date={item.date} imageHeight={'90px'} imageWidth={'110px'}>
                        <NewsCatagory catagory={item.catagory} backgroundColor={'#e29818'} className='absolute top-0 left-0' />
                    </TextNewsCard>
                ))
            }
        </div>
    )
}

export default LifeStyle
