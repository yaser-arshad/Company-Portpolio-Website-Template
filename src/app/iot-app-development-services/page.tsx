import React from 'react';

import DisplayParagraphsAndAnswers from 'app/components/DisplayContentParagraphs';
import HireVarietyTechStack from 'app/components/HireVarietyTechStack';
import IndustriesWeServe from 'app/components/IndustriesWeServe';
import ProcessWeFollow from 'app/components/ProcessWeFollow';
import RelatedBlogs from 'app/components/RelatedBlogs';
import SuccessStories from 'app/components/SuccessStories';
import Why from 'app/components/Why';
import FsIotAppDev from 'app/components/firstScreens/FsIotAppDev';
import { industriesDataIoTApp } from 'app/core/_data';
import { servicesParagraphsBlockChainDevelopment, titleParagraphsBlockChainDevelopment } from 'app/core/_data';

import { IotAppDevServFaqData } from 'components/layout/Footer-Components/FAQ-Data/IotAppDevServFaqData';
import FAQs from 'components/layout/Footer-Components/FAQsWithImage/FAQs';
import Footer from 'components/layout/footer';

export default function page() {
  return (
    <div>
      <FsIotAppDev />
      <Why />
      <DisplayParagraphsAndAnswers
        title={titleParagraphsBlockChainDevelopment}
        contentArray={servicesParagraphsBlockChainDevelopment}
      />
      <ProcessWeFollow />
      <IndustriesWeServe data={industriesDataIoTApp} />
      <HireVarietyTechStack />
      <SuccessStories />
      <RelatedBlogs />
      <FAQs
        pageTitle='FAQ'
        pageSubtitle='Lorem ipsum dolor sit amet consectetur. Phasellus tincidunt montes sit vitae.'
        faqData={IotAppDevServFaqData}
      />
      <Footer />
    </div>
  );
}
