import React from 'react';

import HireVarietyTechStack from 'app/components/HireVarietyTechStack';
import IndustriesWeServe from 'app/components/IndustriesWeServe';
import ProcessWeFollow from 'app/components/ProcessWeFollow';
import RelatedBlogs from 'app/components/RelatedBlogs';
import SuccessStories from 'app/components/SuccessStories';
import Why from 'app/components/Why';
import XBasedSolutions from 'app/components/XBasedSolutions';
import FsNodeWebDevServices from 'app/components/firstScreens/FsNodeWebDevServices';
import { xBasedSolutionForHireWebDevNode } from 'app/core/_data';
import { industriesDataNodeJS } from 'app/core/_data';

import { NodeWebDevFaqData } from 'components/layout/Footer-Components/FAQ-Data/NodeWebDevFaqData';
import FAQs from 'components/layout/Footer-Components/FAQsWithImage/FAQs';
import Footer from 'components/layout/footer';

export default function page() {
  return (
    <div>
      <FsNodeWebDevServices />
      <Why />
      <XBasedSolutions data={xBasedSolutionForHireWebDevNode} />
      <ProcessWeFollow />
      <IndustriesWeServe data={industriesDataNodeJS} />
      <HireVarietyTechStack />
      <SuccessStories />
      <RelatedBlogs />
      <FAQs
        pageTitle='FAQ'
        pageSubtitle='Lorem ipsum dolor sit amet consectetur. Phasellus tincidunt montes sit vitae.'
        faqData={NodeWebDevFaqData}
      />
      <Footer />
    </div>
  );
}
