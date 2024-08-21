import React from 'react';

interface FAQItem {
  title: JSX.Element; // Assuming title is a JSX element
  answer: JSX.Element; // Assuming answer is a JSX element
}

export const ARGameDevFaqData: FAQItem[] = [
  {
    title: <h3 className=''>1. What is AR game development? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          AR game development involves creating games that utilize Augmented Reality &#40;AR&#41; technology. This can
          include developing games for various AR platforms, such as ARKit or ARCore.
        </p>
        {/*
        <p className='mt-4'>
          <span className='text-gray-700'>Pre-built teams:</span> Choose from our pool of experienced professionals
          tailored to your project needs.
        </p>
        <p className='mt-2'>
          <span className='text-gray-700'>Dedicated team setup</span> Discuss your specific requirements and we&apos;ll
          handpick and assemble a custom team for you.
        </p>
         */}
      </div>
    ),
  },

  {
    title: <h3 className=''>2. Could you assist me with designing a AR game?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          Absolutely! Our team includes experienced game designers who can work with you to develop the concept,
          mechanics, and overall design of your AR game. We will work closely with you to ensure that your vision for
          the game is realized and that it&apos;s optimized for AR.
        </p>
        {/*<p className='mt-4'>
          <span className='text-gray-700'>Access to expertise:</span> Tap into a diverse pool of talent with specialized
          skills you might not have in-house.
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
        </p>
    */}
      </div>
    ),
  },

  {
    title: <h3 className=''>3. What is the AR game Development Cost?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          The cost of developing an AR game is subject to variation based on the project&apos;s scope and complexity. We
          provide personalized quotes for each project, considering the specific needs and requirements of our clients.
        </p>
        {/*
        <p className='mt-2'>
          However, we offer flexible pricing models &#40;fixed cost, hourly, etc.&#41; and transparent estimates after
          discussing your project details.
        </p>
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
    title: <h3 className=''>4. How much time is needed for AR game development? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          The development timeline for AR games varies, contingent on the project&apos;s complexity and scope. While a
          simple AR game might take several months, a more intricate one could require a year or more. We collaborate
          closely with our clients to establish achievable timelines and keep them informed throughout the development
          journey.
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
