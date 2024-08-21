import React from 'react';

import HireVarietyTechStack from 'app/components/HireVarietyTechStack';
import RelatedBlogs from 'app/components/RelatedBlogs';
import RolesWeOffer from 'app/components/RolesWeOffer';
import StreamlinedProcessWithFloatImages from 'app/components/StreamlinedProcessWithFloatImages';
import SuccessStories from 'app/components/SuccessStories';
import Why from 'app/components/Why';
import FsHireExectiveAssistent from 'app/components/firstScreens/FsHireExectiveAssistent';

import { HireExecutiveAssistantFaqData } from 'components/layout/Footer-Components/FAQ-Data/HireExecutiveAssistantFaqData';
import FAQs from 'components/layout/Footer-Components/FAQsWithImage/FAQs';
import Footer from 'components/layout/footer';

export default function page() {
  return (
    <div>
      <FsHireExectiveAssistent />
      <Why />
      <RolesWeOffer />
      <StreamlinedProcessWithFloatImages />
      <HireVarietyTechStack />
      <SuccessStories />
      <RelatedBlogs />
      <FAQs pageTitle={'FAQ'} pageSubtitle={''} faqData={HireExecutiveAssistantFaqData} />
      <Footer />
    </div>
  );
}
