import React from 'react';

import Link from 'next/link';

interface FAQItem {
  title: JSX.Element; // Assuming title is a JSX element
  answer: JSX.Element; // Assuming answer is a JSX element
}

export const IotAppDevServFaqData: FAQItem[] = [
  {
    title: <h3 className=''>1. What is the cost of hiring IoT app development services? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          The cost varies depending on the complexity of the project and the level of expertise required.
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
    title: <h3 className=''>2. Can I hire IoT app development services on an hourly basis?</h3>,
    answer: (
      <div className=''>
        <p className=''>Yes, hourly rates are available based on the experience and specific services offered.</p>
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
    title: <h3 className=''>3. Can I check the technical expertise of IoT app developers? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          You can check their expertise by reviewing portfolios for relevant experience, discussing proficiency in
          programming languages and IoT frameworks, inquiring about security measures, and their past experience.
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
    title: <h3 className=''>4. Why should I hire IoT app development services? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          Hiring ensures innovative IoT solutions, seamless integration, improved user experiences and utilizing the
          full potential of IoT technology for business growth.
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
    title: <h3 className=''>5. How do I hire IoT app development services? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          <Link href='/hire-top-talent' className='text-primary mx-1'>
            Contact us,
          </Link>
          share project details, and evaluate their alignment with your brand and goals before proceeding with the
          hiring process.
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
