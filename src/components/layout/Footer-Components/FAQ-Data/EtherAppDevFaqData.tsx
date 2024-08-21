import React from 'react';

interface FAQItem {
  title: JSX.Element; // Assuming title is a JSX element
  answer: JSX.Element; // Assuming answer is a JSX element
}

export const EtherAppDevFaqData: FAQItem[] = [
  {
    title: <h3 className=''>1. What is an Ethereum App?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          An Ethereum App, also known as a decentralized application &#40;DApp&#41;, is an application that runs on the
          Ethereum blockchain. It is a smart contract-based application that is decentralized, transparent, and
          tamper-proof.
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
    title: <h3 className=''>2. What Ethereum App services do you offer? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          We offer a wide range of Ethereum App services, including DApp development, smart contract development, token
          development, and more. Our team of experienced developers can help you create a secure, user-friendly, and
          feature-rich Ethereum App that meets your needs.
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
    title: <h3 className=''>3. What technologies do you use in Ethereum App development?**</h3>,
    answer: (
      <div className=''>
        <p className=''>
          We use a variety of technologies in Ethereum App development, including Solidity &#40;the Ethereum smart
          contract programming language&#41;, Web3.js &#40;a JavaScript library for interacting with the Ethereum
          blockchain&#41;, and more. Our team of experienced developers stays up-to-date with the latest trends and
          technologies in the Ethereum App to ensure that we deliver high-quality, cutting-edge solutions to our
          clients.
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
    title: <h3 className=''>4. How do you ensure the security of your Ethereum App solutions? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          We have a rigorous security process in place to ensure that all our Ethereum App solutions meet the highest
          standards of security. Our team of experienced developers follows best practices and industry standards to
          ensure our solutions are secure, tamper-proof, and resistant to attacks.
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
    title: <h3 className=''>5. How do I outsource my Ethereum Project? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          Outsourcing your Ethereum App Project to IR Solutions is a straightforward process. Simply reach out to our
          team and discuss your project requirements. We&apos;ll work with you to understand your goals, budget, and
          timeline. Our experienced developers will then create a detailed project plan, including the scope of work,
          milestones, and deliverables. Throughout the project, you&apos;ll have access to regular updates and progress
          reports. Once the project is completed, we&apos;ll assist you with deploying the Ethereum App solution. Our
          goal is to provide you with a seamless and hassle-free experience, ensuring that your Ethereum App Project
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
