import React, { useEffect, useState } from "react";
import Avi from "../components/Avi";
import axios from "axios";

function Avis() {
  // les avis des clients
  const VITE_APP_API_URL = import.meta.env.VITE_APP_API_URL;

  const [avisOffline, setAvisOffline] = useState([
    {
      id: 1,
      name: "Amine",
      job: "CEO",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      picture: "",
      stars: 5,
    },
    {
      id: 2,
      name: "Amine",
      job: "CEO",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      picture: "",
      stars: 5,
    },
    {
      id: 3,
      name: "Amine",
      job: "CEO",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      picture: "",
      stars: 5,
    },
    {
      id: 3,
      name: "Amine",
      job: "CEO",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      picture: "",
      stars: 5,
    },
  ]);
  const [avis, setAvis] = useState(null);
  // fetch les avis
  useEffect(() => {
    axios
      .get(`${VITE_APP_API_URL}/avis/?populate=*`)
      .then((res) => {
        const data = res.data.data;

        setAvis(data);
      })
      .catch((err) => {
        console.log(err);
        console.log(avis);
      });
  }, []);

  return (
    <div>
      <h1 className="font-title font-bold text-4xl lg:text-5xl  lg:mr-44 lg:text-right px-4 lg:px-10 text-end mr-14 ">
        <span className="text-purple text-end  text-5xl lg:text-6xl">
          LES AVIS
        </span>
        <br /> DE NOS CLIENTS
      </h1>
      <div className="flex overflow-x-auto">
        <div className="flex flex-row justify-center shrink-0 items-center space-x-8 ml-16 lg:space-y-0 py-10">
          {!avis &&
            avisOffline.map((item) => {
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
          {avis &&
            avis.map((item) => {
              return (
                <Avi
                  name={item.attributes.name}
                  job={item.attributes.job}
                  text={item.attributes.text}
                  picture={item.attributes.picture}
                  stars={item.attributes.stars}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Avis;
