import React from 'react';

import HireVarietyTechStack from 'app/components/HireVarietyTechStack';
import IndustriesWeServe from 'app/components/IndustriesWeServe';
import ProcessWeFollow from 'app/components/ProcessWeFollow';
import RelatedBlogs from 'app/components/RelatedBlogs';
import SuccessStories from 'app/components/SuccessStories';
import Why from 'app/components/Why';
import FsUbercartDev from 'app/components/firstScreens/FsUbercartDev';
import { industriesDataUberCart } from 'app/core/_data';

import { UbercartDevFaqData } from 'components/layout/Footer-Components/FAQ-Data/UbercartDevFaqData';
import FAQs from 'components/layout/Footer-Components/FAQsWithImage/FAQs';
import Footer from 'components/layout/footer';

export default function page() {
  return (
    <div>
      <FsUbercartDev />
      <Why />

      <ProcessWeFollow />
      <IndustriesWeServe data={industriesDataUberCart} />
      <HireVarietyTechStack />
      <SuccessStories />
      <RelatedBlogs />
      <FAQs
        pageTitle='FAQ'
        pageSubtitle='Lorem ipsum dolor sit amet consectetur. Phasellus tincidunt montes sit vitae.'
        faqData={UbercartDevFaqData}
      />
      <Footer />
    </div>
  );
}
