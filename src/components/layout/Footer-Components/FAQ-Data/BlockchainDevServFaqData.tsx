import React from 'react';

import Link from 'next/link';

interface FAQItem {
  title: JSX.Element; // Assuming title is a JSX element
  answer: JSX.Element; // Assuming answer is a JSX element
}

export const BlockchainDevServFaqData: FAQItem[] = [
  {
    title: <h3 className=''>1. What is the cost of hiring Blockchain Development Services? </h3>,
    answer: (
      <div className=''>
        <p className=''>Our pricing structure varies depending on services and expertise.</p>
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
    title: <h3 className=''>2. Can I hire a Blockchain Developer on an hourly basis? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          Yes, you can hire Blockchain Developers on an hourly basis, with rates varying based on their experience and
          the specific tasks involved.
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
    title: <h3 className=''>3. Can I check the technical expertise of a Blockchain Developer? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          Yes, you can check their technical skills by reviewing their portfolio for relevant projects, understanding of
          blockchain fundamentals, blockchain security, and programming skills.
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
    title: <h3 className=''>4. Why should I hire a Blockchain Developer? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          Hire a Blockchain Developer for the development of blockchain solutions, utilizing their expertise to create
          decentralized applications, smart contracts, and other blockchain-based technologies for enhanced security,
          transparency, and functionality.
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
    title: <h3 className=''>5. How do I hire a Blockchain Developer? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          Simply
          <Link href='/hire-top-talent' className='text-primary mx-1'>
            contact us
          </Link>
          and share your project details. Evaluate their understanding of your blockchain concept, their technical
          capabilities, and their experience with similar projects before making a decision.
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
