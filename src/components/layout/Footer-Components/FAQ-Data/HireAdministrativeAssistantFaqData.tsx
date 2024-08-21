import React from 'react';

interface FAQItem {
  title: JSX.Element; // Assuming title is a JSX element
  answer: JSX.Element; // Assuming answer is a JSX element
}

export const HireAdministrativeAssistantFaqData: FAQItem[] = [
  {
    title: <h3 className=''>1. What is the cost of hiring an administrative assistant?</h3>,
    answer: (
      <div className=''>
        <p className=''>Rates are determined by the type of services and the level of skill required.</p>
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
    title: <h3 className=''>2. Can I hire an administrative assistant on an hourly basis?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          Yes, rates on an hourly basis are based on professional experience and the services performed.
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
    title: <h3 className=''>3. Can I check the expertise of an administrative assistant?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          Yes, inquire about their experience in managing calendars, emails and office software. Delve into their
          organizational skills, communication abilities, and discuss how they handled similar tasks in past roles.
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
    title: <h3 className=''>4. Why should I hire an administrative assistant?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          You should hire an administrative assistants for comprehensive administrative support, ensuring the smooth
          operation of an organization by managing schedules, communication channels, and essential administrative
          tasks.
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
    title: <h3 className=''>5. How do I hire an administrative assistant?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          Initiate contact with Hyperlink InfoSystem and share project specifics. It&apos;s essential to evaluate their
          understanding of your brand and objectives before any formal commitments.
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
