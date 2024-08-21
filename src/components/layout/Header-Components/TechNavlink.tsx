// TechNavLink.tsx
import React from 'react';

import Link from 'next/link';

interface TechNavLinkProps {
  href: string;
  imageSrc: string;
  title: string;
  description: string;
  onClick: any;
}

const TechNavLink: React.FC<TechNavLinkProps> = ({ href, imageSrc, title, description, onClick }) => {
  return (
    <Link href={href} onClick={onClick}>
      <div className='flex items-center gap-6 w-full pt-3 cursor-pointer'>
        <div className=' flex items-center '>
          <img className='' src={imageSrc} alt='' />
        </div>
        <div className='  w-96  flex flex-col'>
          <h2 className='pt-2 text-sm font-bold tracking-[0.14px] '>{title}</h2>
          <p className=' text-xs font-normal tracking-[0.12px] pt-[5.77px]'>{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default TechNavLink;
