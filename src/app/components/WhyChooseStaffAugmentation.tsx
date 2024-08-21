import React from 'react';

import { StaffAugCardData } from 'app/core/_data';

export default function WhyChooseStaffAugmentation() {
  return (
    <div className='md:container mx-auto px-6 md:px-15 text-black mb-[5.5rem]'>
      <h1 className=' text-4xl md:text-5xl  font-bold md:text-center pt-[5.625rem] w-8/12 md:w-3/4 md:mx-auto '>
        Why Organizations Choose
        <span className=' text-primary'> IR Solutions</span> for Staff Augmentation
      </h1>

      <p className=' text-lg md:text-center  font-normal pt-6 w-10/12 md:w-67 md:mx-auto'>
        We don't settle for good, we strive for exceptional. Partner with us for transformative projects that deliver
        lasting value and assured excellence.
      </p>

      {/* Cards Container */}
      <div className='bg-[#E7F2FD] rounded-[16px] text-black mt-9 pb-9 '>
        <div className='grid grid-cols-3 gap-3 md:gap-12   pt-10    px-10'>
          {/* Card 1 */}

          {StaffAugCardData.map((card, index) => (
            <div
              key={index}
              className='bg-white shadow-md rounded-[12px] col-span-3 md:col-span-1 flex flex-col p-5 md:p-4 h-40 md:h-auto items-left'
            >
              <div className='flex items-center'>
                <h2 className='text-xl font-bold'>{card.title}</h2>
                <img src={card.icon} alt={`Icon ${index + 1}`} className='ml-2' />
              </div>
              <p className='text-black text-sm mt-4 font-normal'>{card.description}</p>
            </div>
          ))}

          {/* Image with Text */}
          <div className='col-span-3 bg-primary rounded-[16px] mt-5 md:mt-0'>
            <div className='grid md:grid-cols-3 gap-8 bg-primary rounded-[32px] items-center'>
              <div className=' text-white ml-8'>
                <h2 className='  font-normal text-4xl md:text-6xl w-full md:w-[486px] pt-10 '>
                  <b className=' font-bold'>Infinite</b> Business Continuity
                </h2>

                <p className=' w-80 pt-5  font-normal text-sm text-white pb-10  '>
                  We understand the importance of uninterrupted business operations for IT companies. IR Solutions
                  provides every onboarded company with a free project manager, dedicated CSM, and employee replacement
                  support as part of our IT staffing services. (Unwavering Reliability, Seamless Experience,
                  Uninterrupted Support)
                </p>
              </div>

              <div className='grid place-content-center md:ml-9 px-9 md:px-0'>
                <img src='/images/org-mid.png' alt='Image 1' className='' />
              </div>
              <div className='grid place-content-end'>
                <img src='/images/apps.png' alt='Image 1' className=' rounded-r-[16px]' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
