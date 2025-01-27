import React, { useEffect, useState,useContext } from 'react'
import background from "../../assets/images/background.png";
import Button from '../Common Components/Button';
import CreateProfile from './CreateProfile';
import EditProfile from './EditProfile';
import AuthContext from "../context/authContext";


export default function PatientProfile() {

// const [isEditMode,setMode] = useState(false);
const {profileData} = useContext(AuthContext);



// const modeCreate = () =>{
//   console.log("Create")
// setMode(false)
// }

// const modeEdit = () =>{
// setMode(true);
//  console.log("Edit")
// }



  return (
      <section className=" h-screen mb-10">
           
            <img
              src={background}
              alt=""
              className="h-screen absolute top-0 -z-50 w-screen bg-no-repeat"
            />
            <div
              id="dashboard-about-heading"
              className="max-w-4xl px-10 flex flex-col items-center gap-y-6  m-auto text-white"
            >

              {/* Toggle buttons */}
            {/* <div className='flex flex-row gap-x-2'>
               <Button text={"Create Profile"} onclick={modeCreate} />
               <Button text={"Edit Profile"} onclick={modeEdit}  />
            </div> */}

              {/* {isEditMode? <EditProfile />: <CreateProfile />} */}
            <EditProfile/>
            
            </div>
          </section>
  )
}
