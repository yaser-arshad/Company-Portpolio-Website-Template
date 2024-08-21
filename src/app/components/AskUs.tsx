'use client';

import React, { useRef } from 'react';

import {
  CardTypeAskUs,
  cardsAskUs,
  findAnswers,
  getInTouch,
  headingAskUs,
  stillQuestions,
  subtitleAskUs,
} from 'app/core/_data';
import Image from 'next/image';
import Link from 'next/link';

import Button from 'components/core-ui/button/button';

export default function AskUs() {
  const backGround = {
    backgroundImage: `url('/images/double-waves-inverted-big.svg');`,
  };
  var inputRef: any = useRef(null);
  function handleChange() {
    //use this function to handle changes
    console.log(inputRef.current.value);
  }
  return (
    <div>
      <div
        className='font-secondary text-center bg-center text-white pb-32
        h-[500px] bg-no-repeat flex flex-col justify-center items-center'
        style={backGround}
      >
        <h1 className='font-semibold text-5xl'>{headingAskUs}</h1>
        <h5 className=' text-1.5xl my-6'>{subtitleAskUs}</h5>
        <div className='w-2/4 rounded-lg px-4 py-5 bg-white flex justify-center'>
          <div className='relative w-8'>
            <Image src='/images/search.svg' alt='' fill className='w-full absolute' />
          </div>
          <input
            className='w-full text-black placeholder-[#53686A] ms-2 focus:outline-none'
            placeholder='Search here'
            onChange={handleChange}
            ref={inputRef}
          />
        </div>
      </div>
      <div className='grid grid-cols-3 gap-4 mx-20 mt-44'>
        {cardsAskUs.map((item: CardTypeAskUs) => {
          return <AskUsCard item={item} key={item.title} />;
        })}
      </div>
      <div className='bg-[#E6F2FD] flex justify-between items-center mx-32 px-8 py-10 rounded-2xl my-16'>
        <div>
          <h3 className='font-semibold text-1.5xl'>{stillQuestions}</h3>
          <p className='text-lg font-normal'>{findAnswers}</p>
        </div>
        <div>
          <Link href={'/contact-us'}>
            <Button variant='primary' className='px-24'>
              {getInTouch}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
function AskUsCard({ item }: any) {
  return (
    <div className='flex flex-col items-start p-4 hover:shadow-slider rounded-[20px]'>
      <div className='rounded-full p-4 bg-[#E6F2FD]'>
        <div className='w-6 h-6 rounded-full relative'>
          <Image src={item.img} alt='' fill className='absolute' />
        </div>
      </div>
      <div>
        <h1 className='font-medium text-xl my-4'>{item.title}</h1>
        <p className='text-base font-normal'>{item.para}</p>
      </div>
    </div>
  );
}
