import React,{useEffect, useRef,useState} from 'react'
import journalHeaderBg from "../../assets/images/journalHeaderBg.png";
import Button from '../Common Components/Button';
import Lottie from "lottie-react"
import NumberBackwards from "../../assets/animations/sensoryExe1.json"
import Timer from './Timer';


export default function SensoryExercises() {

const [isActive, setIsActive] = useState(false);
const [btnText,setBtnText] = useState("Play");

let lottieRef  = useRef(null);

useEffect(()=>{

  lottieRef.current.pause();




},[])

const actionPlayed = () =>{
if(isActive){
  setBtnText("Pause")
 
  setIsActive(false);
  lottieRef.current.pause();
}
else {

  setBtnText("Play")
  
setIsActive(true);
lottieRef.current.play();


}
  
}














  return (
    <>
      

    <section className=' flex flex-col items-center gap-y-2 justify-center relative '>

{/* Exercise Description */}


<p className='text-center font-semibold   text-4xl'>Sensory Exercise</p>

{/* Exercise */}

<Lottie animationData={NumberBackwards}
            loop
            lottieRef={lottieRef}
            style={{ height: "300px", width: "300px" }}/>


{/* start stop button */}
<Button text={btnText} bgColor={"bg-light-purple"} onclick={actionPlayed} font='text-2xl' bold='font-semibold'/>


</section>

    </>
   
  )
}
