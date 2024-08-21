import React from 'react';

interface FAQItem {
  title: JSX.Element; // Assuming title is a JSX element
  answer: JSX.Element; // Assuming answer is a JSX element
}

export const DataForecastServFaqData: FAQItem[] = [
  {
    // eslint-disable-next-line prettier/prettier
    title: (
      <h3 className=''>1. What is Data Forecasting?</h3>
    ),
    answer: (
      <div className=''>
        <p className=''>
          Data forecasting is the process of using historical data to make predictions about future trends or events. It
          involves analyzing patterns and trends in data to identify potential outcomes and make informed decisions.
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
    title: <h3 className=''>2. What are the benefits of Data Forecasting? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          Data forecasting can provide businesses with valuable insights into market trends, customer behavior, and
          demand for products or services. This information can help businesses make more informed decisions and improve
          their overall performance.
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
    title: <h3 className=''>3. How does Data Forecasting work?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          Data forecasting uses statistical models and algorithms to analyze historical data and make predictions about
          future trends. These models take into account various factors, such as seasonality, trends, and outliers, to
          generate accurate forecasts.
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
    title: <h3 className=''>4. What types of Data Forecasting services do you offer? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          We offer a range of data forecasting services, including time series analysis, regression analysis, and
          machine learning-based forecasting. Our team of experts can help you choose the right approach for your
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
    title: <h3 className=''>5. How do I outsource my Data Forecasting Project? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          Outsourcing your Data Forecasting Project can be a strategic decision to leverage external expertise and
          resources while focusing on your core business. Start by defining your project requirements and objectives
          clearly. This includes the type of forecasting you need, the data you have, and any specific methodologies or
          technologies you prefer. Then, research potential outsourcing partners, considering their experience, track
          record, and relevant skills. Engage with them to understand their approach, timelines, and pricing. Once
          you&apos;ve selected a partner, ensure clear communication and regular check-ins to monitor progress. Be open
          to feedback and adjustments along the way. Finally, ensure proper documentation and data security measures are
          in place to protect sensitive information.
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
