import React from 'react';

export default function ImageTitle(props: any) {
  const { imageUrl, text } = props;

  return (
    <div className='h-44 w-52 flex flex-col justify-between mx-auto'>
      <img className=' mx-auto' src={imageUrl} alt='' />
      <span className='text-black text-center text-2xl font-medium'>{text}</span>
    </div>
  );
}
