import React from 'react';

interface FAQItem {
  title: JSX.Element; // Assuming title is a JSX element
  answer: JSX.Element; // Assuming answer is a JSX element
}

export const SentimentalAnaFaqData: FAQItem[] = [
  {
    title: <h3 className=''>1. What is Sentiment Analysis and how can it benefit my business?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          Sentiment Analysis is a branch of Natural Language Processing &#40;NLP&#41; that uses machine learning
          algorithms to analyze and interpret the emotions, opinions, and attitudes expressed in text data. It can help
          businesses gain valuable insights into customer sentiment, identify trends and patterns, and make data-driven
          decisions to improve customer satisfaction and loyalty.
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
    title: <h3 className=''>2. How does IR Solutions&apos; Sentiment Analysis service work? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          IR Solutions&apos; Sentiment Analysis service uses advanced NLP techniques and machine learning algorithms to
          analyze text data from various sources, such as customer reviews, social media, and surveys. Our models can
          detect sentiment polarity &#40;positive, negative, neutral&#41;, identify key themes and topics, and provide
          actionable insights.
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
    title: <h3 className=''>3. What types of Sentiment Analysis services does IR Solutions offer?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          IR Solutions offers a range of Sentiment Analysis services, including sentiment classification, aspect-based
          sentiment analysis, emotion detection, and opinion mining. We also provide custom solutions tailored to your
          specific needs and goals.
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
    title: <h3 className=''>4. How accurate is IR Solutions&apos; Sentiment Analysis service? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          IR Solutions&apos; Sentiment Analysis service is highly accurate and reliable, thanks to our team of
          experienced data scientists and linguists. We use state-of-the-art machine learning models and constantly
          update our algorithms to improve performance and accuracy.
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
    title: <h3 className=''>5. How can I get started with IR Solutions&apos; Sentiment Analysis services? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          To get started with IR Solutions&apos; Sentiment Analysis services, simply contact us to schedule a
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
