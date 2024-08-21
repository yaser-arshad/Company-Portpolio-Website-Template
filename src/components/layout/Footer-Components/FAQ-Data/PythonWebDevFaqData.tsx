import React from 'react';

interface FAQItem {
  title: JSX.Element; // Assuming title is a JSX element
  answer: JSX.Element; // Assuming answer is a JSX element
}

export const PythonWebDevFaqData: FAQItem[] = [
  {
    title: <h3 className=''>1. What is Python Web Development?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          Python Web Development is the process of creating and maintaining web applications using the Python
          programming language. Python is a popular open-source language that is widely used for building dynamic and
          interactive web applications.
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
    title: <h3 className=''>2. What Python Web Development services do you offer? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          We offer a wide range of Python Web Development services, including website design and development, custom web
          application development, e-commerce website development, and more. Our team of experienced developers can help
          you create user-friendly, dynamic, and high-performance web applications that meet your business needs.
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
    title: <h3 className=''>3. What technologies do you use in Python Web Development?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          We use a variety of technologies in Python Web Development, including Python, Django, Flask, HTML, CSS,
          JavaScript, and more. Our team of experienced developers stays up-to-date with the latest trends and
          technologies in Python to ensure that we deliver high-quality, cutting-edge solutions to our clients.
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
    title: <h3 className=''>4. How do you ensure the quality of your Python Web Development services? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          We have a rigorous quality assurance process in place to ensure that all our Python Web Development projects
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
    title: <h3 className=''>5. How do I outsource my Python Web Development Project? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          Outsourcing your Python Web Development Project to IR Solutions is a straightforward process. Simply reach out
          to our team and discuss your project requirements. We&apos;ll work with you to understand your goals, budget,
          and timeline. Our experienced developers will then create a detailed project plan, including the scope of
          work, milestones, and deliverables. Throughout the development process, you&apos;ll have access to regular
          updates and progress reports. Once the project is completed, we&apos;ll assist you with deploying the web
          application to a web server. Our goal is to provide you with a seamless and hassle-free experience, ensuring
          that your Python web application meets your expectations and delivers value to your users.
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
