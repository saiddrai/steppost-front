import React, { useEffect, useState } from "react";
import roadmap from "../assets/roadmap.svg";
import Step from "../components/Step";
// import { roadmapList } from "../content";
function Roadmap({ roadmapList }) {
  return (
    <div className="flex flex-col my-10 h-fit leading-[14px] lg:leading-tight text-sm lg:text-base w-screen px-4 lg:px-10 justify-center items-center">
      <h1 className="font-title font-bold text-3xl lg:text-4xl  lg:mr-44 lg:text-right  px-4 lg:px-10 text-end mr-14 ">
        OUR
        <span className="text-purple text-end  text-5xl lg:text-6xl">
          ROADMAP
        </span>
        <br />
      </h1>

      <div className="flex flex-row my-10    justify-center items-start w-full h-[40rem] lg:h-[30rem] lg:w-fit">
        <div className="flex flex-col w-36 lg:w-72 pr-2 text-right mr-2">
          {roadmapList.list.map((item, i) => {
            // return odd index items
            if (i % 2 == 1) {
              return <Step title={item.title} description={item.description} />;
            } else {
              return <Step title={item.title} description={item.description} />;
            }
          })}
        </div>

        <img src={roadmap} className="h-[30rem]" />
        <div className="flex flex-col items-start justify-center w-36  lg:w-72 pl-2">
          <Step />
          <Step />
          {roadmapList.list.map((item, i) => {
            if (i % 2 == 0) {
              return <Step title={item.title} description={item.description} />;
            } else {
              return <Step title={""} description={""} />;
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
