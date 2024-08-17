import React from 'react'
import { NavBar } from '../index'

const Header = () => {
  return (
    <>
      <div className='sm:flex gap-6 py-2 md:py-7'>
        <img src={'/images/logo.png'} alt="logo" className='' />
        <div className='w-full bg-green-100 min-h-20'>
          AD
        </div>
      </div>
      <NavBar />
    </>
  )
}

export default Header
