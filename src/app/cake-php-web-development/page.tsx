import React from 'react';

import HireVarietyTechStack from 'app/components/HireVarietyTechStack';
import IndustriesWeServe from 'app/components/IndustriesWeServe';
import ProcessWeFollow from 'app/components/ProcessWeFollow';
import RelatedBlogs from 'app/components/RelatedBlogs';
import SuccessStories from 'app/components/SuccessStories';
import Why from 'app/components/Why';
import XBasedSolutions from 'app/components/XBasedSolutions';
import FsCakePhpWebDev from 'app/components/firstScreens/FsCakePhpWebDev';
import { xBasedSolutionForHireWebDevCakePHP } from 'app/core/_data';
import { industriesDataCakePHP } from 'app/core/_data';

import { CakePhpWebDevFaqData } from 'components/layout/Footer-Components/FAQ-Data/CakePhpWebDevFaqData';
import FAQs from 'components/layout/Footer-Components/FAQsWithImage/FAQs';
import Footer from 'components/layout/footer';

export default function page() {
  return (
    <div>
      <FsCakePhpWebDev />
      <Why />
      <XBasedSolutions data={xBasedSolutionForHireWebDevCakePHP} />
      <ProcessWeFollow />
      <IndustriesWeServe data={industriesDataCakePHP} />
      <HireVarietyTechStack />
      <SuccessStories />
      <RelatedBlogs />
      <FAQs
        pageTitle='FAQ'
        pageSubtitle='Lorem ipsum dolor sit amet consectetur. Phasellus tincidunt montes sit vitae.'
        faqData={CakePhpWebDevFaqData}
      />
      <Footer />
    </div>
  );
}
