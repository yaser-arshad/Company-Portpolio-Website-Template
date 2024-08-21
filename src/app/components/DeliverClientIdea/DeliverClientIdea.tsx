'use client';

import React, { useState } from 'react';

import { deliverClientIdeaCardData, deliverClientIdeaCardDataWeb } from 'app/core/_data';

import CardComponent from './component/Card';
import CaseStudies from './component/CaseStudies';
import ImageText from './component/ImageText';

export default function DeliverClientIdea() {
  const [button, setButton] = useState('mobile');

  return (
    <div className='mt-4  pb-28 border-b-[1px] border-b-[#D9D9D9]'>
      <ImageText />
      <CaseStudies />

      <div className=' w-1/3 h-16 mx-auto bg-white shadow-newall shadow-subtle-black mt-8 mb-16 rounded-3xl flex '>
        <button
          onClick={() => setButton('mobile')}
          className={`w-6/12 h-[95%] bg-primary text-[#737373] ${button === 'mobile' ? 'text-white bg-primary' : 'text-[#737373] bg-white'}   rounded-3xl flex justify-center items-center ml-2 `}
        >
          <span>Mobile</span>
        </button>
        <button
          onClick={() => setButton('web')}
          className={` w-6/12 h-[95%] bg-primary text-[#737373] ${button == 'web' ? 'text-white bg-primary' : 'text-[#737373] bg-white'}  rounded-3xl  flex justify-center items-center `}
        >
          <span>Web</span>
        </button>
      </div>

      <div className=' w-full grid grid-cols-3   px-14'>
        {button === 'mobile' &&
          deliverClientIdeaCardData.map((card, index) => (
            <CardComponent
              key={index}
              imageSrc={card.imageSrc}
              title={card.title}
              route={card.route}
              description={card.description}
            />
          ))}

        {button === 'web' &&
          deliverClientIdeaCardDataWeb.map((card, index) => (
            <CardComponent
              key={index}
              imageSrc={card.imageSrc}
              title={card.title}
              description={card.description}
              route={card.route}
            />
          ))}
      </div>
    </div>
  );
}
