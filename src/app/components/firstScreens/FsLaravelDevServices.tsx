import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import Button from 'components/core-ui/button/button';

export default function FsLaravelDevServices() {
  return (
    <div className=' w-full flex justify-between text-black pt-15 relative'>
      <div className=' w-[56%]     pl-14 pb-20'>
        <h2 className=' font-bold text-7.2xl leading-tight'>
          <span className='text-primary'>Laravel</span> Web Development Services
        </h2>

        <p className=' pt-2.8  font-normal text-lg leading-7 w-[91%] '>
          Our remote developers specialize in crafting web apps that are sustainable and maintainable, leveraging the
          Laravel framework. Providing a range of offerings from customization to API integrations.
        </p>
        <div className=' flex gap-7 pt-20 '>
          <Link href={'/contact-us'}>
            <Button className='text-white font-semibold  bg-primary hover:bg-btn-dark-primary border-0 py-3 w-56'>
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
      <div className='w-[45%] relative'>
        <img
          src='/images/laravelwebdev.png'
          className=' absolute object-cover mx-10 overflow-x-visible bottom-0'
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
