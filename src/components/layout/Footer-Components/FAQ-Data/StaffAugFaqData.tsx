import React from 'react';

interface FAQItem {
  title: JSX.Element; // Assuming title is a JSX element
  answer: JSX.Element; // Assuming answer is a JSX element
}

export const StaffAugFaqData: FAQItem[] = [
  {
    title: <h3 className=''>1. What is Staff Augmentation? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          Staff Augmentation is a business strategy where a company hires skilled professionals (contractors or
          freelancers) to fill temporary or permanent roles within their organization. It&apos;s a cost-effective and
          efficient way to quickly scale up your team and access specialized expertise.
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
    title: <h3 className=''>2. Why should I choose Staff Augmentation over traditional hiring? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          Staff Augmentation allows you to access specialized skills and expertise without the long-term commitment and
          overhead costs associated with traditional hiring. It&apos;s a flexible solution that can adapt to your
          changing needs and project requirements.
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
    title: <h3 className=''>3. How do I get started with Staff Augmentation? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          Getting started with Staff Augmentation is easy. Simply reach out to our team and let us know your staffing
          needs. We&apos;ll work with you to develop a customized solution that meets your budget and business goals.
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
    title: <h3 className=''>4. How does the Staff Augmentation process work? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          The process typically involves identifying your staffing needs, selecting the right professionals for the job,
          and integrating them into your team. Our team will work closely with you to understand your requirements and
          find the best candidates to meet your needs.
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
    title: <h3 className=''>5. Do you provide ongoing support and training for the professionals you provide? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          Yes, we offer ongoing support and training for the professionals we provide to ensure that they stay
          up-to-date on the latest technologies and best practices in their field.
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

  // Add more accordion items as needed
];
