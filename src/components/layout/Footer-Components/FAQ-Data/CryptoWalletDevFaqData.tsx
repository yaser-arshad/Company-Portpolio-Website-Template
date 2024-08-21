import React from 'react';

interface FAQItem {
  title: JSX.Element; // Assuming title is a JSX element
  answer: JSX.Element; // Assuming answer is a JSX element
}

export const CryptoWalletDevFaqData: FAQItem[] = [
  {
    // eslint-disable-next-line prettier/prettier
    title: (
      <h3 className=''>1. What is a Crypto Wallet?</h3>
    ),
    answer: (
      <div className=''>
        <p className=''>
          A Crypto Wallet is a digital wallet used to store, send, and receive cryptocurrencies like Bitcoin, Ethereum,
          and others. It securely stores the private keys required to access and manage your cryptocurrency holdings.
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
    title: <h3 className=''>2. What Crypto Wallet services do you offer? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          We offer a wide range of Crypto Wallet services, including wallet development, wallet integration, wallet
          security, and more. Our team of experienced developers can help you create a secure, user-friendly, and
          feature-rich Crypto Wallet that meets your needs.
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
    title: <h3 className=''>3. What technologies do you use in Crypto Wallet development?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          We use a variety of technologies in Crypto Wallet development, including blockchain technology, cryptography,
          and more. Our team of experienced developers stays up-to-date with the latest trends and technologies in
          Crypto Wallet to ensure that we deliver high-quality, cutting-edge solutions to our clients.
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
    title: <h3 className=''>4. How do you ensure the security of your Crypto Wallet solutions? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          We have a rigorous security process in place to ensure that all our Crypto Wallet solutions meet the highest
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
    title: <h3 className=''>5. How do I outsource my Crypto Wallet Project? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          Outsourcing your Crypto Wallet Project to IR Solutions is a straightforward process. Simply reach out to our
          team and discuss your project requirements. We&apos;ll work with you to understand your goals, budget, and
          timeline. Our experienced developers will then create a detailed project plan, including the scope of work,
          milestones, and deliverables. Throughout the project, you&apos;ll have access to regular updates and progress
          reports. Once the project is completed, we&apos;ll assist you with deploying the Crypto Wallet solution. Our
          goal is to provide you with a seamless and hassle-free experience, ensuring that your Crypto Wallet Project
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
