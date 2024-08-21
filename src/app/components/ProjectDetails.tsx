'use client';

import React from 'react';

import Link from 'next/link';

export default function ProjectDetails() {
  return (
    <div className=' w-full bg-[#001F3F] py-10 '>
      <div className=' w-4/5 mx-auto pt-20 flex  '>
        <div className=' w-2/5 bg-primary px-10  pt-16 rounded-2xl'>
          <h1 className=' text-white font-primary font-bold text-6xl'>
            Let's build <br /> the right team for you.
          </h1>
          <button className=' w-56 h-14 bg-white mt-8  text-black rounded'>Hire Now</button>
          <img className=' w-full' src='/images/persons.svg' alt='' />
        </div>
        <div className=' w-3/5  flex justify-end '>
          <form>
            <div className=' w-11/12  h-96  px-11  '>
              <div className=' grid grid-cols-2 gap-2 w-full mt-4'>
                <div className=' w-full flex flex-col text-white'>
                  <label htmlFor=''>Project Title*</label>
                  <input
                    type='text'
                    className=' w-full h-16 border-[1px] border-bordercolor bg-backgroundcolor text-lg rounded-md   font-normal  pl-6 py-4  focus:outline-none text-white'
                  />
                </div>
                <div className=' w-full flex flex-col text-white'>
                  <label htmlFor=''>Time Frame*</label>
                  <input
                    type='text'
                    className=' w-full h-16 border-[1px] border-bordercolor bg-backgroundcolor text-lg rounded-md   font-normal  pl-6 py-4  focus:outline-none text-white'
                  />
                </div>
              </div>
              <div className=' w-full flex flex-col mt-7 text-white'>
                <label htmlFor=''>Services*</label>
                <div className=' w-full flex mt-2'>
                  <div className=' w-60'>
                    <input className=' w-4 h-3' type='checkbox' name='' id='' />{' '}
                    <span className=' ml-4'>Mobile App Development</span>
                  </div>
                  <div className=' '>
                    <input className=' w-4 h-3' type='checkbox' name='' id='' />{' '}
                    <span className=' ml-4'>Web & CMS Development </span>
                  </div>
                </div>
                <div className=' w-full flex mt-2 text-white'>
                  <div className=' w-60'>
                    <input className=' w-4 h-3' type='checkbox' name='' id='' />{' '}
                    <span className=' ml-4'>Blockchain Development</span>
                  </div>
                  <div className=' '>
                    <input className=' w-4 h-3' type='checkbox' name='' id='' /> <span className=' ml-4'>DevOps </span>
                  </div>
                  <div className=' ml-6'>
                    <input className=' w-4 h-3' type='checkbox' name='' id='' /> <span className=' ml-4'>AI & ML </span>
                  </div>
                </div>
                <div className=' w-full flex mt-2'>
                  <div className=' w-60'>
                    <input className=' w-4 h-3 ' type='checkbox' name='' id='' />{' '}
                    <span className=' ml-4'>E-Commerce Development</span>
                  </div>
                  <div className=' '>
                    <input className=' w-4 h-3' type='checkbox' name='' id='' />{' '}
                    <span className=' ml-4'>Iot And Embedded </span>
                  </div>
                </div>
                <div className=' w-full flex mt-2'>
                  <div className=' w-60'>
                    <input className=' w-4 h-3' type='checkbox' name='' id='' />{' '}
                    <span className=' ml-4'>Game Development</span>
                  </div>
                </div>
              </div>
              <div className=' w-full flex flex-col mt-7 text-white'>
                <label htmlFor=''>Project Description*</label>
                <textarea className=' w-full h-32 border-[1px] border-bordercolor bg-backgroundcolor text-lg rounded-md   font-normal  pl-6 py-4  focus:outline-none text-white'></textarea>
              </div>
              <div className=' w-full flex gap-2'>
                <a
                  href='https://calendly.com/ir_solutions'
                  className='w-2/4 h-16 rounded border-[#FFFFFF] border-[1px] bg-opacity-10 bg-[#FFFFFF] mt-7 text-white flex justify-center items-center '
                >
                  {' '}
                  <button className=''>Skip & Schedule Meeting</button>
                </a>
                <Link
                  href='/request-submitted'
                  className='w-2/4 h-16 rounded border-[#FFFFFF] border-[1px]  bg-[#238FFF] text-[#FFFFFF] mt-7 font-sans font-normal hover:bg-btn-dark-primary flex justify-center items-center '
                >
                  <button className=''>Submit</button>
                </Link>
              </div>
              <hr className=' w-full mt-9' />
              <p className=' w-[108%] font-normal text-sm font-sans mt-4 pr-3 text-white'>
                By filling this information, you are agreeing to IR SolutionsTerms of Service, Privacy Policy, and that
                IR Solutions may monitor or record audio or video calls for quality assurance and training purposes.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
