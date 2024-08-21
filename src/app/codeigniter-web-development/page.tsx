import React from 'react';

import HireVarietyTechStack from 'app/components/HireVarietyTechStack';
import IndustriesWeServe from 'app/components/IndustriesWeServe';
import ProcessWeFollow from 'app/components/ProcessWeFollow';
import RelatedBlogs from 'app/components/RelatedBlogs';
import SuccessStories from 'app/components/SuccessStories';
import Why from 'app/components/Why';
import XBasedSolutions from 'app/components/XBasedSolutions';
import FsCodeigniterWebDevServices from 'app/components/firstScreens/FsCodeigniterWebDevServices';
import { xBasedSolutionForHireWebDevCodeIgnite } from 'app/core/_data';
import { industriesDataCodeIG } from 'app/core/_data';

import { CodeIgniterWebDevFaqData } from 'components/layout/Footer-Components/FAQ-Data/CodeIgniterWebDevFaqData';
import FAQs from 'components/layout/Footer-Components/FAQsWithImage/FAQs';
import Footer from 'components/layout/footer';

export default function page() {
  return (
    <div>
      <FsCodeigniterWebDevServices />
      <Why />
      <XBasedSolutions data={xBasedSolutionForHireWebDevCodeIgnite} />
      <ProcessWeFollow />
      <IndustriesWeServe data={industriesDataCodeIG} />
      <HireVarietyTechStack />
      <SuccessStories />
      <RelatedBlogs />
      <FAQs
        pageTitle='FAQ'
        pageSubtitle='Lorem ipsum dolor sit amet consectetur. Phasellus tincidunt montes sit vitae.'
        faqData={CodeIgniterWebDevFaqData}
      />
      <Footer />
    </div>
  );
}
