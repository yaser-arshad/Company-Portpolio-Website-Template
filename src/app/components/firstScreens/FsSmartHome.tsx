import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import Button from 'components/core-ui/button/button';

export default function FsSmartHome() {
  return (
    <div className=' w-full flex  text-black pt-15 relative'>
      <div className=' w-[62%]    pl-14 pb-20'>
        <h2 className=' font-bold text-7.2xl leading-tight'>
          Simplify Your Life: <span className='text-primary'>Smart Home -</span> Home Automation
        </h2>

        <p className=' pt-2.8  font-normal text-lg leading-7 w-3/4  '>
          Our Smart Home - Home Automation services seamlessly integrate devices and systems, providing convenience,
          security, and energy efficiency.
        </p>
        <div className=' flex gap-7 pt-20 '>
          <Link href={'/contact-us'}>
            <Button className='text-white font-semibold  bg-primary hover:bg-btn-dark-primary border-0 py-3 w-56'>
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
      <div className='w-[47%] relative'>
        <Image src='/images/smarthome.png' fill className='absolute bottom-2 object-cover overflow-x-visible' alt='' />
      </div>
      <div className='absolute right-0 top-44 '>
        <a href='https://wa.me/+923094283049' target='_blank'>
          <img src='/images/green.png' className='' alt='WhatsApp Icon' />
        </a>
        <a href='https://wa.me/<your-phone-number>' target='_blank'>
          <img src='/images/red.png' className='' alt='WhatsApp Icon' />
        </a>
      </div>
    </div>
  );
}