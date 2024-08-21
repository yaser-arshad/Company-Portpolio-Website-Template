import React from 'react';

import { startupCompanies } from 'app/core/_data';
import { WhyIrData } from 'app/core/_data';
import { expertiseData } from 'app/core/_data';

function Why() {
  return (
    <div className=' bg-bg-primary w-full pb-14'>
      <div className='flex flex-col md:flex-row justify-between pb-10 md:pb-0 md:h-40 md:items-center px-7 md:px-15 '>
        <div className='flex flex-col md:w-2/5 pt-9 pb-5 md:py-0'>
          <p className='text-white text-base font-normal py-5'>Trusted by Leading Companies</p>
          <div className='flex h-16 w-full  justify-between items-center'>
            {startupCompanies.map((company) => (
              <img key={company.id} className='' src={company.logo} alt={company.name} />
            ))}
          </div>
        </div>
        <div className='md:w-2/6 flex justify-between '>
          {WhyIrData.map((item) => (
            <div key={item.id} className='flex flex-col'>
              <p className='text-primary text-sm font-bold'>{item.category}</p>
              <div className='pt-3 flex'>
                <div className='mr-7'>
                  <p className='text-white font-semibold md:font-bold text-lg'>{item.count}</p>
                  <p className='text-white font-medium md:font-bold text-xs'>{item.subcategory}</p>
                </div>
                {item.id !== 3 && <div className='h-4 w-[1px] bg-white ml-6'></div>}
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className=' w-full bg-[#D9D9D9]' />
      <div className='w-full md:w-3/5 flex flex-col justify-center items-center px-10 md:px-0 pt-20 mx-auto text-center'>
        <h1 className=' text-white font-bold text-6xl'>
          Why <span className='text-primary'>IR</span> Solutions
        </h1>
        <div className='w-full pt-7'>
          <p className=' text-white text-lg font-normal'>
            Why settle for good when you can have the best? For over a decade, our top developers have been crafting
            award-winning mobile apps & websites. Expertise in AR/VR, games, blockchain & more. We’re committed to
            growing your business with our skilled team & quality-driven solutions: innovation, quality, and your
            success.
          </p>
        </div>
      </div>

      <div className=' w-11/12 flex flex-col md:flex-row justify-center items-center   mx-auto mt-7 mb-24 gap-9 '>
        {expertiseData.map((item, index) => (
          <div key={index} className=' w-full md:w-94 flex flex-col justify-center items-center  '>
            <img className=' mt-10' src={item.logo} alt='' />
            <h1 className=' mt-7 font-normal text-3xl leading-10 text-white'>{item.title}</h1>
            <p className='text-white text-center font-normal text-[13.3px] mt-4'>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Why;
