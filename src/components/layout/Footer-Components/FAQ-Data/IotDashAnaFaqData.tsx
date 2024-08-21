import React from 'react';

interface FAQItem {
  title: JSX.Element; // Assuming title is a JSX element
  answer: JSX.Element; // Assuming answer is a JSX element
}

export const IotDashAnaFaqData: FAQItem[] = [
  {
    title: <h3 className=''>1. What is an IoT Dashboard, and how can it benefit my business?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          An IoT Dashboard is a web-based interface that displays real-time data from connected devices and sensors. It
          can help businesses monitor and analyze data, make data-driven decisions, and improve operational efficiency,
          productivity, and customer satisfaction.
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
    title: <h3 className=''>2. How does IR Solutions&apos; IoT Dashboard & Analytics service work? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          IR Solutions&apos; IoT Dashboard & Analytics service involves designing, building, and implementing a custom
          IoT dashboard tailored to your specific needs and goals. We use advanced analytics techniques, machine
          learning algorithms, and data visualization tools to provide actionable insights from your IoT data.
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
    title: <h3 className=''>3. What types of IoT Dashboard & Analytics services does IR Solutions offer?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          IR Solutions offers a range of IoT Dashboard & Analytics services, including dashboard design and development,
          data integration, data analysis, and predictive analytics. We also provide consultation and guidance on IoT
          strategy, device selection, and data security.
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
    title: <h3 className=''>4. How long does it take to implement an IoT Dashboard? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          The timeline for implementing an IoT Dashboard depends on various factors, such as the complexity of your IoT
          ecosystem, the scope of the project, and the specific requirements. IR Solutions works closely with clients to
          set realistic expectations and deliver results within agreed-upon timelines.
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
    title: <h3 className=''>5. How can I get started with IR Solutions&apos; IoT Dashboard & Analytics services? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          To get started with IR Solutions&apos; IoT Dashboard & Analytics services, simply contact us to schedule a
          consultation. We&apos;ll discuss your specific needs, goals, and challenges, and develop a tailored plan to
          address them. We&apos;ll also provide a detailed proposal outlining the scope of work, timelines, and pricing.
          Once approved, we&apos;ll begin the project, keeping you informed and involved every step of the way.
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
