import React from 'react';

interface FAQItem {
  title: JSX.Element; // Assuming title is a JSX element
  answer: JSX.Element; // Assuming answer is a JSX element
}

export const MetaGameDevServFaqData: FAQItem[] = [
  {
    title: <h3 className=''>1. What&apos;s the buzz about Metaverse development? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          WImagine a universe where virtual worlds intersect with our daily lives. Metaverse development makes this
          possible, allowing online interaction, virtual collaboration, and even immersive experiences like attending
          meetings or buying NFTs.
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
    title: <h3 className=''>2. Why should I invest in metaverse technology?</h3>,
    answer: (
      <div className=''>
        <p className=''></p>
        <p className='mt-4'>
          <span className='text-gray-700'>Future-proof your business:</span> Stay ahead of the curve by tapping into the
          Metaverse&apos;s massive potential. Experts predict a $1.6 trillion market by 2030, making it a strategic
          investment opportunity.
          {/*
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
           */}
        </p>
      </div>
    ),
  },

  {
    title: <h3 className=''>3. How do I move my business into the metaverse?</h3>,
    answer: (
      <div className=''>
        <p className=''>To move your business into the metaverse. We guide you through the process:</p>
        <p className='mt-1'>Amplify your company&apos;s digital footprint</p>
        <p className='mt-1'>Tailor your products or services to meet the needs of your desired customers</p>
        <p className='mt-1'>Create applications for Augmented Reality &#40;AR&#41; and Virtual Reality &#40;VR&#41;</p>
        <p className='mt-1'>Prioritize the creation of more engaging experiences for consumers</p>
        <p className='mt-1'>Acquaint yourself with the concepts of blockchain technology and digital currencies.</p>
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
    title: <h3 className=''>4. How much does metaverse development cost? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          The cost of a metaverse Game development project is influenced by factors such as its intricacy, the amount of
          detail required, and the level of realism. For an accurate estimate of the cost of developing a metaverse
          application, please reach out to our specialists.
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
