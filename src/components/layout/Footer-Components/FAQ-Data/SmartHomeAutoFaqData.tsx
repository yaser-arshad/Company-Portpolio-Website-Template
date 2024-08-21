import React from 'react';

interface FAQItem {
  title: JSX.Element; // Assuming title is a JSX element
  answer: JSX.Element; // Assuming answer is a JSX element
}

export const SmartHomeAutoFaqData: FAQItem[] = [
  {
    title: <h3 className=''>1. What is Smart Home - Home Automation, and how can it benefit my household?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          Smart Home - Home Automation refers to the integration of technology and devices to automate and control
          various aspects of your home, such as lighting, heating, security, and entertainment systems. This can enhance
          convenience, comfort, and energy efficiency, while also providing greater control and peace of mind.
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
    title: <h3 className=''>2. How does IR Solutions&apos; Smart Home - Home Automation service work? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          IR Solutions&apos; Smart Home - Home Automation service involves designing, installing, and configuring a
          custom smart home system tailored to your specific needs and preferences. We use the latest smart home
          technology, IoT devices, and automation platforms to create a seamless and intuitive user experience.
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
    title: <h3 className=''>3. What types of Smart Home - Home Automation services does IR Solutions offer?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          IR Solutions offers a range of Smart Home - Home Automation services, including smart lighting, smart
          thermostats, smart security systems, smart entertainment systems, and whole-home automation solutions. We also
          provide consultation and guidance on smart home design, device selection, and system integration.
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
    title: <h3 className=''>4. How long does it take to install a Smart Home - Home Automation system? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          The timeline for installing a Smart Home - Home Automation system depends on various factors, such as the
          complexity of the system, the size of your home, and the specific requirements. IR Solutions works closely
          with clients to set realistic expectations and deliver results within agreed-upon timelines.
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
      <h3 className=''>5. How can I get started with IR Solutions&apos; Smart Home - Home Automation services? </h3>
    ),
    answer: (
      <div className=''>
        <p className=''>
          To get started with IR Solutions&apos; Smart Home - Home Automation services, simply contact us to schedule a
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
