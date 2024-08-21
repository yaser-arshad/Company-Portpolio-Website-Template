import React from 'react';

interface FAQItem {
  title: JSX.Element; // Assuming title is a JSX element
  answer: JSX.Element; // Assuming answer is a JSX element
}

export const SwiftAppDevFaqData: FAQItem[] = [
  {
    title: <h3 className=''>1. What is Swift App Development?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          Swift App Development is the process of creating and maintaining mobile applications using the Swift
          programming language, which is developed by Apple. It is designed to be fast, safe, and modern, and it can be
          used to develop apps for iOS, macOS, watchOS, and tvOS.
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
    title: <h3 className=''>2. What Swift App Development services do you offer? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          We offer a wide range of Swift App Development services, including app design and development, app testing,
          app maintenance and support, and more. Our team of experienced developers can help you create innovative,
          user-friendly, and high-quality Swift apps that meet your business needs.
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
    title: <h3 className=''>3. What technologies do you use in Swift App Development?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          We use the Swift programming language, which is fully interoperable with Objective-C, for Swift App
          Development. Our team of experienced developers stays up-to-date with the latest trends and technologies in
          Swift to ensure that we deliver high-quality, cutting-edge solutions to our clients.
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
    title: <h3 className=''>4. How do you ensure the quality of your Swift App Development services? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          We have a rigorous quality assurance process in place to ensure that all our Swift App Development projects
          meet the highest standards of quality. Our team of experienced developers follows best practices and industry
          standards to deliver high-quality work that meets or exceeds client expectations.
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
    title: <h3 className=''>5. How do I outsource my Swift App Development Project? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          Outsourcing your Swift App Development Project to IR Solutions is a straightforward process. Simply reach out
          to our team and discuss your project requirements. We&apos;ll work with you to understand your goals, budget,
          and timeline. Our experienced developers will then create a detailed project plan, including the scope of
          work, milestones, and deliverables. Throughout the development process, you&apos;ll have access to regular
          updates and progress reports. Once the project is completed, we&apos;ll assist you with deploying the app to
          the App Store. Our goal is to provide you with a seamless and hassle-free experience, ensuring that your Swift
          app meets your expectations and delivers value to your users.
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
