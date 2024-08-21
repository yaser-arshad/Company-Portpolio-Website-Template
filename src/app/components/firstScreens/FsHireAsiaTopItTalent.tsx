import React from 'react';

import Link from 'next/link';

import Button from 'components/core-ui/button/button';

export default function FsHireAsiaTopItTalent() {
  return (
    <div className=' w-full flex  text-black pt-15 relative'>
      <div className=' w-[52%]     pl-14 pb-20'>
        <h2 className=' font-bold text-7.2xl leading-tight'>
          <span className='text-primary'>Hire Asia&apos;s IT </span>Talent within 24 hours
        </h2>

        <p className=' pt-2.8  font-normal text-lg leading-7 pe-10'>
          Access to the best IT talent in Asia and hire them within 24 hours to advance your projects with best software
          development solutions. Our team guarantees knowledge and commitment, enabling you to innovate, meet deadlines
          more quickly, and effectively accomplish business objectives. Gain a competitive edge and cost-effective
          solutions in the market.
        </p>
        <div className=' flex gap-7 pt-8 '>
          <Link href={'/contact-us'}>
            <Button className='text-white font-semibold  bg-primary hover:bg-btn-dark-primary border-0 py-3 w-56'>
              Get A Quote
            </Button>
          </Link>
        </div>
      </div>
      <div className='w-[48%] relative'>
        <img src='/images/asiatopittalent.png' className='absolute bottom-0 object-cover' alt='' />
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
