import axios from "axios";
import React, { useEffect, useState } from "react";

function Prices() {
  const VITE_APP_API_URL = import.meta.env.VITE_APP_API_URL;
  const [prices, setPrices] = useState(null);

  useEffect(() => {
    axios
      .get(`${VITE_APP_API_URL}/prices/?populate=*`)
      .then((res) => {
        const data = res.data.data;
        setPrices(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="px-4 lg:px-10 my-10">
      <h1 className="font-title m-6 font-bold text-5xl lg:text-6xl  lg:w-72 lg:text-right  ">
        decouvrez <br />
        <span className="text-purple text-6xl lg:text-7xl">
          les offres & prix
        </span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-0 gap-y-4 grid-auto-rows-max w-full">
        <div className="flex flex-col justify-between rounded-2xl h-full border-dashed px-4 py-4 lg:py-8  w-11/12  border-custom mx-auto my-4 ">
          <div>
            <h1 className="font-title text-4xl text-purple">
              {prices && prices[0].attributes.paragraph.data.attributes.title}
            </h1>
            <p className="font-body opacity-60">
              {prices &&
                prices[0].attributes.paragraph.data.attributes.description}
            </p>
            <ul className="grid grid-cols-2">
              {prices &&
                prices[0].attributes.lists.data.map((item) => {
                  return (
                    <li className="font-body text-purple ml-4 opacity-60 list-disc">
                      {item.attributes.text}
                    </li>
                  );
                })}
            </ul>
          </div>
          <h2 className="self-end font-title text-xl">
            {prices && prices[0].attributes.price}
          </h2>
        </div>
        <div className="flex flex-col justify-between rounded-2xl border-dashed px-4 py-4 lg:py-8 h-full w-11/12  border-custom mx-auto my-4 ">
          <div>
            <h1 className="font-title text-4xl text-purple">
              {prices && prices[1].attributes.paragraph.data.attributes.title}
            </h1>
            <p className="font-body opacity-60">
              {prices &&
                prices[1].attributes.paragraph.data.attributes.description}
            </p>
            <ul className="grid grid-cols-2">
              {prices &&
                prices[1].attributes.lists.data.map((item) => {
                  return (
                    <li className="font-body text-purple ml-4 opacity-60 list-disc">
                      {item.attributes.text}
                    </li>
                  );
                })}
            </ul>
          </div>
          <h2 className="self-end font-title text-xl">
            {prices && prices[1].attributes.price}
          </h2>
        </div>
        <div className="flex -flex-col justify-between rounded-2xl border-dashed px-4 py-4 lg:py-8 h-full w-11/12  border-custom mx-auto my-4 ">
          <div>
            <h1 className="font-title text-4xl text-purple">
              {prices && prices[2].attributes.paragraph.data.attributes.title}
            </h1>
            <p className="font-body opacity-60">
              {prices &&
                prices[2].attributes.paragraph.data.attributes.description}
            </p>
            <ul className="grid grid-cols-2">
              {prices &&
                prices[2].attributes.lists.data.map((item) => {
                  return (
                    <li className="font-body text-purple ml-4 opacity-60 list-disc">
                      {item.attributes.text}
                    </li>
                  );
                })}
            </ul>
          </div>
          <h2 className="self-end font-title text-xl">
            {prices && prices[2].attributes.price}
          </h2>
        </div>
        <div className="flex flex-col justify-between rounded-2xl border-dashed px-4 py-4 lg:py-8 h-full w-11/12  border-custom mx-auto my-4 text-white bg-purple ">
          <div>
            <h1 className="font-title text-4xl text-white">
              {prices && prices[3].attributes.paragraph.data.attributes.title}
            </h1>
            <p className="font-body opacity-60">
              {prices &&
                prices[3].attributes.paragraph.data.attributes.description}
            </p>
            <ul className="grid grid-cols-2">
              {prices &&
                prices[3].attributes.lists.data.map((item) => {
                  return (
                    <li className="font-body text-white ml-4 opacity-60 list-disc">
                      {item.attributes.text}
                    </li>
                  );
                })}
            </ul>
          </div>
          <h2 className="self-end">{prices && prices[3].attributes.price}</h2>
        </div>
      </div>
    </div>
  );
}

export default Prices;
