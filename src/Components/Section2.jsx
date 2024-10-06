import React from 'react'

function Section2() {
  return (
    <div className=' relative'>
        <div className=' container flex flex-col lg:flex-row  items-center  mt-11 lg:mt-16  '>
            7  {/* <!-- image --!> */}
        <div className=' flex justify-center flex-1 mb-10 lg:mb-16b z-10'>
    <img src="/sec2.svg" alt="" className=' w-5/6 h-5/6 sm:h/3/4 sm:w-3/4 md:w-full md:h-full' />
        </div>
           
        <div className=' flex flex-col items-center lg:items-start flex-1 gap-12 w-3/4 h-3/4 sm:h/3/4 sm:w-3/4 md:w-full md:h-full'>
        <div className=' flex flex-grow md:items-center lg:items-center xl:items-center gap-6 '>
                <img src="/emogi.svg" className='px-3 py-3 flex  bg-primary rounded-full ' alt="" />
                <div className=''>
                    <h1 className=' text-lg font-bold lg:text-xl text-four'>Lorem ipsum dolor sit text here</h1>
                    <p className=' text-lg text-third'>this is lorem of the day text here</p>
                </div>
            </div>
        <h1 className=' text-lg leading-7 md:text-2xl lg:text-3xl text-four text-center lg:text-left  font-bold '>
          <span className='text-primary leading-4'>mobile and web</span> application and website  measuring
         </h1>
         <p className='text-gray-900 text-lg text-center lg:text-left mb-6 leading-8'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nemo architecto perferendis obcaecati necessitatibus error natus voluptas quas corrupti culpa, quia qui nisi, harum quod porro sapiente amet magnam sed.
         </p>
         
        </div>
      
        </div>
       </div>
  )
}

export default Section2