import React from 'react';

import DisplayParagraphsAndAnswers from 'app/components/DisplayContentParagraphs';
import RelatedBlogs from 'app/components/RelatedBlogs';
import SuccessStories from 'app/components/SuccessStories';
import Why from 'app/components/Why';
import FsBussinessIntelligence from 'app/components/firstScreens/FsBussinessIntelligence';
import { servicesParagraphsConnectToIotDevs, titleParagraphsConnectToIotDevs } from 'app/core/_data';

import { BusiIntlServFaqData } from 'components/layout/Footer-Components/FAQ-Data/BusiIntlServFaqData';
import FAQs from 'components/layout/Footer-Components/FAQsWithImage/FAQs';
import Footer from 'components/layout/footer';

export default function page() {
  return (
    <div>
      <FsBussinessIntelligence />
      <Why />
      <DisplayParagraphsAndAnswers
        contentArray={servicesParagraphsConnectToIotDevs}
        title={titleParagraphsConnectToIotDevs}
      />
      <SuccessStories />
      <RelatedBlogs />
      <FAQs
        pageTitle='FAQ'
        pageSubtitle='Lorem ipsum dolor sit amet consectetur. Phasellus tincidunt montes sit vitae.'
        faqData={BusiIntlServFaqData}
      />
      <Footer />
    </div>
  );
}
