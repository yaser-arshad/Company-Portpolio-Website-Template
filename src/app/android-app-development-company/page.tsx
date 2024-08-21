import React from 'react';

import HireVarietyTechStack from 'app/components/HireVarietyTechStack';
import IndustriesWeServe from 'app/components/IndustriesWeServe';
import { OurXAppDevServices } from 'app/components/OurXAppDevServices';
import ProcessWeFollow from 'app/components/ProcessWeFollow';
import Why from 'app/components/Why';
import FsAndroidAppDevServices from 'app/components/firstScreens/FsAndroidAppDevServices';
import { AndroidAppDevContentData } from 'app/core/_data';
import { industriesDataAndroid } from 'app/core/_data';

import { AndroidAppDevFaqData } from 'components/layout/Footer-Components/FAQ-Data/AndroidAppDevFaqData';
import FAQs from 'components/layout/Footer-Components/FAQsWithImage/FAQs';
import Footer from 'components/layout/footer';

import RelaetedBlogs from '../components/RelatedBlogs';
import SuccessStories from '../components/SuccessStories';

export default function page() {
  return (
    <div>
      <FsAndroidAppDevServices />

      <Why />
      <OurXAppDevServices data={AndroidAppDevContentData} />
      <ProcessWeFollow />
      <IndustriesWeServe data={industriesDataAndroid} />
      <HireVarietyTechStack />
      <SuccessStories />
      <RelaetedBlogs />
      <FAQs
        pageTitle='FAQ'
        pageSubtitle='Lorem ipsum dolor sit amet consectetur. Phasellus tincidunt montes sit vitae.'
        faqData={AndroidAppDevFaqData}
      />
      <Footer />
    </div>
  );
}
