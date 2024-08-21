import React from 'react';

interface FAQItem {
  title: JSX.Element; // Assuming title is a JSX element
  answer: JSX.Element; // Assuming answer is a JSX element
}

export const ConnectToIoTDevFaqData: FAQItem[] = [
  {
    title: <h3 className=''>1. What is IoT Development?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          IoT Development is the process of creating and maintaining Internet of Things &#40;IoT&#41; solutions that
          connect physical devices to the Internet and enable them to communicate with each other and with users. It
          involves tasks such as device design, sensor integration, data collection and analysis, and cloud platform
          development.
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
    title: <h3 className=''>2. What IoT Development services do you offer? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          We offer a wide range of IoT Development services, including IoT consulting, device design and prototyping,
          sensor integration, data analytics, cloud platform development, and more. Our team of experienced developers
          can help you create innovative, scalable, and secure IoT solutions that meet your business needs.
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
    title: <h3 className=''>3. What technologies do you use in IoT Development?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          We use a variety of technologies in IoT Development, including hardware components such as sensors and
          microcontrollers, communication protocols such as MQTT and CoAP, and cloud platforms such as AWS IoT, Azure
          IoT, and Google Cloud IoT Core. Our team of experienced developers stays up-to-date with the latest trends and
          technologies in IoT to ensure that we deliver high-quality, cutting-edge solutions to our clients.
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
    title: <h3 className=''>4. How do you ensure the security of IoT solutions? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          We take the security of IoT solutions very seriously. Our team follows best practices and industry standards
          to ensure that IoT solutions are secure and protected against common threats such as hacking, data breaches,
          and unauthorized access. We use encryption, secure communication protocols, and other security measures to
          protect sensitive information and ensure the integrity of IoT data.
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
    title: <h3 className=''>5. How do you ensure the quality of your IoT Development services? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          Our IoT Development projects undergo a rigorous quality assurance process to ensure they meet the highest
          standards. Our experienced developers adhere to industry best practices and standards, consistently delivering
          high-quality work that either meets or exceeds client expectations.
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
