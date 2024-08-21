import React from 'react';

interface FAQItem {
  title: JSX.Element; // Assuming title is a JSX element
  answer: JSX.Element; // Assuming answer is a JSX element
}

export const EmailMarketingFaqData: FAQItem[] = [
  {
    title: <h3 className=''>1. What is the cost of hiring an email marketer?</h3>,
    answer: (
      <div className=''>
        <p className=''>Cost varies, typically ranging per month based on experience and services.</p>
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
    title: <h3 className=''>2. Can I hire an email marketer on an hourly basis?</h3>,
    answer: (
      <div className=''>
        <p className=''>Yes, many offer hourly rates, depending on experience and services provided.</p>
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
    title: <h3 className=''>3. Can I check the technical expertise of an email marker?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          Assess technical skills through portfolio, certifications, past campaigns, and ask about experience with email
          marketing software and analytics.
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
    title: <h3 className=''>4. Why should I hire an email marker?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          Hiring ensures targeted campaigns, increased engagement, lead generation, and revenue growth through effective
          email marketing strategies.
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
    title: <h3 className=''>5. How do I hire an email marker?</h3>,
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
