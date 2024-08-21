import React from 'react';

interface FAQItem {
  title: JSX.Element; // Assuming title is a JSX element
  answer: JSX.Element; // Assuming answer is a JSX element
}

export const IotHardProtoFaqData: FAQItem[] = [
  {
    title: <h3 className=''>1. What is IoT Hardware Prototyping, and how can it benefit my business?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          IoT Hardware Prototyping is the process of creating a physical prototype of an IoT device or system to test
          its functionality, performance, and user experience. This can help businesses validate their ideas, identify
          potential issues, and refine their designs before mass production, ultimately saving time and resources.
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
    title: <h3 className=''>2. How does IR Solutions&apos; IoT Hardware Prototyping process work? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          IR Solutions&apos; IoT Hardware Prototyping process involves designing, building, and testing a custom IoT
          device or system tailored to your specific needs and goals. We use the latest hardware components, sensors,
          and wireless technologies to create reliable and efficient prototypes.
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
    title: <h3 className=''>3. What types of IoT Hardware Prototyping services does IR Solutions offer?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          IR Solutions offers a range of IoT Hardware Prototyping services, including concept development, hardware
          design, firmware development, and testing. We also provide consultation and guidance on hardware selection,
          component sourcing, and manufacturing.
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
    title: <h3 className=''>4. How long does it take to develop an IoT Hardware Prototype? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          The timeline for developing an IoT Hardware Prototype depends on various factors, such as the complexity of
          the prototype, the scope of the project, and the specific requirements. IR Solutions works closely with
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
    title: <h3 className=''>5. How can I get started with IR Solutions&apos; IoT Hardware Prototyping services? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          To get started with IR Solutions&apos; IoT Hardware Prototyping services, simply contact us to schedule a
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
