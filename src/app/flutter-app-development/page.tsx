import React from 'react';

import HireVarietyTechStack from 'app/components/HireVarietyTechStack';
import IndustriesWeServe from 'app/components/IndustriesWeServe';
import { OurXAppDevServices } from 'app/components/OurXAppDevServices';
import ProcessWeFollow from 'app/components/ProcessWeFollow';
import Why from 'app/components/Why';
import FsFlutterAppDevServices from 'app/components/firstScreens/FsFlutterAppDevServices';
import { FlutterAppDevContentData } from 'app/core/_data';
import { industriesDataFlutter } from 'app/core/_data';

import { FlutterAppDevFaqData } from 'components/layout/Footer-Components/FAQ-Data/FlutterAppDevFaqData';
import FAQs from 'components/layout/Footer-Components/FAQsWithImage/FAQs';
import Footer from 'components/layout/footer';

import RelaetedBlogs from '../components/RelatedBlogs';
import SuccessStories from '../components/SuccessStories';

export default function page() {
  return (
    <div>
      <FsFlutterAppDevServices />
      <Why />
      <OurXAppDevServices data={FlutterAppDevContentData} />
      <ProcessWeFollow />
      <IndustriesWeServe data={industriesDataFlutter} />
      <HireVarietyTechStack />
      <SuccessStories />
      <RelaetedBlogs />
      <FAQs
        pageTitle='FAQ'
        pageSubtitle='Lorem ipsum dolor sit amet consectetur. Phasellus tincidunt montes sit vitae.'
        faqData={FlutterAppDevFaqData}
      />
      <Footer />
    </div>
  );
}
