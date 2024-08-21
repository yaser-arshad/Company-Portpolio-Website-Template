import React from 'react';

import HireVarietyTechStack from 'app/components/HireVarietyTechStack';
import IndustriesWeServe from 'app/components/IndustriesWeServe';
import ProcessWeFollow from 'app/components/ProcessWeFollow';
import RelatedBlogs from 'app/components/RelatedBlogs';
import SuccessStories from 'app/components/SuccessStories';
import Why from 'app/components/Why';
import FsWooCommerceDev from 'app/components/firstScreens/FsWooCommerceDev';
import { industriesDataWooComm } from 'app/core/_data';

import { WooCommDevFaqData } from 'components/layout/Footer-Components/FAQ-Data/WooCommDevFaqData';
import FAQs from 'components/layout/Footer-Components/FAQsWithImage/FAQs';
import Footer from 'components/layout/footer';

export default function page() {
  return (
    <div>
      <FsWooCommerceDev />
      <Why />

      <ProcessWeFollow />
      <IndustriesWeServe data={industriesDataWooComm} />
      <HireVarietyTechStack />
      <SuccessStories />
      <RelatedBlogs />
      <FAQs
        pageTitle='FAQ'
        pageSubtitle='Lorem ipsum dolor sit amet consectetur. Phasellus tincidunt montes sit vitae.'
        faqData={WooCommDevFaqData}
      />
      <Footer />
    </div>
  );
}
