import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import Button from 'components/core-ui/button/button';

export default function FsHireAiMlDev() {
  return (
    <div className=' w-full flex justify-between text-black pt-15 relative'>
      <div className=' w-[50%]    pl-14 pb-20'>
        <h2 className=' font-bold text-7.2xl leading-tight'>
          <span className='text-primary'>Hire</span> AI & ML Developers
        </h2>

        <p className=' pt-2.8  font-normal text-lg leading-7  '>
          Let our remote AI and ML engineers help you tap into the potential of AI and ML for your enterprise. Our
          skilled team of remote AI & ML Developers can help realize your vision by creating smart systems that learn
          from data, spot patterns, and make informed decisions, promoting innovation and efficiency.
        </p>
        <div className=' flex gap-7 pt-8 '>
          <Link href={'/contact-us'}>
            <Button className='text-white font-semibold  bg-primary hover:bg-btn-dark-primary border-0 py-3 w-56'>
              Get a Quote
            </Button>
          </Link>
        </div>
      </div>
      <div className=' w-[40%] relative'>
        <Image fill src='/images/hireaiml.png' className=' absolute object-cover overflow-x-visible bottom-0' alt='' />
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
