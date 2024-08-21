import React from 'react';

import Accordion from './Accordion';

interface FAQProps {
  faqData: { title: string; answer: React.ReactNode }[];
}

const FAQ: React.FC<FAQProps> = ({ faqData }) => {
  return (
    <div className='bg-cover bg-center w-9/12 mx-auto'>
      {faqData.map((item, index) => (
        <Accordion key={index} title={item.title} answer={item.answer} />
      ))}
    </div>
  );
};

export default FAQ;
