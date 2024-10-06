import React from 'react';

function Section() {
  return (
       <div className=' relative'>
        <div className=' container flex flex-col-reverse lg:flex-row  items-center  mt-11 lg:mt-16 '>
           
        <div className=' flex flex-col items-center lg:items-start flex-1 gap-12 w-3/4 h-3/4 sm:h/3/4 sm:w-3/4 md:w-full md:h-full'>
        <div className=' flex items-center gap-6 '>
                <img src="/emogi.svg" className='px-3 py-3 bg-emogi rounded-full ' alt="" />
                <div className=''>
                    <h1 className=' text-xl font-bold lg:text-xl text-four'>Lorem ipsum dolor sit text here</h1>
                    <p className=' text-lg text-third'>this is lorem of the day text here</p>
                </div>
            </div>
        <h1 className=' text-xl md:text-2xl lg:text-3xl text-four text-center lg:text-left leading-7 font-bold'>
          <span className='text-primary'>mobile and web</span> application and website  measuring
         </h1>
         <p className='text-gray-900 text-lg text-center lg:text-left mb-6 leading-8'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nemo architecto perferendis obcaecati necessitatibus error natus voluptas quas corrupti culpa, quia qui nisi, harum quod porro sapiente amet magnam sed.
         </p>
         
        </div>
        {/* <!-- image --!> */}
        <div className=' flex justify-center flex-1 mb-10 lg:mb-16b z-10'>
    <img src="/mobile.svg" alt="" className=' w-5/6 h-5/6 sm:h/3/4 sm:w-3/4 md:w-full md:h-full' />
        </div>
        </div>
       </div>
  );
}

export default Section;