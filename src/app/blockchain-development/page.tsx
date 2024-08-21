import React from 'react';

import DisplayParagraphsAndAnswers from 'app/components/DisplayContentParagraphs';
import HireVarietyTechStack from 'app/components/HireVarietyTechStack';
import IndustriesWeServe from 'app/components/IndustriesWeServe';
import ProcessWeFollow from 'app/components/ProcessWeFollow';
import Why from 'app/components/Why';
import FsBlockchainDev from 'app/components/firstScreens/FsBlockchainDev';
import { servicesParagraphsBlockChainDevelopment, titleParagraphsBlockChainDevelopment } from 'app/core/_data';
import { industriesDataBlockChain } from 'app/core/_data';

import { BlockChainDevFaqData } from 'components/layout/Footer-Components/FAQ-Data/BlockChainDevFaqData';
import FAQs from 'components/layout/Footer-Components/FAQsWithImage/FAQs';
import Footer from 'components/layout/footer';

import RelaetedBlogs from '../components/RelatedBlogs';
import SuccessStories from '../components/SuccessStories';

export default function page() {
  return (
    <div>
      <FsBlockchainDev />
      <Why />
      <DisplayParagraphsAndAnswers
        title={titleParagraphsBlockChainDevelopment}
        contentArray={servicesParagraphsBlockChainDevelopment}
      />
      <ProcessWeFollow />
      <IndustriesWeServe data={industriesDataBlockChain} />
      <HireVarietyTechStack />
      <SuccessStories />
      <RelaetedBlogs />
      <FAQs
        pageTitle='FAQ'
        pageSubtitle='Lorem ipsum dolor sit amet consectetur. Phasellus tincidunt montes sit vitae.'
        faqData={BlockChainDevFaqData}
      />
      <Footer />
    </div>
  );
}
