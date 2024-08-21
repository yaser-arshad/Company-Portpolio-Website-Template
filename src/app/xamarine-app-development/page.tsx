import React from 'react';

import HireVarietyTechStack from 'app/components/HireVarietyTechStack';
import IndustriesWeServe from 'app/components/IndustriesWeServe';
import { OurXAppDevServices } from 'app/components/OurXAppDevServices';
import ProcessWeFollow from 'app/components/ProcessWeFollow';
import Why from 'app/components/Why';
import FsXamarinAppDevServices from 'app/components/firstScreens/FsXamarinAppDevServices';
import { XamarineAppDevContentData } from 'app/core/_data';
import { industriesDataXamarine } from 'app/core/_data';

import { XamarinAppDevFaqData } from 'components/layout/Footer-Components/FAQ-Data/XamarinAppDevFaqData';
import FAQs from 'components/layout/Footer-Components/FAQsWithImage/FAQs';
import Footer from 'components/layout/footer';

export default function page() {
  return (
    <div>
      <FsXamarinAppDevServices />
      <Why />
      <OurXAppDevServices data={XamarineAppDevContentData} />
      <ProcessWeFollow />
      <IndustriesWeServe data={industriesDataXamarine} />
      <HireVarietyTechStack />
      <FAQs
        pageTitle='FAQ'
        pageSubtitle='Lorem ipsum dolor sit amet consectetur. Phasellus tincidunt montes sit vitae.'
        faqData={XamarinAppDevFaqData}
      />
      <Footer />
    </div>
  );
}
