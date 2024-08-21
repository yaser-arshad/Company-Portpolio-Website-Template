import React from 'react';

import DisplayParagraphsAndAnswers from 'app/components/DisplayContentParagraphs';
import HireVarietyTechStack from 'app/components/HireVarietyTechStack';
import IndustriesWeServe from 'app/components/IndustriesWeServe';
import ProcessWeFollow from 'app/components/ProcessWeFollow';
import RelatedBlogs from 'app/components/RelatedBlogs';
import SuccessStories from 'app/components/SuccessStories';
import Why from 'app/components/Why';
import FsIotHardwarePrototyping from 'app/components/firstScreens/FsIotHardwarePrototyping';
import { industriesDataIoTHard } from 'app/core/_data';
import { servicesParagraphsBlockChainDevelopment, titleParagraphsBlockChainDevelopment } from 'app/core/_data';

import { IotHardProtoFaqData } from 'components/layout/Footer-Components/FAQ-Data/IotHardProtoFaqData';
import FAQs from 'components/layout/Footer-Components/FAQsWithImage/FAQs';
import Footer from 'components/layout/footer';

export default function page() {
  return (
    <div>
      <FsIotHardwarePrototyping />
      <Why />
      <DisplayParagraphsAndAnswers
        title={titleParagraphsBlockChainDevelopment}
        contentArray={servicesParagraphsBlockChainDevelopment}
      />
      <ProcessWeFollow />
      <IndustriesWeServe data={industriesDataIoTHard} />
      <HireVarietyTechStack />
      <SuccessStories />
      <RelatedBlogs />
      <FAQs
        pageTitle='FAQ'
        pageSubtitle='Lorem ipsum dolor sit amet consectetur. Phasellus tincidunt montes sit vitae.'
        faqData={IotHardProtoFaqData}
      />
      <Footer />
    </div>
  );
}
