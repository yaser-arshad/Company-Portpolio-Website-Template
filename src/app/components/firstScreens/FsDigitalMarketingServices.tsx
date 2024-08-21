import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import Button from 'components/core-ui/button/button';

export default function FsDigitalMarketingServices() {
  return (
    <div className=' w-full flex  text-black pt-15 relative'>
      <div className=' w-[58%]    pl-14 pb-20'>
        <h2 className=' font-bold text-7.2xl leading-tight'>
          Digital<span className='text-primary'> Marketing</span> Services
        </h2>

        <p className=' pt-2.8  font-normal text-lg leading-7 w-11/12  '>
          Our Digital Marketing services encompass SEO, Content Marketing, PPC Advertising, Social Media Marketing, and
          campaign development, driving growth and engagement through strategic online initiatives.
        </p>
        <div className=' flex gap-7 pt-8 '>
          <Link href={'/contact-us'}>
            <Button className='text-white font-semibold  bg-primary hover:bg-btn-dark-primary border-0 py-3 w-56'>
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
      <div className='w-[30%] relative'>
        <Image
          fill
          src='/images/digitalmarketingservices.png'
          className='absolute object-cover overflow-x-visible right-10'
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
