import React from 'react';

export default function IdeasToReality() {
  return (
    <div className='w-full bg-primary bg-opacity-[95%] h-[414px] flex mb-5'>
      <div className='w-2/4 pl-36 pt-28'>
        <h1 className='font-bold text-[55px] text-white'>Let&apos;s take your ideas to reality</h1>
        <a href='https://calendly.com/ir_solutions' target='_blank'>
          <button className=' w-[200px] h-14 rounded  font-normal text-lg text-black bg-white mt-5'>
            Schedule Meeting
          </button>
        </a>
      </div>
      <div className='w-2/4 h-[416px] flex justify-end'>
        <img className='h-full max-w-none' src='/images/playing.svg' alt='' />
      </div>
    </div>
  );
}
