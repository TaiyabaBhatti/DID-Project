import React from 'react'
import { FaChevronLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';


export default function PastPage({title,path}) {
  return (
    <div className='flex flex-row text-greyish-purple gap-x-1 items-center mb-10 font-semibold '>
        < FaChevronLeft/>
      <Link to={path} className='text-xl'>Back</Link>
    </div>
  )
}
