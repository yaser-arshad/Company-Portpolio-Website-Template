import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import Button from 'components/core-ui/button/button';

export default function FsReactWebDevServices() {
  return (
    <div className=' w-full flex  text-black pt-15 relative'>
      <div className=' w-[56%]    pl-14 pb-20'>
        <h2 className=' font-bold text-7.2xl leading-tight'>
          <span className='text-primary'>React JS</span> Web Development Services
        </h2>

        <p className=' pt-2.8  font-normal text-lg leading-7 w-[91%]  '>
          As a leading ReactJS development company, we are recognized for our exceptional solutions featuring virtual
          DOM, reusable components, JSX, and server-side rendering.
        </p>
        <div className=' flex gap-7 pt-20 '>
          <Link href={'/contact-us'}>
            <Button className='text-white font-semibold  bg-primary hover:bg-btn-dark-primary border-0 py-3 w-56'>
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
      <div className='w-[38%] flex justify-center'>
        <div className=' w-[15%] relative'>
          <Image
            src='/images/reactwebdev.png'
            fill
            className='absolute object-cover overflow-x-visible bottom-0 right-0 pt-10 ps-14'
            alt=''
          />
        </div>
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
