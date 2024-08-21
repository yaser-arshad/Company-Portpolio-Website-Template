import React from 'react';

// import CarouselControlsInside from './CarouselControlsInside';

function HireTopDeveloper() {
  return (
    <div className=' mt-45'>
      <div className='px-14  mx-auto w-2/4 text-black'>
        <h1 className='  text-center font-bold text-5xl'>
          <span className=' text-primary'>Hire</span> Top Developers effortlessly
        </h1>
        <p className=' font-normal text-lg  mt-6'>
          Experience a smooth hiring journey with continuous assistance from our team.
        </p>
        <button className=' mt-4  h-12 w-70 rounded bg-primary text-lg leading-7 text-white flex justify-center items-center mx-auto hover:bg-btn-dark-primary'>
          Hire Developers
        </button>
      </div>

      <div className=' w-[90%]  relative flex mt-20   '>
        <div className='absolute flex  w-full mt-28 top-[-135px]'>
          <div className=' w-[300px] bg-[#FFFFFF] rounded-tl-full rounded-tr-full rounded-b-[2000px] ml-10 p-2'>
            <img src='images/slider1.svg' className=' mx-auto  pt-5' alt='' />
            <h1 className=' text-center text-black font-bold font-sans text-xl pt-5  '>Joshua Max</h1>
            <p className=' text-center text-black font-sans text-xs pb-4 '>Web Developer</p>
          </div>

          <div className='  w-[300px]  bg-[#FFFFFF] rounded-tl-full rounded-tr-full rounded-b-[2000px] ml-10 p-2'>
            <img src='images/slider1.svg' className=' mx-auto  pt-5' alt='' />
            <h1 className=' text-center text-black font-bold font-sans text-xl pt-5  '>Joshua Max</h1>
            <p className=' text-center text-black font-sans text-xs '>Web Developer</p>
          </div>

          <div className='  w-[300px] bg-[#FFFFFF] rounded-tl-full rounded-tr-full rounded-b-[2000px] ml-10 p-2'>
            <img src='images/slider1.svg' className=' mx-auto  pt-5' alt='' />
            <h1 className=' text-center text-black font-bold font-sans text-xl pt-5  '>Joshua Max</h1>
            <p className=' text-center text-black font-sans text-xs '>Web Developer</p>
          </div>

          <div className='  w-[300px]  bg-[#FFFFFF] rounded-tl-full rounded-tr-full rounded-b-[2000px] ml-10 p-2'>
            <img src='images/slider1.svg' className=' mx-auto  pt-5' alt='' />
            <h1 className=' text-center text-black font-bold font-sans text-xl pt-5  '>Joshua Max</h1>
            <p className=' text-center text-black font-sans text-xs '>Web Developer</p>
          </div>

          <div className='  w-[300px]  bg-[#FFFFFF] rounded-tl-full rounded-tr-full rounded-b-[2000px] ml-10 p-2 absolute  right-[-320px]   '>
            <img src='images/slider1.svg' className=' mx-auto  pt-5' alt='' />
            <h1 className=' text-center text-black font-bold font-sans text-xl pt-5 '>Joshua Max</h1>
            <p className=' text-center text-black font-sans text-xs pb-4 '>Web Developer</p>
          </div>
        </div>
      </div>
      <div className=' bg-[#238FFF] w-full h-40 mt-60'></div>

      {/* <CarouselControlsInside /> */}
    </div>
  );
}

export default HireTopDeveloper;
