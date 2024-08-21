import React from 'react';

export default function Results() {
  return (
    <div
      className='mt-28  w-full text-[#282D46] 
border-b-1 border-custom-gray  mb-10 relative '
    >
      <div className=' w-5/6 mx-auto '>
        <div className=' w-full  flex justify-between mb-4'>
          {' '}
          <span className=' w-1/12 flex justify-center items-center  '>
            {' '}
            <img className='' src='/images/arrow1.svg' alt='' />
          </span>{' '}
          <p className=' w-11/12 font-poppins text-2xl font-medium text-[#282D46] '>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar et id mi vitae donec id Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Eaque, nam.
          </p>
        </div>
        <div className=' w-full  flex justify-between mb-4'>
          {' '}
          <span className=' w-1/12 flex justify-center items-center  '>
            {' '}
            <img className='' src='/images/arrow1.svg' alt='' />
          </span>{' '}
          <p className=' w-11/12 font-poppins text-2xl font-medium text-[#282D46] '>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar et id mi vitae donec id Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Facere, iste!{' '}
          </p>
        </div>
        <div className=' w-full  flex justify-between mb-4'>
          {' '}
          <span className=' w-1/12 flex justify-center items-center  '>
            {' '}
            <img className='' src='/images/arrow1.svg' alt='' />
          </span>{' '}
          <p className=' w-11/12 font-poppins text-2xl font-medium text-[#282D46] '>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar et id mi vitae donec id Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Facere, iste!
          </p>
        </div>
        <div className=' w-full  flex justify-between mb-20'>
          {' '}
          <span className=' w-1/12 flex justify-center items-center  '>
            {' '}
            <img className='' src='/images/arrow1.svg' alt='' />
          </span>{' '}
          <p className=' w-11/12 font-poppins text-2xl font-medium text-[#282D46] '>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar et id mi vitae donec id Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Facere, iste!
          </p>
        </div>
      </div>

      <span className='flex justify-center items-center w-40 h-12  rounded-3xl text-xl font-semibold  text-[#FFFFFF] bg-[#238FFF] font-poppins absolute bottom-[-23px] left-[118px]  '>
        Screens
      </span>
    </div>
  );
}
