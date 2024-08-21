import React from 'react';

import HireVarietyTechStack from 'app/components/HireVarietyTechStack';
import IndustriesWeServe from 'app/components/IndustriesWeServe';
import { OurXAppDevServices } from 'app/components/OurXAppDevServices';
import ProcessWeFollow from 'app/components/ProcessWeFollow';
import Why from 'app/components/Why';
import FsIonicAppDevServices from 'app/components/firstScreens/FsIonicAppDevServices';
import { IonicAppDevContentData } from 'app/core/_data';
import { industriesDataIonic } from 'app/core/_data';

import { IonicAppDevFaqData } from 'components/layout/Footer-Components/FAQ-Data/IonicAppDevFaqData';
import FAQs from 'components/layout/Footer-Components/FAQsWithImage/FAQs';
import Footer from 'components/layout/footer';

export default function page() {
  return (
    <div>
      <FsIonicAppDevServices />
      <Why />
      <OurXAppDevServices data={IonicAppDevContentData} />
      <ProcessWeFollow />
      <IndustriesWeServe data={industriesDataIonic} />
      <HireVarietyTechStack />
      <FAQs
        pageTitle='FAQ'
        pageSubtitle='Lorem ipsum dolor sit amet consectetur. Phasellus tincidunt montes sit vitae.'
        faqData={IonicAppDevFaqData}
      />
      <Footer />
    </div>
  );
}
