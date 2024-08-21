import React from 'react';

import DisplayParagraphsAndAnswers from 'app/components/DisplayContentParagraphs';
import HireVarietyTechStack from 'app/components/HireVarietyTechStack';
import RelatedBlogs from 'app/components/RelatedBlogs';
import SuccessStories from 'app/components/SuccessStories';
import Why from 'app/components/Why';
import FsSentimentalAnalysisDev from 'app/components/firstScreens/FsSentimentalAnalysisDev';
import { servicesParagraphsBlockChainDevelopment, titleParagraphsBlockChainDevelopment } from 'app/core/_data';

import { SentimentalAnaFaqData } from 'components/layout/Footer-Components/FAQ-Data/SentimentalAnaFaqData';
import FAQs from 'components/layout/Footer-Components/FAQsWithImage/FAQs';
import Footer from 'components/layout/footer';

export default function page() {
  return (
    <div>
      <FsSentimentalAnalysisDev />
      <Why />
      <DisplayParagraphsAndAnswers
        contentArray={servicesParagraphsBlockChainDevelopment}
        title={titleParagraphsBlockChainDevelopment}
      />
      <HireVarietyTechStack />
      <SuccessStories />
      <RelatedBlogs />
      <FAQs
        pageTitle='FAQ'
        pageSubtitle='Lorem ipsum dolor sit amet consectetur. Phasellus tincidunt montes sit vitae.'
        faqData={SentimentalAnaFaqData}
      />
      <Footer />
    </div>
  );
}
