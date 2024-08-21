import React from 'react';

import DisplayParagraphsAndAnswers from 'app/components/DisplayContentParagraphs';
import Why from 'app/components/Why';
import FsHireAiMlDev from 'app/components/firstScreens/FsHireAiMlDev';
import { servicesParagraphsAiAndMl, titleParagraphsAiAndML } from 'app/core/_data';

import { HireAiMlFaqData } from 'components/layout/Footer-Components/FAQ-Data/HireAiMlFaqData';
import FAQs from 'components/layout/Footer-Components/FAQsWithImage/FAQs';
import Footer from 'components/layout/footer';

import RelaetedBlogs from '../components/RelatedBlogs';
import SuccessStories from '../components/SuccessStories';

export default function page() {
  return (
    <div>
      <FsHireAiMlDev />
      <Why />
      <DisplayParagraphsAndAnswers contentArray={servicesParagraphsAiAndMl} title={titleParagraphsAiAndML} />
      <SuccessStories />
      <RelaetedBlogs />
      <SuccessStories />
      <RelaetedBlogs />
      <FAQs
        pageTitle='FAQ'
        pageSubtitle='Lorem ipsum dolor sit amet consectetur. Phasellus tincidunt montes sit vitae.'
        faqData={HireAiMlFaqData}
      />
      <Footer />
    </div>
  );
}
