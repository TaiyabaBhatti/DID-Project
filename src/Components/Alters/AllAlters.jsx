import React from 'react'
import background from "../../assets/images/background.png";
import PatientProfile from '../Common Components/PatientProfile';
import Wrapper from '../Common Components/Wrapper';
import { FaUserLarge } from "react-icons/fa6";


export default function AllAlters() {
  return (
      <PatientProfile>
      <div className='text-2xl w-96 text-black bg-light-purple items-center px-5 py-2 flex flex-row gap-x-5'>
      <FaUserLarge/>
       <p className='font-normal '>Tayyaba</p>
      </div>
      </PatientProfile>
  )
}
