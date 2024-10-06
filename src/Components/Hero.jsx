import React from 'react';

function Hero() {
  return (
       <div className=' relative bg-col  '>
        <div className=' container flex flex-col-reverse lg:flex-row  items-center gap-20 mt-11 lg:mt-16'>
        <div className=' flex flex-col items-center lg:items-start flex-1 gap-5 sm:gap-14 '>
      
       <h1 className=' text-xl md:text-4xl lg:text-5xl sm:text:2xl  text-center lg:text-left font-bold h-[200px] leading-8  '>
         Experience  <span className='text-primary leading-8'>mobile and web</span> application and website  measuring
         </h1>
     
         <p className='text-des text-lg text-center lg:text-left mb-6 leading-8'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nemo architecto perferendis obcaecati necessitatibus error natus voluptas quas corrupti culpa, quia qui nisi, harum quod porro sapiente amet magnam sed.
         </p>
         <div className=' flex items-center flex-wrap gap-5 flex-row '>
          <button type='button' className=' btn btn-1 hover:bg-blue-500' >contacts us </button>
          <button  type='button' className= ' btn btn-2 '>view more</button>
         </div> 
        </div>
        {/* <!-- image --!> */}
        <div className=' flex justify-center flex-1 mb-10 lg:mb-16 z-10'>
    <img src="/man.svg" alt="" className='  w-5/6 h-5/6 sm:h/3/4 sm:w-3/4 md:w-full md:h-full' />
        </div>
       
        </div>
      
       </div>
  );
}

export default Hero;