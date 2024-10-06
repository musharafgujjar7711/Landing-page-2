import React from 'react';

function Footer() {
  return (
    <div className=" py-10 container">
      <div className="container mx-auto flex flex-col sm:flex-row lg:flex-row justify-between px-4">
        
        {/* Logo Section */}
        <div className="flex items-center mb-8 lg:mb-0">
        <h1 className='logo  text-3xl font-bold text-primary size-[30px] w-[82px] h-[44px] left-10 '>Logo</h1>
        </div>

        {/* About Section */}
        <div className="flex flex-col mb-8 lg:mb-0 lg:w-1/3">
          <h2 className="text-lg font-bold mb-2">About Us</h2>
          <ul className="flex flex-col">
            <li>Our Story</li>
            <li>Mission & Vision</li>
            <li>Team</li>
            <li>Careers</li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="flex flex-col mb-8 lg:mb-0 lg:w-1/3">
          <h2 className="text-lg font-bold mb-2">Contact Us</h2>
          <ul className="flex flex-col">
            <li>Email: info@example.com</li>
            <li>Phone: +1 (234) 567-890</li>
            <li>Address: 123 Main St, City, Country</li>
          </ul>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="text-center py-4">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
