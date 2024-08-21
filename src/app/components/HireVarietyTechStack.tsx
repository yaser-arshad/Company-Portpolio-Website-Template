'use client';

import React, { useState } from 'react';

import {
  cardHireVarietyTechStackBackEnd,
  cardHireVarietyTechStackCMS,
  cardHireVarietyTechStackFrontEnd,
  cardHireVarietyTechStackMobile,
  inputListHireVarietyTechStacks,
} from 'app/core/_data';

export default function HireVarietyTechStack() {
  var [selectedTech, setSelectedTech] = useState('mobile');
  const changeSelected = (tech: string) => {
    setSelectedTech(tech);
  };
  function renderedList(): any {
    if (selectedTech === 'mobile') {
      return [...cardHireVarietyTechStackMobile];
    } else if (selectedTech === 'frontend') {
      return [...cardHireVarietyTechStackFrontEnd];
    } else if (selectedTech === 'backend') {
      return [...cardHireVarietyTechStackBackEnd];
    } else {
      return [...cardHireVarietyTechStackCMS];
    }
  }
  return (
    <div className='px-15 w-full  bg-white mt-[104px] flex flex-col justify-center items-center pb-28 border-b-[1px] border-b-[#D9D9D9]  '>
      <h1 className=' w-5/12 text-black font-bold text-4.5xl mx-auto text-center'>
        Variety of
        <span className=' text-primary'> Tech stacks </span>
        we Work on
      </h1>
      <p className=' w-2/3 font-normal text-lg text-black text-center mt-5 '>
        From healthcare apps to e-commerce platforms, we build custom IT solutions for diverse industries. Partner with
        us for tech-driven solutions that put you ahead of the curve.
      </p>
      <div className='rounded-full px-2 py-1 w-3/5 h-84.53px flex justify-between shadow-newall shadow-subtle-black mt-12'>
        {inputListHireVarietyTechStacks.map((item) => {
          return (
            <label
              key={item.value}
              className={`rounded-full h-full w-1/4 text-center content-center ${item.value === selectedTech ? 'text-white bg-primary' : 'text-black'}`}
            >
              <input
                type='radio'
                name='techs'
                value={item.value}
                checked={item.value === selectedTech}
                onChange={() => {
                  changeSelected(item.value);
                }}
                className={`${item.value === selectedTech ? 'bg-primary ' : ''} hidden    `}
              />
              <span
                className={` text-[#737373] text-[22px] font-normal ${item.value === selectedTech ? ' text-white' : ''}`}
              >
                {' '}
                {item.text}
              </span>
            </label>
          );
        })}
      </div>
      <div
        className={`${selectedTech === 'cms' ? 'w-3/5' : 'w-full'} flex flex-wrap justify-center items-center text-center mt-5`}
      >
        {renderedList() &&
          renderedList().map((item: any) => {
            return (
              <div
                className={` flex flex-col justify-center items-center 
                  ${selectedTech === 'cms' ? 'basis-1/6' : 'basis-11%'} px-2 mt-20`}
                key={item.caption}
              >
                <img className='' src={item.img} alt={item.alt} />
                <span className='text-black font-normal  mt-8 text-base'>{item.caption}</span>
              </div>
            );
          })}
      </div>
    </div>
  );
}
