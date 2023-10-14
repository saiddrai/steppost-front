import React, { useEffect } from "react";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";
import discord from "../assets/discord.svg";
import itihadlogo from "../assets/itihadlogo.svg";
import logo from "../assets/logoFull.svg";
import axios from "axios";
function Footer() {
  const [paragraphs, setParagraphs] = React.useState([
    {
      id: 1,
      title: "principal",
      text: "Home Why choose us? Our features Demo Customer reviews Roadmap",
    },
    {
      id: 2,
      title: "extra",
      text: "Privacy policy Terms of use Cookies Legal 2023 Step Post. All rights reserved.",
    },
    {
      id: 3,
      title: "our socials",
      text: "",
    },
  ]);

  return (
    <div className="h-fit  pt-64 lg:h-[350px] w-screen bg-footerbg bg-cover bg-[-10px] px-8 space-y-8 lg:pt-20 flex flex-col lg:flex-row justify-center items-start lg:items-center pb-12">
      {/* four divs one for the logo, the second a title and a text, the third si twice the second, the fourth is social media icons and partners logos */}
      <div className="lg:w-1/4 flex flex-col  justify-end h-full  items-center">
        <img src={logo} alt="logo" className="w-28" />
      </div>
      <div className="lg:w-1/4 flex flex-col justify-end h-full items-start">
        <h1 className="font-title font-bold text-xl text-black">
          {paragraphs && paragraphs[0].title}
        </h1>
        <p className="grid grid-cols-2 lg:flex flex-col font-body font-thin underline text-white">
          <a href="#acceuil"> Home </a>
          <a href="#avantages"> Why choose us ?</a>
          <a> Our Features </a>
          <a> Demo</a>
          <a> Clients Feedback </a>
          <a> Roadmap</a>
        </p>
      </div>
      <div className="lg:w-1/4 flex flex-col  justify-end h-full  items-start">
        <h1 className="font-title font-bold text-xl text-black">extra</h1>
        <p className="font-body text-white ">
          Privacy policy Terms of use Cookies{" "}
        </p>
        <h1 className="font-title mt-4 font-bold text-xl text-black">
          Legal mentions{" "}
        </h1>
        <p className="font-body text-white text-center">
          2023 Stepopst. All rights reserved.{" "}
        </p>
      </div>
      <div className="lg:w-1/4 flex flex-col  justify-end h-full  items-start">
        <h1 className="font-title mb-2 font-bold text-xl text-black">
          our socials
        </h1>
        <div className="flex flex-row space-x-4">
          <a href="https://facebook.com" target="_blank">
            <img src={facebook} alt="facebook" className="w-6 h-6" />
          </a>
          <a href="" target="_blank">
            <img src={instagram} alt="instagram" className="w-6 h-6" />
          </a>
          <a href="" target="_blank">
            <img src={linkedin} alt="linkedin" className="w-6 h-6" />
          </a>
          <a href="" target="_blank">
            <img src={discord} alt="discord" className="w-6 h-6" />
          </a>
        </div>
        <h1 className="font-title mt-4 font-bold text-xl text-black">
          partners
        </h1>
        <p className="font-body text-white text-center mB-2">@itihad.group</p>
        <img src={itihadlogo} alt="itihadlogo" className="w-24" />
      </div>
    </div>
  );
}

export default Footer;
