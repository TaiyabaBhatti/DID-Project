import React, { useContext } from "react";
import Header from "../Common Components/Header";
import dashboardBg from "../../assets/images/background.png";
import Card from "../Common Components/Card";
import Button from "../Common Components/Button";
import { Outlet } from "react-router-dom";
import Footer from "../Common Components/Footer";
import Wrapper from "../Common Components/Wrapper";
import AuthContext from "../context/authContext";

export default function Dashboard() {

  const {patientName} = useContext(AuthContext);







  return (
    <>
      {/* About */}
      <section className=" h-screen mb-10 -mt-24 flex items-center">
        {/* dashboard-about-screen-bg-image */}
        <img
          src={dashboardBg}
          alt=""
          className="h-screen absolute top-0 -z-50 w-screen bg-no-repeat object-cover"
        />
        <div
          id="dashboard-about-heading"
          className="max-w-4xl px-10 flex flex-col items-center gap-y-6  m-auto text-white"
        >
          <h1 className="text-center font-bold text-6xl ">Dashboard</h1>
          <p className="text-center font-normal text-4xl">
            Hello, {patientName || "..."}! How are you feeling today?
          </p>
          <Button text={"Explore dashboard"} bgColor={"bg-slate-200"} />
         
        </div>
      </section>

      {/* <Wrapper height="h-screen" bgColor="bg-slate-400"></Wrapper>
      <Wrapper height="h-screen" bgColor="bg-slate-400"></Wrapper>
      <Wrapper height="h-screen" bgColor="bg-slate-400"></Wrapper> */}


      {/* Track */}
<Wrapper height="h-screen" bgColor="bg-slate-400">

<div className="translate-y-1/2 max-w-4xl  flex flex-col items-center gap-y-6  m-auto text-black ">
          <h1 className="text-center font-bold text-6xl ">
            Mood Tracker Summary
          </h1>
          <p className="text-center font-normal text-4xl">
            Effortlessly log your daily feelings, identify triggers, and monitor
            your emotional trends. The Mood Tracker helps you understand your
            mental health better.
          </p>
          <Button
            text={"Update now"}
            bgColor={"bg-slate-600"}
            textColor={"text-white"}
            to={"/moodtracker"}
          />
         
        </div>
      

</Wrapper>
      {/* Dashboards Cards */}
      <Wrapper height="h-screen">
      <div className="translate-y-1/2 flex gap-x-5 flex-row">
          <div className="bg-slate-500 p-10 max-w-xl flex flex-col items-center rounded-2xl gap-y-2 w-fit m-auto text-white h-64">
            <h1 className="text-center font-semibold text-3xl">
              Daily Affirmation
            </h1>
            <p className="text-center font-normal text-2xl">
              You are not your thoughts; you are the awareness behind them.
            </p>

            <Button
              text={"Open Now"}
              to={"/Journal/all-notes"}
              bgColor={"bg-slate-600"}
              textColor={"text-white"}
            />
          </div>

          <div className="bg-slate-500 p-10 max-w-xl flex flex-col items-center rounded-2xl gap-y-2 w-fit m-auto text-white h-64">
            <h1 className="text-center font-semibold text-3xl">
              Open Safety Plan
            </h1>
            <p className="text-center font-normal text-2xl">
              Our Safety Plan tool empowers you to stay prepared and take
              control when it matters most.
            </p>

            <Button
              text={"Open now"}
              bgColor={"bg-slate-600"}
              textColor={"text-white"}
            />
          </div>
        </div>
      </Wrapper>

      {/* Journal */}
      <Wrapper height="h-screen" bgColor="bg-slate-400">
      <div className="translate-y-1/2 max-w-4xl  flex flex-col items-center gap-y-6 w-fit m-auto text-black ">
          <h1 className="text-center font-bold text-6xl ">Journal</h1>
          <p className="text-center font-normal text-4xl">
            Journaling helps you process emotions, reflect on your day, and
            track your personal growth over time.
          </p>
          <Button
          to={"/journal"}
            text={"Open now"}
            bgColor={"bg-slate-600"}
            textColor={"text-white"}
          />
        </div>
    
      </Wrapper>
    
      
    </>
  );
}
