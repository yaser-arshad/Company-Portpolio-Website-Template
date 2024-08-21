import React from 'react';

import Challenges from 'app/components/AIArtGenerator/components/Challenges';
import IrApproach from 'app/components/AIArtGenerator/components/IrApproach';
import Results from 'app/components/AIArtGenerator/components/Results';
import Screens from 'app/components/AIArtGenerator/components/Screens';
import Solution from 'app/components/AIArtGenerator/components/Solution';
import UseCaseStudy from 'app/components/AIArtGenerator/components/UseCaseStudy';
import HireVarietyTechStack from 'app/components/HireVarietyTechStack';
import FsArtGenerator from 'app/components/firstScreens/FsArtGenerator';

import { BlockChainDevFaqData } from 'components/layout/Footer-Components/FAQ-Data/BlockChainDevFaqData';
import FAQs from 'components/layout/Footer-Components/FAQsWithImage/FAQs';
import Footer from 'components/layout/footer';

export default function page() {
  return (
    <div>
      <FsArtGenerator />
      <UseCaseStudy />
      <Challenges />
      <IrApproach />
      <Solution />
      <Results />
      <Screens />
      <HireVarietyTechStack />
      <FAQs
        pageTitle='FAQ'
        pageSubtitle='Lorem ipsum dolor sit amet consectetur. Phasellus tincidunt montes sit vitae.'
        faqData={BlockChainDevFaqData}
      />
      <Footer />
    </div>
  );
}
