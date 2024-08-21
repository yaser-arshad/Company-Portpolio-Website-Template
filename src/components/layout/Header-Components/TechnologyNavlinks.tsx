// TechNavLink.tsx
import React from 'react';

import Link from 'next/link';

interface TechNavLinkProps {
  href: string;

  title: string;
  onClick: any;
}

const TechnologyNavlinks: React.FC<TechNavLinkProps> = ({ href, title, onClick }) => {
  return (
    <Link onClick={onClick} href={href}>
      <div className='flex  items-center   pb-1  cursor-pointer text-black'>
        <div className='  text-sm font-normal tracking-[0.14px] pb-1 '>{title}</div>
      </div>
    </Link>
  );
};

export default TechnologyNavlinks;
