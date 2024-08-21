import React from 'react';

import { benefitsOfFixedPricedata } from 'app/core/_data';

export default function BenefitsOfFixedPriceModel() {
  return (
    <div className=' w-full bg-[#E7F2FD] mx-auto  pt-24 pb-24  text-black  '>
      <h1 className=' text-5xl font-bold text-center py-8'>
        Benefits of <span className='text-primary'>Fixed Price Model</span>
      </h1>

      <p className=' text-lg text-center font-normal pb-6  w-3/5 mx-auto  '>
        Fill skill gaps and scale flexibly without the burden of full-time hires. Pay only for work done, save on taxes
        & fees. Start scaling, stop struggling!
      </p>

      <div className='grid grid-cols-4 gap-10 px-36 mt-10 mx-auto'>
        {benefitsOfFixedPricedata.map((item, index) => (
          <div
            key={index}
            className='bg-white rounded-lg flex flex-col justify-center items-center text-center w-56 h-56'
          >
            <img className='mb-4' src={item.src} alt={item.label} />
            <p className='font-normal text-xl text-center px-3'>{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
