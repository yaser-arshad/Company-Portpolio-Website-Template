import React from 'react';

interface FAQItem {
  title: JSX.Element; // Assuming title is a JSX element
  answer: JSX.Element; // Assuming answer is a JSX element
}

export const IoSAppDevCompanyFaqData: FAQItem[] = [
  {
    title: <h3 className=''>1. What is iOS Development?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          iOS Development is the process of creating and maintaining applications for Apple&apos;s iOS operating system,
          which powers devices such as the iPhone, iPad, and iPod Touch. It involves tasks such as designing the user
          interface, writing code, testing, and deploying the app to the App Store.
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
    title: <h3 className=''>2. What iOS Development services do you offer? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          We offer a wide range of iOS Development services, including iPhone app development, iPad app development,
          Apple Watch app development, and more. Our team of experienced developers can help you create innovative,
          user-friendly, and high-quality iOS apps that meet your business needs.
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
    title: <h3 className=''>3. What technologies do you use in iOS Development?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          We use a variety of technologies in iOS Development, including the Swift programming language, the Xcode
          integrated development environment &#40;IDE&#41;, and the Apple UIKit framework. Our team of experienced
          developers stays up-to-date with the latest trends and technologies in iOS to ensure that we deliver
          high-quality, cutting-edge solutions to our clients.
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
    title: <h3 className=''>4. How do you ensure the quality of your iOS Development services? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          We maintain a stringent quality assurance process to guarantee that all our iOS Development projects adhere to
          the highest standards of quality. Our team of seasoned developers meticulously follows best practices and
          industry standards, consistently delivering exceptional work that either meets or surpasses client
          expectations.
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
    title: <h3 className=''>5. How do I outsource my iOS Development Project? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          Outsourcing your iOS Development Project to IR Solutions is a straightforward process. Simply reach out to our
          team and discuss your project requirements. We&apos;ll work with you to understand your goals, budget, and
          timeline. Our experienced developers will then create a detailed project plan, including the scope of work,
          milestones, and deliverables. Throughout the development process, you&apos;ll have access to regular updates
          and progress reports. Once the project is completed, we&apos;ll assist you with deploying the app to the App
          Store. Our goal is to provide you with a seamless and hassle-free experience, ensuring that your iOS app meets
          your expectations and delivers value to your users.
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
