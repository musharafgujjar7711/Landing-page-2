import React from 'react';

function Section6() {
  return (
    <div className="container">
      <div className="py-20 lg:mt-24 bg-sear flex flex-col items-center mx-auto gap-5 px-8 mb-14 mt-20 lg:gap-11">
        <h1 className="sm:text-2xl text-center font-bold lg:text-4xl capitalize sm:w-full lg:w-2/4">
          Lorem ipsum dolor sit amet consectetur rttr
        </h1>
        <div className="flex flex-col items-center justify-center lg:flex-row md:flex-row w-full">
          <img
            src="/search.svg"
            alt=""
            className="lg:w-3/5 md:h-1/4 w-full mb-4 lg:mb-0"
          />
          <button className="btn btn-3 py-4 lg:px-3 text-sm w-32 text-center   ">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Section6;
