'use client';

import React from 'react';
import { Fragment, useEffect, useRef, useState } from 'react';

import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

export default function TopNavigation() {
  const [selectedOption, setSelectedOption] = useState('ENG');

  const handleOptionClick = (option: any) => {
    setSelectedOption(option);
  };

  return (
    <div
      className='w-full px-15 hidden md:flex bg-white border-b-[1px] border-b-[#D9D9D9] py-2 container-max  '
      style={{ zIndex: 1010, position: 'fixed' }}
    >
      <div className='w-[41%]  flex justify-between items-center '>
        <a href='tel:+923094283049' className='w-[28%] flex justify-between items-center ' target='_system'>
          <img className=' w-5 h-4' src='/images/america.svg' alt='' />
          <span className=' font-normal text-xl text-black'>+17372506936</span>
        </a>

        <a href='tel:+923094283049' className=' flex justify-between items-center w-[28%]   ' target='_system'>
          <img className=' w-5 h-4' src='/images/turk.svg' alt='' />
          <span className='font-normal text-xl text-black'>+17372506936</span>
        </a>
        <a href='tel:+923094283049' className=' flex justify-between items-center w-[28%] ' target='_system'>
          <img className=' w-5 h-4' src='/images/pak.svg' alt='' />
          <span className=' font-normal text-xl text-black'>+17372506936</span>
        </a>
      </div>

      <div className='w-3/5 flex justify-end items-center    '>
        <Menu as='div' className='relative inline-block text-left  '>
          <div>
            <Menu.Button className='inline-flex w-[5.25rem]  h-[25px] justify-center items-center  px-4 py-2 text-sm font-medium text-black my-auto  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 opacity-50 pointer-events-none'>
              {selectedOption === 'ENG' ? (
                <>
                  <img
                    src='/images/america.svg'
                    className=' rounded-full mr-[0.375rem] text-black w-5 h-4 ml-[0.375rem]'
                    alt='USA Flag'
                  />
                  <span className=' text-lg font-bold leading-7'>ENG</span>
                </>
              ) : selectedOption === 'TURK' ? (
                <>
                  <img
                    src='/images/turk.svg'
                    className='  rounded-full mr-[0.375rem] text-black w-5 h-4'
                    alt='UK Flag'
                  />
                  <span className=' text-lg font-bold leading-7'>TURK </span>
                </>
              ) : selectedOption === 'URDU' ? (
                <>
                  <img
                    src=' /images/pak.svg'
                    className='  rounded-full mr-[0.375rem] text-black w-5 h-4'
                    alt='PAK Flag'
                  />
                  <span className=' text-lg font-bold leading-7'>URDU</span>
                </>
              ) : (
                'Select'
              )}
              <img className=' ml-2 flex justify-center items-center' src='/images/dropdown.svg' alt='' />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'
          >
            <Menu.Items className='absolute right-0 mt-2 w-[84px] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none z-10'>
              <div className='px-1 py-1  '>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => handleOptionClick('ENG')}
                      className={`${
                        active ? 'bg-primary text-white' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <img
                        src='/images/america.svg'
                        className=' rounded-full mr-1 text-black gap-2 w-5 h-4'
                        alt='USA Flag'
                      />{' '}
                      ENG
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => handleOptionClick('URDU')}
                      className={`${
                        active ? 'bg-primary text-white' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <img
                        src='/images/pak.svg'
                        className=' rounded-full mr-1 text-black gap-2 w-5 h-4'
                        alt='USA Flag'
                      />{' '}
                      URDU
                    </button>
                  )}
                </Menu.Item>
              </div>
              <div className='px-1 py-1'>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => handleOptionClick('TURK')}
                      className={`${
                        active ? 'bg-primary text-white' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <img
                        src='/images/turk.svg'
                        className=' rounded-full mr-1 text-black gap-2 w-5 h-4'
                        alt='USA Flag'
                      />{' '}
                      TURK
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}
