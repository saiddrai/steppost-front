import React, { useState } from "react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import dots from "../assets/dots.png";
import fillCircle from "../assets/fillLight.png";

function Landing({ home, language }) {
  function handleSubmit() {
    const googleFormUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLScQODgwvZLkWExtp0zP6rODxs0YV0LibGc7wbxALHjklR-iWw/viewform?usp=sf_link";
    window.open(googleFormUrl, "_blank");
  }
  return (
    <div
      className={`h-full lg:h-screen px-4 flex flex-row justify-center items-center font-title bg-slate-200 bg-homeMobile lg:bg-home bg-cover  text-xl`}
    >
      <div className="z-0 lg:pt-20 flex lg:flex-row lg:p-10 w-full h-screen">
        <div className="flex flex-col text-left justify-start pt-24 items-start lg:pr-20 w-screen lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl pb-2 lg:pb-6  font-bold  text-white">
            {home.title}{" "}
          </h1>
          <p className="text-lg font-body leading-tight pb-14 shadow-sm text-white">
            {home.description}
          </p>
          <p className="text-lg pb-4 text-white">{home.subtitle}</p>
          <div className=" absolute flex flex-col justify-center items-center w-2/3 ">
            <img
              src={dots}
              className=" left-0 absolute top-40 w-72 lg:96 lg:top-60 z-20"
            />
            <img
              src={fillCircle}
              className="w-44 lg:w-96 absolute left-[40%] top-96 opacity-20"
            />
          </div>
          <div className="flex z-30 flex-row justify-center items-center">
            <button
              onClick={() => handleSubmit()}
              className="bg-white bg-opacity-80 font-extralight hover:bg-opacity-50 cursor-pointer text-purple text-2xl  py-2 px-6  rounded-full"
            >
              {language === "fr" ? "S'inscrire à Beta" : "Register for Beta"}
            </button>
            <a
              href="#avantages"
              className="bg-transparent pointer-cursor border-dashed-custom   hover:bg-opacity-50 hover-bg-white z-50 text-white font-bold py-4 px-4 rounded-full"
            >
              <ChevronDownIcon className="h-6 w-6 " />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
