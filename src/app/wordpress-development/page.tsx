import React from 'react';

import HireVarietyTechStack from 'app/components/HireVarietyTechStack';
import IndustriesWeServe from 'app/components/IndustriesWeServe';
import ProcessWeFollow from 'app/components/ProcessWeFollow';
import RelatedBlogs from 'app/components/RelatedBlogs';
import SuccessStories from 'app/components/SuccessStories';
import Why from 'app/components/Why';
import XBasedSolutions from 'app/components/XBasedSolutions';
import FsWordpressWebDev from 'app/components/firstScreens/FsWordpressWebDev';
import { xBasedSolutionForHireWebDevWordPress } from 'app/core/_data';
import { industriesDataWordPress } from 'app/core/_data';

import { WordpressWebDevFaqData } from 'components/layout/Footer-Components/FAQ-Data/WordpressWebDevFaqData';
import FAQs from 'components/layout/Footer-Components/FAQsWithImage/FAQs';
import Footer from 'components/layout/footer';

export default function page() {
  return (
    <div>
      <FsWordpressWebDev />
      <Why />
      <XBasedSolutions data={xBasedSolutionForHireWebDevWordPress} />
      <ProcessWeFollow />
      <IndustriesWeServe data={industriesDataWordPress} />
      <HireVarietyTechStack />
      <SuccessStories />
      <RelatedBlogs />
      <FAQs
        pageTitle='FAQ'
        pageSubtitle='Lorem ipsum dolor sit amet consectetur. Phasellus tincidunt montes sit vitae.'
        faqData={WordpressWebDevFaqData}
      />
      <Footer />
    </div>
  );
}
