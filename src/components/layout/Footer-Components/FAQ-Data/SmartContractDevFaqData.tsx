import React from 'react';

interface FAQItem {
  title: JSX.Element; // Assuming title is a JSX element
  answer: JSX.Element; // Assuming answer is a JSX element
}

export const SmartContractDevFaqData: FAQItem[] = [
  {
    title: <h3 className=''>1. What are Smart Contracts?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          Smart Contracts are self-executing contracts with the terms of the agreement directly written into code. They
          automatically execute and enforce the terms of the contract when specific conditions are met. Smart Contracts
          are designed to be transparent, secure, and tamper-proof.
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
    title: <h3 className=''>2. What Smart Contracts Development services do you offer? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          We offer a wide range of Smart Contracts Development services, including Smart Contracts design, development,
          auditing, and optimization. Our team of experienced developers can help you create secure, efficient, and
          reliable Smart Contracts that meet your needs.
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
    title: <h3 className=''>3. What technologies do you use in Smart Contracts Development?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          We use a variety of technologies in Smart Contracts Development, including Solidity &#40;the Ethereum smart
          contract programming language&#41;, Web3.js &#40;a JavaScript library for interacting with the Ethereum
          blockchain&#41;, and more. Our team of experienced developers stays up-to-date with the latest trends and
          technologies in Smart Contracts Development to ensure that we deliver high-quality, cutting-edge solutions to
          our clients.
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
    title: <h3 className=''>4. How do you ensure the security of your Smart Contracts solutions? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          We have a rigorous security process in place to ensure that all our Smart Contracts solutions meet the highest
          standards of security. Our team of experienced developers follows best practices and industry standards to
          ensure that our solutions are secure, tamper-proof, and resistant to attacks.
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
    title: <h3 className=''>5. How do I outsource my Smart Contracts Project? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          Outsourcing your Smart Contracts Project to IR Solutions is a straightforward process. Simply reach out to our
          team and discuss your project requirements. We&apos;ll work with you to understand your goals, budget, and
          timeline. Our experienced developers will then create a detailed project plan, including the scope of work,
          milestones, and deliverables. Throughout the project, you&apos;ll have access to regular updates and progress
          reports. Once the project is completed, we&apos;ll assist you with deploying the Smart Contracts solution. Our
          goal is to provide you with a seamless and hassle-free experience, ensuring that your Smart Contracts Project
          meets your expectations and delivers value to your organization.
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
