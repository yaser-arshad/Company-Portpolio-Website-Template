import React from 'react';

export default function ProcessWeFollow() {
  return (
    <div className='px-14 w-full mt-24 pb-20 flex flex-col justify-center items-center  '>
      <h1 className=' w-2/5 text-black font-secondary font-semibold  text-5xl  flex  justify-center'>
        <span className=' text-primary mr-2'>Process </span> We Follow
      </h1>
      <p className=' w-3/5 font-normal text-lg text-black text-center mt-5'>
        Where ideas transform into tangible digital experiences. From concept to launch and beyond, we&apos;re here to
        turn your vision into reality.
      </p>

      <div className='w-4/5  flex justify-between  items-center mt-28 '>
        <div className=' w-full flex justify-center items-center'>
          <div className=' w-1/5  relative '>
            <img src='/images/greencircle.svg' className='  h-24 w-32  absolute left-9 bottom-[140px] ' alt='' />
            <div className='w-[88%] h-[185px]  bg-white shadow-md flex flex-col justify-center items-center  z-10'>
              <h2 className='font-bold text-xl text-black w-28 text-center pt-6'>Information Gathering</h2>
              <span className='block w-5 h-1 bg-[#5DD7AA] mt-2'></span>
              <p className='font-normal text-sm text-black mt-7'>Gathering insights</p>
            </div>
            <img
              className=' w-full  absolute left-[-13px] bottom-[-13px] z-[-1] shadow-none'
              src='/images/greenborder.svg'
              alt=''
            />
          </div>

          <div className='w-1/5 relative'>
            <img src='/images/bluecircle.svg' className='h-24 w-32 absolute left-9 bottom-[145px]' alt='' />
            <img
              className=' w-full  absolute left-[-13px] top-[-13px]  z-[-1] shadow-none'
              src='/images/borderblue.svg'
              alt=''
            />

            <div className='w-[88%] h-[185px]  bg-white shadow-md flex flex-col justify-center items-center  z-10'>
              <h2 className='font-bold text-xl text-black w-28 text-center pt-6'>UI & UX Design</h2>
              <span className='block w-5 h-1 bg-primary mt-2'></span>
              <p className='font-normal text-sm text-black mt-7'>Crafting user experiences</p>
            </div>
          </div>

          <div className=' w-1/5  relative '>
            <img src='/images/darkbluecircle.svg' className='  h-24 w-32  absolute left-9 bottom-[140px] ' alt='' />
            <div className='w-[88%] h-[185px]  bg-white shadow-md flex flex-col justify-center items-center  z-10'>
              <h2 className='font-bold text-xl text-black w-28 text-center pt-6'>Prototype</h2>
              <span className='block w-5 h-1 bg-[#557BC6] mt-2'></span>
              <p className='font-normal text-sm text-black mt-7'>Visualizing concepts</p>
            </div>
            <img
              className=' w-full  absolute left-[-13px] bottom-[-13px] z-[-1] shadow-none'
              src='/images/darkblueborder.svg'
              alt=''
            />
          </div>

          <div className='w-1/5 relative'>
            <img src='/images/pirplecircle.svg' className='h-24 w-32 absolute left-9 bottom-[145px]' alt='' />
            <img
              className=' w-full  absolute left-[-13px] top-[-13px]  z-[-1] shadow-none'
              src='/images/pirpleborder.svg'
              alt=''
            />

            <div className='w-[88%] h-[185px]  bg-white shadow-md flex flex-col justify-center items-center  z-10'>
              <h2 className='font-bold text-xl text-black w-28 text-center pt-6'>Development</h2>
              <span className='block w-5 h-1 bg-[#6E52BD] mt-2'></span>
              <p className='font-normal text-sm text-black mt-7'> Building functionality</p>
            </div>
          </div>
        </div>
      </div>

      <div className='w-4/5  flex justify-between  items-center mt-24 '>
        <div className=' w-full flex justify-center items-center mb-12'>
          <div className='w-1/5 relative'>
            <img src='/images/darkpirplecircle.svg' className='h-24 w-32 absolute left-9 bottom-[145px]' alt='' />
            <img
              className=' w-full  absolute left-[-13px] top-[-13px]  z-[-1] shadow-none'
              src='/images/darkpirpleborder.svg'
              alt=''
            />

            <div className='w-[88%] h-[185px]  bg-white shadow-md flex flex-col justify-center items-center  z-10'>
              <h2 className='font-bold text-xl text-black w-28 text-center pt-6'>Quality Assurance</h2>
              <span className='block w-5 h-1 bg-[#9850BA] mt-2'></span>
              <p className='font-normal text-sm text-black mt-7'>Ensuring excellence</p>
            </div>
          </div>
          <div className=' w-1/5  relative '>
            <img src='/images/pinkcircle.svg' className='  h-24 w-32  absolute left-9 bottom-[140px] ' alt='' />
            <div className='w-[88%] h-[185px]  bg-white shadow-md flex flex-col justify-center items-center  z-10'>
              <h2 className='font-bold text-xl text-black w-28 text-center pt-6'>Deployment</h2>
              <span className='block w-5 h-1 bg-[#BA5196] mt-2'></span>
              <p className='font-normal text-sm text-black mt-7'>Launching to the world</p>
            </div>
            <img
              className=' w-full  absolute left-[-13px] bottom-[-13px] z-[-1] shadow-none'
              src='/images/pinkborder.svg'
              alt=''
            />
          </div>

          <div className='w-1/5 relative'>
            <img src='/images/browncircle.svg' className='h-24 w-32 absolute left-9 bottom-[145px]' alt='' />
            <img
              className=' w-full  absolute left-[-13px] top-[-13px]  z-[-1] shadow-none'
              src='/images/brownborder.svg'
              alt=''
            />

            <div className='w-[88%] h-[185px]  bg-white shadow-md flex flex-col justify-center items-center  z-10'>
              <h2 className='font-bold text-xl text-black w-28 text-center pt-6'>Support & Maintenance</h2>
              <span className='block w-5 h-1 bg-[#9A4646] mt-2'></span>
              <p className='font-normal text-sm text-black mt-7'>Sustaining performance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
