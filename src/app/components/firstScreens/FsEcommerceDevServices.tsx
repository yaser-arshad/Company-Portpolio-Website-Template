import React from 'react';

import Link from 'next/link';

import Button from 'components/core-ui/button/button';
import Image from 'next/image';

export default function FsEcommerceDevServices() {
  return (
    <div className=' w-full flex  text-black pt-15 relative'>
      <div className=' w-[60%]    pl-14 pb-20'>
        <h2 className=' font-bold text-7.2xl leading-tight'>
          <span className='text-primary'>Ecommerce </span> Development Services
        </h2>

        <p className=' pt-2.8  font-normal text-lg leading-7 w-3/4  '>
          Our e-commerce development services build scalable,secure, and user-friendly online storefronts that are
          customized to meet your company&apos;s requirements. We improve the user experience for customers with
          integrated payment options, smooth navigation, and responsive design. Gain from boosted revenue, enhanced
          brand awareness, and optimized processes that promote long-term expansion and client contentment.
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
        <img src='/images/ecommercedevservices.png' className='absolute object-cover bottom-0' alt='' />
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
