import React from 'react';

import { teamOfferingData } from 'app/core/_data';

export default function OurTeamOfferings() {
  return (
    <div className=' border-b-[1px] border-b-[#D9D9D9]'>
      <div className='md:container bg-white mx-auto px-4 pt-16 md:pt-[116px] pb-[60px]  text-black  '>
        <h1 className='text-4xl md:text-6xl font-bold text-center'>
          Our <span className='text-primary'> Team </span> Offerings
        </h1>

        <p className=' text-lg text-center font-normal pt-5 pb-6 w-10/12  md:w-3/5 mx-auto  '>
          Be it dedicated software solutions, comprehensive project management, or augmented staffing, we have it all.
          We connect you with highly skilled developers operating in your preferred time zone.
        </p>

        <div className='grid grid-cols-2 md:grid-cols-3 gap-8 md:px-36 p-8  '>
          {teamOfferingData.map((item, index) => (
            <div key={index} className='py-4 rounded-lg flex flex-col justify-center items-center text-center'>
              <img className='mb-4' src={item.src} alt={item.label} />
              <p className='text-lg md:text-3xl text-center'>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
