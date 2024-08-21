import React from 'react';

interface FAQItem {
  title: JSX.Element; // Assuming title is a JSX element
  answer: JSX.Element; // Assuming answer is a JSX element
}

export const FixedPriceFaqData: FAQItem[] = [
  {
    title: <h3 className=''>1. What is a Fixed-Price Model? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          A Fixed-Price Model is a type of service contract where the price is agreed upon and fixed upfront, regardless
          of the actual time and resources required to complete the project. This model is ideal for projects with
          well-defined scope, requirements, and deliverables.
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
    title: <h3 className=''>2. What are the benefits of a Fixed-Price Model? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          The Fixed-Price Model offers several benefits, including cost predictability, reduced risk, clear project
          scope, and simplified project management. It allows clients to budget more effectively and ensures that
          projects are completed within the agreed-upon timeframe and budget.
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
    title: <h3 className=''>3. How do you determine the fixed price for a project? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          We determine the fixed price for a project based on a detailed analysis of the project scope, requirements,
          and deliverables. Our team works closely with clients to understand their needs and develop a comprehensive
          project plan that outlines all the necessary tasks and milestones.
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
    title: <h3 className=''>4. What happens if the project scope changes during the project? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          If the project scope changes during the project, we will work with the client to assess the impact on the
          project timeline and budget. Depending on the nature of the change, additional costs may be incurred, and the
          project timeline may need to be adjusted.
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
    title: <h3 className=''>5. How do you ensure the quality of work in a Fixed-Price Model? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          Our stringent quality assurance process guarantees that all deliverables adhere to the highest quality
          standards. Our seasoned team of professionals adheres to industry norms and best practices, consistently
          delivering work of exceptional quality that either meets or exceeds client expectations.
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
