import React from 'react';

export default function UseCaseStudy() {
  return (
    <div
      className=' bg-white w-full 
border-b-1 border-custom-gray   mb-6 flex relative '
    >
      <div className=' w-2/4 ml-32 text-[#282D46]'>
        <span className='flex justify-center items-center w-52 h-16 rounded-3xl  text-lg font-medium  bg-[#FFA1BE] bg-opacity-[26%] text-[#232323] font-secondary mt-28 mb-60  '>
          UX Case Study
        </span>
        <div className=' flex'>
          <img className=' w-36 h-28' src='/images/aiimageicon.svg' alt='' />
          <p className=' font-primary text-[#282D46] font-semibold text-6xl ml-9'>
            AI Image <br /> Generator
          </p>
        </div>
        <h3 className=' font-secondary font-semibold text-2xl text-[#282D46] mt-12'>Client Overview:</h3>
        <div className=' w-11/12 relative'>
          <p className=' text-black font-sans font-normal text-base w-[62%]'>
            Our client, a dedicated farmer managing a workforce in a village, grappled with the cumbersome task of
            manually monitoring and managing the attendance, work hours, and salaries of laborers engaged in
            fruit-plucking activities. The manual process led to inefficiencies, making it challenging for the client to
            accurately track work amounts, and hours invested, and streamline payroll operations
          </p>
          <img className=' absolute left-[365px] top-44 w-11 h-12 ' src='/images/cursor.svg' alt='' />
        </div>
      </div>
      <div className=' w-2/4'>
        <img className=' w-full' src='/images/sideimage.svg' alt='' />
      </div>

      <span className='flex justify-center items-center w-64 h-12  rounded-3xl text-xl font-semibold  text-white bg-primary font-poppins absolute bottom-[-23px] left-[118px]  '>
        The Challenge
      </span>
    </div>
  );
}
