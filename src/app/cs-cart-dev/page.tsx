import React from 'react';

import HireVarietyTechStack from 'app/components/HireVarietyTechStack';
import IndustriesWeServe from 'app/components/IndustriesWeServe';
import ProcessWeFollow from 'app/components/ProcessWeFollow';
import RelatedBlogs from 'app/components/RelatedBlogs';
import SuccessStories from 'app/components/SuccessStories';
import Why from 'app/components/Why';
import FsCscartDev from 'app/components/firstScreens/FsCscartDev';
import { industriesDataCSCart } from 'app/core/_data';

import { CsCartDevFaqData } from 'components/layout/Footer-Components/FAQ-Data/CsCartDevFaqData';
import FAQs from 'components/layout/Footer-Components/FAQsWithImage/FAQs';
import Footer from 'components/layout/footer';

export default function page() {
  return (
    <div>
      <FsCscartDev />
      <Why />

      <ProcessWeFollow />
      <IndustriesWeServe data={industriesDataCSCart} />
      <HireVarietyTechStack />
      <SuccessStories />
      <RelatedBlogs />
      <FAQs
        pageTitle='FAQ'
        pageSubtitle='Lorem ipsum dolor sit amet consectetur. Phasellus tincidunt montes sit vitae.'
        faqData={CsCartDevFaqData}
      />
      <Footer />
    </div>
  );
}
