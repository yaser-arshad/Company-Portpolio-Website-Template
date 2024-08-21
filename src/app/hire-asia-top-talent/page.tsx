import React from 'react';

import HireVarietyTechStack from 'app/components/HireVarietyTechStack';
import IrHiringArrow from 'app/components/IrHiringArrow';
import RelatedBlogs from 'app/components/RelatedBlogs';
import SuccessStories from 'app/components/SuccessStories';
import Why from 'app/components/Why';
import FsHireAsiaTopItTalent from 'app/components/firstScreens/FsHireAsiaTopItTalent';

import Footer from 'components/layout/footer';

export default function page() {
  return (
    <div>
      <FsHireAsiaTopItTalent />
      <Why />
      <IrHiringArrow />
      <HireVarietyTechStack />
      <SuccessStories />
      <RelatedBlogs />
      <Footer />
    </div>
  );
}
