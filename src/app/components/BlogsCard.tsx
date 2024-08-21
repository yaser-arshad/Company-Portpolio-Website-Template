'use client';

import { useState } from 'react';

import Image from 'next/image';

interface BlogsCardProps {
  item: any;
  hoverActive?: boolean;
}

export default function BlogsCard({ item, hoverActive = false }: BlogsCardProps) {
  var [hovered, setHovered] = useState(hoverActive);
  return (
    <div
      className='bg-white hover:shadow-slider pb-5 mt-12 rounded-xl border'
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        if (hoverActive) {
          return;
        }
        setHovered(false);
      }}
    >
      <img src={item.imageSrc} className=' w-full' alt='' />
      <div className='w-full px-6 flex'>
        <div className={`pt-4 w-full ${hovered ? 'text-black' : 'text-subtle-black '}`}>
          <a className=' font-normal text-xs  opacity-[54%]'>{item.postedBy}</a>
          <p className='font-bold text-xl'>
            <span className=''>{item.title}</span>
          </p>
        </div>
        <div className=' flex justify-end items-center mt-4'>
          <a target='_blank' rel='noopener noreferrer'>
            <div className={`relative ${hovered ? 'bg-black' : 'bg-subtle-black'} rounded-full p-5  h-8 w-8`}>
              <Image src='/images/greater-than.svg' alt='' fill className='py-3 absolute' />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
