import React, { useState } from "react";
// import { ChevronDownIcon } from "@heroicons/react/solid";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
// import dotsCycle and fillCircle svgs
import dots from "../assets/dots.png";
import fillCircle from "../assets/fillCircle.svg";
import axios from "axios";

function Landing() {
  const [post, setPost] = useState({
    attributes: {
      title:
        "GÉREZ VOS RESEAUX SOCIAUX COMME UN PRO AVEC STEPPOSTGÉREZ VOS RESEAUX SOCIAUX COMME UN PRO AVEC STEPPOST",
      description:
        "La plateforme de gestion de médias sociaux qui vous permet de créer, planifier et analyser vos publications en quelques clics.",
    },
  });

  const REACT_APP_API_URL = import.meta.env.VITE_REACT_APP_API_URL;

  React.useEffect(() => {
    const fetchPosts = async () => {
      axios
        .get(`${"http://localhost:1337"}/api/paragraphs/1`)
        .then((res) => {
          const data = res.data.data;
          setPost(data);
        })
        .catch((err) => {
          console.log(err);
          setError(true);
        });
    };
    fetchPosts();
  }, []);

  return (
    <div
      className={`h-full lg:h-screen px-4 flex flex-row justify-center items-center font-title bg-slate-200 bg-homeMobile lg:bg-home bg-cover  text-xl`}
    >
      <div className="z-0 lg:pt-20 flex lg:flex-row lg:p-10 w-full h-screen">
        <div className="flex flex-col text-left justify-start pt-24 items-start lg:pr-20 w-screen lg:w-1/2">
          <h1 className="text-3xl pb-2 lg:pb-6  font-bold  text-white">
            {post && post.attributes.title}{" "}
          </h1>
          <p className="text-lg font-body leading-tight pb-14 shadow-sm text-white">
            {post && post.attributes.description}
          </p>
          <p className="text-lg pb-4 text-white">
            Commencez votre aventure dès maintenant !{" "}
          </p>
          <div className=" absolute flex flex-col justify-center items-center w-2/3 ">
            <img
              src={dots}
              alt="dots"
              className=" left-0 absolute top-40 w-72 lg:96 lg:top-60 z-20"
            />
            <img
              src={fillCircle}
              alt="fill"
              className="w-44 lg:w-96 absolute left-[40%] top-96 opacity-20"
            />
          </div>
          <div className="flex z-30 flex-row justify-center items-center">
            <a
              className="bg-white bg-opacity-20 font-extralight hover:bg-opacity-50 cursor-pointer text-white  py-2 px-6 mx-2 rounded-full"
              href="#avantages"
            >
              En apprendre plus
            </a>
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
