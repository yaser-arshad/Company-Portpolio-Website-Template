'use client';

import React, { useRef, useState } from 'react';

import { hireDeveloperslidesData } from 'app/core/_data';
import Link from 'next/link';
import 'swiper/css';
// import 'swiper/css/pagination';
// import required modules
// import { Pagination } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

export default function SliderImplementation() {
  return (
    <div className=' mt-[7rem]'>
      <div className=' px-15  mx-auto md:w-2/4'>
        <h1 className=' text-black text-center font-bold text-5xl'>
          <span className=' text-primary'>Hire</span> Top Developers Effortlessly
        </h1>
        <p className=' font-normal text-lg  mt-6 text-center'>
          Experience a smooth hiring journey with continuous assistance from our team.
        </p>
        <Link href='/hire-top-talent'>
          <button className=' mt-10 md:mt-[1.125rem] w-60 h-11 rounded bg-primary hover:bg-btn-dark-primary text-lg leading-7 font-normal text-white flex justify-center items-center mx-auto'>
            Hire Developers
          </button>
        </Link>
      </div>

      <div className=' w-full  relative flex mt-[7.5rem]'>
        <div className='absolute flex  w-full mt-24 top-[-135px] '>
          <Swiper
            slidesPerView={4.5}
            spaceBetween={0}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className='mySwiper'
            // style={{ paddingTop: '60px', marginBottom: ''  }}
            style={{ paddingTop: '60px ' }}
          >
            {hireDeveloperslidesData.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className='w-[87%] h-[14rem] md:h-[22rem] rounded-tl-full rounded-tr-full rounded-b-[300rem]  bg-white shadow-newall shadow-subtle-black mb-10 '>
                  <img src={slide.imageSrc} className='mx-auto pt-[1.125rem] ' alt={slide.name} />
                  <h1 className='text-center text-black font-bold font-primary text-xl pt-5'>{slide.name}</h1>
                  <p className='text-center text-black font-primary text-xs  '>{slide.title}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className=' bg-primary w-full h-[12rem] me:h-[17.535rem] mt-[5rem] md:mt-[14rem] '></div>

      {/* <CarouselControlsInside /> */}
    </div>
  );
}
