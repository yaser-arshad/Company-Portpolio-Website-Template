import React from 'react';

import { RequestTalentData } from 'app/core/_data';
import Link from 'next/link';

import Button from 'components/core-ui/button/button';

function RequestTalent() {
  return (
    <div className=' pl-15  w-full border-b-[1px] border-b-[#D9D9D9]'>
      <div className=' flex'>
        <div className=' w-[55.5%]  flex flex-col'>
          <h1 className=' font-secondary font-bold text-4.5xl text-black pt-[9.678rem]'>Expanded Globally</h1>
          <p className=' w-[58%]  font-normal text-lg leading-6 text-black pt-6'>
            Our robust team of full-stack developers, designers, and innovators spans key IT-focused Asian markets,
            connecting you with highly skilled and dedicated Top Developers for your staffing needs.
          </p>

          <div className='flex justify-between text-black w-[90%]  '>
            {RequestTalentData.map((item, index) => (
              <div key={index} className='flex flex-col space-y-2 '>
                <div className='font-bold text-4.5xl text-primary'>{item.count}</div>
                <div className='text-base leading-5 font-normal text-black'>{item.category}</div>
              </div>
            ))}
          </div>
          <Link href='/hire-top-talent'>
            <Button className='text-white font-semibold  bg-primary hover:bg-btn-dark-primary border-0 py-3 mt-16  mb-36 '>
              Request Talent
            </Button>
          </Link>
        </div>

        <div className='  w-[44.5%] relative'>
          <img className=' w-full' src='/images/network.png' alt='' />
          <div className=' w-40 h-44 bg-white text-5xl text-primary  absolute top-64 left-[224px] flex justify-center items-center rounded-full shadow-xl'>
            95k+
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequestTalent;
