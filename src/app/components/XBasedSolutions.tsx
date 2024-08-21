import React from 'react';

import Link from 'next/link';

import Button from 'components/core-ui/button/button';

interface XBasedSolutionsProps {
  data: {
    title: string;
    reasons: { title: string; description: string }[];
    buttonText: string;
    images: { src: string; alt: string }[];
  };
}

const XBasedSolutions: React.FC<XBasedSolutionsProps> = ({ data }) => {
  const { title, reasons, buttonText, images } = data;

  return (
    <div className='grid grid-cols-2  pt-32  text-black border-b-[1px] border-b-[#D9D9D9]'>
      {/* Left Column */}
      <div className='w-3/4 ml-[140px] '>
        <h1 className='text-3xl font-bold mb-4 w-4/6'>{title}</h1>
        <ul className='list-disc pl-8 mb-8'>
          {reasons.map((reason, index) => (
            <div key={index}>
              <h1 className='text-xl font-bold'>
                <li className='mb-2'>{reason.title}</li>
              </h1>
              <p className='mb-4'>{reason.description}</p>
            </div>
          ))}
        </ul>
        <Link href={'/contact-us'}>
          <Button className='text-white font-semibold bg-primary hover:bg-btn-dark-primary border-0 pt-3 w-56 mb-[100px]'>
            {buttonText}
          </Button>
        </Link>
      </div>

      {/* Right Column */}
      <div className='w-1/2'>
        <img
          src={images[0].src}
          alt={images[0].alt}
          className='absolute z-10'
          style={{ transform: 'translateX(-10%) translateY(-10%) ' }}
        />

        <img
          src={images[1].src}
          alt={images[1].alt}
          className='absolute'
          style={{ transform: 'translateX(15%) translateY(25%)' }}
        />

        <img
          src={images[2].src}
          alt={images[2].alt}
          className='absolute z-30'
          style={{ transform: 'translateX(30%) translateY(60%) ', marginLeft: '-50px' }}
        />
      </div>
    </div>
  );
};

export default XBasedSolutions;
