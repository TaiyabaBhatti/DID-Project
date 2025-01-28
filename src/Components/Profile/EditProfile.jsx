import React,{useContext, useEffect, useState} from 'react'
import Button from "../Common Components/Button";
import { useForm } from "react-hook-form";
import app from "../../Configuration/firebase-config";
import AuthContext from "../context/authContext";
import { Link, useNavigate } from 'react-router-dom';
import {
    getAuth, validatePassword 
  } from "firebase/auth";
  import { getFirestore, addDoc,collection,getDoc,doc, getDocs, setDoc } from "firebase/firestore";
import LoadingAnim from '../Common Components/LoadingAnim';
  

const db = getFirestore(app);
export default function EditProfile() {

     const navigate = useNavigate();
    const {currUser,profileData,profileDocId} = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
 
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
    setError
  } = useForm({defaultValues:{
name:"",
username:""
  }});


console.log(getAuth())

 useEffect(()=>{

const fetchExistedData = async () => {

  if(currUser){
try{
   const profileDocRef = doc(db, "Users", currUser.uid, "profile", profileDocId || "")
   const docSnap = await getDoc(profileDocRef);
  if(docSnap.exists()){  
   const {username} = docSnap.data();
   console.log(username)
   setValue("username",username)
  }

}
catch(err){
console.log("Error",err)

}
  }


  
}
fetchExistedData()




 },[])

const editProfile = async(data)=>{

setLoading(true);

try { 

 const status = await validatePassword(getAuth(), data.password);
console.log(status.data)

if(!status.isValid){
  setError("password",{type:"manual",message:"Password not matched"})
  console.log("Not valid password")
  setLoading(false);
  return;
 
}

        
      const updatedProfileData = {
            name: data.name || profileData?.[0]?.name, // Preserve old value if not updated
            username: data.username || profileData?.[0]?.username, 
           
          };
        
        const profileDocRef = doc(db, "Users", currUser.uid, "profile", profileDocId || "");
        await setDoc(profileDocRef, updatedProfileData, { merge: true });
        navigate("/moodtracker");
       
      } catch (error) {
        console.error("Failed to update profile:", error.message);
      }
      finally {
        setLoading(false);
      }

}

  return (


<>

<div className='relative'>

<div className={loading?"blur-sm":""}>
<form className="flex flex-col text-black gap-y-2 w-[555px]"
    action='post'
   onSubmit={handleSubmit((data)=>{
  editProfile(data);
   })}>


<div className="flex flex-col gap-y-1 ">
  <label htmlFor="name" className="font-medium text-xl text-white">
   Name
  </label>
  <input
    // aria-invalid={errors.name ? "true" : "false"}
    {...register("name")}
    type="text"
    autoComplete="name"
    placeholder={profileData?.[0]?.name || "lisa"}
    id="name"
    className="rounded-2xl px-5 py-3 outline-none"
  />
  {/* {errors.name?.type === "required" && (
    <p role="alert" className="text-red-500 text-xs">
      {errors.name.message}
    </p>
  )} */}
</div>

<div className="flex flex-col gap-y-1 ">
  <label htmlFor="username" className="font-medium text-xl text-white">
   Username
  </label>
  <input
    // aria-invalid={errors.username ? "true" : "false"}
    {...register("username")}
    type="text"
    autoComplete="username"
    placeholder="username"
    id="username"
    className="rounded-2xl px-5 py-3 outline-none"
  />
  {/* {errors.username?.type === "required" && (
    <p role="alert" className="text-red-500 text-xs">
      {errors.username.message}
    </p>
  )} */}
</div>


<div className="flex flex-col gap-y-1 ">
  <label
    htmlFor="password"
    className="font-medium text-xl text-white"
  >
    Password
  </label>
  <input
    aria-invalid={errors.password?"true":"false"}
    {...register("password", {
      required: "Password is mismatched",
    })}
    type="password"
    autoComplete="password"
    placeholder="Enter your password"
    id="password"
    className="outline-none rounded-2xl px-5 py-3 "
  />
  {errors.password && (
    <p role="alert" className="text-red-500 text-xs">
      {errors.password.message}
    </p>
  )}
</div>

<span className="text-white text-right  text-sm ">
  Forget Password? {" "}
  <Link className="font-bold">
    Send me code
  </Link>
</span>


  <Button text={"Save Changes"} type={"submit"} bgColor={"bg-[#CBCBE7]"} textColor={"text-[#595880]"}/>
    </form>
    </div>
{loading && <LoadingAnim/>}

</div>


</>

   
  )
}

