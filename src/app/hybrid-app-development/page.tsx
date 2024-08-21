import React from 'react';

import HireVarietyTechStack from 'app/components/HireVarietyTechStack';
import IndustriesWeServe from 'app/components/IndustriesWeServe';
import { OurXAppDevServices } from 'app/components/OurXAppDevServices';
import ProcessWeFollow from 'app/components/ProcessWeFollow';
import Why from 'app/components/Why';
import FsHybidAppDevServices from 'app/components/firstScreens/FsHybidAppDevServices';
import { HybridAppDevContentData } from 'app/core/_data';
import { industriesDataHybrid } from 'app/core/_data';

import { HybridAppDevFaqData } from 'components/layout/Footer-Components/FAQ-Data/HybridAppDevFaqData';
import FAQs from 'components/layout/Footer-Components/FAQsWithImage/FAQs';
import Footer from 'components/layout/footer';

import RelaetedBlogs from '../components/RelatedBlogs';
import SuccessStories from '../components/SuccessStories';

export default function page() {
  return (
    <div>
      <FsHybidAppDevServices />
      <Why />
      <OurXAppDevServices data={HybridAppDevContentData} />
      <ProcessWeFollow />
      <IndustriesWeServe data={industriesDataHybrid} />
      <HireVarietyTechStack />
      <SuccessStories />
      <RelaetedBlogs />
      <FAQs
        pageTitle='FAQ'
        pageSubtitle='Lorem ipsum dolor sit amet consectetur. Phasellus tincidunt montes sit vitae.'
        faqData={HybridAppDevFaqData}
      />
      <Footer />
    </div>
  );
}
