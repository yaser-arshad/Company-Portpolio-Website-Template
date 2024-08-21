import React from 'react';

import Link from 'next/link';

interface FAQItem {
  title: JSX.Element; // Assuming title is a JSX element
  answer: JSX.Element; // Assuming answer is a JSX element
}

export const SeoServFaqData: FAQItem[] = [
  {
    title: <h3 className=''>1. What is the cost of hiring an SEO specialist?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          Our rates are flexible and depend on the services you choose and the specialist&apos;s skills.
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
    title: <h3 className=''>2. Can I hire an SEO specialist on an hourly basis?</h3>,
    answer: (
      <div className=''>
        <p className=''>Yes, hourly rates are based on experience and services offered.</p>
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
    title: <h3 className=''>3. Can I check the expertise of an SEO specialist?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          To evaluate the expertise of an SEO specialist, review their portfolio for past performance, and their
          understanding of SEO fundamentals and tools, including on-page optimization, keyword research, and backlink
          strategies.
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
    title: <h3 className=''>4. Why should I hire an SEO specialist?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          Hiring an SEO specialist offers several benefits for your business. They ensure improved search engine
          rankings, which lead to increased organic traffic, online visibility, and higher conversion rates.
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
    title: <h3 className=''>5. How do I hire an SEO specialist?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          <Link href='/hire-top-talent' className='text-primary me-1'>
            Contact us,
          </Link>
          share project specifics, and assess their understanding of your brand and goals before proceeding with hiring.
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
