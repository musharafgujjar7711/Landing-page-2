import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=' container  ' >
      <div className='mx-auto lg:flex sm:flex sm:items-center sm:gap-5   lg:items-center  lg:justify-between  p-2 mt-4 sm:mt-8'>
      <div className='flex items-center justify-between'>
        <h1 className='logo  text-3xl font-bold text-primary size-[30px] w-[82px] h-[44px] left-10 '>Logo</h1>
 
        <div className='md:hidden cursor-pointer' onClick={toggleMenu}>
          {isOpen ? (
            <FaTimes className='text-blue-400 h-6 w-6' />
          ) : (
            <FaBars className='text-blue-400 h-6 w-6' />
          )}
        </div>
      </div>

      {isOpen && (
        <div className='absolute top-20 left-0 w-full bg-white border-t shadow-lg z-10 flex flex-col '>
          <ul className='flex flex-col items-start p-4 '>
            <li className='py-2 hover:text-sky-300 duration-100 cursor-pointer'>Home</li>
            <li className='py-2 hover:text-sky-300 duration-100 cursor-pointer'>About Us</li>
            <li className='py-2 hover:text-sky-300 duration-100 cursor-pointer'>Blog</li>
            <li className='py-2 hover:text-sky-300 duration-100 cur
            sor-pointer'>Service</li>
            <li className='py-1 bg-blue-400 rounded-lg text-white text-center w-full hover:bg-blue-500 cursor-pointer'>Contact Us</li>
          </ul>
        </div>
      )}

      <div className='md:flex items-center gap-10 hidden  capitalize text-xl '>
        <ul className='hidden md:flex capitalize items-end gap-12 w-[436px] h-[25px] left-[779px]'>
          <li className='hover:text-sky-300 duration-100 cursor-pointer'>Home</li>
          <li className='hover:text-sky-300 duration-100 cursor-pointer'>About Us</li>
          <li className='hover:text-sky-300 duration-100 cursor-pointer'>Blog</li>
          <li className='hover:text-sky-300 duration-100 cursor-pointer'>Service</li>
        </ul>
        <button className='btn btn-1 sm:w-40'>Contact Us</button>
      </div>
      </div>
    </div>
  );
}

export default Navbar;
