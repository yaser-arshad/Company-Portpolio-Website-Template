'use client';

import React, { useRef, useState } from 'react';

import { contentContactUs, findAnswers, getInTouch, headingAskUs, stillQuestions, subtitleAskUs } from 'app/core/_data';
import Image from 'next/image';

import Button from 'components/core-ui/button/button';

export default function ContactUS() {
  const backGround = {
    backgroundImage: `url('/images/double-waves-inverted-big.svg');`,
  };
  var inputRef: any = useRef(null);
  var [currentHeading, setCurrentHeading] = useState(contentContactUs[0].id);
  function changeHeading(id: string) {
    setCurrentHeading(id);
  }
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
      <div className='grid grid-cols-12 gap-16 p-20'>
        <div className='col-span-3'>
          <div className='bg-[#E6F2FD] rounded-2xl py-14 mt-8'>
            <h1 className='font-bold ps-10 text-3xl'>Content</h1>
            <div className='flex flex-col'>
              {contentContactUs.map((item) => {
                return (
                  <a
                    key={item.heading}
                    onClick={() => {
                      changeHeading(item.id);
                    }}
                    href={`#${item.id}`}
                    className={`text-lg border-l-8 ps-8 my-2  ${currentHeading === item.id ? 'border-primary' : 'border-transparent'}`}
                  >
                    {item.heading}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className='col-span-7 font-primary py-14'>
          {contentContactUs.map((item) => {
            return (
              <div key={item.heading} className={``}>
                <h3 className='font-bold text-4xl mt-8' id={item.id}>
                  {item.heading}
                </h3>
                <p className={`text-[22px] mt-8`}>{item.para}</p>
                {item.screenshots && item.screenshots.length > 0 && (
                  <ul>
                    {item.screenshots.map((img) => {
                      return (
                        <div key={img} className='mx-5 my-10'>
                          <img src={img} alt='' className='' />
                        </div>
                      );
                    })}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className='bg-[#E6F2FD] flex justify-between items-center mx-32 px-8 py-10 rounded-2xl my-16'>
        <div>
          <h3 className='font-semibold text-1.5xl'>{stillQuestions}</h3>
          <p className='text-lg font-normal'>{findAnswers}</p>
        </div>
        <div>
          <Button variant='primary' className='px-24'>
            {getInTouch}
          </Button>
        </div>
      </div>
    </div>
  );
}
