import React from "react";
import Video from "../components/Video";
import fillCircle from "../assets/fillLight.png";
import decouvrir from "../assets/decouvrir.png";
import decouvrirEng from "../assets/dis.png";
import decouvrirHor from "../assets/decouvrirHor.png";

function Demo({ language }) {
  // fetch from "itihad.me/api/video"

  return (
    <div className=" py-10">
      <h1 className="font-title m-6 font-bold text-5xl lg:text-6xl  lg:w-72 lg:text-right  ">
        {language === "fr" ? "UN PETIT " : "A LITTLE "}
        <br />
        <span className="text-purple text-6xl lg:text-7xl">DEMO ?</span>
      </h1>
      <div className=" flex flex-col lg:flex-row justify-center items-center ">
        <div className="lg:w-12 lg:ml-auto lg:mr-"></div>
        <Video language={language} />

        <img src={decouvrirHor} className=" lg:hidden  ml-auto mr-6 mt-2 w-10/12" alt="" />
        {language === "fr" ? (
          <img
            src={decouvrir}
            className="  rotate-90 hidden lg:flex  ml-auto lg:h-fit lg:rotate-0 lg:w-12 mr-6 mt-2 lg:ml-4 lg:mr-auto"
            alt=""
          />
        ) : (
          <img
            src={decouvrirEng}
            className="  rotate-90 hidden lg:flex opacity-5  ml-auto lg:h-fit lg:rotate-0 lg:w-12 mr-6 mt-2 lg:ml-4 lg:mr-auto"
            alt=""
          />
        )}
      </div>
      <img
        src={fillCircle}
        alt="fill"
        className={`absolute z-20 w-20  left-[20%] top-[20%] opacity-30`}
      />
    </div>
  );
}

export default Demo;
