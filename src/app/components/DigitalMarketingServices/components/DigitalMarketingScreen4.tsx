import React from 'react';

export default function DigitalMarketingScreen4() {
  return (
    <div className=' w-full mt-5 text-black bg-[#E6F2FD] px-14'>
      <h1 className=' font-secondary font-semibold text-5xl  text-center pt-20'>
        Our Digital <span className=' text-[#238FFF]'>Marketing</span> Services
      </h1>
      <p className=' w-3/5 font-primary font-normal text-lg mx-auto text-center mt-5'>
        We are a company that understands the value of having an online presence, and we ensure that you have the
        strongest marketing plan to turn your viewers into customers.
      </p>

      <div className=' bg-primary rounded-t-3xl grid grid-cols-3 w-full mt-16'>
        <div className=' w-full text-white py-14  border-r-white border-r-[1px] border-b-white border-b-[1px] '>
          <div className='flex justify-between w-96 mx-auto'>
            <div className=' w-16'>
              <img className=' ' src='/images/seo.svg' alt='' />
            </div>
            <div className=' w-80 pt-2 pl-3'>
              <h2 className=' font-secondary font-bold text-2xl'>Search Engine Optimization</h2>
              <p className=' font-primary font-normal text-base pt-4'>
                We improve the structure and content of your websites to raise their search engine rankings. This
                increases organic traffic and visibility and attracts more qualified leads to your company.
              </p>
            </div>
          </div>
        </div>

        <div className=' w-full text-white py-14  border-r-white border-r-[1px] border-b-white border-b-[1px] '>
          <div className='flex justify-between w-96 mx-auto'>
            <div className=' w-16'>
              <img className=' ' src='/images/ppc.svg' alt='' />
            </div>
            <div className=' w-80 pt-2 pl-3'>
              <h2 className=' font-secondary font-bold text-2xl'>PPC</h2>
              <p className=' font-primary font-normal text-base pt-4'>
                We design and oversee focused advertising programs that guarantee economical marketing by charging only
                for clicks, optimizing return on investment, and generating instant traffic.
              </p>
            </div>
          </div>
        </div>

        <div className=' w-full text-white py-14  border-r-white border-r-[1px] border-b-white border-b-[1px] rounded-se-2xl '>
          <div className='flex justify-between w-96 mx-auto'>
            <div className=' w-16'>
              <img className=' ' src='/images/social-media.svg' alt='' />
            </div>
            <div className=' w-80 pt-2 pl-3'>
              <h2 className=' font-secondary font-bold text-2xl'>SMM</h2>
              <p className=' font-primary font-normal text-base pt-4'>
                We increase website traffic, cultivate client loyalty, and engage your audience on social media channels
                by raising brand recognition.
              </p>
            </div>
          </div>
        </div>

        <div className=' w-full text-white py-14  border-r-white border-r-[1px] border-b-white border-b-[1px]'>
          <div className='flex justify-between w-96 mx-auto'>
            <div className=' w-16'>
              <img className=' ' src='/images/content-writing.svg' alt='' />
            </div>
            <div className=' w-80 pt-2 pl-3'>
              <h2 className=' font-secondary font-bold text-2xl'>Content Writing</h2>
              <p className=' font-primary font-normal text-base pt-4'>
                Through compelling narrative, we provide meaningful, pertinent material that will draw in and keep your
                target audience while boosting brand authority and encouraging profitable consumer behaviors.
              </p>
            </div>
          </div>
        </div>

        <div className=' w-full text-white py-14  border-r-white border-r-[1px] border-b-white border-b-[1px] '>
          <div className='flex justify-between w-96 mx-auto'>
            <div className=' w-16'>
              <img className=' ' src='/images/cro.svg' alt='' />
            </div>
            <div className=' w-80 pt-2 pl-3'>
              <h2 className=' font-secondary font-bold text-2xl'>CPO</h2>
              <p className=' font-primary font-normal text-base pt-4'>
                We compute and optimize your campaign expenses, offering insights to boost budget effectiveness and
                raise the profitability and overall performance of your campaign.
              </p>
            </div>
          </div>
        </div>

        <div className=' w-full text-white py-14  border-r-white border-r-[1px] border-b-white border-b-[1px] '>
          <div className='flex justify-between w-96 mx-auto'>
            <div className=' w-16'>
              <img className=' ' src='/images/email-marketing.svg' alt='' />
            </div>
            <div className=' w-80 pt-2 pl-3'>
              <h2 className=' font-secondary font-bold text-2xl'>Email Marketing</h2>
              <p className=' font-primary font-normal text-base pt-4'>
                To cultivate leads, advertise products, and establish enduring connections with clients, we create and
                distribute targeted email campaigns that encourage conversions and recurring business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
