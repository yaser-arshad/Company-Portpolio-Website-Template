import React from 'react';

import HireVarietyTechStack from 'app/components/HireVarietyTechStack';
import IndustriesWeServe from 'app/components/IndustriesWeServe';
import ProcessWeFollow from 'app/components/ProcessWeFollow';
import RelatedBlogs from 'app/components/RelatedBlogs';
import SuccessStories from 'app/components/SuccessStories';
import Why from 'app/components/Why';
import XBasedSolutions from 'app/components/XBasedSolutions';
import FsDupralWebDev from 'app/components/firstScreens/FsDupralWebDev';
import { xBasedSolutionForHireWebDevDrupal } from 'app/core/_data';
import { industriesDataDrupal } from 'app/core/_data';

import { DrupalWebDevFaqData } from 'components/layout/Footer-Components/FAQ-Data/DrupalWebDevFaqData';
import FAQs from 'components/layout/Footer-Components/FAQsWithImage/FAQs';
import Footer from 'components/layout/footer';

export default function page() {
  return (
    <div>
      <FsDupralWebDev />
      <Why />
      <XBasedSolutions data={xBasedSolutionForHireWebDevDrupal} />
      <ProcessWeFollow />
      <IndustriesWeServe data={industriesDataDrupal} />
      <HireVarietyTechStack />
      <SuccessStories />
      <RelatedBlogs />
      <FAQs
        pageTitle='FAQ'
        pageSubtitle='Lorem ipsum dolor sit amet consectetur. Phasellus tincidunt montes sit vitae.'
        faqData={DrupalWebDevFaqData}
      />

      <Footer />
    </div>
  );
}
