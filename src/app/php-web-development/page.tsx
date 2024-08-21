import React from 'react';

import HireVarietyTechStack from 'app/components/HireVarietyTechStack';
import IndustriesWeServe from 'app/components/IndustriesWeServe';
import ProcessWeFollow from 'app/components/ProcessWeFollow';
import RelatedBlogs from 'app/components/RelatedBlogs';
import SuccessStories from 'app/components/SuccessStories';
import Why from 'app/components/Why';
import XBasedSolutions from 'app/components/XBasedSolutions';
import FsPhpWebDevServices from 'app/components/firstScreens/FsPhpWebDevServices';
import { xBasedSolutionForHireWebDev } from 'app/core/_data';
import { industriesDataPHP } from 'app/core/_data';

import { PhpWebDevFaqData } from 'components/layout/Footer-Components/FAQ-Data/PhpWebDevFaqData';
import FAQs from 'components/layout/Footer-Components/FAQsWithImage/FAQs';
import Footer from 'components/layout/footer';

export default function page() {
  return (
    <div>
      <FsPhpWebDevServices />
      <Why />
      <XBasedSolutions data={xBasedSolutionForHireWebDev} />
      <ProcessWeFollow />
      <IndustriesWeServe data={industriesDataPHP} />
      <HireVarietyTechStack />
      <SuccessStories />
      <RelatedBlogs />
      <FAQs
        pageTitle='FAQ'
        pageSubtitle='Lorem ipsum dolor sit amet consectetur. Phasellus tincidunt montes sit vitae.'
        faqData={PhpWebDevFaqData}
      />
      <Footer />
    </div>
  );
}
