import React from 'react';

import HireVarietyTechStack from 'app/components/HireVarietyTechStack';
import RelatedBlogs from 'app/components/RelatedBlogs';
import RolesWeOffer from 'app/components/RolesWeOffer';
import StreamlinedProcessWithFloatImages from 'app/components/StreamlinedProcessWithFloatImages';
import SuccessStories from 'app/components/SuccessStories';
import Why from 'app/components/Why';
import FsHireOfficeAdministrator from 'app/components/firstScreens/FsHireOfficeAdministrator';

import { HireOfficeAdministratorFaqData } from 'components/layout/Footer-Components/FAQ-Data/HireOfficeAdministratorFaqData';
import FAQs from 'components/layout/Footer-Components/FAQsWithImage/FAQs';
import Footer from 'components/layout/footer';

export default function page() {
  return (
    <div>
      <FsHireOfficeAdministrator />
      <Why />
      <RolesWeOffer />
      <StreamlinedProcessWithFloatImages />
      <HireVarietyTechStack />
      <SuccessStories />
      <RelatedBlogs />
      <FAQs pageTitle={'FAQ'} pageSubtitle={''} faqData={HireOfficeAdministratorFaqData} />
      <Footer />
    </div>
  );
}
