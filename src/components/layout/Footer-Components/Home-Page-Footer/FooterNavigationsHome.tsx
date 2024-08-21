import React from 'react';

import { addressArray } from 'app/core/_data';
import { servicesLinkData } from 'app/core/_data';
import { supportLinkData } from 'app/core/_data';
import { socialMediaLinks } from 'app/core/_data';
import { phoneNumbers } from 'app/core/_data';
import Link from 'next/link';

export default function FooterNavigationsHome() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className='px-6 md:px-15 bg-bg-primary pt-8 md:pt-[5.875rem] pb-4 w-full '>
        <div className=' flex flex-col-reverse md:flex-row justify-between w-[100%]'>
          <div className=' w-full md:w-46 text-center md:text-start'>
            <h3 className=' text-primary md:text-white text-2xl md:text-1.5xl font-primary font-bold pb-5'>LOCATIONS</h3>

            {addressArray.map((address, index) => (
              <p key={index} className=' text-white text-base font-normal leading-6 w-full pb-1 md:pb-5'>
                {address.content}
                <img className='inline ml-1' src={address.imageSrc} alt={address.altText} />
              </p>
            ))}
          </div>
          <div className=' w-full md:w-46 text-center md:text-start'>
            <h3 className=' text-primary md:text-white text-2xl md:text-1.5xl font-primary font-bold pb-5'>SERVICES</h3>

            {servicesLinkData.map((link) => (
              <Link key={link.id} href={link.url} className={``}>
                <p
                  className={`text-white text-base font-normal leading-6 pb-1 md:pb-2
                  ${link.id > 5 && link.id < 9 ? 'inline-block' : 'block '}`}
                >
                  {link.text}
                  {(link.id === 6 || link.id === 7) && <span className='mx-1'>|</span>}
                </p>
              </Link>
            ))}
          </div>
          <div className=' w-full md:w-46 text-center md:text-start'>
            <h3 className=' text-primary md:text-white text-2xl md:text-1.5xl font-primary font-bold pb-5 '>SUPPORT</h3>
            {supportLinkData.map((link) => (
              <Link key={link.id} href={link.url}>
                <p className='text-white text-base font-normal leading-6 w-fullpb-1 md:pb-2'>{link.text}</p>
              </Link>
            ))}
          </div>

          <div className=' bg-primary w-full md:w-[35%]   rounded-[15px] flex flex-col   items-center  px-8'>
            <h1 className=' text-white text-center text-1.7xl pt-[39px] '>Get in Touch With Us.</h1>

            <div className=' flex flex-row justify-between pt-[36px] w-full '>
              <input
                className='w-[49%] h-11 rounded-lg  font-normal text-[#8D9BAA] text-xs py-[9px] pl-5 focus:outline-none'
                placeholder='Your Name*'
                type='text'
              />
              <input
                className='w-[49%] h-11 rounded-lg  font-normal text-[#8D9BAA] text-xs py-[9px] pl-5 focus:outline-none'
                placeholder='Email* '
                type='text'
              />
            </div>

            <input
              type='text'
              className=' w-full h-11 rounded-lg p-2 font-normal text-[#8D9BAA] text-xs mt-3 py-[9px] pl-5 focus:outline-none '
              placeholder='Subject*'
            />
            <textarea
              className='w-full h-44 rounded-lg p-2 font-normal text-[#8D9BAA]  text-xs mt-3 py-[9px] pl-[19px] focus:outline-none'
              name=''
              id=''
              placeholder='Your Message*'
            ></textarea>
            <button className=' w-full h-[53px] rounded-lg bg-primary  border-[1px] border-white  flex justify-center items-center mt-4 mb-5 text-white text-base hover:bg-[#1c87f9]  '>
              Lets Talk
            </button>
          </div>
        </div>

        <hr className=' w-full text-white opacity-20 mt-16' />

        <div className=' w-full pt-14 pb-[54px] flex flex-col md:flex-row justify-center md:justify-between md:items-center'>
          <div className=' flex justify-center md:justify-start gap-8  '>
            <h3 className='  font-bold text-white text-1.5xl'>Follow Us</h3>

            {socialMediaLinks.map((link) => (
              <a key={link.id} href={link.url} target='_blank'>
                <img className='' src={link.imageUrl} alt={link.altText} />
              </a>
            ))}
          </div>
          <div className=' md:w-[44%] grid grid-cols-2 md:flex md:justify-between'>
            {phoneNumbers.map((phone) => (
              <a href={`tel:${phone.phoneNumber}`} target='_system' key={phone.id} className='flex items-center gap-2'>
                <img className='mt-1 w-6 h-4 mr-2 ' src={phone.imageUrl} alt='' />
                <p className='text-white text-xl font-bold'>{phone.phoneNumber}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className=' w-full h-28 flex justify-between items-center bg-black px-14 relative   '>
        <div className=' w-1/3 flex justify-between items-center '>
          <Link href='/'>
            {' '}
            <img className='' src='/images/ir-white.svg' alt='' />
          </Link>

          <p className=' text-base font-normal text-[#8F8E98] flex    '>
            <span className=' text-4.2xl pt-[6px] mr-1 '>&copy;</span>{' '}
            <span>Copyrights {currentYear} IR Solutions All rights reserved.</span>
          </p>
        </div>
        <div className=' w-1/5 flex justify-between items-center'>
          <Link href='/privacy-policy'>
            <p className=' font-normal text-base text-[#8F8E98]'>Privacy Policy</p>
          </Link>

          <Link href='/terms-and-conditions'>
            <p className=' font-normal text-base text-[#8F8E98]'>Terms of Conditions</p>
          </Link>
        </div>
      </div>
    </>
  );
}
