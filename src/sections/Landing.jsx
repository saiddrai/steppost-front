import React, { useEffect, useState } from "react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import dots from "../assets/dots.png";
import fillCircle from "../assets/fillLight.png";
import axios from "axios";

function Landing({ home, language }) {
  const [content, setContent] = useState({});
  function handleSubmit() {
    const googleFormUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLScQODgwvZLkWExtp0zP6rODxs0YV0LibGc7wbxALHjklR-iWw/viewform?usp=sf_link";
    window.open(googleFormUrl, "_blank");
  }
  const handleClick = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href").slice(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const apiUrl = import.meta.env.VITE_APP_API_URL;

  useEffect(() => {
    axios
      .get(`${apiUrl}/paragraphs/1?populate=*`)
      .then((response) => {
        if (language === "fr") {
          setContent(response.data.data.attributes.localizations.data[0].attributes);
        } else {
          setContent(response.data.data.attributes);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div
      className={`h-full lg:h-screen px-4 flex flex-row justify-center items-center font-title bg-slate-200 bg-homeMobile lg:bg-home bg-cover  text-xl`}
    >
      <div className="z-0 lg:pt-20 flex lg:flex-row lg:p-10 w-full h-screen">
        <div className="flex flex-col text-left justify-start pt-24 items-start lg:pr-20 w-screen lg:w-2/3">
          <h1 className="text-4xl lg:text-6xl pb-2 lg:pb-6  font-bold  text-white">
            {content && content.title}{" "}
          </h1>
          <p className="text-2xl font-body leading-tight pb-14 shadow-sm text-white">
            {content && content.description}
          </p>
          <p className="text-2xl pb-4 text-white">{content.subtitle}</p>
          <div className=" absolute flex flex-col justify-center items-center w-2/3 ">
            <img src={dots} className=" left-0 absolute top-40 w-72 lg:w-96 lg:top-96 z-20" />
            <img src={fillCircle} className="w-44 lg:w-96 absolute left-[40%] top-96 opacity-20" />
          </div>
          <div className="flex z-30 flex-row justify-center items-center">
            <button
              onClick={() => handleSubmit()}
              className="bg-white bg-opacity-80 font-extralight hover:bg-opacity-50 cursor-pointer text-purple text-3xl  py-4 px-14  rounded-full"
            >
              {language === "fr" ? "S'inscrire à un demo" : "Register for a demo"}
            </button>
            <a
              href="#avantages"
              onClick={handleClick}
              className="bg-transparent pointer-cursor border-dashed-custom   hover:bg-opacity-50 hover-bg-white z-50 text-white font-bold py-4 px-4 rounded-full"
            >
              <ChevronDownIcon className="h-10 w-610 " />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
