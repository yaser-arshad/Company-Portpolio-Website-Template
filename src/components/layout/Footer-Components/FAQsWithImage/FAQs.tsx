import React from 'react';

import FAQImageBackgroundPage from './FAQImageBackgroundPage';

interface FAQsProps {
  pageTitle: string;
  pageSubtitle: string;
  faqData: { title: any; answer: any }[];
}

const FAQs: React.FC<FAQsProps> = ({ pageTitle, faqData }) => {
  var pageSubtitle = 'Get answers to the most common questions.';
  return (
    <>
      <FAQImageBackgroundPage pageTitle={pageTitle} pageSubtitle={pageSubtitle} faqData={faqData} />
    </>
  );
};

export default FAQs;
