import React from 'react';

const ScheduleMeeting = () => {
  const imageUrl = '/images/schedule-meeting.png';
  const title = 'Lets Talk?';
  const subtitle = 'Lets scale your team together! Schedule a meeting with us and unlock your tech potential.';

  return (
    <div className='relative z-10 top-[175px]'>
      <img src={imageUrl} alt='Background' className=' w-11/12 mx-auto' />
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
        <h1 className='text-white text-[40.973px] font-bold pb-[14px]'>{title}</h1>
        <p className='text-white  text-lg font-normal leading-6 pb-5 w-[450px] '>{subtitle}</p>
        <a href='https://calendly.com/ir_solutions' target='_blank'>
          <button className='bg-white text-lg border  text-black px-6 py-3 rounded-[4.452px]'>Schedule Meeting</button>
        </a>
      </div>
    </div>
  );
};

export default ScheduleMeeting;
