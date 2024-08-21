import React from 'react';

import BenefitsOfBlank from 'app/components/BenefitsOfBlank';
import RelatedBlogs from 'app/components/RelatedBlogs';
import Why from 'app/components/Why';
import FsEmbraceFixPriceControl from 'app/components/firstScreens/FsEmbraceFixPriceControl';
import { benefitsOfBlankCardArrayFixedPriceModel, benefitsOfBlankTitleDescFixedPriceModel } from 'app/core/_data';

import { FixedPriceFaqData } from 'components/layout/Footer-Components/FAQ-Data/FixedPriceModelFaqData';
import FAQs from 'components/layout/Footer-Components/FAQsWithImage/FAQs';
import Footer from 'components/layout/footer';

import SuccessStories from '../components/SuccessStories';

export default function page() {
  return (
    <div>
      <FsEmbraceFixPriceControl />
      <Why />
      <BenefitsOfBlank
        cardsArray={benefitsOfBlankCardArrayFixedPriceModel}
        titleDescObj={benefitsOfBlankTitleDescFixedPriceModel}
      />
      <SuccessStories />
      <RelatedBlogs />
      <FAQs
        pageTitle='FAQ'
        pageSubtitle='Lorem ipsum dolor sit amet consectetur. Phasellus tincidunt montes sit vitae.'
        faqData={FixedPriceFaqData}
      />
      <Footer />
    </div>
  );
}
