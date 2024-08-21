import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import Button from 'components/core-ui/button/button';

export default function FsBlockchainDev() {
  return (
    <div>
      <div className=' w-full flex  text-black pt-15 relative'>
        <div className=' w-[50%] bg-green    pl-14 pb-20'>
          <h2 className=' font-bold text-7.2xl leading-tight'>
            <span className='text-primary'>Blockchain</span> Development
          </h2>

          <p className=' pt-2.8  font-normal text-lg leading-7  w-11/12   '>
            Blockchain development involves creating decentralized digital ledgers for secure, transparent, and
            immutable record-keeping. Blockchain technology improves applications in cryptocurrency, supply chain
            management, finance, healthcare, and more by using cryptographic techniques, smart contracts, and consensus
            processes. This results in increased security, transparency, and efficiency across a range of industries.
          </p>
          <div className=' flex gap-7 pt-8 '>
            <Link href={'/contact-us'}>
              <Button className='text-white font-semibold  bg-primary hover:bg-btn-dark-primary border-0 py-3 w-56'>
                Get a Quote
              </Button>
            </Link>
          </div>
        </div>
        <div className='relative w-[50%]'>
          <Image fill src='/images/blockchaindev.png' className='absolute bottom-0 right-20 object-contain' alt='' />
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
    </div>
  );
}
