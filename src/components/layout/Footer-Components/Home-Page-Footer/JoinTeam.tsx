import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

function JoinTeam() {
  return (
    <div className='px-14 bg-bg-primary pb-6'>
      <div className='bg-white w-full h-[462px] flex flex-col md:flex-row rounded-3xl'>
        <div className='w-full md:w-2/5 h-full flex justify-center items-center'>
          <div className=' md:w-98 md:h-[220px]'>
            <h1 className='font-bold text-3xl text-center md:text-start md:text-4.2xl text-black '>
              Join our global team!
            </h1>
            <p className='font-normal text-md md:text-lg text-black text-center md:text-start px-9 md:px-0 md:w-96'>
              Discover exciting opportunities & apply directly on our website. Be part of something amazing!
            </p>
            <div className='w-full'>
              <div className='relative w-full'>
                <Link href='/hire-top-talent'>
                  <button className=' absolute md:static left-[23.9%] w-52 h-12 rounded bg-primary hover:bg-btn-dark-primary text-lg leading-7 text-white mt-4'>
                    Apply as a Talent
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full mt-20 md:mt-0 md:w-3/5 h-full flex justify-end'>
          <img className=' rounded-r-3xl hidden md:block' src='/images/apply.png' alt='' />
          <div className='relative w-full h-[17rem] rounded-b-3xl overflow-hidden block md:hidden'>
            <Image fill src='/images/apply-as-talent-mobile.svg' alt='' className='absolute object-cover object-top' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinTeam;
