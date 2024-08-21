import React from 'react';

import ScheduleMeeting from '../ScheduleMeeting';
import FAQ from './FAQ';

interface FAQImageBackgroundPageProps {
  pageTitle: string;
  pageSubtitle: string;
  faqData: { title: string; answer: React.ReactNode }[];
}

const FAQImageBackgroundPage: React.FC<FAQImageBackgroundPageProps> = ({ pageTitle, pageSubtitle, faqData }) => {
  return (
    <div className='relative bg-cover bg-center ' style={{ backgroundImage: `url('/images/FAQ-img.svg')` }}>
      <div className='md:container mx-auto md:px-4 py-8'>
        <h1 className=' text-4.5xl font-medium text-center py-4 text-white font-secondary '>{pageTitle}</h1>
        <p className=' text-lg text-center text-white font-normal mb-3 font-secondary '>{pageSubtitle}</p>
        <FAQ faqData={faqData} />

        <ScheduleMeeting />
      </div>
    </div>
  );
};

export default FAQImageBackgroundPage;
