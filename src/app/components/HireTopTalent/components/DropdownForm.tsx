'use client';

import React, { useState } from 'react';

import { servicesNavLinks, techNavLinks } from 'app/core/_data';
import {
  techNavLinksAI_ML,
  techNavLinksAdministrative,
  techNavLinksBlockchain,
  techNavLinksDevOps,
  techNavLinksDigitalMarketing,
  techNavLinksECommerece,
  techNavLinksGameDevelopment,
  techNavLinksIoT,
  techNavLinksMobile,
  techNavLinksWeb,
  techOptions,
} from 'app/core/_data';
import Link from 'next/link';

function DropdownForm() {
  const [selectedField, setSelectedField] = useState(techOptions[0]);
  function renderedTechnologies(): any {
    if (selectedField === techOptions[0]) {
      return [...techNavLinksMobile];
    } else if (selectedField === techOptions[1]) {
      return [...techNavLinksWeb];
    } else if (selectedField === techOptions[2]) {
      return [...techNavLinksECommerece];
    } else if (selectedField === techOptions[3]) {
      return [...techNavLinksBlockchain];
    } else if (selectedField === techOptions[4]) {
      return [...techNavLinksDigitalMarketing];
    } else if (selectedField === techOptions[5]) {
      return [...techNavLinksGameDevelopment];
    } else if (selectedField === techOptions[6]) {
      return [...techNavLinksAI_ML];
    } else if (selectedField === techOptions[7]) {
      return [...techNavLinksIoT];
    } else if (selectedField === techOptions[8]) {
      return [...techNavLinksDevOps];
    } else {
      return [...techNavLinksAdministrative];
    }
  }

  const [rows, setRows] = useState([
    // { id: 1, field: 'WebDevelopment', technology: 'React JS', experts: '05', experience: 'Intermediate', duration: '06 Months' }
  ]);
  const addRow = () => {
    const newRow = { id: rows.length + 1 };
    setRows((prevRows) => [...prevRows, newRow]);
  };
  const subtractRow = () => {
    if (rows.length === 0) return;
    const maxId = Math.max(...rows.map((row: any) => row.id));
    setRows((prevRows) => prevRows.filter((row: any) => row.id !== maxId));
  };
  //   const handleChange = (e, rowIndex, field) => {
  //     const { value } = e.target;
  //     const updatedRows = rows.map((row) => (row.id === rowIndex ? { ...row, [field]: value } : row));
  //     setRows(updatedRows);
  //   };
  const handleChange = (e: any, rowIndex: any, field: any) => {
    const { value } = e.target;
    const updatedRows = rows.map((row) => (row.id === rowIndex ? { ...row, [field]: value } : row));
    setRows(updatedRows);
  };
  const renderRows = () => {
    return rows.map((row) => (
      <div className='grid grid-cols-5 mt-2    ' key={row.id}>
        <div className=' w-11/12  h-14 mx-auto rounded  text-[#8AB3DF]'>
          <select
            name=''
            id=''
            onChange={(e) => {
              setSelectedField(e.target.value);
            }}
            className='w-full h-14 rounded bg-opacity-5 bg-[#FFFFFF] text-[#8AB3DF] p-4'
          >
            {servicesNavLinks.map((service) => (
              <option
                value={techOptions[service.id - 1]}
                key={service.id}
                selected={selectedField === techOptions[service.id - 1]}
              >
                {service.title}
              </option>
            ))}
          </select>
        </div>
        <div className=' w-11/12  h-14 mx-auto rounded  text-[#8AB3DF]'>
          <select name='' id='' className='w-full h-14 rounded bg-opacity-5 bg-[#FFFFFF] text-[#8AB3DF] p-4'>
            {renderedTechnologies().map((technology: any) => {
              return (
                <option value={technology.title} key={technology.title}>
                  {technology.title}
                </option>
              );
            })}
          </select>
        </div>
        <div className='w-11/12  h-14 mx-auto rounded  text-[#8AB3DF]'>
          <select name='' id='' className='w-full h-14 rounded bg-backgroundcolor text-[#8AB3DF] p-4'>
            <option selected value=''>
              05
            </option>
            <option value=''>10</option>
          </select>
        </div>
        <div className=' w-11/12  h-14 mx-auto rounded  text-[#8AB3DF] '>
          <select name='' id='' className='w-full h-14 rounded bg-backgroundcolor  text-[#8AB3DF] p-4'>
            <option selected value=''>
              Intermediate
            </option>
            <option value=''>Expert</option>
          </select>
        </div>
        <div className=' w-11/12  h-14 mx-auto rounded  text-[#8AB3DF] '>
          <select name='' id='' className='w-full h-14 rounded bg-opacity-[5%] bg-[#FFFFFF]  text-[#8AB3DF] p-4'>
            <option selected value=''>
              06 Months
            </option>
            <option value=''>12 Months</option>
          </select>
        </div>
      </div>
    ));
  };
  return (
    <div className=' w-full   mt-20 pb-20 px-14'>
      <div className='grid grid-cols-5 text-center  '>
        <div className=' text-left pl-4 text-white'>Choose Field</div>
        <div className=' text-left pl-4 text-white'>Technology</div>
        <div className=' text-left pl-4 text-white'>No of Experts</div>
        <div className=' text-left pl-4 text-white'>Experience type</div>
        <div className=' text-left pl-4 text-white'>Duration</div>
      </div>
      {renderRows()}
      <div className=''>
        <div className='grid grid-cols-5 mt-3 relative'>
          <div
            className=' border-white border-[1px] w-6 h-6 rounded-full  items-center flex absolute ml-[-32px] mt-[17px] cursor-pointer text-white pl-[6.5px]'
            onClick={addRow}
          >
            +
          </div>
          <div className=' w-11/12  h-14 mx-auto rounded  text-[#8AB3DF]'>
            <select
              name=''
              id=''
              className='w-full h-14 rounded bg-opacity-5 opacity-[30%] bg-[#FFFFFF] text-[#8AB3DF] p-4'
            >
              <option
                selected
                value=''
                className=' w-full h-10  bg-opacity-5 opacity-[30%] bg-[#FFFFFF] text-[#8AB3DF] p-4 hover:bg-primary hover:text-white '
              >
                WebDevelopment
              </option>
              {/* <option selected value=""  className=''>AppDevelopment</option> */}
            </select>
          </div>
          <div className=' w-11/12  h-14 mx-auto rounded  text-[#8AB3DF]'>
            <select
              name=''
              id=''
              className='w-full h-14 rounded bg-opacity-5 opacity-[30%] bg-[#FFFFFF] text-[#8AB3DF] p-4'
            >
              <option selected value=''>
                React JS
              </option>
              {/* <option selected value="">Angular JS</option> */}
            </select>
          </div>
          <div className='w-11/12  h-14 mx-auto rounded  text-[#8AB3DF]'>
            <select
              name=''
              id=''
              className='w-full h-14 rounded bg-opacity-5 opacity-[30%] bg-[#FFFFFF] text-[#8AB3DF] p-4'
            >
              <option selected value=''>
                05
              </option>
              {/* <option selected value="">06</option> */}
            </select>
          </div>
          <div className=' w-11/12  h-14 mx-auto rounded  text-[#8AB3DF] '>
            <select
              name=''
              id=''
              className='w-full h-14 rounded bg-opacity-5 opacity-[30%] bg-[#FFFFFF] text-[#8AB3DF] p-4'
            >
              <option selected value=''>
                Intermediate
              </option>
              {/* <option selected value="">Expert</option> */}
            </select>
          </div>
          <div className=' w-11/12  h-14 mx-auto rounded  text-[#8AB3DF] '>
            <select
              name=''
              id=''
              className='w-full h-14 rounded bg-opacity-[5%] opacity-[30%] bg-[#FFFFFF]  text-[#8AB3DF] p-4'
            >
              <option selected value=''>
                06 Months
              </option>
              {/* <option selected value="">12 Months</option> */}
            </select>
          </div>
          <Link href='/request-submitted'>
            <button
              type='button'
              className='  absolute right-[15px] top-[100px]  w-44 h-16 text-lg flex justify-center items-center bg-primary hover:bg-btn-dark-primary text-[#FFFFFF] rounded '
            >
              Send Request
            </button>
          </Link>

          <div
            className=' border-white border-[1px] w-6 h-6 rounded-full  items-center flex absolute right-[-32px] mt-5 cursor-pointer text-white pl-[7px]'
            onClick={subtractRow}
          >
            -
          </div>
        </div>
        <hr className=' w-[98.5%] mx-auto bg-[#8AB3DF] mt-6' />
      </div>
    </div>
  );
}
export default DropdownForm;
