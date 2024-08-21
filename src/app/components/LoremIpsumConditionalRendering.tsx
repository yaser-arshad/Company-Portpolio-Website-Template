'use client';

import React, { useState } from 'react';

import Link from 'next/link';

const paragraphs = [
  {
    id: 'heading1',
    sideHeading: 'NFT Development',
    mainArea: {
      mainHeading: 'Monetize Your Creativity',
      paragraph: `Elevate your digital assets with our unique NFT Development service. We create irreplaceable tokens that
                validate ownership and authenticity, giving your business a competitive edge in the digital marketplace.`,
      btnText: `Let's go`,
      btnRoute: '/crypto-wallet-development',
    },
  },
  {
    id: 'heading2',
    sideHeading: 'Crowdfunding Platforms',
    mainArea: {
      mainHeading: 'Empower Your Vision',
      paragraph: `Propel your ideas into reality with our Blockchain-based Crowdfunding Platforms. We provide secure,
                transparent, and efficient fundraising solutions that foster trust and attract investors.`,
      btnText: `Let's go`,
      btnRoute: '/hire-ai-ml', //dummy
    },
  },
  {
    id: 'heading3',
    sideHeading: 'Game Apps',
    mainArea: {
      mainHeading: 'Engage Your Audience',
      paragraph: `Immerse users in your gaming universe with our Blockchain Game App service. We integrate blockchain
                technology for secure transactions and true ownership of in-game assets, enhancing user engagement.`,
      btnText: `Let's go`,
      btnRoute: '',
    },
  },
  {
    id: 'heading4',
    sideHeading: 'DeFi Development',
    mainArea: {
      mainHeading: 'Unlock Financial Freedom',
      paragraph: `Revolutionize your financial services with our DeFi Development service. We build decentralized
                platforms that offer open, efficient, and secure financial services, empowering your clients to control
                their financial destiny.`,
      btnText: `Let's go`,
      btnRoute: '',
    },
  },
  {
    id: 'heading5',
    sideHeading: 'DAO Development',
    mainArea: {
      mainHeading: 'Decentralize Decision-Making',
      paragraph: `Democratize your organization with our DAO Development service. We create decentralized autonomous
                organizations that ensure transparent governance and consensus-driven decision-making, fostering trust
                and collaboration.`,
      btnText: `Let's go`,
      btnRoute: '',
    },
  },
];

const LoremIpsumConditionalRendering: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState<string | null>('heading1');
  function renderedParagraph() {
    if (activeComponent === 'heading1') {
      return paragraphs[0].mainArea;
    } else if (activeComponent === 'heading2') {
      return paragraphs[1].mainArea;
    } else if (activeComponent === 'heading3') {
      return paragraphs[2].mainArea;
    } else if (activeComponent === 'heading4') {
      return paragraphs[3].mainArea;
    } else {
      return paragraphs[4].mainArea;
    }
  }
  const handleButtonClick = (componentName: string) => {
    setActiveComponent(componentName);
  };
  return (
    <div className=' w-full bg-primary pb-30 '>
      <h1 className=' font-secondary font-semibold text-5xl  text-center pt-30 text-white'>
        Drive Growth and Efficiency with Blockchain Technology
      </h1>
      <p className=' w-3/5 font-primary font-normal text-lg mx-auto text-center mt-3 text-white'>
        As a leading company in blockchain application development, we specialize in delivering personalized blockchain
        solutions designed specifically to meet your business objectives. Our agile methodology puts your unique needs
        at the forefront, enabling us to craft customized solutions that fuel innovation in your business processes.
      </p>

      <div className='grid grid-cols-12 mt-14'>
        <div className='col-span-3 col-start-2 text-white flex flex-col justify-between items-center'>
          {paragraphs.map((item) => {
            return (
              <div key={item.id} className='flex justify-center'>
                <h3
                  className={`font-primary inline-block text-center hover:cursor-pointer ${
                    activeComponent === item.id ? 'font-medium text-2xl' : 'font-thin text-xl opacity-50'
                  }`}
                  onClick={() => {
                    handleButtonClick(item.id);
                  }}
                >
                  {item.sideHeading}
                  {activeComponent === item.id && (
                    <span>
                      <hr className='w-full h-2 mt-2 bg-white rounded-full' />
                    </span>
                  )}
                </h3>
              </div>
            );
          })}
        </div>

        <div className='col-span-6 bg-white rounded-3xl px-16 py-16 '>
          <div>
            <h1 className=' font-primary font-bold text-4xl text-bg-primary'>{renderedParagraph().mainHeading}</h1>
            <p className=' pt-7 font-primary text-2xl text-[#5A6476]'>{renderedParagraph().paragraph}</p>
            <Link href={renderedParagraph().btnRoute}>
              <button className='w-36 h-10 capitalize font-semibold text-base text-white bg-primary hover:bg-btn-dark-primary  rounded-3xl mt-8'>
                {renderedParagraph().btnText}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoremIpsumConditionalRendering;
