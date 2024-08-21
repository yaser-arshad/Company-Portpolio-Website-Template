'use client';

import React, { useRef, useState } from 'react';

import Link from 'next/link';

import Button from 'components/core-ui/button/button';

export default function DisplayParagraphsAndAnswers({ title, contentArray }: any) {
  const [border, setBorder] = useState<string>(contentArray[0].id);
  const contentRef = useRef<HTMLDivElement | null>(null);
  return (
    <div className=' px-36  border-b-1 border-custom-gray '>
      <div className=' w-[65%] mx-auto my-28 text-center flex flex-col'>
        <h1 className=' text-black font-semibold text-5xl font-secondary'>
          {title.blackFirst}
          <span className=' text-primary'> {title.blue}</span> {title.blackLast}
        </h1>
      </div>

      <div className=' w-11/12 h-full grid grid-cols-12 justify-between mx-auto'>
        <div className='flex flex-col col-span-3'>
          <div className=' bg-[#E6F2FD] pt-14 pb-10 mt-6 rounded-2xl flex flex-col text-black'>
            <h1 className='pb-6 font-bold text-2xl ml-8'>Content</h1>
            {contentArray.map((item: any) => (
              <a
                className={`mb-6 capitalize pl-8 text-lg font-normal border-l-[6px] ${
                  border === item.id ? 'border-primary' : 'border-transparent'
                }`}
                href={`#${item.id}`}
                onClick={() => setBorder(item.id)}
                key={item.id}
              >
                {item.sideTitle}
              </a>
            ))}
          </div>
        </div>
        <div className=' pl-5 text-black col-span-9'>
          {contentArray.map((item: any) => (
            <DisplayContentParagraphsCard item={item} key={item.id} itemRef={contentRef} />
          ))}
          <Link href={'/contact-us'}>
            <Button className='text-white font-semibold bg-primary hover:bg-btn-dark-primary  w-56 mb-20 '>
              Get A Quote
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function DisplayContentParagraphsCard({ item, itemRef }: any) {
  return (
    <div id={item.id} className=' pt-6 pb-10 ' ref={itemRef}>
      <h2 className='font-bold text-4xl '>{item.heading}</h2>
      {item.answer.map((subItem: any, i: any) => (
        <div key={i} className={`text-2xl font-normal ${subItem.paragraph && 'pt-5'}`}>
          <p>{subItem.paragraph}</p>
          {subItem.list && subItem.list.length > 0 && (
            <ul className='list-disc ps-5'>
              {subItem.list.map((list: any, j: any) => (
                <li key={j} className=' pt-5 text-2xl font-normal'>
                  {list}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
