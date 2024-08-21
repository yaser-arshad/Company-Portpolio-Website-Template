import React from 'react';

export default function MobImageTitle(props: any) {
  const { imageUrl, text } = props;

  return (
    <div className='  flex flex-col justify-between mx-auto'>
      <img className=' h-[638px] w-[294] mx-auto' src={imageUrl} alt='' />
      <span className='text-black text-center text-2xl font-medium'>{text}</span>
    </div>
  );
}
