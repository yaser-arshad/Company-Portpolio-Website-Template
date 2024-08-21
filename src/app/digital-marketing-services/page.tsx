import React from 'react';

import DigitalMarketingScreen3 from 'app/components/DigitalMarketingServices/components/DigitalMarketingScreen3';
import DigitalMarketingScreen4 from 'app/components/DigitalMarketingServices/components/DigitalMarketingScreen4';
import DigitalMarketingScreen5 from 'app/components/DigitalMarketingServices/components/DigitalMarketingScreen5';
import HireVarietyTechStack from 'app/components/HireVarietyTechStack';
import RelatedBlogs from 'app/components/RelatedBlogs';
import SuccessStories from 'app/components/SuccessStories';
import Why from 'app/components/Why';
import FsDigitalMarketingServices from 'app/components/firstScreens/FsDigitalMarketingServices';

import { DigitalMarketingFaqData } from 'components/layout/Footer-Components/FAQ-Data/DigitalMarketingFaqData';
import FAQs from 'components/layout/Footer-Components/FAQsWithImage/FAQs';
import Footer from 'components/layout/footer';

export default function page() {
  return (
    <div>
      <FsDigitalMarketingServices />
      <Why />
      <DigitalMarketingScreen3 />
      <DigitalMarketingScreen4 />
      <DigitalMarketingScreen5 />

      <HireVarietyTechStack />
      <SuccessStories />
      <RelatedBlogs />
      <FAQs pageTitle={'FAQ'} pageSubtitle={''} faqData={DigitalMarketingFaqData} />
      <Footer />
    </div>
  );
}
