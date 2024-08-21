import React from 'react';

import HireVarietyTechStack from 'app/components/HireVarietyTechStack';
import IndustriesWeServe from 'app/components/IndustriesWeServe';
import ProcessWeFollow from 'app/components/ProcessWeFollow';
import RelatedBlogs from 'app/components/RelatedBlogs';
import SuccessStories from 'app/components/SuccessStories';
import Why from 'app/components/Why';
import XBasedSolutions from 'app/components/XBasedSolutions';
import FsReactWebDevServices from 'app/components/firstScreens/FsReactWebDevServices';
import { xBasedSolutionForHireWebDevReactJS } from 'app/core/_data';
import { industriesDataReactJS } from 'app/core/_data';

import { ReactWebDevFaqData } from 'components/layout/Footer-Components/FAQ-Data/ReactWebDevFaqData';
import FAQs from 'components/layout/Footer-Components/FAQsWithImage/FAQs';
import Footer from 'components/layout/footer';

export default function page() {
  return (
    <div>
      <FsReactWebDevServices />
      <Why />
      <XBasedSolutions data={xBasedSolutionForHireWebDevReactJS} />
      <ProcessWeFollow />
      <IndustriesWeServe data={industriesDataReactJS} />
      <HireVarietyTechStack />
      <SuccessStories />
      <RelatedBlogs />
      <FAQs
        pageTitle='FAQ'
        pageSubtitle='Lorem ipsum dolor sit amet consectetur. Phasellus tincidunt montes sit vitae.'
        faqData={ReactWebDevFaqData}
      />
      <Footer />
    </div>
  );
}
