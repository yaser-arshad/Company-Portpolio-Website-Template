import React from 'react';

interface FAQItem {
  title: JSX.Element; // Assuming title is a JSX element
  answer: JSX.Element; // Assuming answer is a JSX element
}

export const IonicAppDevFaqData: FAQItem[] = [
  {
    title: <h3 className=''>1. What is Ionic App Development?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          Ionic App Development is the process of creating and maintaining mobile applications using the Ionic
          framework, which is a popular open-source framework for building cross-platform mobile applications. It allows
          developers to write code once and deploy it on multiple platforms, including iOS, Android, and web.
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
    title: <h3 className=''>2. What Ionic App Development services do you offer? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          We offer a wide range of Ionic App Development services, including app design and development, app testing,
          app maintenance and support, and more. Our team of experienced developers can help you create innovative,
          user-friendly, and high-quality Ionic apps that meet your business needs.
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
    title: <h3 className=''>3. What technologies do you use in Ionic App Development?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          We use the Ionic framework, which is based on the AngularJS and Apache Cordova frameworks, for Ionic App
          Development. Our team of experienced developers stays up-to-date with the latest trends and technologies in
          Ionic to ensure that we deliver high-quality, cutting-edge solutions to our clients.
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
    title: <h3 className=''>4. How do you ensure the quality of your Ionic App Development services? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          We have a rigorous quality assurance process in place to ensure that all our Ionic App Development projects
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
    title: <h3 className=''>5. How do I outsource my Ionic App Development Project? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          Outsourcing your Ionic App Development Project to IR Solutions is a straightforward process. Simply reach out
          to our team and discuss your project requirements. We&apos;ll work with you to understand your goals, budget,
          and timeline. Our experienced developers will then create a detailed project plan, including the scope of
          work, milestones, and deliverables. Throughout the development process, you&apos;ll have access to regular
          updates and progress reports. Once the project is completed, we&apos;ll assist you with deploying the app on
          various platforms. Our goal is to provide you with a seamless and hassle-free experience, ensuring that your
          Ionic app meets your expectations and delivers value to your users.
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