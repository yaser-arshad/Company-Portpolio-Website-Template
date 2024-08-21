import React from 'react';

import HireVarietyTechStack from 'app/components/HireVarietyTechStack';
import IndustriesWeServe from 'app/components/IndustriesWeServe';
import ProcessWeFollow from 'app/components/ProcessWeFollow';
import RelatedBlogs from 'app/components/RelatedBlogs';
import SuccessStories from 'app/components/SuccessStories';
import Why from 'app/components/Why';
import XBasedSolutions from 'app/components/XBasedSolutions';
import FsTypescriptWebDevServices from 'app/components/firstScreens/FsTypescriptWebDevServices';
import { xBasedSolutionForHireWebDevTypeScript } from 'app/core/_data';
import { industriesDataTS } from 'app/core/_data';

import { TSWebDevFaqData } from 'components/layout/Footer-Components/FAQ-Data/TSWebDevFaqData';
import FAQs from 'components/layout/Footer-Components/FAQsWithImage/FAQs';
import Footer from 'components/layout/footer';

export default function page() {
  return (
    <div>
      <FsTypescriptWebDevServices />
      <Why />
      <XBasedSolutions data={xBasedSolutionForHireWebDevTypeScript} />
      <ProcessWeFollow />
      <IndustriesWeServe data={industriesDataTS} />
      <HireVarietyTechStack />
      <SuccessStories />
      <RelatedBlogs />
      <FAQs
        pageTitle='FAQ'
        pageSubtitle='Lorem ipsum dolor sit amet consectetur. Phasellus tincidunt montes sit vitae.'
        faqData={TSWebDevFaqData}
      />
      <Footer />
    </div>
  );
}
