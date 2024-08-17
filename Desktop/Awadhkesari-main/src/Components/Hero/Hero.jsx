import React from 'react'
import {PhotoNewsCard} from '../index'
import './Hero.css'
const Hero = () => {
  const date = new Date().toLocaleDateString();
  return (
    <div id='hero-grid' className='h-[500px]'>
      <PhotoNewsCard className='item1 hover:scale-95 transition-all duration-300 overflow-hidden cursor-pointer' catagory={'Health'} title={'Netcix cuts out the chill with an integrated...'} date={date} slug={'/'} height='100%' width='100%'/>
      <PhotoNewsCard className='item2 hover:scale-95 transition-all duration-300 overflow-hidden cursor-pointer' catagory={'Health'} title={'Netcix cuts out the chill with an integrated...'} date={date} slug={'/'} height='100%' width='100%'/>
      <PhotoNewsCard className='item3 hover:scale-95 transition-all duration-300 overflow-hidden cursor-pointer' catagory={'Health'} title={'Netcix cuts out the chill with an integrated...'} date={date} slug={'/'} height='100%' width='100%'/>
      <PhotoNewsCard className='item4 hover:scale-95 transition-all duration-300 overflow-hidden cursor-pointer' catagory={'Health'} title={'Netcix cuts out the chill with an integrated...'} date={date} slug={'/'} height='100%' width='100%'/>
    </div>
  )
}

export default Hero
