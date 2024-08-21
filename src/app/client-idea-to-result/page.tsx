import React from 'react';

import DeliverClientIdea from 'app/components/DeliverClientIdea/DeliverClientIdea';
import HireVarietyTechStack from 'app/components/HireVarietyTechStack';

import { MissingContentFaqData } from 'components/layout/Footer-Components/FAQ-Data/MissingContentFaqData';
import FAQs from 'components/layout/Footer-Components/FAQsWithImage/FAQs';
import Footer from 'components/layout/footer';

import RelaetedBlogs from '../components/RelatedBlogs';
import SuccessStories from '../components/SuccessStories';

export default function page() {
  return (
    <div>
      <DeliverClientIdea />
      <HireVarietyTechStack />
      <SuccessStories />
      <RelaetedBlogs />
      <FAQs
        pageTitle='FAQ'
        pageSubtitle='Lorem ipsum dolor sit amet consectetur. Phasellus tincidunt montes sit vitae.'
        faqData={MissingContentFaqData}
      />
      <Footer />
    </div>
  );
}
