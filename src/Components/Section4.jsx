import React from 'react';

function Section4() {
  return (
    <div className='relative'>
      <div className='container flex flex-col lg:flex-row text-center items-center mt-20 lg:mt-40 space-x-0 lg:space-x-10 gap-5 '>
        
        <div className='flex flex-col items-center flex-1 gap-20 bg-sec4 rounded-lg py-9 '>
          <h1 className='text-lg leading-7 md:text-2xl lg:text-3xl text-four font-bold w-[400px]'>
            Lorem Ipsum is simply dummy text.
          </h1>
          <p className=' text-lg mb-6 leading-8 text-des'>
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android & IOS.
          </p>
          <button className='btn btn-1'>view more</button>
        </div>

        <div className='flex flex-col items-center flex-1 gap-20 bg-primary rounded-lg py-9  '>
          <h1 className='text-lg leading-7 md:text-2xl lg:text-3xl text-white font-bold w-[400px]'>
            Lorem Ipsum is simply dummy text.
          </h1>
          <p className=' text-lg mb-6 leading-8 text-white '>
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android & IOS.
          </p>
          <button className='btn btn-2'>view more</button>
        </div>

      </div>
    </div>
  );
}

export default Section4;
