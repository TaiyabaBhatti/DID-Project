import React from 'react'
import journalHeaderBg from "../../assets/images/journalHeaderBg.png";
import Button from '../Common Components/Button';
import Lottie from "lottie-react"
import BreathExercise from "../../assets/animations/breathingExe1.json"


export default function SoothingPlaylists() {
  return (
    <>
      <img
              src={journalHeaderBg}
              alt=""
              className=" absolute top-0 -z-50 h-24 w-screen bg-no-repeat"
            />
    

    <section className=' py-10 mx-10 shadow-xl flex flex-col items-center gap-y-5 justify-center  mb-20 px-20 h-screen relative '>

{/* Exercise Description */}

<div className='flex flex-col gap-3 items-center'>
<p className='text-center font-normal text-2xl'>Inhale and Exhale</p>
<Button text="Start/Stop" />
</div>

{/* Exercise */}

<Lottie animationData={BreathExercise}
            loop
            autoplay
            style={{ height: "300px", width: "300px" }}/>
</section>

    </>
   
  )
}
