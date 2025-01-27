import React from 'react'
import Button from "../Common Components/Button";
import supportBg from "../../assets/images/supportImage.png";
import supportLine from "../../assets/images/supportLineImage.png";

import meditation from "../../assets/images/meditation.png";

import creatorWork from "../../assets/images/creator.png";

export default function SupportPage() {
  return (
    <>
     {/* About */}
          <section className="h-screen mb-10">
            {/* dashboard-about-screen-bg-image */}
            <img
              src={supportBg}
              alt=""
              className="h-screen absolute top-0 -z-50 w-screen bg-no-repeat"
            />
            <div
              id="dashboard-about-heading"
              className="max-w-4xl px-10 translate-y-1/3 flex flex-col items-center gap-y-6  m-auto text-white"
            >
              <h1 className="text-center font-bold text-6xl ">Support & Emergency Resources</h1>
              <p className="text-center font-normal text-4xl">
              Access critical resources and tools to support your caregiving journey.
              </p>
              <Button text={"Explore resources"} bgColor={"bg-slate-200"} />
             
            </div>
          </section>


{/* helpline call */}
   
    <section className="mb-20 h-screen flex">
            {/* dashboard-about-screen-bg-image */}
            
            <div className='px-10 flex flex-row items-center justify-between align-middle'>
            <div
              id="dashboard-about-heading"
              className=" flex flex-col items-start gap-y-6 text-black"
            >
              <h1 className=" font-semibold text-4xl ">Emergency Hotline</h1>
              <p className=" font-normal text-3xl">
              Get immediate support through trusted crisis lines.
              </p>
              <Button text={"Call now"}  bgColor={"bg-[#595880]"}
               textColor={"text-white"}
              
              />
             
            </div>

<div>
<img
              src={supportLine}
              alt=""
              className=" max-w-md"
            />

</div>
            </div>
        
          </section>



{/* Grounding tool */}

          <section className="flex  h-screen mb-20 bg-[#CBCBE7]">
            {/* dashboard-about-screen-bg-image */}
            
            <div className='px-10 flex flex-row items-center gap-x-5  justify-between align-middle '>

            <div>
<img
              src={meditation}
              alt=""
              className=" max-w-md"
            />

</div>

            <div
              id="dashboard-about-heading"
              className=" flex flex-col text-right items-end gap-y-6 text-black"
            >
              <h1 className=" font-semibold text-4xl ">Grounding Techniques</h1>
              <p className=" font-normal text-3xl">
              Discover practical tools to regain calm and focus during stressful moments.
              </p>
              <Button text={"Learn more"} bgColor={"bg-[#595880]"} 
               textColor={"text-white"} to={"/grounding-tool-library"}
              />
             
            </div>
            </div>
        
          </section>

{/* Safety plan Creator */}

          <section className="flex h-screen mb-20">
            {/* dashboard-about-screen-bg-image */}
            
            <div className='px-10 flex flex-row items-center gap-x-5  justify-between align-middle '>

            <div
              id="dashboard-about-heading"
              className=" flex flex-col  items-start gap-y-6 text-black"
            >
              <h1 className=" font-semibold text-4xl ">Safety Plan Creator</h1>
              <p className=" font-normal text-3xl">
              Build a personalized safety plan for moments of crisis
              </p>
              <Button text={"Learn more"} bgColor={"bg-[#595880]"}
              textColor={"text-white"}
              />
             
            </div>


            <div>
<img
              src={creatorWork}
              alt=""
              className=" max-w-md"
            />

</div>


            </div>
        
          </section>










    </>
  )
}
