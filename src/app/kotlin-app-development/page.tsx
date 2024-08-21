import React from 'react';

import HireVarietyTechStack from 'app/components/HireVarietyTechStack';
import IndustriesWeServe from 'app/components/IndustriesWeServe';
import { OurXAppDevServices } from 'app/components/OurXAppDevServices';
import ProcessWeFollow from 'app/components/ProcessWeFollow';
import RelatedBlogs from 'app/components/RelatedBlogs';
import SuccessStories from 'app/components/SuccessStories';
import Why from 'app/components/Why';
import FsKotlinAppDevServices from 'app/components/firstScreens/FsKotlinAppDevServices';
import { KotlinAppDevContentData } from 'app/core/_data';
import { industriesDataKotlin } from 'app/core/_data';

import { KotlinAppDevFaqData } from 'components/layout/Footer-Components/FAQ-Data/KotlinAppDevFaqData';
import FAQs from 'components/layout/Footer-Components/FAQsWithImage/FAQs';
import Footer from 'components/layout/footer';

export default function page() {
  return (
    <div>
      <FsKotlinAppDevServices />

      <Why />
      <OurXAppDevServices data={KotlinAppDevContentData} />
      <ProcessWeFollow />
      <IndustriesWeServe data={industriesDataKotlin} />
      <HireVarietyTechStack />
      <SuccessStories />
      <RelatedBlogs />
      <FAQs
        pageTitle='FAQ'
        pageSubtitle='Lorem ipsum dolor sit amet consectetur. Phasellus tincidunt montes sit vitae.'
        faqData={KotlinAppDevFaqData}
      />
      <Footer />
    </div>
  );
}
