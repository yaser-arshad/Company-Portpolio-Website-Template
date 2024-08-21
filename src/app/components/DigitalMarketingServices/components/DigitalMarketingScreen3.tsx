import React from 'react';

export default function DigitalMarketingScreen3() {
  return (
    <div className=' w-full bg-white mt-20  flex'>
      <div className=' w-3/5 pt-20 '>
        <div className=' w-2/4  mx-auto'>
          <h1 className=' font-primary font-bold text-5xl text-[#101828] text-left'>
            Boost Your Online Presence with Digital Marketing Services
          </h1>

          <div className=' w-[90%] flex justify-between mt-10 '>
            <div className=' flex flex-col  font-normal text-2xl text-[#101828]'>
              <p>December</p>
              <p>Stats</p>
            </div>

            <div className=' flex flex-col'>
              <p className=' font-bold text-4xl text-primary'>3,1M +</p>
              <p className=' font-normal text-base text-black'>Social followes</p>
            </div>

            <div className=' flex flex-col'>
              <p className=' font-bold text-4xl text-primary'>3,1 M</p>
              <p className=' font-normal text-base  text-black'>Social followers</p>
            </div>
          </div>
        </div>
      </div>
      <div className='w-2/5'>
        <img src='/images/laughingboy.png' className='' alt='' />
      </div>
    </div>
  );
}
