import React from 'react';

interface FAQItem {
  title: JSX.Element; // Assuming title is a JSX element
  answer: JSX.Element; // Assuming answer is a JSX element
}

export const BlockChainDevFaqData: FAQItem[] = [
  {
    title: <h3 className=''>1. What is Blockchain Development?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          Blockchain Development is the process of creating and maintaining decentralized applications &#40;dApps&#41;
          and smart contracts on blockchain platforms. It involves tasks such as designing and implementing blockchain
          networks, developing smart contracts, and integrating blockchain solutions into existing systems.
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
    title: <h3 className=''>2. What Blockchain Development services do you offer?** </h3>,
    answer: (
      <div className=''>
        <p className=''>
          We offer a wide range of Blockchain Development services, including blockchain consulting, blockchain network
          design and implementation, smart contract development, dApp development, blockchain integration, and more. Our
          team of experienced developers can help you leverage the power of blockchain technology to create secure,
          transparent, and efficient solutions for your business.
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
    title: <h3 className=''>3. What blockchain platforms do you work with?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          We work with a variety of blockchain platforms, including Ethereum, Hyperledger Fabric, Corda, EOS, Tron, and
          more. Our team of experienced developers stays up-to-date with the latest trends and technologies in
          blockchain to ensure that we deliver high-quality, cutting-edge solutions to our clients.
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
    title: <h3 className=''>4. How do you ensure the security of blockchain solutions? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          We take the security of blockchain solutions very seriously. Our team follows best practices and industry
          standards to ensure that blockchain solutions are secure and protected against common threats such as hacking,
          fraud, and data breaches. We use encryption, digital signatures, and other security measures to protect
          sensitive information and ensure the integrity of blockchain transactions.
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
    title: <h3 className=''>5. How do you ensure the quality of your Blockchain Development services? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          We have a rigorous quality assurance process in place to ensure that all our Blockchain Development projects
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

  // Add more accordion items as needed
];
