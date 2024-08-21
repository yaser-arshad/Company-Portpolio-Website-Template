import React from 'react';

import HireVarietyTechStack from 'app/components/HireVarietyTechStack';
import IndustriesWeServe from 'app/components/IndustriesWeServe';
import ProcessWeFollow from 'app/components/ProcessWeFollow';
import RelatedBlogs from 'app/components/RelatedBlogs';
import SuccessStories from 'app/components/SuccessStories';
import Why from 'app/components/Why';
import XBasedSolutions from 'app/components/XBasedSolutions';
import FsAngularWebDevServices from 'app/components/firstScreens/FsAngularWebDevServices';
import { xBasedSolutionForHireWebDevAngular } from 'app/core/_data';
import { industriesDataAngular } from 'app/core/_data';

import { AngularWebDevFaqData } from 'components/layout/Footer-Components/FAQ-Data/AngularWebDevFaqData';
import FAQs from 'components/layout/Footer-Components/FAQsWithImage/FAQs';
import Footer from 'components/layout/footer';

export default function page() {
  return (
    <div>
      <FsAngularWebDevServices />
      <Why />
      <XBasedSolutions data={xBasedSolutionForHireWebDevAngular} />
      <ProcessWeFollow />
      <IndustriesWeServe data={industriesDataAngular} />
      <HireVarietyTechStack />
      <SuccessStories />
      <RelatedBlogs />
      <FAQs
        pageTitle='FAQ'
        pageSubtitle='Lorem ipsum dolor sit amet consectetur. Phasellus tincidunt montes sit vitae.'
        faqData={AngularWebDevFaqData}
      />
      <Footer />
    </div>
  );
}
