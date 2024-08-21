import React from 'react';

interface FAQItem {
  title: JSX.Element; // Assuming title is a JSX element
  answer: JSX.Element; // Assuming answer is a JSX element
}

export const GameDevServicesFaqData: FAQItem[] = [
  {
    title: <h3 className=''>1. How to Hire Game Developers?</h3>,
    answer: (
      <div className=''>
        <p className=''>We understand finding the right developers can be overwhelming. We offer two options:</p>

        <p className='mt-4'>
          <span className='text-gray-700'>Pre-built teams:</span> Choose from our pool of experienced professionals
          tailored to your project needs.
        </p>
        <p className='mt-2'>
          <span className='text-gray-700'>Dedicated team setup</span> Discuss your specific requirements and we&apos;ll
          handpick and assemble a custom team for you.
        </p>
      </div>
    ),
  },
  {
    title: <h3 className=''>2. Why outsource game development services? </h3>,
    answer: (
      <div className=''>
        <p className='mt-4'>
          <span className='text-gray-700'>Access to expertise:</span> Tap into a diverse pool of talent with specialized
          skills you might not have in-house.
        </p>
        <p className='mt-2'>
          <span className='text-gray-700'>Cost-effectiveness:</span> Save on overhead costs associated with hiring
          full-time staff.
        </p>
        <p className='mt-2'>
          <span className='text-gray-700'>Scalability:</span> Easily adjust your team size based on project demands.
        </p>
        <p className='mt-2'>
          <span className='text-gray-700'>Faster time to market:</span> Focus on your core strengths while we handle
          development.
        </p>
      </div>
    ),
  },

  {
    title: <h3 className=''>3. What is the cost involved in developing a game?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          Unfortunately, there&apos;s no one-size-fits-all answer. Costs depend on various factors like game complexity,
          features, platform, and team size.
        </p>
        <p className='mt-2'>
          However, we offer flexible pricing models &#40;fixed cost, hourly, etc.&#41; and transparent estimates after
          discussing your project details.
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
    title: <h3 className=''>4. Can I make a game that I can release on multiple platforms? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          Absolutely! We have experience developing games for various platforms like PC, mobile, consoles, and even VR.
          We&apos;ll advise you on the best approach based on your target audience and budget.
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
    title: <h3 className=''>5. How long does it typically take to develop a game? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          Similar to cost, development timelines vary based on project scope. Simple mobile games might take months,
          while complex AAA titles can span years.
        </p>
        <p className='mt-2'>
          We&apos;ll provide a realistic timeline after understanding your project&apos;s requirements.
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
    title: <h3 className=''>6. Do you provide post-launch support and maintenance for the games you develop? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          Yes! We understand your game&apos;s journey doesn&apos;t end with launch. We offer ongoing support packages
          including bug fixes, performance optimization, and even new content updates.
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
