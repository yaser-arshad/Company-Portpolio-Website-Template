import React from 'react';

import Link from 'next/link';

import Button from 'components/core-ui/button/button';

export default function FsHireOfficeAssistent() {
  return (
    <div className=' w-full flex justify-between text-black pt-15 relative'>
      <div className=' w-[56%]    pl-14 pb-20'>
        <h2 className=' font-bold text-7.2xl leading-tight w-96'>
          Hire<span className='text-primary'> Office Assistant</span>
        </h2>

        <p className=' pt-2.8  font-normal text-lg leading-7 w-11/12   '>
          We connect you with a team of highly skilled and experienced administrative professionals, for workflows and
          managing daily tasks. Hire us today and find your perfect match.
        </p>
        <div className=' flex gap-7 pt-8 '>
          <Link href={'/contact-us'}>
            <Button className='text-white font-semibold  bg-primary hover:bg-btn-dark-primary border-0 py-3 w-56'>
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
      <div className='w-[40%] relative'>
        <img src='/images/officeassistent.png' className='' alt='' />
      </div>
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
