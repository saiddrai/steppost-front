import React, { useEffect, useState } from "react";
import Avi from "../components/Avi";
import axios from "axios";
function Avis({ content, language }) {
  // les avis des clients

  const [avis, setAvis] = useState([]);

  const apiUrl = import.meta.env.VITE_APP_API_URL;

  useEffect(() => {
    axios.get(`${apiUrl}/avis?populate=*`).then((response) => {
      const tempData = response.data.data.map((item) => ({
        name: item.attributes.name,
        job:
          language === "fr"
            ? item.attributes.localizations.data[0].attributes.job
            : item.attributes.job,
        stars: item.attributes.stars,
        image: item.attributes.image.data ? item.attributes.image.data.attributes.url : null,
        text:
          language === "fr"
            ? item.attributes.localizations.data[0].attributes.text
            : item.attributes.text,
      }));
      setAvis(tempData);
    });
  }, []);

  return (
    <div>
      <h1 className="font-title font-bold text-4xl lg:text-5xl  lg:mr-44 lg:text-right px-4 lg:px-10 text-end mr-14 ">
        <span className="text-purple text-end  text-5xl lg:text-6xl">
          {language === "fr" ? "AVIS" : "COSTUMER"}
        </span>
        <br /> {language === "fr" ? "CLIENTS" : "FEEDBACK"}
      </h1>
      <div className="flex items-center justify-center overflow-x-auto">
        {avis && (
          <div className="flex flex-row justify-center shrink-0 items-center space-x-8 ml-16 lg:space-y-0 py-10">
            {avis.map((item, i) => {
              return (
                <Avi
                  key={i}
                  name={item.name}
                  image={item.image}
                  job={item.job}
                  text={item.text}
                  stars={item.stars}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Avis;
