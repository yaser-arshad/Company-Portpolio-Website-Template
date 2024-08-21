import React from 'react';

import Link from 'next/link';

interface FAQItem {
  title: JSX.Element; // Assuming title is a JSX element
  answer: JSX.Element; // Assuming answer is a JSX element
}

export const Unity3dGameDevFaqData: FAQItem[] = [
  {
    title: <h3 className=''>1. What is the cost of hiring Unity 3D Game Development?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          The cost varies depending on the complexity of the project, the developer&apos;s expertise, and the specific
          services required.
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
    title: <h3 className=''>2. Can I hire a Unity 3D Game Developer on an hourly basis?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          Yes, you can hire Unity 3D Game Developers on an hourly basis, with rates varying based on their experience
          and the specific tasks involved.
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
    title: <h3 className=''>3. Can I check the technical expertise of a Unity 3D Game Developer?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          Yes, you can review their portfolio for experience and proficiency in Unity 3D, assess their coding skills,
          examine code samples, and discuss the tools and platforms they use for game development.
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
    title: <h3 className=''>4. Why should I hire a Unity 3D Game Developer?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          You should hire a Unity 3D Game Developer to create high-quality, immersive, and engaging games. Their
          optimized development skills result in successful and memorable gaming experiences for your audience.
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
    title: <h3 className=''>5. How do I hire a Unity 3D Game Developer?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          You can simply
          <Link href='/hire-top-talent' className='text-primary mx-1'>
            contact us
          </Link>
          and share your project details. Evaluate their understanding of your game concept, and their technical
          capabilities.
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
];
