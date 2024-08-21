import React from 'react';

import HireVarietyTechStack from 'app/components/HireVarietyTechStack';
import IndustriesWeServe from 'app/components/IndustriesWeServe';
import LoremIpsumCardComponetRendering from 'app/components/LoremIpsumCardComponetRendering';
import LoremIpsumConditionalRendering from 'app/components/LoremIpsumConditionalRendering';
import ProcessWeFollow from 'app/components/ProcessWeFollow';
import Why from 'app/components/Why';
import FsBlockchainDevServices from 'app/components/firstScreens/FsBlockchainDevServices';
import { industriesDataBlockChain } from 'app/core/_data';

import { BlockchainDevServFaqData } from 'components/layout/Footer-Components/FAQ-Data/BlockchainDevServFaqData';
import FAQs from 'components/layout/Footer-Components/FAQsWithImage/FAQs';
import Footer from 'components/layout/footer';

export default function page() {
  return (
    <div>
      <FsBlockchainDevServices />
      <Why />
      <LoremIpsumConditionalRendering />
      <LoremIpsumCardComponetRendering />
      <ProcessWeFollow />
      <IndustriesWeServe data={industriesDataBlockChain} />
      <HireVarietyTechStack />
      <FAQs
        pageTitle='FAQ'
        pageSubtitle='Lorem ipsum dolor sit amet consectetur. Phasellus tincidunt montes sit vitae.'
        faqData={BlockchainDevServFaqData}
      />
      <Footer />
    </div>
  );
}
