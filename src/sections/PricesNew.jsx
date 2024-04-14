import React, { useEffect, useState } from "react";
import PriceCard from "../components/PriceCard";
import axios from "axios";

function PricesNew({ language }) {
  const [prices, setPrices] = useState();

  const apiURL = import.meta.env.VITE_APP_API_URL;

  useEffect(() => {
    axios.get(`${apiURL}/prices?populate=*`).then((response) => {
      setPrices(response.data.data);
    });
  }, []);
  return (
    <>
      <div className="flex flex-row ml-4 lg:ml-10 justify-start items-end">
        <h1 className="font-title font-bold text-4xl lg:text-5xl text-left mt-10 mr-10  ">
          {language === "fr" ? "DECOUVREZ" : "DISCOVER"}
          <br />
          <span className="text-purple   text-6xl lg:text-7xl">
            {language === "fr" ? "NOS PRIX" : "OUR PRICES"}
          </span>
        </h1>
        <p className=" text-left w-56 mb-2 text-2xl font-body opacity-50 text-black">
          {language === "fr"
            ? "une solution adaptée, quel que soit votre budget"
            : "a suitable solution, whatever your budget"}
        </p>
      </div>
      <div className="flex overflow-x-scroll py-10 ">
        <div className="flex flex-row justify-center w-fit items-center  lg:space-y-0 space-x-4 mb-20 ">
          {prices &&
            prices.map((price, index) => (
              <PriceCard language={language} key={index} data={price.attributes} />
            ))}
        </div>
      </div>
    </>
  );
}

export default PricesNew;
