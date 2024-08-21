import React from 'react';

interface FAQItem {
  title: JSX.Element; // Assuming title is a JSX element
  answer: JSX.Element; // Assuming answer is a JSX element
}

export const ObjRecogDevFaqData: FAQItem[] = [
  {
    title: <h3 className=''>1. What is Object Recognition Development?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          Object Recognition Development refers to the process of creating and implementing computer vision solutions
          that can identify and classify objects in images or videos. These solutions use machine learning algorithms
          and deep learning models to analyze visual data and extract meaningful information.
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
    title: <h3 className=''>2. What Object Recognition Development services do you offer? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          We offer a wide range of Object Recognition Development services, including custom object detection, object
          tracking, image classification, and more. Our team of experienced developers can help you create accurate,
          efficient, and reliable object recognition solutions that meet your needs.
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
    title: <h3 className=''>3. What technologies do you use in Object Recognition Development?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          We use a variety of technologies in Object Recognition Development, including deep learning frameworks like
          TensorFlow, Keras, and PyTorch, as well as computer vision libraries like OpenCV. Our team of experienced
          developers stays up-to-date with the latest trends and technologies in Object Recognition Development to
          ensure that we deliver high-quality, cutting-edge solutions to our clients.
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
      <h3 className=''>4. How do you ensure the accuracy and reliability of your Object Recognition solutions? </h3>
    ),
    answer: (
      <div className=''>
        <p className=''>
          We have a rigorous testing and validation process in place to ensure that all our Object Recognition solutions
          meet the highest standards of accuracy and reliability. Our team of experienced developers follows best
          practices and industry standards to ensure that our solutions are robust, accurate, and reliable.
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
    title: <h3 className=''>5. How do I outsource my Object Recognition Development Project? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          Outsourcing your Object Recognition Development Project to IR Solutions is a straightforward process. Simply
          reach out to our team and discuss your project requirements. We&apos;ll work with you to understand your
          goals, budget, and timeline. Our experienced developers will then create a detailed project plan, including
          the scope of work, milestones, and deliverables. Throughout the project, you&apos;ll have access to regular
          updates and progress reports. Once the project is completed, we&apos;ll assist you with deploying the Object
          Recognition solution. Our goal is to provide you with a seamless and hassle-free experience, ensuring that
          your Object Recognition Development Project meets your expectations and delivers value to your organization.
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
