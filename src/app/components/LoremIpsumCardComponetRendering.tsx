import React from 'react';

import { loremIpsumCardDataArray } from 'app/core/_data';

import MyCard from './LoremIpsumCard';

export default function () {
  return (
    <div className=' w-full bg-white  mt-5 text-black'>
      <h1 className=' font-secondary font-semibold text-5xl  text-center pt-20 '>
      Revolutionize Your Finances with our <span className=' text-primary'>Innovative Services!</span>
      </h1>
      <p className=' w-3/5 font-normal text-lg mx-auto text-center mt-5'>
        Where ideas transform into tangible digital experiences. From concept to launch and beyond, we're here to turn
        your vision into reality.
      </p>

      <div className=' w-11/12 mx-auto grid grid-cols-3 mt-14 gap-x-6  gap-y-9 pb-10'>
        {loremIpsumCardDataArray.map((cardData, index) => (
          <MyCard
            key={index}
            title={cardData.title}
            description={cardData.description}
            halfArrowImgSrc={cardData.halfArrowImgSrc}
            boxCroppedImgSrc={cardData.boxCroppedImgSrc}
            link={cardData.link}
          />
        ))}
      </div>
    </div>
  );
}
