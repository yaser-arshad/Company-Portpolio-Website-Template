import React from 'react';

import HireVarietyTechStack from 'app/components/HireVarietyTechStack';
import IndustriesWeServe from 'app/components/IndustriesWeServe';
import { OurXAppDevServices } from 'app/components/OurXAppDevServices';
import ProcessWeFollow from 'app/components/ProcessWeFollow';
import Why from 'app/components/Why';
import FsIosAppDevCompany from 'app/components/firstScreens/FsIosAppDevCompany';
import { iOSAppDevContentData } from 'app/core/_data';
import { industriesDataIOS } from 'app/core/_data';

import { IoSAppDevCompanyFaqData } from 'components/layout/Footer-Components/FAQ-Data/IosAppDevCompanyFaqData';
import FAQs from 'components/layout/Footer-Components/FAQsWithImage/FAQs';
import Footer from 'components/layout/footer';

import RelaetedBlogs from '../components/RelatedBlogs';
import SuccessStories from '../components/SuccessStories';

export default function page() {
  return (
    <div>
      <FsIosAppDevCompany />
      <Why />
      <OurXAppDevServices data={iOSAppDevContentData} />
      <ProcessWeFollow />
      <IndustriesWeServe data={industriesDataIOS} />
      <HireVarietyTechStack />
      <SuccessStories />
      <RelaetedBlogs />
      <FAQs
        pageTitle='FAQ'
        pageSubtitle='Lorem ipsum dolor sit amet consectetur. Phasellus tincidunt montes sit vitae.'
        faqData={IoSAppDevCompanyFaqData}
      />
      <Footer />
    </div>
  );
}
