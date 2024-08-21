import React from 'react';

import HireVarietyTechStack from 'app/components/HireVarietyTechStack';
import RelatedBlogs from 'app/components/RelatedBlogs';
import RolesWeOffer from 'app/components/RolesWeOffer';
import StreamlinedProcessWithFloatImages from 'app/components/StreamlinedProcessWithFloatImages';
import SuccessStories from 'app/components/SuccessStories';
import Why from 'app/components/Why';
import FsHireAdministrativeSpecialist from 'app/components/firstScreens/FsHireAdministrativeSpecialist';

import Footer from 'components/layout/footer';

export default function page() {
  return (
    <div>
      <FsHireAdministrativeSpecialist />
      <Why />
      <RolesWeOffer />
      <StreamlinedProcessWithFloatImages />
      <HireVarietyTechStack />
      <SuccessStories />
      <RelatedBlogs />

      <Footer />
    </div>
  );
}
