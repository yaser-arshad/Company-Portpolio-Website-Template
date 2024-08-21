import React from 'react';

import Link from 'next/link';

interface FAQItem {
  title: JSX.Element; // Assuming title is a JSX element
  answer: JSX.Element; // Assuming answer is a JSX element
}

export const PpcMarketingFaqData: FAQItem[] = [
  {
    title: <h3 className=''>1. What is the cost of hiring a Pay Per Click specialist?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          We offer a range of pricing options based on the services you need and the specialist’s expertise.
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
    title: <h3 className=''>2. Can I hire a PPC specialist on an hourly basis?</h3>,
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
    title: <h3 className=''>3. Can I check the expertise of a PPC specialist?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          You can assess their expertise by reviewing their portfolio for diverse campaigns, verifying relevant
          certifications, discussing the strategies and tools they employ, and evaluating their analytical skills.
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
    title: <h3 className=''>4. Why should I hire a PPC specialist?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          You should hire a PPC specialist to ensure targeted expertise, increased brand visibility, maximized ROI,
          efficient campaign management and valuable industry insights.
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
    title: <h3 className=''>5. How do I hire a PPC specialist?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          Simply
          <Link href='/hire-top-talent' className='text-primary mx-1'>
            contact us,
          </Link>
          provide project details, and assess their understanding of your brand and goals before proceeding with hiring.
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
