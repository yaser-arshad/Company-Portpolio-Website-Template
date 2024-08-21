import React from 'react';

interface Industry {
  icon: string;
  title: string;
}

interface SectionTitle {
  innerSpan: string;
  outerSpan: string;
  newLine: string;
}

interface IndustriesData {
  sectionTitle: SectionTitle;
  description: string;
  industries: Industry[];
}

interface Props {
  data: IndustriesData;
}

const IndustriesWeServe: React.FC<Props> = ({ data }) => {
  const { sectionTitle, description, industries } = data;

  return (
    <div
      className='bg-cover bg-white bg-center text-black pb-24'
      style={{ backgroundImage: `url('/images/indus.png')` }}
    >
      <div className='container mx-auto px-8 py-16 text-center'>
        <h1 className=' text-4.5xl font-bold text-center py-8 mx-auto w-2/4'>
          <span className='text-primary'>{sectionTitle.innerSpan}</span> {sectionTitle.outerSpan} <br />
          {sectionTitle.newLine}
        </h1>
        <p className=' text-center font-secondary text-lg mb-2 mx-auto w-7/12'>{description}</p>
      </div>
      <div className='grid grid-cols-4 gap-4 px-8 py-8 mx-36'>
        {industries.map((industry, index) => (
          <div key={index} className='bg-white rounded-lg p-4 flex items-center justify-start '>
            <img src={industry.icon} alt={industry.title} className=' w-16 mr-8' />
            <p className='text-lg font-semibold w-30 ml-5'>{industry.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustriesWeServe;
