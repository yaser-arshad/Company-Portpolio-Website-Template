import Image from 'next/image';

export default function BenefitsOfBlank({ cardsArray, titleDescObj }: any) {
  return (
    <div className=' w-full bg-[#E7F2FD] mx-auto pt-20 pb-24  text-black '>
      <h1 className=' text-5xl w-full font-bold text-center py-8 capitalize leading-tight'>
        {titleDescObj.title.blackFirst}{' '}
        <span className='text-primary block md:inline-block'>{titleDescObj.title.primary} </span>{' '}
        {titleDescObj.title.blackLast}
      </h1>

      <p className=' text-lg text-center font-normal pb-6 w-10/12 md:w-3/5 mx-auto  '>{titleDescObj.desc}</p>

      <div className='flex flex-row flex-wrap justify-center items-center md:px-20 mt-10 mx-auto'>
        {cardsArray.map((item: any, index: number) => (
          <div
            key={index}
            className={`bg-white min-w-60 md:w-auto basis-1/3 md:basis-1/6 rounded-xl 
              flex md:flex-col justify-center items-center text-center 
              mx-3 md:mx-8 my-3 md:my-6 md:h-56 ps-7 pe-10 py-4 md:p-0`}
          >
            <div className='relative w-14 h-14 mx-2 mb-5'>
              <Image className='absolute' src={item.src} fill alt={item.label} />
            </div>
            <p className='font-normal text-md md:text-xl text-start md:text-center capitalize ms-2 md:ms-0 w-auto md:w-7/12'>
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
