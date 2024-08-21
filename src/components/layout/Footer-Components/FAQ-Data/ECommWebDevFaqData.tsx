import React from 'react';

interface FAQItem {
  title: JSX.Element; // Assuming title is a JSX element
  answer: JSX.Element; // Assuming answer is a JSX element
}

export const ECommWebDevFaqData: FAQItem[] = [
  {
    title: <h3 className=''>1. What is E-Commerce Website Development? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          E-Commerce Website Development is the process of building and maintaining online stores that allow businesses
          to sell their products and services over the Internet. It involves tasks such as website design, product
          catalog management, shopping cart integration, payment gateway integration, and more.
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
    title: <h3 className=''>2. What E-Commerce Website Development services do you offer? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          We offer a wide range of E-Commerce Website Development services, including website design and development,
          custom E-Commerce solutions, shopping cart integration, payment gateway integration, product catalog
          management, order management, and more. Our team of experienced developers can help you create a
          user-friendly, secure, and scalable E-Commerce website that meets your business needs.
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
    title: <h3 className=''>3. What platforms do you use for E-Commerce Website Development?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          We use a variety of platforms for E-Commerce Website Development, including WooCommerce, Magento, Shopify,
          BigCommerce, OpenCart, and more. Our team of experienced developers stays up-to-date with the latest trends
          and technologies in E-Commerce to ensure that we deliver high-quality, cutting-edge solutions to our clients.
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
    title: <h3 className=''>4. How do you ensure the security of E-Commerce websites? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          We take the security of E-Commerce websites very seriously. Our team follows best practices and industry
          standards to ensure that E-Commerce websites are secure and protected against common threats such as data
          breaches, hacking, and fraud. We use encryption, firewalls, secure payment gateways, and other security
          measures to protect sensitive information and ensure a safe shopping experience for customers.
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
    title: <h3 className=''>5. How do you ensure the quality of your E-Commerce Website Development services? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          We have a rigorous quality assurance process in place to ensure that all our E-Commerce Website Development
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

  // Add more accordion items as needed
];
