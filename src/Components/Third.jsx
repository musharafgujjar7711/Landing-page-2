import React from 'react'


function Third() {
    return (
        <div className=' container mt-10 lg:mt-12 mb-9'>
           <div className='items flex pl-2  items-center flex-col-reverse md:flex-wrap  lg:flex-row justify-between  '>
           <div className=' flex items-center gap-5 w-[318px] h-[115px] '>
            <img src="/seo.svg" alt="" className='py-5 px-5 rounded-xl bg-web sm:py-2 sm:px-2 ' /> 
              <div className=' flex flex-col px-2 py-4 gap-2'>
              <h1 className=' font-bold text-lg md:text-xl lg:text-2xl'>
                web Application
               </h1>
               <p className=' text-third'>
                thi is web application
               </p>
              </div>
            </div>
           <div className=' flex items-center gap-5 w-[318px] h-[115px] '>
           <img src="/web.svg" alt="web" className='py-5 px-5 rounded-xl bg-seo ' /> 
              <div className=' flex flex-col px-2 py-4 gap-2'>
              <h1 className=' font-bold text-xl md:text-xl lg:text-2xl'>
                Seo
               </h1>
               <p  className=' text-third'>
                Lorem ipsum dolor sit 
               </p>
              </div>
            </div>
           <div className=' flex items-center gap-5 w-[318px] h-[115px]'>
          
           <img src="/ar.svg" alt="" className='py-5 px-5 rounded-xl bg-ar ' /> 
              <div className=' flex flex-col px-2 py-4 gap-2'>
              <h1 className=' font-bold text-xl md:text-xl lg:text-2xl'>
               AR/VR Solution
               </h1>
               <p  className=' text-third'>
               Lorem ipsum dolor sit 
               </p>
              </div>
            </div>
           <div className=' flex items-center gap-5 w-[318px] h-[115px] '>
           <img src="/mob.svg" alt="" className='py-5 px-5 rounded-xl bg-mob ' /> 
              <div className=' flex flex-col px- py-4 gap-2'>
              <h1 className=' font-bold text-xl md:text-xl lg:text-2xl'>
                web Application
               </h1>
               <p  className=' text-third'>
                thi is web application
               </p>
              </div>
            </div>
           </div>
        </div>
    )
}

export default Third