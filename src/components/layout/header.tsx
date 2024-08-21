'use client';

import React, { useState } from 'react';
import { Fragment } from 'react';

import { Dialog, Transition } from '@headlessui/react';
import { Divider } from 'antd';
import { engagementmodalsNavLinks } from 'app/core/_data';
import { servicesNavLinks } from 'app/core/_data';
import {
  techNavLinksAI_ML,
  techNavLinksAdministrative,
  techNavLinksBlockchain,
  techNavLinksDevOps,
  techNavLinksDigitalMarketing,
  techNavLinksECommerece,
  techNavLinksGameDevelopment,
  techNavLinksIoT,
  techNavLinksMobile,
  techNavLinksWeb,
  techOptions,
} from 'app/core/_data';
import Link from 'next/link';

import Button from 'components/core-ui/button/button';

import ServicesNavlink from './Header-Components/ServicesNavlink';
import TechNavLink from './Header-Components/TechNavlink';
import TechnologyNavlinks from './Header-Components/TechnologyNavlinks';
import TopNavigation from './Header-Components/TopNavigation';

export default function Header() {
  const [open, setOpen] = useState(false);

  var [techLinks, setTechLinks] = useState(techOptions[0]);
  function changeTechnologies(tech: string): void {
    console.log(tech);
    setTechLinks(tech);
  }
  function mapTechs(): any {
    if (techLinks === techOptions[0]) {
      return [...techNavLinksMobile];
    } else if (techLinks === techOptions[1]) {
      return [...techNavLinksWeb];
    } else if (techLinks === techOptions[2]) {
      return [...techNavLinksECommerece];
    } else if (techLinks === techOptions[3]) {
      return [...techNavLinksBlockchain];
    } else if (techLinks === techOptions[4]) {
      return [...techNavLinksDigitalMarketing];
    } else if (techLinks === techOptions[5]) {
      return [...techNavLinksGameDevelopment];
    } else if (techLinks === techOptions[6]) {
      return [...techNavLinksAI_ML];
    } else if (techLinks === techOptions[7]) {
      return [...techNavLinksIoT];
    } else if (techLinks === techOptions[8]) {
      return [...techNavLinksDevOps];
    } else {
      return [...techNavLinksAdministrative];
    }
  }

  function toggleOpen() {
    setOpen(!open);
  }

  function closeModal() {
    setOpen(false);
  }

  return (
    <>
      <TopNavigation />
      <div className=' w-full h-20 hidden bg-opacity-[75%] md:flex justify-between items-center mb-[66px]  '>
        <Transition appear show={open} as={Fragment}>
          <Dialog as='div' className='relative z-10 ' onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <div className='' />
            </Transition.Child>

            <div className='fixed inset-0 overflow-y-hidden'>
              <div className='flex h-full items-center justify-center p-4 text-center mt-10'>
                <Transition.Child
                  as={Fragment}
                  enter='ease-out duration-300'
                  enterFrom='opacity-0 scale-95'
                  enterTo='opacity-100 scale-100'
                  leave='ease-in duration-200'
                  leaveFrom='opacity-100 scale-100'
                  leaveTo='opacity-0 scale-95'
                >
                  <Dialog.Panel className=' w-[65%] h-[540px]     max-w-full transform overflow-hidden  bg-white  text-left align-middle shadow-xl transition-all mt-[0.9rem]'>
                    <div className=' absolute   w-full h-[540px]  max-h-[600px]  z-10  shadow-2xl border-t-[6px]  border-t-primary   bg-white text-black pl-8 flex justify-between '>
                      <div className=' flex   w-[45%]'>
                        <div className=' pl-5 pt-5'>
                          <h3 className=' text-lg font-bold tracking-[0.18px] '>Engagement Models.</h3>
                          {/* start */}

                          {engagementmodalsNavLinks.map((item, index) => (
                            <TechNavLink
                              key={index}
                              href={item.href}
                              imageSrc={item.imageSrc}
                              title={item.title}
                              description={item.description}
                              onClick={() => closeModal()}
                            />
                          ))}
                        </div>

                        <Divider
                          type='vertical'
                          orientation='center'
                          className='  mx-auto h-[329.199px] mt-2 '
                          style={{ borderLeft: '1px solid  #E7F2FD' }}
                        />
                      </div>

                      <div className='   pl-6 pt-5 pb-2 w-[26.5%] '>
                        <h3 className='  text-lg font-bold tracking-[0.18px] '>Services.</h3>

                        {/* start */}

                        {servicesNavLinks.map((service) => (
                          <ServicesNavlink
                            key={service.id}
                            href={service.href}
                            title={service.title}
                            imageSrc={service.imageSrc}
                            changeTechs={changeTechnologies}
                            techOption={techOptions[service.id - 1]}
                          />
                        ))}
                      </div>
                      <div className='  bg-[#F0F8FF]  pl-6  w-[26.5%] '>
                        <h3 className=' text-lg font-bold cursor-pointer pb-[18px] pt-5'>Technologies.</h3>
                        {mapTechs().map((tech: any) => (
                          <TechnologyNavlinks
                            onClick={() => closeModal()}
                            key={tech.id}
                            href={tech.href}
                            title={tech.title}
                          />
                        ))}
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>

        <div
          className=' w-full flex justify-between top-11  bg-white bg-opacity-80 backdrop-blur-md h-[100.932px] mb-2  px-15 container-max '
          style={{ zIndex: 1000, position: 'fixed' }}
        >
          <div className='   w-[23.5%]  flex items-center   '>
            <Link href='/'>
              {' '}
              <img src='/images/irlogo.svg' className=' ' alt='' />{' '}
            </Link>
          </div>
          <div className=' flex w-[76.5%]  justify-between'>
            <div className='  flex  w-[58%]  justify-between '>
              <Link className='font-normal  text-black flex items-center' href='/'>
                <p className='  font-normal  text-black flex items-center'>Home</p>
              </Link>

              <Link className=' flex items-center' href='' onClick={toggleOpen}>
                <p className={` font-normal text-black flex items-center ${open ? 'text-primary' : 'text-black'}`}>
                  Services
                  {open ? (
                    <img
                      src='/images/bluedropup.svg'
                      className=' w-3 h-2 ml-1 flex justify-center items-center mt-1'
                      alt=''
                      onClick={toggleOpen}
                    />
                  ) : (
                    <img
                      src='/images/dropdown.svg'
                      className='w-3 h-2 ml-1 flex justify-center items-center mt-1'
                      alt=''
                      onClick={toggleOpen}
                    />
                  )}
                </p>
              </Link>

              <Link className='font-normal  text-black flex items-center' href='/client-idea-to-result'>
                <p>Case Study</p>
              </Link>

              <Link className='font-normal  text-black flex items-center' href='/blogs'>
                <p>Blogs</p>
              </Link>

              <a className='font-normal  text-black flex items-center' href='https://careers.irsolutions.tech/'>
                <p>Careers</p>
              </a>

              <Link className='font-normal  text-black flex items-center' href='/contact-us'>
                <p>Contact</p>
              </Link>
            </div>

            <div className=' flex justify-end gap-[4%] w-[42%] items-center '>
              {/* <button className=' w-[181px] h-[42px] font-sans font-bold text-base text-[#FFFFFF] bg-[#238FFF] rounded-[4.02px]'>Hire Top Talent</button> */}
              {/* <button className=' w-[181px] h-[42px] font-sans font-bold text-base text-[#FFFFFF] bg-[#FF8179] rounded-[4.02px]'>Schedule Meeting</button> */}
              <Link href='/hire-top-talent'>
                <Button className='text-white font-semibold  bg-primary hover:bg-btn-dark-primary border-0 py-3'>
                  Hire Top Talent
                </Button>
              </Link>

              <a href='https://calendly.com/ir_solutions'>
                <Button className='text-white font-semibold  bg-btn-pink  hover:bg-btn-dark-pink border-0 py-3 '>
                  Schedule Meeting
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
