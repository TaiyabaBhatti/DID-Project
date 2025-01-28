import React from 'react'
import background from "../../assets/images/background.png";

export default function PatientProfile({children}) {
  return (
     <section className=" mb-10">
          
              
               <img
                 src={background}
                 alt=""
                 className="h-fit absolute top-0 -z-50 w-screen bg-no-repeat"
               />
               <div
                 id="dashboard-about-heading"
                 className="max-w-4xl px-10 flex flex-col items-center gap-y-6  m-auto text-white"
               >
   
             {children}
               
               </div>
           
             </section>
  )
}
