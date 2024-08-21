import React from 'react';

import Image from 'next/image';

// Adjust the path as needed

interface Item {
  title: string;
  description: string;
  imageSrc: string;
}

interface Section {
  title?: string;
  description?: string;
  imageSrc?: string;
  backgroundColor?: string;
  textColor?: string;
  items?: Item[];
}

interface ContentData {
  titleParts: string[];
  description: string;
  mainSection: {
    backgroundColor: string;
    sections: Section[];
  };
}

interface OurXAppDevServicesProps {
  data: ContentData;
}

export const OurXAppDevServices: React.FC<OurXAppDevServicesProps> = ({ data }) => {
  const { titleParts, description, mainSection } = data;

  return (
    <div className='w-full px-15 mt-10 mb-10 border-b-1 border-custom-gray '>
      <h1 className='w-2/5 font-bold text-5xl text-center mx-auto bg-white text-black mt-28'>
        <span>{titleParts[0]} </span>
        <span className='text-primary'>{titleParts[1]} </span>
        <span>{titleParts[2]}</span>
      </h1>
      <p className='w-3/4 text-black text-center mx-auto mt-6 text-lg font-normal'>{description}</p>

      <div
        className='w-full px-5 py-5 rounded-xl mt-10 flex justify-between'
        style={{ backgroundColor: mainSection.backgroundColor }}
      >
        {mainSection.sections.map((section, index) => (
          <div
            key={index}
            className='w-[33%] rounded-2xl m-3 relative'
            style={{ backgroundColor: section.backgroundColor || '', color: section.textColor || 'black' }}
          >
            {section.title && (
              <>
                <div className='px-4'>
                  <h1 className='font-bold text-4.5xl pt-3 leading-tight'>{section.title}</h1>
                  <p className='pt-3 text-sm leading-5'>{section.description}</p>
                </div>
                {section.imageSrc && (
                  <div className='w-full mt-4 relative bottom-0 h-80'>
                    <Image
                      src={section.imageSrc}
                      alt=''
                      fill
                      className={`absolute bottom-0 object-fit overflow-hidden rounded-es-2xl rounded-ee-2xl`}
                    />
                  </div>
                )}
              </>
            )}
            <div className='flex flex-col justify-between h-full'>
              {section.items &&
                section.items.length > 0 &&
                section.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className={`h-28 rounded-xl px-4 py-6 bg-white 
                      ${itemIndex < section.items.length - 1 && 'mb-7'}`}
                  >
                    <div className=' flex gap-3'>
                      <h1 className='  font-bold text-xl'>{item.title} </h1> <img src={item.imageSrc} alt='' />
                    </div>
                    <p className='  font-normal text-sm leading-5 py-3'>{item.description}</p>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
