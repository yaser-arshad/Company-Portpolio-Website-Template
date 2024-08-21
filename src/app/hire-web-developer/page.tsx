import React from 'react';

import HireVarietyTechStack from 'app/components/HireVarietyTechStack';
import IndustriesWeServe from 'app/components/IndustriesWeServe';
import ProcessWeFollow from 'app/components/ProcessWeFollow';
import Why from 'app/components/Why';
import XBasedSolutions from 'app/components/XBasedSolutions';
import FsHireWebDeveloper from 'app/components/firstScreens/FsHireWebDeveloper';
import { xBasedSolutionForHireWebDev } from 'app/core/_data';
import { industriesDataWebDev } from 'app/core/_data';

import { HireWebDevFaqData } from 'components/layout/Footer-Components/FAQ-Data/HireWebDeveloperFaqData';
import FAQs from 'components/layout/Footer-Components/FAQsWithImage/FAQs';
import Footer from 'components/layout/footer';

import RelaetedBlogs from '../components/RelatedBlogs';
import SuccessStories from '../components/SuccessStories';

export default function page() {
  return (
    <div>
      <FsHireWebDeveloper />
      <Why />
      <XBasedSolutions data={xBasedSolutionForHireWebDev} />
      <ProcessWeFollow />
      <IndustriesWeServe data={industriesDataWebDev} />
      <HireVarietyTechStack />
      <SuccessStories />
      <RelaetedBlogs />
      <FAQs
        pageTitle='FAQ'
        pageSubtitle='Lorem ipsum dolor sit amet consectetur. Phasellus tincidunt montes sit vitae.'
        faqData={HireWebDevFaqData}
      />
      <Footer />
    </div>
  );
}
