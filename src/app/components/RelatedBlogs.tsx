'use client';

import React, { useRef, useState } from 'react';
import { Fragment } from 'react';
import ReactPlayer from 'react-player/youtube';

import { Dialog, Transition } from '@headlessui/react';
import { hireDeveloperslidesData } from 'app/core/_data';
import { successStoriesSlidesData } from 'app/core/_data';
import { relatedBlogsCardsData } from 'app/core/_data';
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import BlogsCard from './BlogsCard';

export default function RelatedBlogs() {
  return (
    <div className=' '>
      <div className=' mt-15 px-15  '>
        <div className=' flex flex-col justify-center items-center '>
          <h1 className='w-2/5 text-black font-bold text-5xl flex justify-center font-primary'>
            Our <span className='text-primary ml-2'>Related</span> <span className='ml-2'>Blogs</span>
          </h1>
          <p className=' w-2/3 font-normal text-xl text-black text-center mt-5 font-primary'>
            Our Top remote developers tailor software solutions as per your needs, focusing on your success. Explore our
            success stories & Hire dedicated top developers today!
          </p>
        </div>

        <div className=' w-full '>
          <Swiper
            slidesPerView={3}
            spaceBetween={4}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className='mySwiper w-full mb-24'
          >
            <div className=' w-full   flex justify-between'>
              {relatedBlogsCardsData.map((slide, index) => (
                <SwiperSlide className='' key={index}>
                  {/* <div className=' w-[98%]  bg-white shadow-slider  mt-12 '>
                    <img src={slide.imageSrc} className=' w-full' alt='' />
                    <div className='w-full px-6 flex'>
                      <div className='pt-4 w-full '>
                        <p className='text-black  font-bold text-xl'>
                          <span className='text-black'>{slide.postedBy}</span>
                        </p>
                        <a className=' font-normal text-xs text-[#000000] opacity-[54%]'>{slide.title}</a>
                      </div>
                      <div className=' flex justify-end items-center mt-3'>
                        <a target='_blank' rel='noopener noreferrer'>
                          <img src='/images/sidebutton.svg' alt='YouTube Video' />
                        </a>
                      </div>
                    </div>
                  </div> */}

                  <BlogsCard item={slide} hoverActive={true} />
                </SwiperSlide>
              ))}
            </div>
            <div className='custom-pagination1'></div>
          </Swiper>
        </div>
      </div>
      <hr className=' w-full  bg-[#D9D9D9]' />
    </div>
  );
}
