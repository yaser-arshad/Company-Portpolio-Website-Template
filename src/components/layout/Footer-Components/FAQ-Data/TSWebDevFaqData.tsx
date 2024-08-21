import React from 'react';

interface FAQItem {
  title: JSX.Element; // Assuming title is a JSX element
  answer: JSX.Element; // Assuming answer is a JSX element
}

export const TSWebDevFaqData: FAQItem[] = [
  {
    title: <h3 className=''>1. What is TypeScript Web Development?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          TypeScript Web Development is the process of creating and maintaining web applications using the TypeScript
          programming language. TypeScript is a superset of JavaScript that adds static typing and other features to the
          language, making it easier to write and maintain large-scale web applications.
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
    title: <h3 className=''>2. What TypeScript Web Development services do you offer? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          We offer a wide range of TypeScript Web Development services, including website design and development, custom
          web application development, single-page application &#40;SPA&#41; development, and more. Our team of
          experienced developers can help you create user-friendly, dynamic, and high-performance web applications that
          meet your business needs.
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
    title: <h3 className=''>3. What technologies do you use in TypeScript Web Development?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          We use a variety of technologies in TypeScript Web Development, including TypeScript, JavaScript, HTML, CSS,
          and more. Our team of experienced developers stays up-to-date with the latest trends and technologies in
          TypeScript to ensure that we deliver high-quality, cutting-edge solutions to our clients.
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
    title: <h3 className=''>4. How do you ensure the quality of your TypeScript Web Development services? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          We have a rigorous quality assurance process in place to ensure that all our TypeScript Web Development
          projects meet the highest standards of quality. Our team of experienced developers follows best practices and
          industry standards to deliver high-quality work that meets or exceeds client expectations.
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
    title: <h3 className=''>5. How do I outsource my typeScript Web Development Project? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          Outsourcing your TypeScript Web Development Project to IR Solutions is a straightforward process. Simply reach
          out to our team and discuss your project requirements. We&apos;ll work with you to understand your goals,
          budget, and timeline. Our experienced developers will then create a detailed project plan, including the scope
          of work, milestones, and deliverables. Throughout the development process, you&apos;ll have access to regular
          updates and progress reports. Once the project is completed, we&apos;ll assist you with deploying the web
          application to a web server. Our goal is to provide you with a seamless and hassle-free experience, ensuring
          that your TypeScript web application meets your expectations and delivers value to your users.
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
