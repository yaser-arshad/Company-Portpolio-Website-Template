import React from 'react';

import DisplayParagraphsAndAnswers from 'app/components/DisplayContentParagraphs';
import HireVarietyTechStack from 'app/components/HireVarietyTechStack';
import RelatedBlogs from 'app/components/RelatedBlogs';
import SuccessStories from 'app/components/SuccessStories';
import Why from 'app/components/Why';
import FsSearchEngineOptimization from 'app/components/firstScreens/FsSearchEngineOptimization';
import { servicesParagraphsSEO, titleParagraphsSEO } from 'app/core/_data';

import { SeoServFaqData } from 'components/layout/Footer-Components/FAQ-Data/SeoServFaqData';
import FAQs from 'components/layout/Footer-Components/FAQsWithImage/FAQs';
import Footer from 'components/layout/footer';

export default function page() {
  return (
    <div>
      <FsSearchEngineOptimization />
      <Why />
      <DisplayParagraphsAndAnswers contentArray={servicesParagraphsSEO} title={titleParagraphsSEO} />
      <HireVarietyTechStack />
      <SuccessStories />
      <RelatedBlogs />
      <FAQs
        pageTitle='FAQ'
        pageSubtitle='Lorem ipsum dolor sit amet consectetur. Phasellus tincidunt montes sit vitae.'
        faqData={SeoServFaqData}
      />
      <Footer />
    </div>
  );
}
