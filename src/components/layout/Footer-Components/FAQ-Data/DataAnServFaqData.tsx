import React from 'react';

interface FAQItem {
  title: JSX.Element; // Assuming title is a JSX element
  answer: JSX.Element; // Assuming answer is a JSX element
}

export const DataAnServFaqData: FAQItem[] = [
  {
    title: <h3 className=''>1. How can Data Analytics improve my business operations?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          Data Analytics can significantly improve business operations by providing valuable insights into customer
          behavior, market trends, and operational efficiencies. It can help identify areas for improvement, optimize
          processes, and make data-driven decisions.
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
    title: <h3 className=''>2. What types of Data Analytics services does IR Solutions offer? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          IR Solutions offers a range of Data Analytics services, including descriptive, diagnostic, predictive, and
          prescriptive analytics. We use advanced statistical models, machine learning algorithms, and data
          visualization techniques to derive actionable insights from your data.
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
    title: <h3 className=''>3. How does IR Solutions handle data security and privacy?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          IR Solutions takes data security and privacy seriously. We adhere to strict data protection regulations and
          best practices, ensuring your data is encrypted, anonymized, and stored securely. We also provide transparency
          and control over how your data is used and accessed.
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
    title: <h3 className=''>4. How long does it take to see results from Data Analytics? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          The timeline for seeing results from Data Analytics depends on various factors, such as the complexity of your
          data, the scope of the project, and the specific analytics techniques used. IR Solutions works closely with
          clients to set realistic expectations and deliver results within agreed-upon timelines.
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
    title: <h3 className=''>5. How can I get started with IR Solutions&apos; Data Analytics services? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          To get started with IR Solutions&apos; Data Analytics services, simply contact us to schedule a consultation.
          We&apos;ll discuss your specific needs, goals, and challenges, and develop a tailored plan to address them.
          We&apos;ll also provide a detailed proposal outlining the scope of work, timelines, and pricing. Once
          approved, we&apos;ll begin the project, keeping you informed and involved every step of the way.
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
