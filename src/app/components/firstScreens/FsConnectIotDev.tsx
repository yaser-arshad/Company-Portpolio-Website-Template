import React from 'react';

import Link from 'next/link';

import Button from 'components/core-ui/button/button';

export default function FsConnectIotDev() {
  return (
    <div className=' w-full flex  text-black pt-15 relative'>
      <div className=' w-[55%]    pl-14 pb-20'>
        <h2 className=' font-bold text-7.2xl leading-tight'>
          Connect to World with our <span className='text-primary'>Iot Developers</span>
        </h2>

        <p className=' pt-2.8  font-normal text-lg leading-7  w-[90%]  '>
          Connect to the world with our IoT developers, We&apos;re experts in building intelligent, networked devices
          that improve productivity and automation.The team integrates advanced sensors, seamless connectivity, and
          robust data analytics to deliver innovative IoT solutions, transforming industries and improving everyday life
          through intelligent technology.
        </p>
        <div className=' flex gap-7 pt-8 '>
          <Link href={'/contact-us'}>
            <Button className='text-white font-semibold  bg-primary hover:bg-btn-dark-primary border-0 py-3 w-56'>
              Get A Quote
            </Button>
          </Link>
        </div>
      </div>
      <div className='w-[45%] relative'>
        <img src='/images/connecttoiot.png' className=' absolute bottom-0' alt='' />
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
