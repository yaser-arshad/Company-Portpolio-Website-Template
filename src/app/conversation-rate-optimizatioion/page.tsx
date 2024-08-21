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
import FsConversationRateOptimisation from 'app/components/firstScreens/FsConversationRateOptimisation';
import { industriesData } from 'app/core/_data';

import { ConversionOptimizationFaqData } from 'components/layout/Footer-Components/FAQ-Data/ConversionOptimizationFaqData';
import FAQs from 'components/layout/Footer-Components/FAQsWithImage/FAQs';
import Footer from 'components/layout/footer';

export default function page() {
  return (
    <div>
      <FsConversationRateOptimisation />
      <Why />

      <DigitalMarketingScreen3 />
      <DigitalMarketingScreen4 />
      <DigitalMarketingScreen5 />
      <HireVarietyTechStack />
      <SuccessStories />
      <RelatedBlogs />
      <FAQs pageTitle={'FAQ'} pageSubtitle={''} faqData={ConversionOptimizationFaqData} />
      <Footer />
    </div>
  );
}
