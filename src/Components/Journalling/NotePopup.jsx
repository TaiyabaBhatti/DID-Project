import React from 'react'
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { FaXmark } from "react-icons/fa6";

export default function NotePopup({contentHead="",contentDesc="",onClose}) {

  return (

<section className=' absolute inset-0 flex flex-col items-center  justify-center'>

<button onClick={onClose} className='text-4xl -ml-96 mb-10'>   <FaXmark/></button>
        

   <div className='bg-greyish-purple p-5 w-11/12  md:w-2/3 lg:w-1/2 max-h-[90vh] overflow-y-auto  flex flex-col justify-center items-center rounded-2xl gap-y-2 text-white'>
   <h1 className='text-center font-semibold text-xl'>{contentHead}</h1>
   <ReactMarkdown 
    remarkPlugins={[remarkGfm]}
    rehypePlugins={[rehypeRaw]}
   >
     {contentDesc}
   </ReactMarkdown>
   </div>


   </section>

  )
}
