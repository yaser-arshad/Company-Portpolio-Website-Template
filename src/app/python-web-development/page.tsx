import React from 'react';

import HireVarietyTechStack from 'app/components/HireVarietyTechStack';
import IndustriesWeServe from 'app/components/IndustriesWeServe';
import ProcessWeFollow from 'app/components/ProcessWeFollow';
import RelatedBlogs from 'app/components/RelatedBlogs';
import SuccessStories from 'app/components/SuccessStories';
import Why from 'app/components/Why';
import XBasedSolutions from 'app/components/XBasedSolutions';
import FsPythonWebDev from 'app/components/firstScreens/FsPythonWebDev';
import { xBasedSolutionForHireWebDevPython } from 'app/core/_data';
import { industriesDataPython } from 'app/core/_data';

import { PythonWebDevFaqData } from 'components/layout/Footer-Components/FAQ-Data/PythonWebDevFaqData';
import FAQs from 'components/layout/Footer-Components/FAQsWithImage/FAQs';
import Footer from 'components/layout/footer';

export default function page() {
  return (
    <div>
      <FsPythonWebDev />
      <Why />
      <XBasedSolutions data={xBasedSolutionForHireWebDevPython} />
      <ProcessWeFollow />
      <IndustriesWeServe data={industriesDataPython} />
      <HireVarietyTechStack />
      <SuccessStories />
      <RelatedBlogs />
      <FAQs
        pageTitle='FAQ'
        pageSubtitle='Lorem ipsum dolor sit amet consectetur. Phasellus tincidunt montes sit vitae.'
        faqData={PythonWebDevFaqData}
      />
      <Footer />
    </div>
  );
}
