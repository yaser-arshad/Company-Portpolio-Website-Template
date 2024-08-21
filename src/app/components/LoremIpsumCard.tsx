'use client';

import React, { useState } from 'react';

import { Card as AntCard } from 'antd';
// Renamed import to avoid conflict
import Link from 'next/link';

interface MyCardProps {
  title: string;
  description: string;
  halfArrowImgSrc: string;
  boxCroppedImgSrc: string;
  link: string;
}

const MyCard: React.FC<MyCardProps> = ({ title, description, halfArrowImgSrc, boxCroppedImgSrc, link }) => {
  const [visibleHoverEffect, setVisibleHoverEffect] = useState<boolean>(false);

  return (
    <AntCard
      className='w-[362px] h-94  pt-9 px-4 bg-[#FAFAFA] rounded-3xl shadow-2xl relative border-none mx-auto '
      onMouseEnter={() => setVisibleHoverEffect(true)}
      onMouseLeave={() => setVisibleHoverEffect(false)}
    >
      <h2 className='font-sans font-bold text-2xl'>{title}</h2>
      <p className='font-sans font-normal text-lg text-[#5A6476] pt-3'>{description}</p>

      <img className={`float-right ${visibleHoverEffect ? 'block' : 'hidden'}  mt-5`} src={halfArrowImgSrc} alt='' />

      <Link href={link}>
        <img
          className={`absolute top-2 right-[-10px] ${visibleHoverEffect ? 'block' : 'hidden'}`}
          src={boxCroppedImgSrc}
          alt=''
        />
      </Link>
    </AntCard>
  );
};

export default MyCard;
