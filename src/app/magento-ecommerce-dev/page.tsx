import React from 'react';

import HireVarietyTechStack from 'app/components/HireVarietyTechStack';
import IndustriesWeServe from 'app/components/IndustriesWeServe';
import ProcessWeFollow from 'app/components/ProcessWeFollow';
import RelatedBlogs from 'app/components/RelatedBlogs';
import SuccessStories from 'app/components/SuccessStories';
import Why from 'app/components/Why';
import FsMagentoEcommerceDev from 'app/components/firstScreens/FsMagentoEcommerceDev';
import { industriesDataMagneto } from 'app/core/_data';

import { MagentoECommDevFaqData } from 'components/layout/Footer-Components/FAQ-Data/MagentoECommDevFaqData';
import FAQs from 'components/layout/Footer-Components/FAQsWithImage/FAQs';
import Footer from 'components/layout/footer';

export default function page() {
  return (
    <div>
      <FsMagentoEcommerceDev />
      <Why />
      <ProcessWeFollow />
      <IndustriesWeServe data={industriesDataMagneto} />
      <HireVarietyTechStack />
      <SuccessStories />
      <RelatedBlogs />
      <FAQs
        pageTitle='FAQ'
        pageSubtitle='Lorem ipsum dolor sit amet consectetur. Phasellus tincidunt montes sit vitae.'
        faqData={MagentoECommDevFaqData}
      />
      <Footer />
    </div>
  );
}
