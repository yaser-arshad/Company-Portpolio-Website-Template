import React from 'react';

import Link from 'next/link';

import Button from 'components/core-ui/button/button';

export default function FsHireOfficeManager() {
  return (
    <div className=' w-full flex justify-between text-black pt-15 relative'>
      <div className=' w-[56%]    pl-14 pb-20'>
        <h2 className=' font-bold text-7.2xl leading-tight w-91'>
          <span className='text-primary'>Hire </span> Office Manager
        </h2>

        <p className=' pt-2.8  font-normal text-lg leading-7 w-11/12  '>
          Let IR Solutions be your partner in achieving peak performance. We have the perfect highly skilled and
          experienced Office Managers to your office management needs. Let&apos;s connect today!
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
        <img src='/images/hireofficemanager.png' className='' alt='' />
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
