import React, { useState } from 'react'
import Button from './Button'
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

export default function Notes({contentHead="",contentDesc=""}) {

const contentTrimed = contentDesc.substring(0,60);
  return (
    <div className='bg-[#595880] p-5 w-80 max-w-80 h-44 flex flex-col justify-center items-center rounded-2xl gap-y-2 text-white '>
<h1 className='text-center font-semibold text-xl'>{contentHead}</h1>
<ReactMarkdown 
 remarkPlugins={[remarkGfm]}
 rehypePlugins={[rehypeRaw]}
>
  {contentTrimed}
</ReactMarkdown>
</div>

  )
}

// components={{
//   h1:({children})=>(
//     <h1 className='text-3xl font-bold mb-4'>{children}</h1>
//   ),
//   h2: ({ children }) => (
//     <h2 className="text-3xl font-semibold mb-3">{children}</h2>
//   ),
//   p: ({ children }) => <p className="mb-4">{children}</p>,
//   ul: ({ children }) => (
//     <ul className="list-disc list-inside mb-4">{children}</ul>
//   ),
//   ol: ({ children }) => (
//     <ol className="list-decimal list-inside mb-4">{children}</ol>
//   ),
//   li: ({ children }) => <li className="mb-2">{children}</li>,
//   strong: ({ children }) => (
//     <strong className="font-semibold">{children}</strong>
//   ),
// }}