import React from 'react';

import DisplayParagraphsAndAnswers from 'app/components/DisplayContentParagraphs';
import HireVarietyTechStack from 'app/components/HireVarietyTechStack';
import IndustriesWeServe from 'app/components/IndustriesWeServe';
import ProcessWeFollow from 'app/components/ProcessWeFollow';
import RelatedBlogs from 'app/components/RelatedBlogs';
import SuccessStories from 'app/components/SuccessStories';
import Why from 'app/components/Why';
import FsDevopsServices from 'app/components/firstScreens/FsDevopsServices';
import { industriesDataDevOps, servicesParagraphsDevOps, titleParagraphsDevOps } from 'app/core/_data';

import { DevOpsFaqData } from 'components/layout/Footer-Components/FAQ-Data/DevOpsFaqData';
import FAQs from 'components/layout/Footer-Components/FAQsWithImage/FAQs';
import Footer from 'components/layout/footer';

export default function page() {
  return (
    <div>
      <FsDevopsServices />
      <Why />
      <DisplayParagraphsAndAnswers contentArray={servicesParagraphsDevOps} title={titleParagraphsDevOps} />
      <IndustriesWeServe data={industriesDataDevOps} />
      <HireVarietyTechStack />
      <SuccessStories />
      <RelatedBlogs />
      <FAQs
        pageTitle='FAQ'
        pageSubtitle='Lorem ipsum dolor sit amet consectetur. Phasellus tincidunt montes sit vitae.'
        faqData={DevOpsFaqData}
      />
      <Footer />
    </div>
  );
}
