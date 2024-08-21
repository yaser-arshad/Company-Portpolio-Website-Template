import React from 'react';

import { awardRecognitionData, awardRecognitionImageData } from 'app/core/_data';

function AwardsRecognition() {
  return (
    <div className=' md:px-15 w-full bg-bg-primary'>
      <div className='w-full flex '>
        <div className='w-11/12 md:w-3/5 flex-col flex justify-center items-center mx-auto'>
          <h1 className=' font-bold text-4xl md:text-6xl text-white pt-24'>
            Awards & <span className=' text-primary '>Recognition</span>
          </h1>
          <p className=' font-normal text-md md:text-lg text-white mt-7 text-center '>
            Our expert developers can act as the driving force propelling your software development projects. Our
            software engineers possess the expertise and experience that deliver immense value, driving you ahead of the
            competition and toward excellence.
          </p>

          <div className='flex justify-between w-full md:w-11/12 mt-24'>
            {awardRecognitionData.map((block) => (
              <div key={block.id} className='flex flex-col '>
                <p className='text-primary font-semibold md:font-normal text-5xl md:text-7xl'>{block.amount}</p>
                <p className='text-white text-xs md:font-bold mt-3 ml-2 '>{block.description}</p>
              </div>
            ))}
          </div>

          <hr className=' w-7/12 md:w-full mt-10 bg-[#FFFFFF] opacity-[20%]' />

          <div className='w-full  mt-[35px] mb-28 flex ml-4  justify-center '>
            {awardRecognitionImageData.map((image) => (
              <a href={image.link} key={image.link}>
                <div key={image.id} className=' w-[100%] '>
                  <img className='' src={image.imageUrl} alt={image.altText} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AwardsRecognition;
