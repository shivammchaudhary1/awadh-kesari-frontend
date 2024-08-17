import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {NewsCatagory} from '../index';

const PhotoNewsCard = ({catagory, title='Apples good for health', date, slug, height="200px", width="200px", catagoryBackground, catagoryColor, backgroundImage = '/images/dummyImage.webp', contentPadding = '10px', className='', contentColor='white'}) => {
  const navigate = useNavigate();
  return (
    <div onClick={()=>navigate(slug)} style={{backgroundImage: `url(${backgroundImage})`, width, height, padding: contentPadding, color: contentColor}} className={`bg-cover bg-center bg-no-repeat ${className} text-white`}>
      <NewsCatagory catagory={catagory} backgroundColor={catagoryBackground} color={catagoryColor} />
      <h3 className='font-bold'>{title}</h3>
      <p className='font-thin'>{date}</p>
    </div>
  )
}

export default PhotoNewsCard
