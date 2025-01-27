import React from "react";
import journalHeaderBg from "../../assets/images/journalHeaderBg.png";
import dashboardBg from "../../assets/images/background.png";
import Button from "../Common Components/Button";
import Card from "../Common Components/Card";
import Wrapper from "../Common Components/Wrapper";
import GuidedBreathing from "./GuidedBreathing";
import SensoryExercises from "./SensoryExercises";

export default function GroundingToolLibrary() {

  const toolCards = [
    {
      description: "Follow calming animations to regulate your breathing.",
      buttonText: "Start Breathing Exercise",
      pageNavigation:"/grounding-tool-library/guided-breathing"
    },
    {
      description: "Focus on the present by identifying objects and sensations",
      buttonText: "Try Sensory Exercise",
       pageNavigation:"/grounding-tool-library/sensory-exercise"
    },
    {
      description: "Listen to calming playlists for relaxation and focus",
      buttonText: "Play Now",
       pageNavigation:"/grounding-tool-library/soothing-playlists"
    },
  ];

  return (
    <>
      {/* About */}
      <section className=" h-screen mb-10 -mt-24 flex items-center">
        <img
          src={dashboardBg}
          alt=""
          className="h-screen absolute top-0 -z-50 w-screen bg-no-repeat object-cover"
        />
        <div
          id="dashboard-about-heading"
          className="max-w-4xl px-10 flex flex-col items-center gap-y-6  m-auto text-white"
        >
          <h1 className="text-center font-bold text-6xl ">
            Grounding Tool Library
          </h1>
          <p className="text-center font-normal text-4xl">
          Access tools and exercises to stay grounded during moments of dissociation.
          </p>
          <Button text={"Explore tools"} bgColor={"bg-slate-200"} />
        </div>
      </section>

      {/*  Exercises */}

      <Wrapper bgColor="bg-light-purple ">
       <GuidedBreathing/>
        </Wrapper>

        <Wrapper>
       <SensoryExercises/>
        </Wrapper>





    </>
  );
}
