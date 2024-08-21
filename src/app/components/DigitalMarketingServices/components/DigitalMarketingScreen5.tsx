import React from 'react';

import { Divider } from 'antd';

export default function DigitalMarketingScreen5() {
  return (
    <div className=' w-full mt-5 text-black'>
      <h1 className=' font-secondary font-semibold text-5xl  text-center pt-20'>Process We Follow</h1>
      <p className=' w-3/5 font-primary font-normal text-lg mx-auto text-center mt-5'>
        We are a company that understands the value of having an online presence, and we ensure that you have the
        strongest marketing plan to turn your viewers into customers.
      </p>
      <div className=' mt-16 px-36 w-full flex'>
        <div className='w-2/5 '>
          <div className='  w-full flex justify-end'>
            <img className=' w-[415px] h-64' src='/images/marketingplan.svg' alt='' />
          </div>

          <div className=' w-full pt-48'>
            <h1 className=' font-primary font-bold text-4xl text-right text-[#292930]'>Work Execution</h1>
            <p className=' font-primary font-normal text-lg text-right pt-5'>
              {' '}
              Our second step is Execution, which involves implementing the planned strategies in digital marketing,
              advertising, content creation, and social media. Key performance indicators, also called KPIs, are
              continuously monitored as campaigns launch to evaluate their effectiveness and implement data-driven
              adjustments as necessary. We ensure that our efforts remain aligned with objectives and achieve expected
              results by continuously optimizing approaches based on performance analytics and audience input.
            </p>
          </div>

          <div className=' w-full flex justify-start'>
            <img src='/images/threeimages.svg' alt='' />
          </div>
        </div>

        <div className=' w-1/5  flex flex-col     '>
          <img src='/images/one.svg' className=' h-28 w-28 mx-auto' alt='' />
          <Divider
            type='vertical'
            orientation='center'
            className='  mx-auto h-[400px]'
            style={{ borderLeft: '1px dashed #238FFF' }}
          />

          <img src='/images/two.svg' className=' h-28 w-28 mx-auto  ' alt='' />
          <Divider
            type='vertical'
            orientation='center'
            className='  mx-auto h-[300px]'
            style={{ borderLeft: '1px dashed #238FFF' }}
          />

          <img src='/images/three.svg' className=' h-28 w-28 mx-auto  ' alt='' />
        </div>

        <div className=' w-2/5 '>
          <div className='  w-full '>
            {/* <img className=' w-[415px] h-64'  src="images/marketingplan.svg" alt="" /> */}

            <h1 className=' font-primary font-bold text-4xl text-left text-[#292930]'>Marketing Plan</h1>
            <p className=' font-primary font-normal text-lg text-left pt-5'>
              {' '}
              In order to identify possibilities and obstacles, our marketing plan starts with comprehensive market
              research, which includes examining target demographics, market trends, and competitors to identify
              opportunities and challenges. The next stage after obtaining such information is to establish specific
              marketing goals that are in line with more general company objectives. These objectives assist us in
              determining how to successfully market our services to the suitable audience through the use of social
              media platforms and online marketing.
            </p>
          </div>

          <div className=' w-full flex justify-start pt-12'>
            <img className=' w-[415px] h-96' src='/images/threeimages2.svg' alt='' />
          </div>

          <div className=' w-full pt-36'>
            <h1 className=' font-primary font-bold text-4xl text-left text-[#292930]'>Growth & Scale</h1>
            <p className=' font-primary font-normal text-lg text-left pt-5'>
              {' '}
              To increase brand visibility and reach new clients for your company, our plan involves expanding into new
              markets and audience niches. You can expand your product range to include new features, services, or goods
              with our services for better responses to transforming your customer needs and profitable capitalization
              on new market trends. If you want your company to expand over the long term and stay competitive in
              rapidly evolving markets, it is important to invests in innovation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
