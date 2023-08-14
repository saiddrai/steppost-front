import React, { useEffect, useState } from "react";
import roadmap from "../assets/roadmap.svg";
import Step from "../components/Step";
import axios from "axios";

function Roadmap() {
  const VITE_APP_API_URL = import.meta.env.VITE_APP_API_URL;

  const [steps, setSteps] = useState(null);

  // const [stepsLeft, setStepsRight] = useState([
  //   {
  //     title: "",
  //     text: "",
  //   },

  //   {
  //     title: "",
  //     text: "",
  //   },

  //   {
  //     title: "Generation de contenu avec IA",
  //     text: "Step Post vous permet d'analyser les commentaires et d'en determiner la teneur, en darja aussi !",
  //   },
  //   {
  //     title: "",
  //     text: "",
  //   },

  //   {
  //     title: "Analyse de sentiment",
  //     text: "Step Post vous permet d'analyser les commentaires et d'en determiner la teneur, en darja aussi !",
  //   },
  // ]);
  // const [stepsRight, setStepsLeft] = useState([
  //   {
  //     title: "",
  //     text: "",
  //   },
  //   {
  //     title: "Integration de Canva",
  //     text: "Step Post integre les fonctionnalites de Canva directement dans notre plateforme, plus besoin de naviguer entre plusieurs fenetres pour creer vos visuels !",
  //   },
  //   {
  //     title: "",
  //     text: "",
  //   },
  //   {
  //     title: "Social listening",
  //     text: "",
  //   },
  //   {
  //     title: "",
  //     text: "",
  //   },
  // ]);
  // fetch steps from api

  useEffect(() => {
    axios
      .get(`${VITE_APP_API_URL}/roadmaps/?populate=*`)
      .then((res) => {
        setSteps(res.data.data[0].attributes.paragraphs.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex flex-col my-10 h-fit leading-[14px] lg:leading-tight text-sm lg:text-base w-screen px-4 lg:px-10 justify-center items-center">
      <h1 className="font-title font-bold text-3xl lg:text-4xl  lg:mr-44 lg:text-right  px-4 lg:px-10 text-end mr-14 ">
        NOTRE
        <span className="text-purple text-end  text-5xl lg:text-6xl">
          ROADMAP
        </span>
        <br />
      </h1>

      <div className="flex flex-row my-10    justify-center items-start w-full h-[40rem] lg:h-[30rem] lg:w-fit">
        <div className="flex flex-col w-36 lg:w-72 pr-2 text-right mr-2">
          {steps &&
            steps.map((item, i) => {
              // return odd index items
              if (i % 2 == 1) {
                return (
                  <Step
                    title={item.attributes.title}
                    description={item.attributes.description}
                  />
                );
              } else {
                return <Step title={""} description={""} />;
              }
            })}
        </div>

        <img src={roadmap} className="h-[30rem]" />
        <div className="flex flex-col items-start justify-center w-36  lg:w-72 pl-2">
          <Step />
          <Step />
          {steps &&
            steps.map((item, i) => {
              // return odd index items
              if (i % 2 == 0) {
                return (
                  <Step
                    title={item.attributes.title}
                    description={item.attributes.description}
                  />
                );
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
