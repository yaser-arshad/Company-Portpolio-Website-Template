import React from 'react';

import HomePageFooter from 'components/layout/Footer-Components/Home-Page-Footer/HomePageFooter';

import HireForVarietyTechStackHome from './components/HireForVarietyTechStackHome';
import HireTopDeveloper from './components/HireTopDevelopers';
import IrHiringProcess from './components/IrHiringProcess';
import RelatedBlogs from './components/RelatedBlogs';
import RequestTalent from './components/RequestTalent';
import SliderImplementation from './components/SliderImplementation';
import SuccessStories from './components/SuccessStories';
import Why from './components/Why';
import WhyChooseStaffAugmentation from './components/WhyChooseStaffAugmentation';
import FsHomePage from './components/firstScreens/FsHomePage';

const Page = () => {
  return (
    <>
      <FsHomePage />
      <Why />
      <IrHiringProcess />
      <RequestTalent />
      <WhyChooseStaffAugmentation />
      {/* <HireTopDeveloper /> */}
      <SliderImplementation />
      <HireForVarietyTechStackHome />
      <SuccessStories />
      <RelatedBlogs />
      <HomePageFooter />
    </>
  );
};

export default Page;
