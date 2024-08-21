import React from 'react';

import { stepsData } from 'app/core/_data';
import Link from 'next/link';

export default function IrHiringProcess() {
  return (
    <div className='relative  pt-24 bg-white pb-14 border-b-[1px] border-b-[#D9D9D9] '>
      {/* <div className='absolute top-0 right-8 '></div> */}
      <h1 className=' text-6xl   font-bold  text-center pb-11'>
        <span className='text-black font-secondary font-semibold text-center'>IR</span>
        <span className=' text-primary font-primary font-bold'> Hiring Process</span>
      </h1>

      <p className='text-lg font-normal text-center w-4/6 mx-auto text-black'>
        With our smart High 5 hiring process, experience the quickest and most straightforward way to on board Asia top
        IT developers into your team.
      </p>

      {/* Cards */}
      <div className='flex justify-between items-center text-center px-[4.313rem] pt-20'>
        {stepsData.map((step, index) => (
          <div key={index} className='relative flex flex-col items-center '>
            <img className='mb-4' src={step.imgSrc}></img>

            <h2 className='text-xl font-bold mb-2 text-primary'>{step.title}</h2>
            <p className='text-black text-sm font-normal px-12 '>{step.description}</p>
          </div>
        ))}
      </div>

      <div className='flex justify-center flex-end'>
        <Link href='/contact-us'>
          <button className='bg-primary flex justify-center items-center rounded font-primary font-bold text-lg text-white w-56 h-14 hover:bg-btn-dark-primary mt-[3.313rem]'>
            Start Process
          </button>
        </Link>
      </div>
    </div>
  );
}
