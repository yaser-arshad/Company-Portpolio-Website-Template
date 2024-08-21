import React from 'react';

interface FAQItem {
  title: JSX.Element; // Assuming title is a JSX element
  answer: JSX.Element; // Assuming answer is a JSX element
}

export const TextToSpeechDevFaqData: FAQItem[] = [
  {
    title: <h3 className=''>1. **What is Text-to-Speech &#40;TTS&#41; Development?**</h3>,
    answer: (
      <div className=''>
        <p className=''>
          Text-to-Speech &#40;TTS&#41; Development is the process of creating and implementing solutions that convert
          written text into spoken audio. These solutions can be used in various applications, including virtual
          assistants, accessibility tools, and more, to provide a natural and human-like voice output.
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
    title: <h3 className=''>2. **What Text-to-Speech Development services do you offer?** </h3>,
    answer: (
      <div className=''>
        <p className=''>
          We offer a wide range of Text-to-Speech Development services, including custom TTS engine development,
          integration of existing TTS engines, voice cloning, and more. Our team of experienced developers can help you
          create accurate, efficient, and high-quality TTS solutions that meet your needs.
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
    title: <h3 className=''>3. What technologies do you use in Text-to-Speech Development?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          We use a variety of technologies in Text-to-Speech Development, including deep learning frameworks like
          TensorFlow, Keras, and PyTorch, as well as natural language processing &#40;NLP&#41; libraries like NLTK and
          spaCy. Our team of experienced developers stays up-to-date with the latest trends and technologies in
          Text-to-Speech Development to ensure that we deliver high-quality, cutting-edge solutions to our clients.
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
    title: <h3 className=''>4. How do you ensure the quality of your Text-to-Speech solutions? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          We have a rigorous testing and validation process in place to ensure that all our Text-to-Speech solutions
          meet the highest standards of quality. Our team of experienced developers follows best practices and industry
          standards to ensure that our solutions are accurate, natural-sounding, and reliable.
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
