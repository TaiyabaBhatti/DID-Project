import React from 'react'

import Header from "../Common Components/Header";
import journalBg from "../../assets/images/JournalBg.png";
import journalCornerBg from "../../assets/images/journalCornerBg.png";
import Card from "../Common Components/Card";
import Button from "../Common Components/Button";
import { Outlet } from "react-router-dom";
import Footer from "../Common Components/Footer";
import Wrapper from '../Common Components/Wrapper';

export default function Journal() {
  return (
   <>

     {/* About */}
      <section className="h-screen mb-10 -mt-24">
        {/* dashboard-about-screen-bg-image */}
        <img
          src={journalBg}
          alt=""
          className="h-screen absolute top-0 -z-50 w-screen bg-no-repeat object-cover"
        />
      </section>
      
  <Wrapper height='h-screen'>
  <img
          src={journalCornerBg}
          alt=""
          className="h-screen absolute left-0 top-0 -z-50 w-screen bg-no-repeat object-cover"
        />
        <div className="translate-y-1/2 max-w-4xl  flex flex-col items-center gap-y-6 w-fit m-auto text-black ">
          <h1 className="text-center text-greyish-purple font-bold text-6xl  ">Journal</h1>
          <p className="text-center font-normal text-4xl">
          Write freely and organize your thoughts your way.
          </p>
          <Button
            text={"Explore journal"}
            bgColor={"bg-light-purple"}
            textColor={"text-black"}
            to={"/journal/workspace"}
          />
        </div>
      </Wrapper>
   </>
  )
}
