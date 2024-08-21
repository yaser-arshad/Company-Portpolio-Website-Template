import React from 'react';

interface FAQItem {
  title: JSX.Element; // Assuming title is a JSX element
  answer: JSX.Element; // Assuming answer is a JSX element
}

export const SocialMediaMarketingFaqData: FAQItem[] = [
  {
    title: <h3 className=''>1. What is the cost of hiring a social media marketer?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          Costs vary based on experience and services. Rates range from hourly fees to monthly retainers, tailored to
          your needs.
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
    title: <h3 className=''>2. Can I hire a Social Media Marketer on an hourly basis?</h3>,
    answer: (
      <div className=''>
        <p className=''>Yes, many offer hourly rates for flexibility in engagement.</p>
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
    title: <h3 className=''>3. Can I check the technical expertise of the Social Media Marketer?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          Absolutely. Review portfolios, case studies, or request consultations to assess their capabilities.
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
    title: <h3 className=''>4. Why should I hire a Social Media Marketer for my business?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          They bring expertise in crafting engaging content, implementing strategies, analyzing metrics, and staying
          updated with trends for effective brand promotion.
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
    title: <h3 className=''>5. How do I hire a Social Media Marker?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          Simply contact Hyperlink InfoSystem and share project details and required skills. Their streamlined process
          ensures swift hiring of a Social Media Marketer matching your needs.
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
