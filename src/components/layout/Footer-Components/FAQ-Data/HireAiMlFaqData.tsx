import React from 'react';

interface FAQItem {
  title: JSX.Element; // Assuming title is a JSX element
  answer: JSX.Element; // Assuming answer is a JSX element
}

export const HireAiMlFaqData: FAQItem[] = [
  {
    title: <h3 className=''>1. What are Artificial Intelligence &#40;AI&#41; and Machine Learning &#40;ML&#41;? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          Artificial Intelligence &#40;AI&#41; is the emulation of human intelligence in machines, programmed to think
          and behave similarly to humans. Machine Learning &#40;ML&#41;, a branch of AI, concentrates on crafting
          algorithms that allow computers to learn from data, refining their performance over time without direct
          programming.
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
    title: <h3 className=''>2. What AI & ML services do you offer? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          We offer a wide range of AI & ML services, including AI-powered chatbots, natural language processing
          &#40;NLP&#41;, computer vision, predictive analytics, recommendation systems, and more. Our team of
          experienced data scientists and machine learning engineers can help you harness the power of AI & ML to drive
          business growth and innovation.
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
    title: <h3 className=''>3. How can AI & ML benefit my business? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          AI & ML can benefit your business in several ways, including improving customer service through AI-powered
          chatbots, automating repetitive tasks, optimizing operations through predictive analytics, personalizing
          customer experiences through recommendation systems, and more. Our team can work with you to identify areas
          where AI & ML can add value to your business and develop customized solutions to meet your needs.
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
    title: <h3 className=''>4. What technologies do you use in AI & ML? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          We use various technologies in AI & ML, including Python, TensorFlow, PyTorch, Scikit-learn, Keras, OpenCV,
          and more. Our team of experienced data scientists and machine learning engineers stays up-to-date with the
          latest trends and technologies in AI & ML to ensure that we deliver high-quality, cutting-edge solutions to
          our clients.
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
    title: <h3 className=''>5. How do you ensure the quality of your AI & ML services? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          We have a rigorous quality assurance process in place to ensure that all our AI & ML projects meet the highest
          standards of quality. Our team of experienced data scientists and machine learning engineers follows best
          practices and industry standards to deliver high-quality work that meets or exceeds client expectations.
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
