import axios from "axios";
import React, { useEffect, useState } from "react";

function Cta({ language }) {
  const apiUrl = import.meta.env.VITE_APP_API_URL;
  const [content, setContent] = useState({});
  function handleSubmit() {
    const googleFormUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLScQODgwvZLkWExtp0zP6rODxs0YV0LibGc7wbxALHjklR-iWw/viewform?usp=sf_link";
    window.open(googleFormUrl, "_blank");
  }
  useEffect(() => {
    const api = "https://steppost.com/api/api/paragraphs/29/?populate=*";
    console.log(api);

    axios
      .get(`${api}`)
      .then((response) => {
        if (language === "fr") {
          setContent(response.data.data.attributes.localizations.data[0].attributes);
        } else {
          setContent(response.data.data.attributes);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="bg-cta  bg-cover text-white py-20 pb-24 mb-20 x-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-title font-bold text-center">{content && content.title}</h2>
        <p className="text-center mt-4">{content && content.description}</p>
        <div className="flex justify-center mt-8">
          <button
            onClick={handleSubmit}
            className="bg-white font-bold font-title text-purple text-3xl lg:text-5xl py-2 lg:py-4 px-10 lg:px-20 rounded-full"
          >
            {content && content.subtitle}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cta;
