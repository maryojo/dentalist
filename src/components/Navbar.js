import React from 'react'
import Button from './Button'
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center px-10 my-7'>
      <div>
        <img src={logo} alt="logo" className='w-28'/>
      </div>
      <div className='flex gap-7'>
        <p className='nav-text'>About Us</p>
        <p className='nav-text'>About Us</p>
        <p className='nav-text'>Our Services</p>
        <p className='nav-text'>Contact Us</p>
      </div>
      <div>
        <Button text="Book appointment"/>
      </div>
    </nav>
  )
}

export default Navbar