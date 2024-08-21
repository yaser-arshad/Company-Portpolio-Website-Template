import React from 'react';

import Link from 'next/link';

interface FAQItem {
  title: JSX.Element; // Assuming title is a JSX element
  answer: JSX.Element; // Assuming answer is a JSX element
}

export const AdminServFaqData: FAQItem[] = [
  {
    title: <h3 className=''>1. What is the cost of administrative services?</h3>,
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
    title: <h3 className=''>2. Can I hire an Administrative Services person on an hourly basis?</h3>,
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
    title: <h3 className=''>3. Can I check the expertise of Administrative Services?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          Yes, you can assess their skills based on past experience, evaluate their communication abilities, and review
          the software tools they have used for administrative tasks
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
    title: <h3 className=''>4. Why should I hire Administrative Services?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          You should hire administrative services to ensure efficient management, streamline processes, improve
          organization, and effectively handle administrative tasks. This enhances overall productivity and operational
          efficiency.
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
    title: <h3 className=''>5. How do I hire Administrative Services?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          For hiring, you can simply{' '}
          <Link href='/hire-top-talent' className='text-primary'>
            contact
          </Link>
          , share your project details, and assess their understanding of your requirements and goals before hiring.
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
