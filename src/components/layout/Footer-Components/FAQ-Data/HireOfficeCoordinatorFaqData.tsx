import React from 'react';

interface FAQItem {
  title: JSX.Element; // Assuming title is a JSX element
  answer: JSX.Element; // Assuming answer is a JSX element
}

export const HireOfficeCoordinatorFaqData: FAQItem[] = [
  {
    title: <h3 className=''>1. What is the cost of hiring an office coordinator?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          Pricing is subject to change based on the variety of services offered and the level of expertise involved.
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
    title: <h3 className=''>2. Can I hire an office coordinator on an hourly basis?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          Yes, pricing is based on an hourly rate, influenced by the experience and type of services delivered.
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
    title: <h3 className=''>3. Can I check the expertise of an office coordinator?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          Yes, review their resume for experience managing calendars, their management skills, communication, and
          discuss how they handled similar tasks in past roles.
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
    title: <h3 className=''>4. Why should I hire an office coordinator?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          By hiring an Office Coordinator to streamline communication, manage daily tasks, and ensure smooth office
          operations.
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
    title: <h3 className=''>5. How do I hire an office coordinator?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          We advise initiating contact with Hyperlink InfoSystem to share project details. Prior to any commitments,
          evaluate their comprehension of your brand and objectives for compatibility.
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
