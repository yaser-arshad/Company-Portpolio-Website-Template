import React from 'react';

import HireVarietyTechStack from 'app/components/HireVarietyTechStack';
import IndustriesWeServe from 'app/components/IndustriesWeServe';
import ProcessWeFollow from 'app/components/ProcessWeFollow';
import RelatedBlogs from 'app/components/RelatedBlogs';
import SuccessStories from 'app/components/SuccessStories';
import Why from 'app/components/Why';
import FsBigCommerceDev from 'app/components/firstScreens/FsBigCommerceDev';
import { industriesDataBigComm } from 'app/core/_data';

import { BigCommDevFaqData } from 'components/layout/Footer-Components/FAQ-Data/BigCommDevFaqData';
import FAQs from 'components/layout/Footer-Components/FAQsWithImage/FAQs';
import Footer from 'components/layout/footer';

export default function page() {
  return (
    <div>
      <FsBigCommerceDev />
      <Why />

      <ProcessWeFollow />
      <IndustriesWeServe data={industriesDataBigComm} />
      <HireVarietyTechStack />
      <SuccessStories />
      <RelatedBlogs />
      <FAQs
        pageTitle='FAQ'
        pageSubtitle='Lorem ipsum dolor sit amet consectetur. Phasellus tincidunt montes sit vitae.'
        faqData={BigCommDevFaqData}
      />
      <Footer />
    </div>
  );
}
