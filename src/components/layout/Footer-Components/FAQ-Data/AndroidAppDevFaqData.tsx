import React from 'react';

interface FAQItem {
  title: JSX.Element; // Assuming title is a JSX element
  answer: JSX.Element; // Assuming answer is a JSX element
}

export const AndroidAppDevFaqData: FAQItem[] = [
  {
    title: <h3 className=''>1. What is Android Development?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          Android Development is the process of creating and maintaining applications for Google&apos;s Android
          operating system, which powers a wide range of devices, including smartphones, tablets, and smartwatches. It
          involves tasks such as designing the user interface, writing code, testing, and deploying the app to the
          Google Play Store.
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
    title: <h3 className=''>2. What Android Development services do you offer? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          We offer a wide range of Android Development services, including smartphone app development, tablet app
          development, Android Wear app development, and more. Our team of experienced developers can help you create
          innovative, user-friendly, and high-quality Android apps that meet your business needs.
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
    title: <h3 className=''>3. What technologies do you use in Android Development?</h3>,
    answer: (
      <div className=''>
        <p className=''>
          We use a variety of technologies in Android Development, including the Java and Kotlin programming languages,
          the Android Studio integrated development environment &#40;IDE&#41;, and the Android SDK. Our team of
          experienced developers stays up-to-date with the latest trends and technologies in Android to ensure that we
          deliver high-quality, cutting-edge solutions to our clients.
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
    title: <h3 className=''>4. How do you ensure the quality of your Android Development services? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          We have a rigorous quality assurance process in place to ensure that all our Android Development projects meet
          the highest standards of quality. Our team of experienced developers follows best practices and industry
          standards to deliver high-quality work that meets or exceeds client expectations.
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
    title: <h3 className=''>5. How do I outsource my Android Development Project? </h3>,
    answer: (
      <div className=''>
        <p className=''>
          Starting your Android Development journey is simple. Just contact our team and share your app development
          requirements. We&apos;ll collaborate with you to create a tailored solution that fits your budget and business
          objectives. Our skilled developers will support you throughout the process, from conceptualizing the user
          interface to publishing the app on the Google Play Store. Whether you&apos;re looking for an app for
          smartphones, tablets, or wearable devices, our team has the proficiency to transform your concepts into
          reality.
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
