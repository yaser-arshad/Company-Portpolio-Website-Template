import React from 'react';

import MobImageTitle from './MobImageTitle';

export default function Screens() {
  return (
    <div className='mt-28  w-full text-[#282D46] mb-20   '>
      <h1 className=' font-secondary font-semibold text-5xl  text-[#282D46] px-44'>Screens</h1>
      <div className=' w-5/6 mx-auto grid grid-cols-3 '>
        <MobImageTitle imageUrl='/images/mob1.svg' text='Onboarding' />

        <MobImageTitle imageUrl='/images/mob2.svg' text='Onboarding' />

        <MobImageTitle imageUrl='/images/mob3.svg' text='Home' />
      </div>

      <div className=' w-5/6 mx-auto grid grid-cols-3   border-b-[gray] mt-10   '>
        <MobImageTitle imageUrl='/images/mob4.svg' text='Upload Style' />

        <MobImageTitle imageUrl='/images/mob5.svg' text='Download' />
        <MobImageTitle imageUrl='/images/mob6.svg' text='Select Style' />
      </div>
    </div>
  );
}
