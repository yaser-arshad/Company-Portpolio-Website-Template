import React from 'react';

import Link from 'next/link';

import Button from 'components/core-ui/button/button';

export default function FsExpandTeamsWithStaffAugmentation() {
  return (
    <div className=' w-full flex flex-col md:flex-row text-black pt-15 relative'>
      <div className='w-full md:w-[58%] pl-14 pb-20'>
        <h2 className=' font-bold text-5xl md:text-7.2xl  leading-[1.25] capitalize'>
          Expand Your Teams with <span className='text-primary'>Staff Augmentation</span>
        </h2>

        <p className=' pt-2.8  font-normal text-lg leading-7 w-11/12  '>
          Hire remote developers and bridge your talent gap with our top-tier tech talent with projects in need of
          exceptional remote software developers while remaining cost-effective.
        </p>
        <div className=' flex gap-7 pt-8 md:pt-20  '>
          {' '}
          {/* here need to add some width */}
          <Link href='/hire-top-talent'>
            <Button className='text-white font-semibold  bg-primary hover:bg-btn-dark-primary border-0 py-3 w-56'>
              Hire Your Team
            </Button>
          </Link>
          <Link href='/contact-us' className='hidden md:block'>
            <Button className=' font-semibold  bg-white   py-3 text-black  border-black border-[1px] w-56'>
              Hire Individual
            </Button>
          </Link>
        </div>
      </div>
      <img src='/images/staffaugmentation.png' className=' px-16 md:px-0 flex justify-end' alt='' />
      <div className='fixed  right-0 top-[300px] container-max  ' style={{ zIndex: 1200 }}>
        <a href='https://wa.me/+923094283049' target='_blank'>
          <img src='/images/green.png' className='' alt='WhatsApp Icon' />
        </a>
        <a href='tel:+923094283049' target='_system'>
          <img src='/images/red.png' className='' alt='WhatsApp Icon' />
        </a>
      </div>
    </div>
  );
}
