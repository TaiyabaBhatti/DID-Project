import React from "react";
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <footer className=" bg-[#CBCBE7] relative mt-24">
      <div className="flex md:flex-row p-10 flex-col gap-5 justify-between ">
        <div className="max-w-80">
          <h1 className="mb-5 font-bold text-xl">D.I.D Site</h1>
          <p className="font-normal text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div>
            <h1 className="font-bold text-xl underline mb-5">Links</h1>
        <ul>
          <li className="text-base font-normal"><Link to="">System Profile</Link></li>
          <li className="text-base font-normal"><Link to={"/moodtracker"}>Mood Tracker</Link></li>
          <li className="text-base font-normal"><Link to={"/journal"}>Journal</Link></li>
          <li className="text-base font-normal"><Link to={"/support"}>Support</Link></li>
        </ul>
        </div>
      </div>
<div className=" bg-[#595880]  p-10">
<h1 className="text-center text-xl font-normal">© 2023 D.I.D Site All Rights Reserved.</h1>
</div>

    </footer>
  );
}
