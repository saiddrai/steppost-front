import React, { useEffect, useState } from "react";
import BulletSVG from "./../assets/sandclock.png";
import purple_circle from "./../assets/pinkcircle.png";
import valid from "./../assets/valid.png";

function PriceCard({ data, language }) {
  const [dataContent, setDataContent] = useState(data);
  useEffect(() => {
    if (language === "fr") {
      const tempData = { ...data };
      tempData.title = data.localizations.data[0].attributes.title;
      tempData.p1 = data.localizations.data[0].attributes.p1;
      tempData.p2 = data.localizations.data[0].attributes.p2;
      tempData.price = data.localizations.data[0].attributes.price;

      setDataContent(tempData);
    }
  }, []);

  const openPDF = () => {
    const path =
      language === "fr" ? "/Steppost_offre_commerciale.pdf" : "/Steppost_service_offer.pdf";
    window.open(path, "_blank");
  };

  return (
    <div className="w-screen md:w-1/3 mx-4 md:mx-0 border-dashed border-custom rounded-3xl px-4 py-4 flex flex-col">
      <h1 className="font-title mb-4 text-5xl   text-purple">{dataContent.title}</h1>
      <p className="opacity-70 mb-2">{dataContent.p1} </p>
      <p>{dataContent.p2} </p>
      <h2 className="font-title mt-6 text-3xl mb-4 w-full text-right"> {dataContent.price} </h2>
      <div>
        <h3 className="font-title text-purple text-2xl"> {dataContent.title} FEATURES </h3>
        <ul>
          {dataContent.features.data.map((feature, index) => (
            <li className="flex flex-row items-center space-x-2 mb-1" key={index}>
              {" "}
              <img src={valid} className="w-6 rounded-full" /> {/* Use the SVG here */}
              <p>{feature.attributes.text} </p>
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={openPDF}
        className=" relative self-end flex flex-row mx-2 h-2 font-title font-bold text-2xl"
      >
        <span className="z-10 mr-6">{language === "fr" ? "Voir plus" : "View More"}</span>
        <img className="h-10 absolute right-0 " src={purple_circle} alt="" />
      </button>
    </div>
  );
}

export default PriceCard;
