import React from 'react';

interface FAQItem {
  title: JSX.Element; // Assuming title is a JSX element
  answer: JSX.Element; // Assuming answer is a JSX element
}

export const DigitalMarketingFaqData: FAQItem[] = [
  {
    title: <h3 className=''>1. What is the cost of hiring Digital Marketing?</h3>,
    answer: (
      <div className=''>
        <p className=''>The cost varies depending on services and expertise.</p>
        {/*
        <p className='mt-4'>
          <span className='text-gray-700'>Pre-built teams:</span> Choose from our pool of experienced professionals
          tailored to your project needs.
        </p>
        <p className='mt-2'>
          <span className='text-gray-700'>Dedicated team setup:</span> Discuss your specific requirements and we will
          handpick and assemble a custom team for you.
        </p>
    */}
      </div>
    ),
  },
  {
    title: <h3 className=''>2. Can I hire a Digital Marketing person on an hourly basis?</h3>,
    answer: (
      <div className=''>
        <p className=''>Yes, hourly rates based on experience and services offered.</p>
        {/*
        <p className='mt-4'>
          <span className='text-gray-700'>Pre-built teams:</span> Choose from our pool of experienced professionals
          tailored to your project needs.
        </p>
        <p className='mt-2'>
          <span className='text-gray-700'>Dedicated team setup:</span> Discuss your specific requirements and we will
          handpick and assemble a custom team for you.
        </p>
    */}
      </div>
    ),
  },
  {
    title: <h3 className=''>3. Can I check the technical expertise of Digital Marketing?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          Assess technical skills through portfolios, case studies, certifications, and discussions about tools and
          platforms used for campaigns.
        </p>
        {/*
        <p className='mt-4'>
          <span className='text-gray-700'>Pre-built teams:</span> Choose from our pool of experienced professionals
          tailored to your project needs.
        </p>
        <p className='mt-2'>
          <span className='text-gray-700'>Dedicated team setup:</span> Discuss your specific requirements and we will
          handpick and assemble a custom team for you.
        </p>
    */}
      </div>
    ),
  },
  {
    title: <h3 className=''>4. Why should I hire a Digital Marketing?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          Simply contact Hyperlink InfoSystem and share project details and assess their understanding of your brand and
          goals before hiring.
        </p>
        {/*
        <p className='mt-4'>
          <span className='text-gray-700'>Pre-built teams:</span> Choose from our pool of experienced professionals
          tailored to your project needs.
        </p>
        <p className='mt-2'>
          <span className='text-gray-700'>Dedicated team setup:</span> Discuss your specific requirements and we will
          handpick and assemble a custom team for you.
        </p>
    */}
      </div>
    ),
  },
  {
    title: <h3 className=''>5. How do I hire a Digital Marketing?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          Simply contact Hyperlink InfoSystem and share project details and assess their understanding of your brand and
          goals before hiring.
        </p>
        {/*
        <p className='mt-4'>
          <span className='text-gray-700'>Pre-built teams:</span> Choose from our pool of experienced professionals
          tailored to your project needs.
        </p>
        <p className='mt-2'>
          <span className='text-gray-700'>Dedicated team setup:</span> Discuss your specific requirements and we will
          handpick and assemble a custom team for you.
        </p>
    */}
      </div>
    ),
  },
];
