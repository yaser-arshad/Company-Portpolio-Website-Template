import React from 'react';

export default function ImageText() {
  return (
    <div className=' w-full '>
      <div className=' w-full relative'>
        <img className=' w-full' src='/images/bgimg.png' alt='' />

        <div className=' absolute w-full top-5 flex   '>
          <div className=' w-[45%] pl-14 pt-32   '>
            <h1 className='  w-full text-[65.42px] font-bold text-white leading-tight'>
              AI <span className=' text-[#FF165C]'>Art Generator</span>{' '}
              <span className=' inline-block '>App Case Study</span>
            </h1>
            <p className=' w-full  text-white text-lg font-normal  pt-5'>
              In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the
              visual form of a document or a typeface without relying on meaningful content.
            </p>

            <div className=' mt-8 flex gap-4'>
              <button className=' bg-white h-12 rounded-lg w-40'>
                <img className=' w-full' src='/images/googleplay.svg' alt='' />
              </button>
              <button className='  h-12 rounded-lg w-40'>
                <img className=' w-full' src='/images/appstore.svg' alt='' />
              </button>
            </div>
          </div>

          <div className=' w-[55%]'>
            <img className=' w-full h-[580px] ' src='/images/phones.svg' alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}
