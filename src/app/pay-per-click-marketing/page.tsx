import React from 'react';

import DigitalMarketingScreen3 from 'app/components/DigitalMarketingServices/components/DigitalMarketingScreen3';
import DigitalMarketingScreen4 from 'app/components/DigitalMarketingServices/components/DigitalMarketingScreen4';
import DigitalMarketingScreen5 from 'app/components/DigitalMarketingServices/components/DigitalMarketingScreen5';
import HireVarietyTechStack from 'app/components/HireVarietyTechStack';
import RelatedBlogs from 'app/components/RelatedBlogs';
import SuccessStories from 'app/components/SuccessStories';
import Why from 'app/components/Why';
import FsPayPerClick from 'app/components/firstScreens/FsPayPerClick';

import { PpcMarketingFaqData } from 'components/layout/Footer-Components/FAQ-Data/PpcMarketingFaqData';
import FAQs from 'components/layout/Footer-Components/FAQsWithImage/FAQs';
import Footer from 'components/layout/footer';

export default function page() {
  return (
    <div>
      <FsPayPerClick />
      <Why />
      <DigitalMarketingScreen3 />
      <DigitalMarketingScreen4 />
      <DigitalMarketingScreen5 />
      <HireVarietyTechStack />
      <SuccessStories />
      <RelatedBlogs />
      <FAQs
        pageTitle='FAQ'
        pageSubtitle='Lorem ipsum dolor sit amet consectetur. Phasellus tincidunt montes sit vitae.'
        faqData={PpcMarketingFaqData}
      />
      <Footer />
    </div>
  );
}
