import React from 'react';

import { cardWhyInfoGeneric } from 'app/core/_data';

export default function RequestSubmitted() {
  return (
    <div className='bg-bg-primary text-white'>
      <div className='w-full min-h-screen flex flex-col justify-center items-center border-b-2 border-white border-opacity-14pc'>
        <h1 className='text-[88.61px] font-bold'>Request Submitted</h1>
        <h3 className='font-normal text-3xl'>Be Patient! One of our associates will be reaching out to you shortly.</h3>
        <h3 className='font-normal text-3xl'>Thank you for contacting us.</h3>
      </div>
      <div className='w-full'>
        <div className='flex justify-between h-40 items-center px-14 bg-bg-primary text-white'>
          <div className='flex flex-col w-2/5'>
            <p>Trusted by Leading Companies</p>
            <div className='flex h-16 w-full justify-between items-center'>
              <img className='h-7' src='/images/widewaystudio.png' alt='Wideway Studio' />
              <img className='h-12' src='/images/prostarter.png' alt='Prostarter' />
              <img className='h-16' src='/images/metator.png' alt='Metator' />
              <img className='h-16' src='/images/chainlink.png' alt='Chainlink' />
            </div>
          </div>
          <div className='w-4/12 flex justify-between'>
            {cardWhyInfoGeneric.map((item, index) => (
              <div className='flex flex-col' key={index}>
                <p className='uppercase text-primary font-bold'>{item.title}</p>
                <div className='pt-3 flex'>
                  <div className='mr-7'>
                    <p className='font-bold text-lg leading-5'>{item.para}</p>
                    <p className='text-xs leading-3 uppercase mt-px'>{item.caption}</p>
                  </div>
                  {index !== cardWhyInfoGeneric.length - 1 && <div className='h-4 w-px bg-white'></div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
