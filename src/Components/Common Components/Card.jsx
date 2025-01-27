import React from 'react'
import Button from './Button'

export default function Card({btnText, btnBgColor, btnTextColor,contentHead="xyz",contentDesc, to=null}) {

  return (
    <div className='bg-[#595880] h-56 p-10 w-[426px] flex flex-col items-center rounded-2xl gap-y-2  text-white justify-center'>
{/* <h1 className='text-center font-semibold text-3xl'>{contentHead}</h1> */}
<p className='text-center font-normal text-2xl'>{contentDesc}</p>
<Button text={btnText} bgColor={btnBgColor} textColor={btnTextColor} to={to} />
</div>

  )
}
