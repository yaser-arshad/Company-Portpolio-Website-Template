import React from 'react';

import DisplayParagraphsAndAnswers from 'app/components/DisplayContentParagraphs';
import HireVarietyTechStack from 'app/components/HireVarietyTechStack';
import IndustriesWeServe from 'app/components/IndustriesWeServe';
import ProcessWeFollow from 'app/components/ProcessWeFollow';
import Why from 'app/components/Why';
import FsConnectIotDev from 'app/components/firstScreens/FsConnectIotDev';
import { industriesDataIoTDev } from 'app/core/_data';
import { servicesParagraphsConnectToIotDevs, titleParagraphsConnectToIotDevs } from 'app/core/_data';

import { ConnectToIoTDevFaqData } from 'components/layout/Footer-Components/FAQ-Data/ConnectToIoTDevFaqData';
import FAQs from 'components/layout/Footer-Components/FAQsWithImage/FAQs';
import Footer from 'components/layout/footer';

import RelaetedBlogs from '../components/RelatedBlogs';
import SuccessStories from '../components/SuccessStories';

export default function page() {
  return (
    <div>
      <FsConnectIotDev />
      <Why />
      <DisplayParagraphsAndAnswers
        contentArray={servicesParagraphsConnectToIotDevs}
        title={titleParagraphsConnectToIotDevs}
      />
      <ProcessWeFollow />
      <IndustriesWeServe data={industriesDataIoTDev} />
      <HireVarietyTechStack />
      <SuccessStories />
      <RelaetedBlogs />
      <FAQs
        pageTitle='FAQ'
        pageSubtitle='Lorem ipsum dolor sit amet consectetur. Phasellus tincidunt montes sit vitae.'
        faqData={ConnectToIoTDevFaqData}
      />
      <Footer />
    </div>
  );
}
