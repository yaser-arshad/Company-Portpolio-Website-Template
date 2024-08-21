import React from 'react';

interface FAQItem {
  title: JSX.Element; // Assuming title is a JSX element
  answer: JSX.Element; // Assuming answer is a JSX element
}

export const PrivateBlockchainDevFaqData: FAQItem[] = [
  {
    title: <h3 className=''>1. What is a Private Blockchain?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          A Private Blockchain is a blockchain network that is limited to a particular set of participants. Unlike
          public blockchains, which are open to anyone, private blockchains are permissioned and necessitate an
          invitation to become a member.
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
    title: <h3 className=''>2. What Private Blockchain Development services do you offer? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          We offer a wide range of Private Blockchain Development services, including Private Blockchain design,
          development, deployment, and maintenance. Our team of experienced developers can help you create secure,
          scalable, and efficient Private Blockchain solutions that meet your needs.
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
    title: <h3 className=''>3. What technologies do you use in Private Blockchain Development?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          We use a variety of technologies in Private Blockchain Development, including Hyperledger Fabric, Quorum,
          Corda, and more. Our team of experienced developers stays up-to-date with the latest trends and technologies
          in Private Blockchain Development to ensure that we deliver high-quality, cutting-edge solutions to our
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
    title: <h3 className=''>4. How do you ensure the security of your Private Blockchain solutions? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          We have a rigorous security process in place to ensure that all our Private Blockchain solutions meet the
          highest standards of security. Our team of experienced developers follows best practices and industry
          standards to ensure that our solutions are secure, tamper-proof, and resistant to attacks.
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
    title: <h3 className=''>5. How do I outsource my Private Blockchain Project? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          Outsourcing your Private Blockchain Project to IR Solutions is a straightforward process. Simply reach out to
          our team and discuss your project requirements. We&apos;ll work with you to understand your goals, budget, and
          timeline. Our experienced developers will then create a detailed project plan, including the scope of work,
          milestones, and deliverables. Throughout the project, you&apos;ll have access to regular updates and progress
          reports. Once the project is completed, we&apos;ll assist you with deploying the Private Blockchain solution.
          Our goal is to provide you with a seamless and hassle-free experience, ensuring that your Private Blockchain
          Project meets your expectations and delivers value to your organization.
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
