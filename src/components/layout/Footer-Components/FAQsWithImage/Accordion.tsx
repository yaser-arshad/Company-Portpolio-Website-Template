'use client';

import React, { useState } from 'react';

interface AccordionProps {
  title: string;
  answer: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className='py-4  mx-auto  '>
      <div className=' rounded-lg bg-white  p-3  px-10 flex flex-col  items-center'>
        <button onClick={() => setAccordionOpen(!accordionOpen)} className='flex justify-between items-center  w-full'>
          <div className='text-primary pb-3' style={{ display: 'flex', alignItems: 'center' }}>
            <div className=' text-black px-4 mt-4 font-secondary font-semibold'>{title}</div>
          </div>

          {!accordionOpen ? (
            <svg className='fill-primary shrink-0 ml-8' width='16' height='16' xmlns='http://www.w3.org/2000/svg'>
              <rect
                y='7'
                width='16'
                height='2'
                rx='1'
                className={`transform origin-center transition duration-200 ease-out ${
                  accordionOpen ? 'rotate-180' : ''
                }`}
              />
              <rect
                y='7'
                width='16'
                height='2'
                rx='1'
                className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                  accordionOpen ? 'rotate-180' : ''
                }`}
              />
            </svg>
          ) : (
            <svg className='fill-primary shrink-0 ml-8' width='16' height='16' xmlns='http://www.w3.org/2000/svg'>
              <rect
                y='7'
                width='16'
                height='2'
                rx='1'
                className={`transform origin-center transition duration-200 ease-out ${
                  accordionOpen ? 'rotate-180' : ''
                }`}
              />
            </svg>
          )}
        </button>
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            accordionOpen ? 'h-auto opacity-100 w-full' : 'h-0 opacity-0'
          }`}
        >
          <div className='mt-4 w-full'>
            <div className='text-black px-6 mt-4 font-secondary'>{answer}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
