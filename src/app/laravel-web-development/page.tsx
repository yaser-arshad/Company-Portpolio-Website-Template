import React from 'react';

import HireVarietyTechStack from 'app/components/HireVarietyTechStack';
import IndustriesWeServe from 'app/components/IndustriesWeServe';
import ProcessWeFollow from 'app/components/ProcessWeFollow';
import RelatedBlogs from 'app/components/RelatedBlogs';
import SuccessStories from 'app/components/SuccessStories';
import Why from 'app/components/Why';
import XBasedSolutions from 'app/components/XBasedSolutions';
import FsLaravelDevServices from 'app/components/firstScreens/FsLaravelDevServices';
import { xBasedSolutionForHireWebDevLaravel } from 'app/core/_data';
import { industriesDataLaravel } from 'app/core/_data';

import { LaravelWebDevFaqData } from 'components/layout/Footer-Components/FAQ-Data/LaravelWebDevFaqData';
import FAQs from 'components/layout/Footer-Components/FAQsWithImage/FAQs';
import Footer from 'components/layout/footer';

export default function page() {
  return (
    <div>
      <FsLaravelDevServices />

      <Why />
      <XBasedSolutions data={xBasedSolutionForHireWebDevLaravel} />
      <ProcessWeFollow />
      <IndustriesWeServe data={industriesDataLaravel} />
      <HireVarietyTechStack />
      <SuccessStories />
      <RelatedBlogs />

      <FAQs
        pageTitle='FAQ'
        pageSubtitle='Lorem ipsum dolor sit amet consectetur. Phasellus tincidunt montes sit vitae.'
        faqData={LaravelWebDevFaqData}
      />
      <Footer />
    </div>
  );
}
