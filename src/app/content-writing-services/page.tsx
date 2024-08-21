import React from 'react';

import DigitalMarketingScreen3 from 'app/components/DigitalMarketingServices/components/DigitalMarketingScreen3';
import DigitalMarketingScreen4 from 'app/components/DigitalMarketingServices/components/DigitalMarketingScreen4';
import DigitalMarketingScreen5 from 'app/components/DigitalMarketingServices/components/DigitalMarketingScreen5';
import HireVarietyTechStack from 'app/components/HireVarietyTechStack';
import IndustriesWeServe from 'app/components/IndustriesWeServe';
import ProcessWeFollow from 'app/components/ProcessWeFollow';
import RelatedBlogs from 'app/components/RelatedBlogs';
import SuccessStories from 'app/components/SuccessStories';
import UnleashGrowth from 'app/components/UnleashGrowth';
import Why from 'app/components/Why';
import FsContentWriting from 'app/components/firstScreens/FsContentWriting';
import { unleashGrowthData } from 'app/core/_data';

import { ContentWritingFaqData } from 'components/layout/Footer-Components/FAQ-Data/ContentWritingFaqData';
import FAQs from 'components/layout/Footer-Components/FAQsWithImage/FAQs';
import Footer from 'components/layout/footer';

export default function page() {
  return (
    <div>
      <FsContentWriting />
      <Why />
      <DigitalMarketingScreen3 />
      <DigitalMarketingScreen4 />
      <DigitalMarketingScreen5 />
      <HireVarietyTechStack />
      <SuccessStories />
      <RelatedBlogs />
      <FAQs pageTitle={'FAQ'} pageSubtitle={''} faqData={ContentWritingFaqData} />
      <Footer />
    </div>
  );
}
