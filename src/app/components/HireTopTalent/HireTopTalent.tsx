import React from 'react';
import Heading from "./components/Heading"
import Form from './components/Form';
import DropdownForm from './components/DropdownForm';


function HireTopTalent() {
  return (
    <div className=' bg-[#001F3F]'>
      <div className=' px-14'>
          <Heading/>
          <Form/>
          < DropdownForm/>
      </div>
    </div>
  )
}

export default HireTopTalent