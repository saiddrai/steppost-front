import React, { useEffect, useState } from "react";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";
import discord from "../assets/discord.svg";
import tiktok from "../assets/tiktok.svg";
import whatsapp from "../assets/whatsapp.svg";
import itihadlogo from "../assets/itihadlogo.svg";
import logo from "../assets/logoFull.svg";
import axios from "axios";
function Footer({ language }) {
  const [facebookLink, setFacebookLink] = useState(null);
  const [instagramLink, setInstagramLink] = useState(null);
  const [tiktokLink, setTiktokLink] = useState(null);
  const [whatsappLink, setWhatsappLink] = useState(null);
  const [linkedinLink, setLinkedinLink] = useState(null);
  const [twitterLink, setTwitterLink] = useState(null);
  const [tos, setTos] = useState(null);
  const [privacy, setPrivacy] = useState(null);

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
  const apiUrl = import.meta.env.VITE_APP_API_URL;
  useEffect(() => {
    axios.get(`${apiUrl}/footers/?populate=*`).then((response) => {
      const tempData = response.data.data[0].attributes.paragraphs.data.map((item) => ({
        id: item.id,
        title: item.attributes.title,
        link: item.attributes.description,
      }));
      setFacebookLink(tempData[0]);
      setInstagramLink(tempData[1]);
      setTiktokLink(tempData[2]);
      setWhatsappLink(tempData[3]);
      setTos(tempData[4]);
      setPrivacy(tempData[5]);
    });
  }, []);

  return (
    <>
      {language === "fr" ? (
        <div className="h-fit pt-64 lg:h-[350px] w-screen bg-footerbg bg-cover bg-[-10px] px-8 space-y-8 lg:pt-20 flex flex-col lg:flex-row justify-center items-start lg:items-center pb-12">
          {/* four divs one for the logo, the second a title and a text, the third si twice the second, the fourth is social media icons and partners logos */}
          <div className="lg:w-1/4 flex flex-col justify-end h-full items-center">
            <img src={logo} alt="logo" className="w-28" />
          </div>
          <div className="lg:w-1/4 flex flex-col justify-end h-full items-start">
            <h1 className="font-title font-bold text-xl text-black">
              {paragraphs && paragraphs[0].title}
            </h1>
            <p className="grid grid-cols-2 lg:flex flex-col font-body font-thin underline text-white">
              <a href="#acceuil"> Accueil </a>
              <a href="#avantages"> Pourquoi nous choisir ?</a>
              <a> Nos fonctionnalités </a>
              <a> Démo</a>
              <a> Avis des clients </a>
              <a> Feuille de route</a>
            </p>
          </div>
          <div className="lg:w-1/4 flex flex-col justify-end h-full items-start">
            <h1 className="font-title font-bold text-xl text-black">
              {paragraphs && paragraphs[1].title}
            </h1>

            {tos && (
              <a href="/tos/" className="font-body text-white text-center underline">
                {/* {tos.title} */}
                Conditions d'utilisation
              </a>
            )}
            {privacy && (
              <a href="/privacy" className="font-body text-white text-center underline">
                Politique de confidentialité{" "}
              </a>
            )}
            {!tos && (
              <a href="/tos/" className="font-body text-white text-center underline">
                Conditions d'utilisation
              </a>
            )}
            {!privacy && (
              <a href="/privacy" className="font-body text-white text-center underline">
                Politique de confidentialité{" "}
              </a>
            )}
            <h1 className="font-title mt-4 font-bold text-xl text-black">Mentions légales </h1>
            <p className="font-body text-white text-center">2024 SARL Step Post com. </p>
          </div>
          <div className="lg:w-1/4 flex flex-col justify-end h-full items-start">
            <h1 className="font-title mb-2 font-bold text-xl text-black">Nos réseaux sociaux</h1>
            <div className="flex flex-row space-x-4">
              {facebookLink && (
                <a href={facebookLink.link} target="_blank">
                  <img src={facebook} alt="facebook" className="w-6 h-6" />
                </a>
              )}
              {instagramLink && (
                <a href={instagramLink.link} target="_blank">
                  <img src={instagram} alt="instagram" className="w-6 h-6" />
                </a>
              )}
              {tiktokLink && (
                <a href={tiktokLink.link} target="_blank">
                  <img src={tiktok} alt="tiktok" className="w-6 h-6" />
                </a>
              )}
              {whatsappLink && (
                <a href={whatsappLink.link} target="_blank">
                  <img src={whatsapp} alt="whatsapp" className="w-6 h-6" />
                </a>
              )}
              {linkedinLink && (
                <a href={linkedinLink.link} target="_blank">
                  <img src={linkedin} alt="linkedin" className="w-6 h-6" />
                </a>
              )}
              {twitterLink && (
                <a href={twitterLink.link} target="_blank">
                  <img src={twitter} alt="twitter" className="w-6 h-6" />
                </a>
              )}
            </div>
            <h1 className="font-title mt-4 font-bold text-xl text-black">Partenaires</h1>
            <p className="font-body text-white text-center mB-2">@itihad.group</p>
            <img src={itihadlogo} alt="itihadlogo" className="w-24" />
          </div>
        </div>
      ) : (
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

            {tos && (
              <a href="/tos/" className="font-body text-white text-center underline">
                {tos.title}
              </a>
            )}
            {privacy && (
              <a href="/privacy" className="font-body text-white text-center underline">
                {privacy.title}
              </a>
            )}
            {!tos && (
              <a href="/tos/" className="font-body text-white text-center underline">
                Terms Of Use
              </a>
            )}
            {!privacy && (
              <a href="/privacy" className="font-body text-white text-center underline">
                Privacy Policy
              </a>
            )}
            <h1 className="font-title mt-4 font-bold text-xl text-black">Legal mentions </h1>
            <p className="font-body text-white text-center">2024 SARL Step Post. </p>
          </div>
          <div className="lg:w-1/4 flex flex-col  justify-end h-full  items-start">
            <h1 className="font-title mb-2 font-bold text-xl text-black">our socials</h1>
            <div className="flex flex-row space-x-4">
              {facebookLink && (
                <a href={facebookLink.link} target="_blank">
                  <img src={facebook} alt="facebook" className="w-6 h-6" />
                </a>
              )}
              {instagramLink && (
                <a href={instagramLink.link} target="_blank">
                  <img src={instagram} alt="instagram" className="w-6 h-6" />
                </a>
              )}
              {tiktokLink && (
                <a href={tiktokLink.link} target="_blank">
                  <img src={tiktok} alt="tiktok" className="w-6 h-6" />
                </a>
              )}
              {whatsappLink && (
                <a href={whatsappLink.link} target="_blank">
                  <img src={whatsapp} alt="whatsapp" className="w-6 h-6" />
                </a>
              )}
              {linkedinLink && (
                <a href={linkedinLink.link} target="_blank">
                  <img src={linkedin} alt="linkedin" className="w-6 h-6" />
                </a>
              )}
              {twitterLink && (
                <a href={twitterLink.link} target="_blank">
                  <img src={twitter} alt="twitter" className="w-6 h-6" />
                </a>
              )}
            </div>
            <h1 className="font-title mt-4 font-bold text-xl text-black">partners</h1>
            <p className="font-body text-white text-center mB-2">@itihad.group</p>
            <img src={itihadlogo} alt="itihadlogo" className="w-24" />
          </div>
        </div>
      )}
    </>
  );
}

export default Footer;
