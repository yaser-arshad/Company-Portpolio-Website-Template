import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import Button from 'components/core-ui/button/button';

const rolesWeOfferAdminServices = [
  {
    title: 'Office Manager',
    image: '/images/female-office-worker-half-half-green.svg',
    href: `hire-office-manager`,
    desc: `We offer the perfect solution to your office management needs: highly skilled and experienced Office Managers. Our team can streamline your operations, boost efficiency, and ensure a smooth workflow. Let's connect today!`,
  },
  {
    title: 'Administrative Assistant',
    image: '/images/female-office-worker-long-hair-blonde.svg',
    href: `hire-administrative-assistant`,
    desc: `We offer the perfect solution - a highly skilled Administrative Assistant! Delegate scheduling, communication, and more, freeing you to focus on growing your business. Contact us now and get connected.`,
  },
  {
    title: 'Executive Assistant',
    image: '/images/male-office-worker-curly-hair.svg',
    href: `hire-executive-assistant`,
    desc: `We offer top-tier Executive Assistants who become your trusted partners in achieving peak productivity. Contact us now and let's discuss your specific needs!`,
  },
  {
    title: 'Administrative Coordinator',
    image: '/images/male-office-worker-white-red-tie.svg',
    href: `hire-administrative-coordinator`,
    desc: `We offer the best fit for your organization: highly skilled and experienced Administrative Coordinators. They'll keep your work running smoothly. Hire us today and let them become your right-hand person.`,
  },
  {
    title: 'Office Administrator',
    image: '/images/male-office-worker-with-side-parting.svg',
    href: `hire-office-administrator`,
    desc: `We offer the perfect solution for your team: multi-talented Office Assistants! They'll handle all the tasks you need completed, freeing you to focus on what matters most - growing your business! Hire us today!`,
  },
  {
    title: 'Operations Assistant',
    image: '/images/female-office-worker-half-half-green.svg',
    href: `hire-operations-assistant`,
    desc: `We offer highly skilled Operations Assistants to streamline your workflow and boost efficiency. Invest in your success - hire the best with us!`,
  },
  {
    title: 'Office Coordinator',
    image: '/images/female-office-worker-green-tops-red-necklace.svg',
    href: `hire-office-coordinator`,
    desc: `We offer the perfect highly qualified and experienced Office Coordinators. Our coordinators seamlessly manage daily tasks, ensuring smooth work. Hire us today!`,
  },
  {
    title: 'Administrative Specialist',
    image: '/images/female-office-worker-bob-cut-mid-parting.svg',
    href: `hire-administrative-specialist`,
    desc: `We offer skilled and organised Administrative Specialists! They'll handle your workload, freeing you to focus on core business activities. Invest in your success, hire us today!`,
  },
  {
    title: 'Personal Assistant',
    image: '/images/male-office-worker-without-jacket.svg',
    href: `hire-personal-assistant`,
    desc: `Don't let daily tasks hold you back from achieving your goals. At IR Solutions, we offer a team of exceptionally skilled Personal Assistants ready to assist you.`,
  },
  {
    title: 'Office Assistant',
    image: '/images/male-office-worker-not-bald-and-long-hair.svg',
    href: `hire-office-assistent`,
    desc: `We offer a team of experienced professionals ready to jump in and support your busy work. Hire us today and make your work life easier!`,
  },
];

export default function RolesWeOffer() {
  return (
    <div className='bg-[#E6F2FD] py-24'>
      <div className='text-center font-primary w-7/12 mx-auto'>
        <h1 className='capitalize text-5xl font-bold'>
          <span className='text-primary'>Roles</span> we offer
        </h1>
        <p className='text-lg mt-8'>
          We offer multiple roles tailored to your needs, hire them to enhance your business operations, drive growth,
          and ensure long-term success.
        </p>
      </div>
      <div>
        <div className='grid grid-cols-3 gap-6 w-9/12 mx-auto mt-28'>
          {rolesWeOfferAdminServices.map((item) => {
            return <RolesCard item={item} key={item.title} />;
          })}
          <div className='bg-primary col-span-2 col-start-2 rounded-xl flex'>
            <div className='p-8 basis-[54%]'>
              <h3 className='text-white font-medium text-2xl'>Empowering Your Business with Expert Solutions</h3>
              <Link href={'/contact-us'}>
                <Button variant='default' className='rounded-full border-0 text-[11px] font-bold mt-4 px-10'>
                  Get A Quote
                </Button>
              </Link>
            </div>
            <div className='relative basis-[46%]'>
              <Image
                src='/images/2d-employees-group-of-3.svg'
                alt=''
                fill
                className='absolute w-full h-full pt-10 pe-20'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RolesCard({ item }: any) {
  return (
    <Link href={`/${item.href}`} className='bg-white relative rounded-xl p-6 pb-7 hover:shadow-xl'>
      <div className='absolute bg-[#EAEAF6] text-black top-12 left-14 px-4 py-3 bg-opacity-50 backdrop-blur-sm rounded-lg z-10'>
        <h3 className=' text-primary font-bold text-base'>{item.title}</h3>
      </div>
      <Image src='/images/halfarrow.svg' alt='' width={20} height={20} className='absolute right-8 top-5 z-0' />
      <div className='flex flex-col block'>
        <div className='relative w-14 h-14'>
          <Image src={item.image} alt='' fill className='absolute' />
        </div>
        <p className='text-sm mt-7'>{item.desc}</p>
      </div>
    </Link>
  );
}
