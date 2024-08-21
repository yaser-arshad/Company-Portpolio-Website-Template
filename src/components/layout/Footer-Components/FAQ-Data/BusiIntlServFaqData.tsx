import React from 'react';

interface FAQItem {
  title: JSX.Element; // Assuming title is a JSX element
  answer: JSX.Element; // Assuming answer is a JSX element
}

export const BusiIntlServFaqData: FAQItem[] = [
  {
    title: <h3 className=''>1. What is Business Intelligence &#40;BI&#41;?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          Business Intelligence &#40;BI&#41; is a technology-driven process for analyzing data and presenting actionable
          information to help executives, managers, and other corporate end-users make informed business decisions. BI
          encompasses a wide range of tools, applications, and methodologies that enable organizations to collect data
          from internal and external sources, prepare it for analysis, develop and run queries against the data, and
          create reports, dashboards, and data visualizations to make the analytical results available to corporate
          decision-makers, as well as operational workers.
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
    title: <h3 className=''>2. What Business Intelligence services do you offer? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          We offer a comprehensive suite of Business Intelligence services, including data warehousing, data mining,
          data visualization, reporting, and analytics. Our team of experienced BI professionals can help you design,
          develop, and implement a BI solution that meets your specific business needs, whether you are just starting
          your BI journey or looking to enhance your existing BI capabilities.
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
    title: <h3 className=''>3. What technologies do you use in Business Intelligence?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          We use a variety of technologies in Business Intelligence, including ETL &#40;extract, transform, load&#41;
          tools like Informatica and Talend, data warehousing tools like Amazon Redshift and Snowflake, data
          visualization tools like Tableau and Power BI, and analytics tools like Python, R, and SAS. Our team of
          experienced BI professionals stays up-to-date with the latest trends and technologies in Business Intelligence
          to ensure that we deliver high-quality, cutting-edge solutions to our clients.
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
    title: (
      <h3 className=''>4. How do you ensure the accuracy and reliability of your Business Intelligence solutions? </h3>
    ),
    answer: (
      <div className=''>
        <p className=''>
          We have a rigorous testing and validation process in place to ensure that all our Business Intelligence
          solutions meet the highest standards of accuracy and reliability. Our team of experienced BI professionals
          follows best practices and industry standards to ensure that our solutions are robust, accurate, and reliable.
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
    title: <h3 className=''>5. How do I outsource my Business Intelligence Project? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          Outsourcing your business intelligence &#40;BI&#41; project involves finding a reliable vendor to handle the
          technical aspects of data analysis, visualization, and reporting. First, define your project scope and
          requirements clearly, including the data sources, analytics tools, and specific insights you need. Then,
          research potential vendors, considering factors like experience, expertise, cost, and cultural fit. Once
          you&apos;ve chosen a vendor, establish a detailed contract that outlines deliverables, timelines, and
          communication protocols. Regularly review progress, provide feedback, and maintain open communication to
          ensure the project stays on track and meets your expectations. Finally, evaluate the project&apos;s success
          based on predefined metrics and make any necessary adjustments for future projects.
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
