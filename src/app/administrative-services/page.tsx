import React from 'react';

import HireVarietyTechStack from 'app/components/HireVarietyTechStack';
import RelatedBlogs from 'app/components/RelatedBlogs';
import RolesWeOffer from 'app/components/RolesWeOffer';
import StreamlinedProcessWithFloatImages from 'app/components/StreamlinedProcessWithFloatImages';
import SuccessStories from 'app/components/SuccessStories';
import Why from 'app/components/Why';
import FsAdministrativeServices from 'app/components/firstScreens/FsAdministrativeServices';

import { AdminServFaqData } from 'components/layout/Footer-Components/FAQ-Data/AdminServFaqData';
import FAQs from 'components/layout/Footer-Components/FAQsWithImage/FAQs';
import Footer from 'components/layout/footer';

export default function page() {
  return (
    <div>
      <FsAdministrativeServices />
      <Why />
      <RolesWeOffer />
      <StreamlinedProcessWithFloatImages />
      <HireVarietyTechStack />
      <SuccessStories />
      <RelatedBlogs />
      <FAQs
        pageTitle='FAQ'
        pageSubtitle='Lorem ipsum dolor sit amet consectetur. Phasellus tincidunt montes sit vitae.'
        faqData={AdminServFaqData}
      />
      <Footer />
    </div>
  );
}
