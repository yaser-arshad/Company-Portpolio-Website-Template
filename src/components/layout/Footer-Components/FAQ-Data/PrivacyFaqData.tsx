import React from 'react';

interface FAQItem {
  title: JSX.Element; // Assuming title is a JSX element
  answer: JSX.Element; // Assuming answer is a JSX element
}

export const PrivacyFaqData: FAQItem[] = [
  {
    title: <h3 className=''>1. What information do we collect from users?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          We collect various types of information, including personal data such as name, email address, and payment
          information, as well as non-personal data and preferences.
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
    title: <h3 className=''>2. How do you use my information to improve services?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          Your information helps us understand how you use our services so we can analyze patterns, develop new
          features, and enhance your overall experience.
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
    title: <h3 className=''>3. Why and with whom do you share my information?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          We share your information to improve our services, communicate with you effectively, and prevent fraud. Also
          share with our trusted partners, service providers, and other third parties as necessary to fulfill our
          commitment.
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
    title: <h3 className=''>4. How do you protect my personal information, and do you share it with third parties?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          We use industry-standard security measures to protect your personal information. We may share it with trusted
          third parties for processing payments, customer support, or improving our services.
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
    title: <h3 className=''>5. What are my data protection rights?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          Your data protection rights include the right to access, erase, restrict processing, object to processing, and
          data portability. These rights ensure you have control over how your personal data is used by organizations.
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
