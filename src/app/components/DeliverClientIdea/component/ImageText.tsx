import React from 'react';

export default function ImageText() {
  return (
    <div className=' w-full h-[565px] relative'>
      <img className=' w-full h-full' src='/images/deliverclientidea.svg' alt='' />

      <div className=' text-black absolute left-96 top-48 w-3/6 h-48 '>
        <p className=' text-6xl font-bold text-center'>
          See How We <br /> Deliver Client's Idea Into Excellent Result!
        </p>
      </div>
    </div>
  );
}
