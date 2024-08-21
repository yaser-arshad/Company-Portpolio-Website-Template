import React from 'react';

import ImageTitle from './ImageTitle';

export default function IrApproach() {
  return (
    <div
      className='mt-28  w-full text-[#282D46] 
border-b-1 border-custom-gray  mb-10 relative '
    >
      <h1 className=' font-poppins font-semibold text-5xl text-center text-[#282D46]'>Our Process</h1>

      <div className=' grid grid-cols-4 w-[1024px] mx-auto mt-32'>
        <ImageTitle imageUrl='/images/discover.svg' text='Discover' />
        <ImageTitle imageUrl='/images/define.svg' text='Define' />
        <ImageTitle imageUrl='/images/ideate.svg' text='Ideate' />
        <ImageTitle imageUrl='/images/prototype.svg' text='Prototype' />
      </div>

      <div className=' grid grid-cols-4 w-[1024px] mx-auto mt-32 mb-36 '>
        <ImageTitle imageUrl='/images/design.svg' text='Design' />
        <ImageTitle imageUrl='/images/develope.svg' text='Develope' />
        <ImageTitle imageUrl='/images/qualityassurance.svg' text='Quality Assurance' />
        <ImageTitle imageUrl='/images/launch.svg' text='Launch' />
      </div>

      <span className='flex justify-center items-center w-60 h-12  rounded-3xl text-xl font-semibold  text-white bg-primary font-secondary absolute bottom-[-23px] left-[118px]  '>
        The Solution
      </span>
    </div>
  );
}
