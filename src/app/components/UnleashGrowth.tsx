'use client';

import React, { useRef, useState } from 'react';

import Button from 'components/core-ui/button/button';

// Define types
interface ContentSummary {
  href: string;
  title: string;
}

interface ContentBlock {
  id: string;
  heading: string;
  paragraphs: string[];
}

interface UnleashGrowthData {
  unleashGrowth: string;
  ir: string;
  blockchainExpertise: string;
  contentSummaryBlockChain: ContentSummary[];
  contentBlockChain: ContentBlock[];
}

interface UnleashGrowthProps {
  data: UnleashGrowthData;
}

const UnleashGrowth: React.FC<UnleashGrowthProps> = ({ data }) => {
  return (
    <div className='px-14'>
      <Heading data={data} />
      <Content data={data} />
    </div>
  );
};

const Heading: React.FC<{ data: UnleashGrowthData }> = ({ data }) => {
  return (
    <div className=''>
      <div className=' w-3/5 mt-10 mx-auto text-center'>
        <h1 className=' text-black font-semibold text-5xl font-secondary'>
          {data.unleashGrowth}
          <br />
          <span className=' text-primary'>{data.ir}</span> {data.blockchainExpertise}
        </h1>
      </div>
    </div>
  );
};

const Content: React.FC<{ data: UnleashGrowthData }> = ({ data }) => {
  const blockChainRef = useRef<HTMLDivElement | null>(null);
  const [border, setBorder] = useState<string>('#empower');

  return (
    <div className=' w-11/12 h-full flex justify-between mx-auto mt-28 mb-28 '>
      <div className=' w-3/12 h-96 bg-[#E6F2FD] pt-14 flex flex-col text-black'>
        <h1 className='pb-6 font-bold text-2xl ml-8'>Content</h1>
        {data.contentSummaryBlockChain.map((item) => (
          <a
            className={`mb-6 capitalize pl-8 text-lg border-l-[6px] ${
              border === item.href ? 'border-primary' : 'border-transparent'
            }`}
            href={item.href}
            onClick={() => setBorder(item.href)}
            key={item.href}
          >
            {item.title}
          </a>
        ))}
      </div>
      <div className=' w-3/4 pl-5 text-black'>
        {data.contentBlockChain.map((content) => (
          <ContentCard item={content} key={content.id} ref={blockChainRef} />
        ))}
        <p className=' font-bold text-4xl pt-6' id='whyIR'>
          Why Choose IR Solutions?
        </p>
        <ul className=' list-disc'>
          <li>
            <p className=' pt-5 text-2xl font-normal'>
              A Team of Top IoT Developers: Hire Remote developers who leverage the expertise of our highly skilled and
              experienced IoT developers, renowned for their innovative approach and dedication to quality.
            </p>
          </li>
          <li>
            <p className=' pt-5 text-2xl font-normal'>
              Agile Development Methodology: We employ an agile development approach, ensuring continuous collaboration
              and delivering solutions that meet your evolving needs.
            </p>
          </li>
          <li>
            <p className=' pt-5 text-2xl font-normal'>
              Scalable and Secure Solutions: Our IoT solutions are built with scalability and security in mind, ensuring
              they can adapt to your future growth and protect your valuable data.
            </p>
          </li>
        </ul>
        <ContentCard
          item={{
            id: 'readyQ',
            heading: 'Ready to unlock the transformative power of blockchain?',
            paragraphs: [
              "Contact IR Solutions today and schedule a consultation with our blockchain experts. We'll help you navigate the exciting world of blockchain and develop a customized strategy to drive growth and success for your business.",
            ],
          }}
        />
        <Button className='text-white font-semibold bg-primary hover:bg-btn-dark-primary border-0 py-3 w-56 mt-10'>
          Get A Quote
        </Button>
      </div>
    </div>
  );
};

const ContentCard = React.forwardRef<HTMLDivElement, { item: ContentBlock }>(({ item }, ref) => (
  <div id={item.id} className=' pt-6' ref={ref}>
    <h1 className=' font-bold text-4xl'>{item.heading}</h1>
    {item.paragraphs.map((para, i) => (
      <p className='pt-5 text-2xl font-normal' key={i}>
        {para}
      </p>
    ))}
  </div>
));

export default UnleashGrowth;
