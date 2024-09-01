import React, { useEffect, useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import axios from "axios";

function Services({ language }) {
  const [services, setServices] = useState([]);
  const title = language === "fr" ? "Nos Services" : "Our Services";

  const apiUrl = import.meta.env.VITE_APP_API_URL;
  const baseUrl = import.meta.env.VITE_APP_URL;
  const [description, setDescription] = useState(null);

  useEffect(() => {
    axios.get(`${apiUrl}/services?populate=*`).then((response) => {
      const tempDescrption =
        language === "fr"
          ? {
              title: response.data.data[0].attributes.localizations.data[4].attributes.title,
              description:
                response.data.data[0].attributes.localizations.data[4].attributes.description,
            }
          : {
              title: response.data.data[4].attributes.title,
              description: response.data.data[4].attributes.description,
            };
      setDescription(tempDescrption);
      const poped = response.data.data;
      poped.pop();
      const tempData = poped.map((item) => ({
        title:
          language === "fr"
            ? item.attributes.localizations.data[0].attributes.title
            : item.attributes.title,
        description:
          language === "fr"
            ? item.attributes.localizations.data[0].attributes.description
            : item.attributes.description,
        image: `${baseUrl}${item.attributes.image.data.attributes.url}`,
      }));
      setServices(tempData);
    });
  }, []);

  return (
    <>
      <h1 className="w-full text-center text-7xl font-title text-purple">{title}</h1>
      <p className="w-full text-center text-2xl font-body opacity-50 text-black">
        {description && description.title}
      </p>
      <p className="w-full text-center text-2xl font-body opacity-50 text-black">
        {description && description.description}
      </p>
      <div className="relative flex  overflow-x-scroll py-10 ">
        <div className="flex flex-row justify-center w-fit items-center  lg:space-y-0">
          {services.map((service, index) => (
            <div className="relative hover:text-purple w-screen md:w-1/4" key={index}>
              <div className="relative my-6">
                <img className="" src={service.image} alt={service.title} />
                <div className="absolute inset-0 bg-purple opacity-0 hover:opacity-80 mix-blend-multiply transition-opacity duration-500"></div>
              </div>
              <h3 className="font-title mx-2 md:mx-4 text-3xl transition-colors duration-500 hover:text-purple">
                {service.title}
              </h3>
              <p className="mx-2 md:mx-4 text-black">{service.description}</p>
              <div />
            </div>
          ))}
        </div>
        <div className="absolute top-1/2 md:opacity-0 translate-y-[-3rem] right-0 justify-self-center">
          <ChevronRightIcon className="h-10 opacity-50  " color="white" />
        </div>
      </div>
    </>
  );
}

export default Services;
