import React from 'react';

import Link from 'next/link';

import Button from 'components/core-ui/button/button';

export default function FsTypescriptWebDevServices() {
  return (
    <div className=' w-full flex  text-black pt-15 relative'>
      <div className=' w-[56%]    pl-14 pb-20'>
        <h2 className=' font-bold text-7.2xl leading-tight'>
          <span className='text-primary'>TypeScript</span> Web Development Services
        </h2>

        <p className=' pt-2.8  font-normal text-lg leading-7  w-[91%] '>
          Whether it&apos;s for swift MVP construction or improving your current web app, our developers are equipped to
          ensure quality results. With vast TypeScript expertise, our top developers are ideal for your project.
        </p>
        <div className=' flex gap-7 pt-20 '>
          <Link href={'/contact-us'}>
            <Button className='text-white font-semibold  bg-primary hover:bg-btn-dark-primary border-0 py-3 w-56'>
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
      <img src='/images/typescriptwebdev.png' className=' w-[40%]  flex justify-end' alt='' />
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
