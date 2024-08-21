import React from 'react';

import ComprehensiveGameDevServices from 'app/components/ComprehensiveGameDevServices';
import HireVarietyTechStack from 'app/components/HireVarietyTechStack';
import IdeasToReality from 'app/components/IdeasToReality';
import Why from 'app/components/Why';
import FsGameDevServices from 'app/components/firstScreens/FsGameDevServices';

import { GameDevServicesFaqData } from 'components/layout/Footer-Components/FAQ-Data/GameDevServicesFaqData';
import FAQs from 'components/layout/Footer-Components/FAQsWithImage/FAQs';
import Footer from 'components/layout/footer';

import RelaetedBlogs from '../components/RelatedBlogs';
import SuccessStories from '../components/SuccessStories';

export default function page() {
  return (
    <div>
      <FsGameDevServices />
      <Why />
      <ComprehensiveGameDevServices />
      <IdeasToReality />
      <HireVarietyTechStack />
      <SuccessStories />
      <RelaetedBlogs />
      <FAQs
        pageTitle='FAQ'
        pageSubtitle='Lorem ipsum dolor sit amet consectetur. Phasellus tincidunt montes sit vitae.'
        faqData={GameDevServicesFaqData}
      />
      <Footer />
    </div>
  );
}
