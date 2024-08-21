import React from 'react';

import TermsandPolicy from 'app/components/TermsAndPolicy';

import { ObjRecogDevFaqData } from 'components/layout/Footer-Components/FAQ-Data/ObjRecogDevFaqData';
import FAQs from 'components/layout/Footer-Components/FAQsWithImage/FAQs';
import Footer from 'components/layout/footer';

import { contentToC, headingToC } from '../core/_data';

export default function page() {
  return (
    <div>
      <TermsandPolicy heading={headingToC} array={contentToC} />

      <FAQs
        pageTitle='FAQ'
        pageSubtitle='Lorem ipsum dolor sit amet consectetur. Phasellus tincidunt montes sit vitae.'
        faqData={ObjRecogDevFaqData}
      />
      <Footer />
    </div>
  );
}
