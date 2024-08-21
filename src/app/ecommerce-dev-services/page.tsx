import React from 'react';

import HireVarietyTechStack from 'app/components/HireVarietyTechStack';
import IndustriesWeServe from 'app/components/IndustriesWeServe';
import ProcessWeFollow from 'app/components/ProcessWeFollow';
import RelatedBlogs from 'app/components/RelatedBlogs';
import SuccessStories from 'app/components/SuccessStories';
import Why from 'app/components/Why';
import FsEcommerceDevServices from 'app/components/firstScreens/FsEcommerceDevServices';
import { industriesDataEcommDev } from 'app/core/_data';

import { ECommWebDevFaqData } from 'components/layout/Footer-Components/FAQ-Data/ECommWebDevFaqData';
import FAQs from 'components/layout/Footer-Components/FAQsWithImage/FAQs';
import Footer from 'components/layout/footer';

export default function page() {
  return (
    <div>
      <FsEcommerceDevServices />
      <Why />

      <ProcessWeFollow />
      <IndustriesWeServe data={industriesDataEcommDev} />
      <HireVarietyTechStack />
      <SuccessStories />
      <RelatedBlogs />
      <FAQs
        pageTitle='FAQ'
        pageSubtitle='Lorem ipsum dolor sit amet consectetur. Phasellus tincidunt montes sit vitae.'
        faqData={ECommWebDevFaqData}
      />
      <Footer />
    </div>
  );
}
