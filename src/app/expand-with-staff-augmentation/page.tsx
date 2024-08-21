import React from 'react';

import BenefitsOfBlank from 'app/components/BenefitsOfBlank';
import OurTeamOfferings from 'app/components/OurTeamOfferings';
import RelatedBlogs from 'app/components/RelatedBlogs';
import Why from 'app/components/Why';
import FsExpandTeamsWithStaffAugmentation from 'app/components/firstScreens/FsExpandTeamsWithStaffAugmentation';
import { benefitsOfBlankCardArrayStaffAugmentation, benefitsOfBlankTitleDescStaffAug } from 'app/core/_data';

import { StaffAugFaqData } from 'components/layout/Footer-Components/FAQ-Data/StaffAugFaqData';
import FAQs from 'components/layout/Footer-Components/FAQsWithImage/FAQs';
import Footer from 'components/layout/footer';

import SuccessStories from '../components/SuccessStories';

export default function page() {
  return (
    <div>
      <FsExpandTeamsWithStaffAugmentation />
      <Why />
      <BenefitsOfBlank
        cardsArray={benefitsOfBlankCardArrayStaffAugmentation}
        titleDescObj={benefitsOfBlankTitleDescStaffAug}
      />
      <OurTeamOfferings />
      <SuccessStories />
      <RelatedBlogs />

      <FAQs
        pageTitle='FAQ'
        pageSubtitle='Lorem ipsum dolor sit amet consectetur. Phasellus tincidunt montes sit vitae.'
        faqData={StaffAugFaqData}
      />
      <Footer />
    </div>
  );
}
