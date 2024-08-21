import React from 'react';

import HireVarietyTechStack from 'app/components/HireVarietyTechStack';
import RelatedBlogs from 'app/components/RelatedBlogs';
import RolesWeOffer from 'app/components/RolesWeOffer';
import StreamlinedProcessWithFloatImages from 'app/components/StreamlinedProcessWithFloatImages';
import SuccessStories from 'app/components/SuccessStories';
import Why from 'app/components/Why';
import FsHirePersonalAssistent from 'app/components/firstScreens/FsHirePersonalAssistent';

import { HirePersonalAssistantFaqData } from 'components/layout/Footer-Components/FAQ-Data/HirePersonalAssistantFaqData';
import FAQs from 'components/layout/Footer-Components/FAQsWithImage/FAQs';
import Footer from 'components/layout/footer';

export default function page() {
  return (
    <div>
      <FsHirePersonalAssistent />
      <Why />
      <RolesWeOffer />
      <StreamlinedProcessWithFloatImages />
      <HireVarietyTechStack />
      <SuccessStories />
      <RelatedBlogs />
      <FAQs pageTitle={'FAQ'} pageSubtitle={''} faqData={HirePersonalAssistantFaqData} />
      <Footer />
    </div>
  );
}
