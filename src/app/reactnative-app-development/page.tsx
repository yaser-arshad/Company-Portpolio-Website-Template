import React from 'react';

import HireVarietyTechStack from 'app/components/HireVarietyTechStack';
import IndustriesWeServe from 'app/components/IndustriesWeServe';
import { OurXAppDevServices } from 'app/components/OurXAppDevServices';
import ProcessWeFollow from 'app/components/ProcessWeFollow';
import RelatedBlogs from 'app/components/RelatedBlogs';
import SuccessStories from 'app/components/SuccessStories';
import Why from 'app/components/Why';
import FsReactNativeAppDevServices from 'app/components/firstScreens/FsReactNativeAppDevServices';
import { ReactNativeAppDevContentData } from 'app/core/_data';
import { industriesDataReactNative } from 'app/core/_data';

import { ReactNativeAppDevFaqData } from 'components/layout/Footer-Components/FAQ-Data/ReactNativeAppDevFaqData';
import FAQs from 'components/layout/Footer-Components/FAQsWithImage/FAQs';
import Footer from 'components/layout/footer';

export default function page() {
  return (
    <div>
      <FsReactNativeAppDevServices />

      <Why />
      <OurXAppDevServices data={ReactNativeAppDevContentData} />
      <ProcessWeFollow />
      <IndustriesWeServe data={industriesDataReactNative} />
      <HireVarietyTechStack />
      <SuccessStories />
      <RelatedBlogs />
      <FAQs
        pageTitle='FAQ'
        pageSubtitle='Lorem ipsum dolor sit amet consectetur. Phasellus tincidunt montes sit vitae.'
        faqData={ReactNativeAppDevFaqData}
      />
      <Footer />
    </div>
  );
}
