import React from 'react';

import FAQ from './FAQ';

interface FAQSimpleBackgroundPageProps {
  faqData: { title: string; answer: React.ReactNode }[]; // Define the prop type for faqData
}
const FAQSimpleBackgroundPage: React.FC<FAQSimpleBackgroundPageProps> = ({ faqData }) => {
  return (
    <div className='bg-gray-200'>
      <div className='container mx-auto px-4 py-8'>
        <FAQ faqData={faqData} />
      </div>
    </div>
  );
};

export default FAQSimpleBackgroundPage;
