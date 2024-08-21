import React from 'react';

import { hireVarietyTechStackHomedata } from 'app/core/_data';

export default function HireForVarietyTechStackHome() {
  return (
    <div className='px-10 md:px-[6.563rem] w-full  bg-white mt-32 flex flex-col justify-center items-center pt-20 pb-20 border-b-[1px] border-b-[#D9D9D9]'>
      <h1 className='w-11/12 md:w-5/12 text-black capitalize font-bold text-4xl md:text-5xl mx-auto text-center leading-tight'>
        Variety of <span className=' text-primary'>Tech stacks</span> we hire talent for
      </h1>
      <p className=' md:w-2/3 font-normal text-md md:text-xl text-black text-center mt-5 '>
        Our tech stack empowers our remote developers to foster forward-thinking innovations in every solution we
        create. Our pool of expert software developers is experienced in various programming languages, platforms, and
        frameworks, including but not limited to Python, React Native, JavaScript, Drupal, and PHP.
      </p>

      <div className=' w-full flex flex-wrap justify-center items-center md:grid md:grid-cols-9 text-center  pt-[5.375rem] '>
        {hireVarietyTechStackHomedata.map((item, index) => (
          <div key={index} className={`flex flex-col justify-center items-center pb-[5.375rem] basis-1/4`}>
            <img className=' justify-center items-center pb-7 ' src={item.src} alt={item.alt} />
            <span className='text-black font-normal text-base text-center'>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
