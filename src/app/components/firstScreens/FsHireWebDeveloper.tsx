import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import Button from 'components/core-ui/button/button';

export default function FsHireWebDeveloper() {
  return (
    <div className=' w-full flex  text-black pt-15 relative'>
      <div className=' w-2/4  pl-14 pb-20'>
        <h2 className=' font-bold text-7.2xl leading-tight '>
          <span className='text-primary'>Hire</span> Web Developers
        </h2>

        <p className=' pt-2.8  font-normal text-lg leading-7 w-[88%]  '>
          Share your development vision with us and watch as we turn it into reality. From e-commerce to diverse web
          services, we’ve got you covered. Engage us for your upcoming web project and witness your website come to
          life, on time and within budget.
        </p>
        <div className=' flex gap-7  pt-2.8  '>
          <Link href={'/contact-us'}>
            <Button className='text-white font-semibold  bg-primary hover:bg-btn-dark-primary border-0 py-3 w-56'>
              Get A Quote
            </Button>
          </Link>
        </div>
      </div>
      <div className='w-[45%] relative'>
        <Image fill src='/images/hirewebdeveloper.png' className=' absolute object-cover overflow-x-visible' alt='' />
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
