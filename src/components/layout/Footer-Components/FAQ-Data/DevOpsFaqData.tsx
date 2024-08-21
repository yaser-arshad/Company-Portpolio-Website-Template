import React from 'react';

interface FAQItem {
  title: JSX.Element; // Assuming title is a JSX element
  answer: JSX.Element; // Assuming answer is a JSX element
}

export const DevOpsFaqData: FAQItem[] = [
  {
    title: <h3 className=''>1. What is DevOps?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          DevOps is a set of practices that combines software development &#40;Dev&#41; and IT operations &#40;Ops&#41;
          to shorten the systems development life cycle and provide continuous delivery with high software quality.
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
    title: <h3 className=''>2. What DevOps services do you offer? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          We offer a wide range of DevOps services, including continuous integration and continuous deployment
          &#40;CI/CD&#41;, infrastructure automation, containerization &#40;using tools like Docker and Kubernetes&#41;,
          monitoring and logging, and more.
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
    title: <h3 className=''>3. What technologies do you use in DevOps?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          We use a variety of technologies in DevOps, including Git, Jenkins, Ansible, Terraform, Docker, Kubernetes,
          Prometheus, Grafana, and more. Our team of experienced DevOps engineers stays up-to-date with the latest
          trends and technologies in DevOps to ensure that we deliver high-quality, cutting-edge solutions to our
          clients.
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
    title: <h3 className=''>4. How do you ensure the quality of your DevOps services? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          We have a rigorous quality assurance process in place to ensure that all our DevOps projects meet the highest
          standards of quality. Our team of experienced DevOps engineers follows best practices and industry standards
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
    title: <h3 className=''>5. How do I outsource my DevOps Project? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          Outsourcing your DevOps Project to IR Solutions is a straightforward process. Simply reach out to our team and
          discuss your project requirements. We&apos;ll work with you to understand your goals, budget, and timeline.
          Our experienced DevOps engineers will then create a detailed project plan, including the scope of work,
          milestones, and deliverables. Throughout the project, you&apos;ll have access to regular updates and progress
          reports. Once the project is completed, we&apos;ll assist you with deploying the DevOps solution to your
          infrastructure. Our goal is to provide you with a seamless and hassle-free experience, ensuring that your
          DevOps Project meets your expectations and delivers value to your organization.
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
