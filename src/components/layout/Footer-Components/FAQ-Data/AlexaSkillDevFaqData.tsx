import React from 'react';

interface FAQItem {
  title: JSX.Element; // Assuming title is a JSX element
  answer: JSX.Element; // Assuming answer is a JSX element
}

export const AlexaSkillDevFaqData: FAQItem[] = [
  {
    title: <h3 className=''>1. What is an Alexa Skill, and how can it benefit my business?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          An Alexa Skill is a voice-activated app that enables users to interact with Amazon&apos;s virtual assistant,
          Alexa, using natural language commands. This can enhance customer engagement, increase brand visibility, and
          provide a convenient and innovative way for users to access your products or services.
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
    title: <h3 className=''>2. How does IR Solutions&apos; Alexa Skill development process work? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          IR Solutions&apos; Alexa Skill development process involves designing, building, and testing a custom Alexa
          Skill tailored to your specific needs and goals. We use the latest voice technology, machine learning
          algorithms, and best practices to create a seamless and engaging user experience.
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
    title: <h3 className=''>3. What types of Alexa Skill development services does IR Solutions offer?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          IR Solutions offers a range of Alexa Skill development services, including custom skill development, skill
          optimization, and skill maintenance. We also provide consultation and guidance on voice strategy, user
          experience design, and voice user interface &#40;VUI&#41; design.
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
    title: <h3 className=''>4. How long does it take to develop an Alexa Skill? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          The timeline for developing an Alexa Skill depends on various factors, such as the complexity of the skill,
          the scope of the project, and the specific requirements. IR Solutions works closely with clients to set
          realistic expectations and deliver results within agreed-upon timelines.
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
    title: <h3 className=''>5. How can I get started with IR Solutions&apos; Alexa Skill development services? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          To get started with IR Solutions&apos; Alexa Skill development services, simply contact us to schedule a
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
