import React from 'react';

import ComprehensiveGameDevServices from 'app/components/ComprehensiveGameDevServices';
import HireVarietyTechStack from 'app/components/HireVarietyTechStack';
import IdeasToReality from 'app/components/IdeasToReality';
import RelatedBlogs from 'app/components/RelatedBlogs';
import SuccessStories from 'app/components/SuccessStories';
import Why from 'app/components/Why';
import FsUnity3dGameDev from 'app/components/firstScreens/FsUnity3dGameDev';

import { Unity3dGameDevFaqData } from 'components/layout/Footer-Components/FAQ-Data/Unity3dGameDevFaqData';
import FAQs from 'components/layout/Footer-Components/FAQsWithImage/FAQs';
import Footer from 'components/layout/footer';

export default function page() {
  return (
    <div>
      <FsUnity3dGameDev />
      <Why />
      <ComprehensiveGameDevServices />
      <IdeasToReality />
      <HireVarietyTechStack />
      <SuccessStories />
      <RelatedBlogs />
      <FAQs
        pageTitle='FAQ'
        pageSubtitle='Lorem ipsum dolor sit amet consectetur. Phasellus tincidunt montes sit vitae.'
        faqData={Unity3dGameDevFaqData}
      />
      <Footer />
    </div>
  );
}
