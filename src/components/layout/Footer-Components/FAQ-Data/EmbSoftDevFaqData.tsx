import React from 'react';

interface FAQItem {
  title: JSX.Element; // Assuming title is a JSX element
  answer: JSX.Element; // Assuming answer is a JSX element
}

export const EmbSoftDevFaqData: FAQItem[] = [
  {
    title: <h3 className=''>1. What is Embedded Software, and how does it differ from regular software?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          Embedded Software is a specialized type of software designed to run on embedded systems, which are dedicated
          computing devices with specific functions. Unlike regular software, which runs on general-purpose computers,
          embedded software is typically optimized for performance, efficiency, and reliability.
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
    title: <h3 className=''>2. How does IR Solutions approach Embedded Software development? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          IR Solutions&apos; Embedded Software development process involves designing, coding, testing, and integrating
          software components into embedded systems. We use industry-standard tools, methodologies, and best practices
          to ensure high-quality, reliable, and efficient software solutions.
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
    title: <h3 className=''>3. What types of Embedded Software development services does IR Solutions offer?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          IR Solutions offers a range of Embedded Software development services, including firmware development, device
          driver development, real-time operating system &#40;RTOS&#41; development, and embedded Linux development. We
          also provide custom solutions tailored to your specific needs and goals.
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
    title: <h3 className=''>4. How long does it take to develop Embedded Software? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          The timeline for developing Embedded Software depends on various factors, such as the complexity of the
          software, the scope of the project, and the specific requirements. IR Solutions works closely with clients to
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
    title: (
      <h3 className=''>5. How can I get started with IR Solutions&apos; Embedded Software development services? </h3>
    ),
    answer: (
      <div className=''>
        <p className=''>
          To get started with IR Solutions&apos; Embedded Software development services, simply contact us to schedule a
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
