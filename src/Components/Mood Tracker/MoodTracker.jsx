import React,{useContext, useEffect, useState} from 'react'
import dashboardBg from "../../assets/images/background.png";
import moodTrackerAbout from "../../assets/images/moodtracker-about.png";
import Button from "../Common Components/Button";
import MoodTrackerForm from './MoodTrackerForm';
import WeeklyEmotionTrigger from '../VizualRepresentation/WeeklyEmotionTrigger';
import DailyEmotionTrigger from '../VizualRepresentation/DailyEmotionTrigger';
import AuthContext from "../context/authContext";
import { collection, query,getFirestore, getDocs, doc } from 'firebase/firestore';
import app from '../../Configuration/firebase-config';
import { NotificationPopup } from '../Noifications/NotificationPopup';
import LoadingAnim from '../Common Components/LoadingAnim';
import Wrapper from '../Common Components/Wrapper';


const db = getFirestore(app);

export default function MoodTracker() {

  const {currUser,patientName,emotionTriggerData} = useContext(AuthContext);
const [loading, setLoading] = useState(false);
// const [patientName,setPatientname] = useState();

console.log(emotionTriggerData)




  return (
    <>
    {/* mood tracker about */}
   

    <section className="h-screen mb-10 -mt-24 flex items-center">
            {/* dashboard-about-screen-bg-image */}
            <img
              src={dashboardBg}
              alt=""
              className="h-full absolute top-0 -z-50 w-screen bg-no-repeat"
            />
            <div className='px-10 flex flex-row items-center justify-between align-middle'>
            <div
              id="dashboard-about-heading"
              className=" flex flex-col items-start gap-y-6 text-white"
            >
              <h1 className=" font-bold text-6xl ">Mood Tracker</h1>
              <p className=" font-normal text-4xl">
                Hello, {patientName || "..."} ! How are you feeling today?
              </p>
              <Button text={"Explore dashboard"} bgColor={"bg-slate-200"} />
             
            </div>

<div>
<img
              src={moodTrackerAbout}
              alt=""
              className=" max-w-md"
            />

</div>
            </div>
        
          </section>
    
 {/* mood tracker form */}

 <Wrapper height='h-screen'>
  {/* heading and tile */}
  <div className='text-black'>
    <h1 className='font-semibold text-4xl text-center'>How are you feeling today?</h1>
    <p className='font-normal text-3xl text-center'>Submit the given form:</p>
    </div>
    <MoodTrackerForm/>
 </Wrapper>


  {/* mood tracker weekly insights */}

  <Wrapper>
  <div className='flex gap-y-5 flex-col items-center'>
    <div className='text-black'>
    <h1 className='font-semibold text-4xl text-center'>Weekly Report</h1>
    </div>
   
    <WeeklyEmotionTrigger data={emotionTriggerData}/>

    </div>
  </Wrapper>


 {/* mood tracker daily insights */}
<Wrapper>
  {/* heading and tile */}
<div className='flex gap-y-5 flex-col items-center'>
    <div className='text-black'>
    <h1 className='font-semibold text-4xl text-center'>Daily Report</h1>
    </div>
   
   <DailyEmotionTrigger data={emotionTriggerData}/>
 
   </div>
</Wrapper>

 



       
    
    </>
  )
}
