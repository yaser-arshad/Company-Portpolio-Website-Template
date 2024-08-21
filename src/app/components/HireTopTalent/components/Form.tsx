import React from 'react';

import Link from 'next/link';

function Form() {
  return (
    <div className=' w-11/12  mx-auto mt-9 pb-20'>
      <form action='' method='post'>
        <div className='flex w-full justify-between'>
          <div className='flex flex-col w-[49%] justify-between'>
            <label className=' font-normal text-lg text-[#FFFFFF]' htmlFor=''>
              Your Name*
            </label>
            <input
              className='w-full h-16 border-[1px] border-bordercolor bg-backgroundcolor text-lg rounded-md   font-normal  pl-6 py-4 mb-2 focus:outline-none text-white'
              type='text'
              placeholder=''
            />
          </div>

          <div className='flex flex-col w-[49%] justify-between '>
            <label className=' font-normal text-lg text-[#FFFFFF]' htmlFor=''>
              Phone Number*
            </label>
            <input
              className=' w-full h-16 border-[1px] border-bordercolor bg-backgroundcolor text-lg rounded-md   font-normal  pl-6 py-4 mb-2 focus:outline-none text-white'
              type='text'
              placeholder=''
            />
          </div>
        </div>
        <div className='flex w-full justify-between'>
          <div className='flex flex-col w-[49%] justify-between'>
            <label className=' font-normal text-lg text-[#FFFFFF]' htmlFor=''>
              Email*
            </label>
            <input
              className='w-full h-16 border-[1px] border-bordercolor bg-backgroundcolor text-lg rounded-md   font-normal  pl-6 py-4 mb-2 focus:outline-none text-white'
              type='text'
              placeholder=''
            />
          </div>

          <div className='flex flex-col w-[49%] justify-between '>
            <label className=' font-normal text-lg text-[#FFFFFF]' htmlFor=''>
              Country*
            </label>
            <input
              className=' w-full h-16 border-[1px] border-bordercolor bg-backgroundcolor text-lg rounded-md   font-normal  pl-6 py-4 mb-2 focus:outline-none text-white'
              type='text'
              placeholder=''
            />
          </div>
        </div>

        <div className=' mt-10 w-full flex justify-between mb-20'>
          <p className=' w-[52%] font-normal text-sm leading-5 text-[#758CA5]'>
            By filling this information, you are agreeing to IR SolutionsTerms of Service, Privacy Policy, and that IR
            Solutions may monitor or record audio or video calls for quality assurance and training purposes.
          </p>
          <Link href='/hire-top-talent-ongo'>
            <button className=' w-44 h-16 text-lg flex justify-center items-center bg-primary hover:bg-btn-dark-primary text-[#FFFFFF] rounded'>
              Next
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Form;
