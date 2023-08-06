import React, { useState } from "react";
import Card from "../components/Card";
import axios from "axios";
function Pourquoi() {
  const VITE_APP_API_URL = import.meta.env.VITE_APP_API_URL;
  const [paragraphs, setParagraphs] = useState([
    {
      id: 1,
      attributes: {
        title: "Gagnez du temps et de l'efficacité",
        description:
          "Gérez tous vos comptes sociaux depuis une seule interface.",
      },
    },
    {
      id: 2,
      attributes: {
        title: "Menagez votre tresorerie!",
        description:
          "Step Post est un produit algerien, vous aurez donc… De plus, vos donnees seront heberges en Algerie.",
      },
    },
    {
      id: 3,
      attributes: {
        title: "Analysez les performances",
        description:
          "Obtenez des rapports détaillés et des insights actionnables pour améliorer votre stratégie.",
      },
    },
    {
      id: 4,
      attributes: {
        title: "Planifiez vos publications",
        description:
          "Automatisez leur diffusion selon le meilleur moment pour toucher votre audience.",
      },
    },
    {
      id: 5,
      attributes: {
        title: "Créez du contenu engageant",
        description: "Personnalisez votre contenu pour chaque réseau social.",
      },
    },
  ]);

  React.useEffect(() => {
    axios.get(`${VITE_APP_API_URL}/whys/?populate=*`).then((res) => {
      setParagraphs(res.data.data[0].attributes.paragraphs.data);
    });
  }, []);

  return (
    <div className="py-10 px-4 lg:px-10">
      <h1 className="font-title font-bold text-4xl lg:text-5xl  lg:w-96 lg:text-right  ">
        POURQUOI CHOISIR <span className="text-purple">STEPPOST?</span>
      </h1>
      <div
        className="flex flex-col justify-center items-center
      lg:grid  grid-cols-2 lg:grid-cols-3 mt-10 w-5/6 mx-auto space-y-8"
      >
        <div className="flex row-span-2 justify-center items-center">
          <div
            className="p-6  py-10 bg-sandver lg:translate-y-4 bg-cover rounded-2xl
          h-[32rem]  w-64 "
          >
            <h1 className="text-4xl font-title font-bold text-white mx- mb-10">
              {paragraphs && paragraphs[0].attributes.title}{" "}
            </h1>
            <p className="text-white font-body font-semibold text-lg">
              {paragraphs && paragraphs[0].attributes.description}
            </p>
          </div>
        </div>
        <div className="flex justify-center items-start">
          <Card
            className="flex justify-center items-center"
            title={`${paragraphs && paragraphs[1].attributes.title}`}
            text={`${paragraphs && paragraphs[1].attributes.description}`}
            textColor={"purple"}
          />
        </div>
        <div className="flex justify-center items-center">
          <Card
            title={`${paragraphs && paragraphs[2].attributes.title}`}
            text={`${paragraphs && paragraphs[2].attributes.description}`}
            textColor={"purple"}
          />
        </div>
        <div className="flex justify-center items-center">
          <Card
            title={`${paragraphs && paragraphs[3].attributes.title}`}
            text={`${paragraphs && paragraphs[3].attributes.description}`}
            textColor={"white"}
            bg={"bg-cup"}
          />
        </div>
        <div className="flex justify-center items-center">
          <Card
            title={`${paragraphs && paragraphs[4].attributes.title}`}
            text={`${paragraphs && paragraphs[4].attributes.description}`}
            textColor={"purple"}
          />
        </div>
      </div>
      <div className="grid grid-cols-2"></div>
    </div>
  );
}

export default Pourquoi;
