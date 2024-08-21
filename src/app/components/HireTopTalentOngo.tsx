import React from 'react';

import { startupCompanies } from 'app/core/_data';
import { WhyIrData } from 'app/core/_data';

import DropdownForm from './HireTopTalent/components/DropdownForm';
import Heading from './HireTopTalent/components/Heading';

export default function HireTopTalentOngo() {
  return (
    <div className=' bg-bg-primary'>
      <hr className=' w-full bg-white ' />
      <Heading />
      <DropdownForm />
      <hr className=' w-full bg-white mt-[132px] ' />
      <div className='flex justify-between h-40 items-center px-15 bg-bg-primary '>
        <div className='flex flex-col w-2/5'>
          <p className='text-white  text-base font-normal'>Trusted by Leading Companies</p>
          <div className='flex h-16 w-full  justify-between items-center'>
            {startupCompanies.map((company) => (
              <img key={company.id} className='' src={company.logo} alt={company.name} />
            ))}
          </div>
        </div>
        <div className='w-2/6 flex justify-between'>
          {WhyIrData.map((item) => (
            <div key={item.id} className='flex flex-col'>
              <p className='text-primary text-sm font-bold'>{item.category}</p>
              <div className='pt-3 flex'>
                <div className='mr-7'>
                  <p className='text-white font-bold text-lg'>{item.count}</p>
                  <p className='text-white font-bold text-xs'>{item.subcategory}</p>
                </div>
                {item.id !== 3 && <div className='h-4 w-[1px] bg-white ml-6'></div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
