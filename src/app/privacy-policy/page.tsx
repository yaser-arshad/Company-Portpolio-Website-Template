import React from 'react';

import TermsandPolicy from 'app/components/TermsAndPolicy';
import { headingPrivacyPolicy } from 'app/core/_data';
import { contentPrivacyPolicy } from 'app/core/_data';

import { PrivacyFaqData } from 'components/layout/Footer-Components/FAQ-Data/PrivacyFaqData';
import FAQs from 'components/layout/Footer-Components/FAQsWithImage/FAQs';
import Footer from 'components/layout/footer';

export default function page() {
  return (
    <div>
      <TermsandPolicy heading={headingPrivacyPolicy} array={contentPrivacyPolicy} />
      <FAQs
        pageTitle='FAQ'
        pageSubtitle='Lorem ipsum dolor sit amet consectetur. Phasellus tincidunt montes sit vitae.'
        faqData={PrivacyFaqData}
      />
      <Footer />
    </div>
  );
}
