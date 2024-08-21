import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import Button from 'components/core-ui/button/button';

export default function FsGameDevServices() {
  return (
    <div className=' w-full flex justify-between text-black pt-15 relative'>
      <div className=' w-52   pl-14 pb-20'>
        <h2 className=' font-bold text-7.2xl leading-tight '>
          Hire Remote
          <span className='text-primary'> Game</span> Developers
        </h2>

        <p className=' pt-2.8  font-normal text-lg leading-7 w-11/12  '>
          As a premier game development company, we provide comprehensive services for creating captivating games on
          various platforms. Our skilled team, proficient in Unity and Unreal, ensures end-to-end solutions.
        </p>
        <div className=' flex gap-7  pt-2.8   '>
          <Link href={'/contact-us'}>
            <Button className='text-white font-semibold  bg-primary hover:bg-btn-dark-primary border-0 py-3 w-56'>
              Get a Quote
            </Button>
          </Link>
        </div>
      </div>
      <div className='w-[42%] relative mr-2'>
        <Image
          fill
          src='/images/gamedevelopmentservices.png'
          className=' absolute object-contain overflow-hidden'
          alt=''
        />
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
