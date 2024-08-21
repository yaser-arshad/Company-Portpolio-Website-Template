/* eslint-disable @next/next/no-img-element */
import React from 'react';

import Link from 'next/link';

import Button from 'components/core-ui/button/button';

export default function FsMetaverseGameDev() {
  return (
    <div className=' w-full flex  text-black pt-15 relative'>
      <div className=' w-[56%]    pl-14 pb-20'>
        <h2 className=' font-bold text-7.2xl leading-tight'>
          <span className='text-primary'>Metaverse </span> Game Development
        </h2>

        <p className=' pt-2.8  font-normal text-lg leading-7 w-11/12  '>
          Revolutionize your vision with IR Solutions. Our metaverse development services cater to your project&apos;s
          needs, creating unique virtual spaces and platforms.
        </p>
        <div className=' flex gap-7 pt-20 '>
          <Link href={'/contact-us'}>
            <Button className='text-white font-semibold  bg-primary hover:bg-btn-dark-primary border-0 py-3 w-56'>
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
      <img src='/images/metaversegamedev.png' className='  w-[40%]  flex justify-end' alt='' />
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
