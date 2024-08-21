import React from 'react';

import HireVarietyTechStack from 'app/components/HireVarietyTechStack';
import IndustriesWeServe from 'app/components/IndustriesWeServe';
import ProcessWeFollow from 'app/components/ProcessWeFollow';
import RelatedBlogs from 'app/components/RelatedBlogs';
import SuccessStories from 'app/components/SuccessStories';
import Why from 'app/components/Why';
import FsShopifyDev from 'app/components/firstScreens/FsShopifyDev';
import { industriesDataShopify } from 'app/core/_data';

import { ShopifyDevFaqData } from 'components/layout/Footer-Components/FAQ-Data/ShopifyDevFaqData';
import FAQs from 'components/layout/Footer-Components/FAQsWithImage/FAQs';
import Footer from 'components/layout/footer';

export default function page() {
  return (
    <div>
      <FsShopifyDev />
      <Why />

      <ProcessWeFollow />
      <IndustriesWeServe data={industriesDataShopify} />
      <HireVarietyTechStack />
      <SuccessStories />
      <RelatedBlogs />

      <FAQs pageTitle='FAQ' faqData={ShopifyDevFaqData} pageSubtitle={''} />
      <Footer />
    </div>
  );
}
