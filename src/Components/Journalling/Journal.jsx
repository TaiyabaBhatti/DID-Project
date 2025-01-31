import React from "react";

import Header from "../Common Components/Header";
import journalBg from "../../assets/images/JournalBg.png";
import journalCornerBg from "../../assets/images/journalCornerBg.png";
import Card from "../Common Components/Card";
import Button from "../Common Components/Button";
import { Outlet } from "react-router-dom";
import Footer from "../Common Components/Footer";
import Wrapper from "../Common Components/Wrapper";
import allNotes from "../../assets/animations/allnotes.json";
import editor from "../../assets/animations/texteditor.json";
import Lottie from "lottie-react";
import Content from "../Common Components/Content";

export default function Journal() {
  return (
    <>
      {/* About */}
      <section className="h-screen mb-10 -mt-24 flex items-center">
        {/* dashboard-about-screen-bg-image */}
        <img
          src={journalBg}
          alt=""
          className="h-screen absolute top-0 -z-50 w-screen bg-no-repeat object-cover"
        />

        <Content contentProperties={"text-white"}>
          <h1 className="text-center text-white font-bold text-6xl  ">
            Journal
          </h1>
          <p className="text-center text-white font-normal text-4xl">
            Write freely and organize your thoughts your way.
          </p>
          <Button
            text={"Explore journal"}
            
           href="#explore-journaling"
            properties={"text-black bg-white"}
          />
        </Content>
      </section>
<section id="explore-journaling">
<Wrapper height="h-screen" centerHV="flex items-center justify-center">
        <div className="flex flex-row gap-5 items-center justify-center m-auto text-black ">
          <div className="flex bg-light-purple p-5 rounded-md flex-col gap-y-2 items-center">
            <Lottie
              animationData={editor}
              loop
              style={{ height: "300px", width: "300px" }}
            />

            <Button
              text={"Text Editor"}
              to={"/journal/workspace"}
              properties={"text-white bg-greyish-purple "}
            />
          </div>

          <div className="flex bg-light-purple p-5 rounded-md flex-col gap-y-2 items-center">
            <Lottie
              animationData={allNotes}
              loop
              style={{ height: "300px", width: "300px" }}
            />

            <Button
              text={"All Notes"}
              to={"/journal/all-notes"}
              properties={"text-white bg-greyish-purple "}
            />
          </div>
        </div>
      </Wrapper>
</section>

     
    </>
  );
}
