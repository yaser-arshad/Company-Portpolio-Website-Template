import React from 'react';

import { cardIRHiringProcessArrowed } from 'app/core/_data';

export default function IrHiringArrow() {
  return (
    <div className='  px-32 w-full bg-[#E7F2FD] '>
      <div className='w-3/5 flex flex-col justify-center items-center pt-20 mx-auto text-center'>
        <h1 className=' text-black font-bold text-6xl pt-10'>
          IR <span className='text-primary'>Hiring Process</span>
        </h1>
        <div className='w-full pt-6'>
          <p className=' text-black text-lg font-normal font-primary'>
            With our smart High 5 hiring process, experience the quickest and most straightforward way to on board
            Asia's top IT developers into your team.
          </p>
        </div>
      </div>
      <div className='text-black  mt-20  h-96 mx-8'>
        {cardIRHiringProcessArrowed.map((item, index) => {
          return (
            <div key={index} className=''>
              <div className='relative'>
                <img src={item.rectangle} alt='' className={`absolute w-[400px] ${item.rectangleClasses}`} />
                <img src={item.droplet} className={`absolute ${item.dropletClasses}`} />
              </div>
              <div className='relative z-50'>
                <p className={`absolute capitalize top-[72px] font-semibold ${item.paraClasses}`}>{item.para}</p>
              </div>
              <div className='relative z-10'>
                <p className={`absolute ${item.indexClasses}`}>0{index + 1}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
