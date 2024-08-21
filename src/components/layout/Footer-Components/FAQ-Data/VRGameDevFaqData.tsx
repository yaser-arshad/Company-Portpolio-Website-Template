import React from 'react';

interface FAQItem {
  title: JSX.Element; // Assuming title is a JSX element
  answer: JSX.Element; // Assuming answer is a JSX element
}

export const VRGameDevFaqData: FAQItem[] = [
  {
    title: <h3 className=''>1. What is VR game development?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          VR game development is the process of creating video games that are compatible with virtual reality
          &#40;VR&#41; technology. This could involve creating games for a variety of VR platforms, such as the Oculus
          Rift, HTC Vive, or PlayStation VR.
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
    title: <h3 className=''>2. Could you assist me with designing a VR game?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          Certainly! Our highly skilled team of game designers is dedicated to bringing your VR game concept to life.
          Collaborating closely with you, we&apos;ll refine and adapt your vision to ensure it&apos;s optimized for the
          immersive VR experience. Together, we&apos;ll craft the mechanics, design, and overall concept, ensuring that
          your game stands out in the world of VR gaming.
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
    title: <h3 className=''>3. How much does VR game development cost?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          The cost of developing a VR game can greatly vary as it depends on the project&apos;s scope and complexity. We
          offer tailored quotes for each project, taking into account our clients&apos; specific needs and requirements.
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
    title: <h3 className=''>4. How long does it take to develop a VR game? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          The development timeline for a VR game can differ based on the project&apos;s scope and complexity. A basic VR
          game might take a few months to develop, whereas a more intricate game could take over a year. We work closely
          with our clients to set realistic timelines and keep them updated throughout the development process.
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
