import React, { useEffect, useState } from "react";
import Avi from "../components/Avi";
import { avis } from "../content";
function Avis() {
  // les avis des clients

  return (
    <div>
      <h1 className="font-title font-bold text-4xl lg:text-5xl  lg:mr-44 lg:text-right px-4 lg:px-10 text-end mr-14 ">
        <span className="text-purple text-end  text-5xl lg:text-6xl">
          CUSTOMER
        </span>
        <br /> FEEDBACK
      </h1>
      <div className="flex overflow-x-auto">
        <div className="flex flex-row justify-center shrink-0 items-center space-x-8 ml-16 lg:space-y-0 py-10">
          {avis.list.map((item) => {
            return (
              <Avi
                name={item.name}
                job={item.job}
                text={item.text}
                picture={item.picture}
                stars={item.stars}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Avis;
