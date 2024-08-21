import React from 'react';

import Link from 'next/link';

import Button from 'components/core-ui/button/button';

export default function FsHomePage() {
  return (
    <div className=' w-full flex flex-col md:flex-row text-black pt-15 relative'>
      <div className='w-full md:w-2/4   pl-14 pb-14 md:pb-20'>
        <h2 className=' font-bold text-6xl md:text-7.2xl leading-tight '>
          Hire <span className='text-primary'>Top Developers</span> within 48 Hours
        </h2>

        <p className=' pt-2.8  font-normal text-lg leading-7 w-[92%]   '>
          We bridge the gap between vision and reality with top developers who not only understand your industry but
          deliver results, faster.
        </p>
        <div className=' flex gap-8 pt-5 '>
          <Link href='/hire-top-talent'>
            <Button className='text-white font-semibold  bg-primary hover:bg-btn-dark-primary border-0 py-3 w-56'>
              Hire Your Team
            </Button>
          </Link>

          <a href='https://careers.irsolutions.tech/'>
            <Button className=' font-semibold  bg-white   py-3 text-black  border-black border-[1.113px] w-56'>
              Apply as a Talent
            </Button>
          </a>
        </div>
      </div>
      <img src='/images/coverside.png' className='w-full md:w-1/2 flex justify-end' alt='' />

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
