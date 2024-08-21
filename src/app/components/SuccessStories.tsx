'use client';

import React, { useRef, useState } from 'react';
import { Fragment } from 'react';
import ReactPlayer from 'react-player/youtube';

import { Dialog, Transition } from '@headlessui/react';
import { hireDeveloperslidesData } from 'app/core/_data';
import { successStoriesSlidesData } from 'app/core/_data';
import 'swiper/css';
// import 'swiper/css/scrollbar';
// import 'swiper/css/pagination';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

export default function SuccessStories() {
  let [isOpen, setIsOpen] = useState(false);

  let [currentVideo, setCurrentVideo] = useState('');

  function closeModal() {
    setIsOpen(false);
  }

  function openModal(video: string) {
    setCurrentVideo(video);
    setIsOpen(true);
  }
  return (
    <div>
      <div className=' mt-15 px-[4.188rem]  '>
        <div className=' flex flex-col justify-center items-center '>
          <h1 className='w-2/5 text-black font-bold text-5xl flex justify-center font-primary'>
            Our <span className='text-primary ml-2'>Success</span> <span className='ml-2'>Stories</span>
          </h1>
          <p className=' w-2/3 font-normal text-xl text-black text-center mt-5 font-primary'>
            Our Top remote developers tailor software solutions as per your needs, focusing on your success. Explore our
            success stories & Hire dedicated top developers today!
          </p>
        </div>

        <div className=' flex  w-full  '>
          <Swiper
            scrollbar={true}
            slidesPerView={3}
            spaceBetween={0}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className='mySwiper '
          >
            <div className=' w-full  flex justify-center items-center mt-12 px-4    '>
              {successStoriesSlidesData.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div
                    className={`pb-3  cursor-pointer mx-auto mt-12  bg-white   flex flex-col justify-between w-[98.5%] shadow-md  rounded-lg hover:shadow-xl   `}
                    onClick={() => openModal(slide.videoSrc)}
                  >
                    <img src={slide.imageSrc} className=' w-full' alt='' />
                    <div className='w-full px-6 flex'>
                      <div className='pt-4 w-10/12'>
                        <p className='text-black  font-bold text-xl'>
                          <span className='text-[#238FFF]'>{slide.name}</span> {slide.title}
                        </p>
                        <a href={slide.website} className=' font-normal text-xs text-[#000000] opacity-[54%]'>
                          {slide.website}
                        </a>
                      </div>
                      <div className='w-[8%] flex justify-end items-center'>
                        <img className='mt-4' src={slide.iconSrc} onClick={() => openModal(slide.videoSrc)} alt='' />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
            <div className='custom-pagination'></div>
          </Swiper>
          {/* <div className='custom-pagination'></div> */}
        </div>

        <Transition appear show={isOpen} as={Fragment}>
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
              <div className='fixed inset-0 bg-black/25' />
            </Transition.Child>

            <div className='fixed inset-0 overflow-y-auto mt-30'>
              <div className='flex min-h-full items-center justify-center p-4 text-center'>
                <Transition.Child
                  as={Fragment}
                  enter='ease-out duration-300'
                  enterFrom='opacity-0 scale-95'
                  enterTo='opacity-100 scale-100'
                  leave='ease-in duration-200'
                  leaveFrom='opacity-100 scale-100'
                  leaveTo='opacity-0 scale-95'
                >
                  <Dialog.Panel className='w-[60%]  max-w-full transform overflow-hidden rounded-2xl bg-white px-6 pb-6 cursor-pointer text-left align-middle shadow-xl transition-all'>
                    {/* <ReactPlayer
                    url='/public/videos/review1.mp4'
                    width='100%' // Set the width to 100% to make it full width
                    // Set height to auto to maintain aspect ratio
                    className='w-full'
                  /> */}
                    <img src='/images/cross.png' className=' float-right h-4 w-4 mt-2' alt='' onClick={closeModal} />
                    <video width='100%' height='240' src={currentVideo} autoPlay controls preload='none'>
                      Your browser does not support the video tag.
                    </video>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>

      <hr className=' w-full bg-[#D9D9D9] mt-[78px]' />
    </div>
  );
}
