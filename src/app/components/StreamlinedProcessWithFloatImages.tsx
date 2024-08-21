import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import Button from 'components/core-ui/button/button';

const paragraphsStreamlinedProcessWithFloatImages = [
  {
    image: '/images/streamlinedprocess-describe-support-need.svg',
    paragraph: {
      logo: '/images/user-sun-icon.svg',
      heading: 'Describe your support needs.',
      desc: 'For our services, state your clear goals and needs.We commit to understanding what you need. Our team of professionals is ready to help and ensure that you receive the best services possible, customized to meet your unique requirements.',
      btnText: 'Get a quote',
      href: '/contact-us',
    },
  },
  {
    image: '/images/streamlinedprocess-get-to-know.svg',
    paragraph: {
      logo: '/images/book-alternate-icon.svg',
      heading: 'Get to know your talent.',
      desc: 'Explore our services and hire top talent that perfectly matches your needs. We do our best to provide top-notch support, making sure your needs get handled expertly and professionally.',
      btnText: 'Get a quote',
      href: '/contact-us',
    },
  },
  {
    image: '/images/streamlinedprocess-working-together.svg',
    paragraph: {
      logo: '/images/chat-messages-icon.svg',
      heading: 'Get started working together.',
      desc: 'We are determined to start connecting with you to offer our services and provide open communication, well-defined objectives, and the expertise needed. To get started, get in touch with us right now.',
      btnText: 'Get a quote',
      href: '/contact-us',
    },
  },
];

export default function StreamlinedProcessWithFloatImages() {
  return (
    <div className='py-24 border-b-2 border-[#D9D9D9]'>
      <div className='text-center font-bold w-6/12 mx-auto'>
        <h3 className='capitalize text-5xl'>
          Our streamlined <span className='text-primary'>process</span>
        </h3>
        <p className='text-lg mt-8'>
          Lorem ipsum dolor sit amet consectetur. Cras mauris adipiscing vel ut justo faucibus. Amet sodales facilisi
          consequat interdum dui.
        </p>
      </div>
      <div className='w-9/12 mx-auto mt-28'>
        {paragraphsStreamlinedProcessWithFloatImages.map((item, i) => {
          return <StreamlinedProcessWithFloatImagesCard item={item} index={i} key={item.paragraph.heading} />;
        })}
      </div>
    </div>
  );
}

function StreamlinedProcessWithFloatImagesCard({ item, index }: any) {
  return (
    <div className='grid grid-cols-2 gap-28 mt-20'>
      <div className={`col-span-1 px-2 py-5 ${index % 2 === 0 ? 'order-first' : 'order-last'}`}>
        <div className='relative w-20 h-20'>
          <Image src={item.paragraph.logo} alt='' fill className='' />
        </div>
        <h3 className='font-bold text-2xl capitalize my-7'>{item.paragraph.heading}</h3>
        <p className='my-4'>{item.paragraph.desc}</p>
        <Link href={item.paragraph.href}>
          <Button variant='default' className='bg-black text-white rounded-full py-5 uppercase font-semibold'>
            {item.paragraph.btnText}
          </Button>
        </Link>
      </div>
      <div className=' col-span-1'>
        <div className={`relative w-full h-full`}>
          <Image src={item.image} alt='' fill className='absolute object-cover overflow-visible' />
        </div>
      </div>
    </div>
  );
}
