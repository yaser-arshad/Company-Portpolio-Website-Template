'use client';

import React from 'react';

import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { useDataContext } from '../../../context/DataContext';

export default function ContactUs1() {
  const { formData, updateContactData, resetFormData } = useDataContext();
  const router = useRouter(); // Initialize useRouter

  const handleInputChange = (e: any) => {
    updateContactData({ [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    // Handle form submission, e.g., sending data to API
    e.preventDefault();
    axios
      .postForm(
        'https://script.google.com/macros/s/AKfycbxbEs160IFC-eOv5489_vbsZqHgaYDa7BHnhuGI057FUM34A1mz1EZPXTTwfG2q3G3C4A/exec',
        formData.contact
      )
      .then(() => {
        router.push('/project-details');
      });
    console.log('Submitting contact form data:', formData.contact);
    // Implement API call here
    resetFormData();
  };

  return (
    <div className='w-full bg-bg-primary py-10'>
      <div className='w-4/5 mx-auto pt-12 flex'>
        <div className='w-2/5 bg-primary px-10 pt-16 rounded-2xl'>
          <h1 className='text-white font-primary font-bold text-6xl'>
            Let&apos;s build <br /> the right team for you.
          </h1>
          <Link href={'/hire-top-talent'}>
            <button className='w-56 h-14 bg-white mt-8 text-black rounded'>Hire Now</button>
          </Link>
          <img className='w-full' src='/images/persons.svg' alt='' />
        </div>

        <div className='w-3/5 flex justify-end'>
          <div className='w-11/12 h-96 px-11'>
            <form onSubmit={handleSubmit}>
              <h3 className='font-bold text-4xl text-white mt-10'>Get in Touch with us.</h3>
              <div className='grid grid-cols-2 gap-2 w-full mt-10'>
                <div className='w-full flex flex-col text-white'>
                  <label htmlFor='name'>Your Name*</label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.contact.name}
                    onChange={handleInputChange}
                    className='w-full h-16 border-[1px] border-bordercolor bg-backgroundcolor text-lg rounded-md font-normal pl-6 py-4 focus:outline-none text-white'
                    required
                  />
                </div>

                <div className='w-full flex flex-col text-white'>
                  <label htmlFor='phoneNumber'>Phone Number*</label>
                  <input
                    type='tel'
                    id='phoneNumber'
                    name='phoneNumber'
                    value={formData.contact.phoneNumber}
                    onChange={handleInputChange}
                    onKeyDown={(e) => {
                      // Allow functional keys like backspace
                      if (
                        e.key === 'Backspace' ||
                        e.key === 'Delete' ||
                        e.key === 'ArrowLeft' ||
                        e.key === 'ArrowRight'
                      ) {
                        return;
                      }
                      // Allow numeric digits
                      if (isNaN(Number(e.key))) {
                        e.preventDefault();
                      }
                    }}
                    required
                    className='w-full h-16 border-[1px] border-bordercolor bg-backgroundcolor text-lg rounded-md font-normal pl-6 py-4 focus:outline-none text-white'
                  />
                </div>
              </div>

              <div className='w-full flex flex-col mt-7 text-white'>
                <label htmlFor='email'>Email*</label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.contact.email}
                  onChange={handleInputChange}
                  className='w-full h-16 border-[1px] border-bordercolor bg-backgroundcolor text-lg rounded-md font-normal pl-6 py-4 focus:outline-none text-white'
                />
              </div>

              <button
                // onClick={handleSubmit}
                className='w-full h-16 rounded bg-primary text-white mt-7 font-normal hover:bg-btn-dark-primary text-lg'
                type='submit'
              >
                Next
              </button>

              <hr className='w-full mt-28' />

              <p className='w-full font-normal text-sm mt-7 pr-3 text-white'>
                By filling this information, you are agreeing to IR SolutionsTerms of Service, Privacy Policy, and that
                IR Solutions may monitor or record audio or video calls for quality assurance and training purposes.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
