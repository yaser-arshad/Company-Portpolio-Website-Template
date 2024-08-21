'use client';

import React from 'react';
import { useState } from 'react';

import { PrivacynToC } from 'app/core/_data';

import Button from 'components/core-ui/button/button';

type TermsandPolicyProps = {
  heading: string;
  array: PrivacynToC[];
};
export default function TermsandPolicy({ heading, array }: TermsandPolicyProps) {
  var [currentHeading, setCurrentHeading] = useState(array[0].id);
  function changeHeading(id: string) {
    setCurrentHeading(id);
  }
  const backGround = {
    backgroundImage: `url('/images/double-waves-inverted.svg');`,
  };
  return (
    <div className='text-black'>
      <div
        className='font-secondary text-center capitalize bg-center font-semibold text-5xl text-white py-10
        h-72 bg-no-repeat place-content-center'
        style={backGround}
      >
        {heading}
      </div>
      <div className='grid grid-cols-12 gap-16 p-20'>
        <div className='col-span-3'>
          <div className='bg-[#E6F2FD] rounded-2xl py-14 mt-8'>
            <h1 className='font-bold ps-10 text-3xl'>Content</h1>
            <div className='flex flex-col'>
              {array.map((item) => {
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
          {array.map((item) => {
            return (
              <div key={item.heading} className={`${item.line && item.line}`}>
                <h3 className='font-bold text-4xl mt-8' id={item.id}>
                  {item.heading}
                </h3>
                <p className={`text-[22px] ${item.paraClasses ? item.paraClasses : 'mt-8'}`}>{item.paragraph}</p>
                {item.list && item.list.length > 0 && (
                  <ul>
                    {item.list.map((li) => {
                      return (
                        <li key={li} className=' list-disc text-[22px] ms-7'>
                          {li}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            );
          })}
          <div className='flex w-full mt-8 mb-32'>
            <Button variant='primary' className='font-bold px-20'>
              Accept
            </Button>
            <Button variant='default' className='mx-5 font-bold px-20'>
              Decline
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
