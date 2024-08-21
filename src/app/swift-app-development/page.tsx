import React from 'react';

import HireVarietyTechStack from 'app/components/HireVarietyTechStack';
import IndustriesWeServe from 'app/components/IndustriesWeServe';
import { OurXAppDevServices } from 'app/components/OurXAppDevServices';
import ProcessWeFollow from 'app/components/ProcessWeFollow';
import Why from 'app/components/Why';
import FsSwiftAppDevServices from 'app/components/firstScreens/FsSwiftAppDevServices';
import { SwiftAppDevContentData } from 'app/core/_data';
import { industriesDataSwift } from 'app/core/_data';

import { SwiftAppDevFaqData } from 'components/layout/Footer-Components/FAQ-Data/SwiftAppDevFaqData';
import FAQs from 'components/layout/Footer-Components/FAQsWithImage/FAQs';
import Footer from 'components/layout/footer';

export default function page() {
  return (
    <div>
      <FsSwiftAppDevServices />
      <Why />
      <OurXAppDevServices data={SwiftAppDevContentData} />
      <ProcessWeFollow />
      <IndustriesWeServe data={industriesDataSwift} />
      <HireVarietyTechStack />
      <FAQs
        pageTitle='FAQ'
        pageSubtitle='Lorem ipsum dolor sit amet consectetur. Phasellus tincidunt montes sit vitae.'
        faqData={SwiftAppDevFaqData}
      />
      <Footer />
    </div>
  );
}
