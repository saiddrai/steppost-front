import React, { useEffect, useState } from "react";
import dots from "../assets/dotsDark.png";
import fillCircle from "../assets/fillLight.png";
function Slide({ paragraph, image1, image2, svg, size, position, id }) {
  return (
    <div
      className={`h-full w-screen lg:h-screen flex justify-center items-center px-0 py-0 font-title lg:overflow-hidden bg-lightbg   text-xl`}
    >
      <div
        className={`"z-0 pt-20 space-x-20 flex ${
          id % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
        } flex-col  text-black p-10 w-full h-full "`}
      >
        <div className="flex flex-col text-left justify-center items-start  w-full lg:w-1/2">
          <h1 className="text-4xl pb-8  font-bold  text-purple">
            {paragraph.title}{" "}
          </h1>
          <p className="text-2xl pb-14 ">{paragraph.description}</p>
          <img
            src={svg}
            alt="svg"
            className={`"absolute z-6 h-40 top-[${position[4]}%] left-[${position[5]}%]"`}
          />
        </div>
        <div className="flex flex-col mt-12 lg:mt-2 justify-center items-center w-full lg:w-1/2">
          <img
            src={image1}
            alt="screebshot1"
            className="relative top-[20%] lg:top-[20%] left-[-30%] lg:left-[-5%]  z-9"
          />

          {image2 && (
            <img
              src={image2}
              alt="screebshot2"
              className="relative top-[-8rem] lg:top-[-25%] left-[-25%] lg:left-[-15%]  z-10"
            />
          )}
        </div>
      </div>
      <div className="absolute h-screen">
        <img
          src={dots}
          alt="dots"
          className={`"transform transition-all duration-300 absolute z-10 w-96 w-[${size[0]}rem] 
          left-[${position[0]}%] top-[${position[1]}%] opacity-20 z-10`}
        />
        <img
          src={fillCircle}
          alt="fill"
          className={`absolute z-20 w-[${size[1]}rem]  left-[${position[2]}%] top-[${position[3]}%] opacity-30`}
        />
      </div>
    </div>
  );
}

export default Slide;
