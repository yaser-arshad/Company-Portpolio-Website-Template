import React from 'react';

export default function ComprehensiveGameDevServices() {
  return (
    <div className='bg-cover bg-center py-[88px] ' style={{ backgroundImage: `url('/images/game-dev.svg')` }}>
      <div className='container mx-auto px-4 '>
        <h1 className=' font-poppins font-semibold text-5xl text-center text-white   mx-auto  w-3/5 '>
          Our Comprehensive <span className='text-primary'>Game Development</span> Process
        </h1>
        <div className='grid grid-cols-2 gap-8 mx-56 pt-20'>
          <div className='relative'>
            <img
              src='/images/circle1.svg'
              alt='Circle Image'
              className='absolute top-1/4 left-[0.2rem] transform -translate-y-4/6 rounded-full  p-1'
            />
            <div className='border-l-[3rem] rounded-2xl border-primary'>
              <div className='bg-bg-primary text-white h-full py-8 pl-12 pr-9 border-t-2 border-r-2 border-b-2 border-dashed border-primary rounded-sm'>
                <h2 className='  font-bold text-xl text-left w-56'>Requirement Analysis</h2>
                <p className='  font-normal text-sm text-white pt-4 '>
                  As a committed game design firm, we delve deep into project requirements. We establish regular
                  communication for input collection, ensuring mutual understanding from the outset.
                </p>
              </div>
            </div>
          </div>

          <div className='relative mt-16'>
            <img
              src='/images/circle2.svg'
              alt='Circle Image'
              className='absolute top-1/4 left-[0.2rem] transform -translate-y-4/6 rounded-full  p-1'
            />
            <div className='border-l-[3rem] rounded-2xl border-primary'>
              <div className='bg-bg-primary text-white h-full py-8 pl-12 pr-9 border-t-2 border-r-2 border-b-2 border-dashed border-[#238FFF] rounded-sm'>
                <h2 className='  font-bold text-xl text-left'>Strategizing</h2>
                <p className='  font-normal text-sm text-white pt-4'>
                  We conduct concept analysis and research based on client details, preparing game design documents,
                  flow designs, and execution plans. We engage all stakeholders in detailed discussions before
                  initiating other processes.
                </p>
              </div>
            </div>
          </div>

          <div className='relative'>
            <img
              src='/images/circle3.svg'
              alt='Circle Image'
              className='absolute top-1/4 left-[0.2rem] transform -translate-y-4/6 rounded-full  p-1'
            />
            <div className='border-l-[3rem] rounded-2xl border-primary'>
              <div className='bg-bg-primary text-white h-full py-8 pl-12 pr-9 border-t-2 border-r-2 border-b-2 border-dashed border-primary rounded-sm'>
                <h2 className=' font-bold text-xl text-left'>Art and Asset Creation</h2>
                <p className=' font-normal text-sm text-white pt-4'>
                  Our team crafts concept art and sketches aligned with the game&apos;s theme and vision. Our asset
                  production team, including modelers, animators, and rigging artists, creates 2D and 3D assets like
                  props, characters, and environments.
                </p>
              </div>
            </div>
          </div>

          <div className='relative mt-16'>
            <img
              src='/images/circle4.svg'
              alt='Circle Image'
              className='absolute top-1/4 left-[0.2rem] transform -translate-y-4/6 rounded-full  p-1'
            />
            <div className='border-l-[3rem] rounded-2xl border-primary'>
              <div className='bg-bg-primary text-white h-full py-8 pl-12 pr-9 border-t-2 border-r-2 border-b-2 border-dashed border-primary rounded-sm'>
                <h2 className='  font-bold text-xl text-left'>Game Development and Quality Assurance </h2>
                <p className='  font-normal text-sm text-white pt-4'>
                  Our development team, experienced in top game engines and technologies, develops games. Our seasoned
                  testers ensure rigorous QA and device compatibility testing.
                </p>
              </div>
            </div>
          </div>

          <div className='relative'>
            <img
              src='/images/circle5.svg'
              alt='Circle Image'
              className='absolute top-1/4 left-[0.2rem] transform -translate-y-4/6 rounded-full  p-1'
            />
            <div className='border-l-[3rem] rounded-2xl border-primary'>
              <div className='bg-bg-primary text-white h-full py-8 pl-12 pr-9 border-t-2 border-r-2 border-b-2 border-dashed border-[#238FFF] rounded-sm'>
                <h2 className='  font-bold text-xl text-left'>Support & Maintenance</h2>
                <p className='  font-normal text-sm text-white pt-4'>
                  We offer post-publishing technical support and game maintenance, keeping games updated across all
                  devices and OS. We provide standard to custom service-level agreements based on project needs.
                </p>
              </div>
            </div>
          </div>

          <div className='relative mt-16'>
            <img
              src='/images/circle6.svg'
              alt='Circle Image'
              className='absolute top-1/4 left-[0.2rem] transform -translate-y-4/6 rounded-full  p-1'
            />
            <div className='border-l-[3rem] rounded-2xl border-primary'>
              <div className='bg-bg-primary text-white h-full py-8 pl-12 pr-9 border-t-2 border-r-2 border-b-2 border-dashed border-[#238FFF] rounded-sm'>
                <h2 className='  font-bold text-xl text-left'>Live Operations and Monetization</h2>
                <p className='  font-normal text-sm text-white pt-4'>
                  We enhance player retention and engagement through special in-game events, offers, cosmetic
                  enhancements, and game economy adjustments. We also implement monetization strategies through ads and
                  in-app purchases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
