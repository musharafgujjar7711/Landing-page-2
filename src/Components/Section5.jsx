import React from 'react';

function Section5() {
  return (
    <div className='container relative mt-16 lg:mt-40'>
      <div className='text-center text-2xl font-bold'>
        You will be good company
      </div>
      <div className='flex items-center justify-center flex-col lg:flex-row md:flex-row mt-10 gap-5'>
        <img src="/bev.svg" alt="Bev" className=' sm:max-w-[150px] w-[150px] lg:max-w-[300px]' />
        <img src="/cap.svg" alt="Cap" className=' sm:w-[150px] max-w-[150px] lg:max-w-[300px]' />
        <img src="/h4.svg" alt="H4" className=' sm:w-[150px] max-w-[150px] lg:max-w-[300px]' />
        <img src="/i.svg" alt="I" className=' sm:w-[150px] max-w-[150px] lg:max-w-[300px]' />
      </div>
    </div>
  );
}

export default Section5;
