import React from 'react';

interface FAQItem {
  title: JSX.Element; // Assuming title is a JSX element
  answer: JSX.Element; // Assuming answer is a JSX element
}

export const ShopifyDevFaqData: FAQItem[] = [
  {
    title: <h3 className=''>1. What is Shopify Development?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          Shopify Development is the process of creating and maintaining e-commerce websites using the Shopify platform.
          Shopify is a popular SaaS &#40;Software as a Service&#41; e-commerce platform that is widely used for building
          online stores and e-commerce websites.
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
    title: <h3 className=''>2. What Shopify Development services do you offer? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          We offer a wide range of Shopify Development services, including website design and development, custom
          e-commerce application development, theme customization, and more. Our team of experienced developers can help
          you create user-friendly, dynamic, and high-performance e-commerce websites that meet your business needs.
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
    title: <h3 className=''>3. What technologies do you use in Shopify Development?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          We use a variety of technologies in Shopify Development, including HTML, CSS, JavaScript, Liquid
          &#40;Shopify&apos;s templating language&#41;, and more. Our team of experienced developers stays up-to-date
          with the latest trends and technologies in Shopify to ensure that we deliver high-quality, cutting-edge
          solutions to our clients.
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
    title: <h3 className=''>4. How do you ensure the quality of your Shopify Development services? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          We have a rigorous quality assurance process in place to ensure that all our Shopify Development projects meet
          the highest standards of quality. Our team of experienced developers follows best practices and industry
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
    title: <h3 className=''>5. How do I outsource my Shopify Development Project? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          Outsourcing your Shopify Development Project to IR Solutions is a straightforward process. Simply reach out to
          our team and discuss your project requirements. We&apos;ll work with you to understand your goals, budget, and
          timeline. Our experienced developers will then create a detailed project plan, including the scope of work,
          milestones, and deliverables. Throughout the development process, you&apos;ll have access to regular updates
          and progress reports. Once the project is completed, we&apos;ll assist you with deploying the website to a web
          server. Our goal is to provide you with a seamless and hassle-free experience, ensuring that your Shopify
          website meets your expectations and delivers value to your users.
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