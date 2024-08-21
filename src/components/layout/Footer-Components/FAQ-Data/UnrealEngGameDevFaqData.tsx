import React from 'react';

interface FAQItem {
  title: JSX.Element; // Assuming title is a JSX element
  answer: JSX.Element; // Assuming answer is a JSX element
}

export const UnrealEngGameDevFaqData: FAQItem[] = [
  {
    title: <h3 className=''>1. What is Unreal Engine?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          Unreal Engine, developed by Epic Games, is a game engine utilized for the creation of video games,
          architectural visualizations, and various other interactive experiences. It offers an extensive array of tools
          and features that aid game developers in crafting top-tier, immersive games
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
    title: <h3 className=''>2. How can I hire Unreal developers from IR Solutions?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          Hiring Unreal developers from IR Solutions is a straightforward process. You can reach out to us through our
          website or contact us directly via email or phone. We will discuss your project requirements and provide you
          with profiles of our developers who best fit your needs. Once you select the Unreal Game developers you want
          to work with, we can proceed with the project agreement and kick-off.
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
    title: <h3 className=''>3. Why should I outsource Unreal game development to IR Solutions?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          Outsourcing Unreal game development to IR Solutions offers a multitude of benefits. Our team, comprised of
          skilled Unreal developers, brings their expertise to the table, creating high-quality games and interactive
          experiences. This outsourcing model is cost-effective, providing access to top talent at a fraction of the
          cost of hiring in-house developers. It&apos;s also time-saving, as our team can hit the ground running,
          eliminating the time you&apos;d spend on recruitment and training. We adhere to high standards of quality
          assurance, ensuring all unreal game projects undergo rigorous testing before delivery. Additionally, we offer
          ongoing support and maintenance services post-development to ensure your game continues to perform optimally.
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
    title: <h3 className=''>4. How much does Unreal Engine Game Development cost? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          The cost of Unreal Engine game development is influenced by various factors such as the complexity of the
          game, the level of detail needed, and the degree of realism desired. For a precise cost estimate for
          developing a game using Unreal Engine, it&apos;s recommended to consult with our Unreal Engine development
          experts.
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
