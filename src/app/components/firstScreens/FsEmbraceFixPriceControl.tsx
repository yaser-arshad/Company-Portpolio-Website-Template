import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import Button from 'components/core-ui/button/button';

export default function FsEmbraceFixPriceControl() {
  return (
    <div className=' w-full flex justify-between text-black pt-15 relative'>
      <div className=' w-[52%] pl-14 pb-20'>
        <h2 className=' font-bold text-7.2xl leading-tight'>
          <span className='text-primary'>
            Fixed Price, <br />
          </span>
          Tailored Solutions
        </h2>

        <p className=' pt-2.8  font-normal text-lg leading-7 w-11/12  '>
          Unlock Peace of Mind and Control with our Price Model! Our team of remote developers ensures your unique needs
          are met, all while keeping your budget on track. Let&apos;s start your project today!
        </p>
        <div className=' flex gap-7 pt-8 '>
          <Link href={'/contact-us'}>
            <Button className='text-white font-semibold  bg-primary hover:bg-btn-dark-primary border-0 py-3 w-56'>
              Get a Quote
            </Button>
          </Link>
        </div>
      </div>
      <div className=' w-[45%] relative'>
        <Image fill src='/images/embracefixprice.png' className='absolute object-cover overflow-x-visible' alt='' />
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
