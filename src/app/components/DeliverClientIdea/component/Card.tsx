'use client';

import React, { useState } from 'react';

import { Card } from 'antd';
import Link from 'next/link';

interface CardComponentProps {
  imageSrc: string;
  title: string;
  description: string;
  route: string;
}

const CardComponent: React.FC<CardComponentProps> = ({ imageSrc, title, description, route }) => {
  const [itemHovered, setItemHover] = useState(false);

  console.log('Card route:', route); // Add this line to debug

  return (
    <Card
      className={`${
        itemHovered ? 'border-b-[#FF165C] border-b-[10px] cursor-pointer' : 'border-b-white border-b-[10px]'
      } shadow-2xl mx-auto transition rounded-2xl mb-10`}
      style={{ width: 393 }}
      onMouseEnter={() => setItemHover(true)}
      onMouseLeave={() => setItemHover(false)}
    >
      <img className='mx-auto h-72' src={imageSrc} alt='' />

      <div className='pt-7 w-full'>
        <div className='flex justify-between'>
          <h1 className='font-bold text-2xl'>{title}</h1>
          <Link href={route}>
            <img className={itemHovered ? 'block' : 'hidden'} src='/images/arrow.svg' alt='' />
          </Link>
        </div>
        <p className='text-sm font-normal pr-11'>{description}</p>
      </div>
    </Card>
  );
};

export default CardComponent;
