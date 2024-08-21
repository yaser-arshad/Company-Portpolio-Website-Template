import React from 'react';

interface FAQItem {
  title: JSX.Element; // Assuming title is a JSX element
  answer: JSX.Element; // Assuming answer is a JSX element
}

export const HireWebDevFaqData: FAQItem[] = [
  {
    title: <h3 className=''>1. What is Web Development? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          Web Development is the process of building and maintaining websites and web applications. It includes tasks
          such as web design, web content development, client-side/server-side scripting, and network security
          configuration.
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
    title: <h3 className=''>2. What services do you offer in Web Development? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          We offer a wide range of services in Web Development, including website design and development, custom web
          application development, e-commerce website development, content management system (CMS) development, and
          website maintenance and support.
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
    title: <h3 className=''>3. What technologies do you use in Web Development? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          We use a variety of technologies in Web Development, including HTML, CSS, JavaScript, PHP, Python, Ruby on
          Rails, ASP.NET, Java, MySQL, MongoDB, and more. Our team of experienced developers stays up-to-date with the
          latest trends and technologies in Web Development to ensure that we deliver high-quality, cutting-edge
          solutions to our clients.
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
    title: <h3 className=''>4. How do you ensure the quality of your Web Development services? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          We have a rigorous quality assurance process in place to ensure that all our Web Development projects meet the
          highest standards of quality. Our team of experienced developers follows best practices and industry standards
          to deliver high-quality work that meets or exceeds client expectations.
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
    title: <h3 className=''>5. What is your approach to Web Development projects? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          Our approach to Web Development projects is collaborative and client-focused. We work closely with our clients
          to understand their needs and goals and develop a comprehensive project plan that outlines all the necessary
          tasks and milestones. We provide regular updates and communicate openly and transparently throughout the
          project to ensure our clients are satisfied with the progress and outcome.
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
