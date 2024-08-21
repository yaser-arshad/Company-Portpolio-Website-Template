// ServicesNavLink.tsx
import React from 'react';

interface ServicesNavLinkProps {
  href: string;
  title: string;
  imageSrc: string;
  changeTechs: (tech: string) => void;
  techOption: string;
}
const ServicesNavlink: React.FC<ServicesNavLinkProps> = ({ href, title, imageSrc, changeTechs, techOption }) => {
  return (
    <div
      onClick={() => {
        changeTechs(techOption);
      }}
      className=' cursor-pointer'
    >
      <div className='flex  gap-2 items-center pt-3 w-60   cursor-pointer'>
        <div className=' '>
          <img className='flex  items-center ' src={imageSrc} alt='' />
        </div>
        <div className=' text-sm font-normal tracking-[0.14px] '>{title}</div>
      </div>
    </div>
  );
};
export default ServicesNavlink;
