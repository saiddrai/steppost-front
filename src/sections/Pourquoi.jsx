import { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";
function Pourquoi({ pourquoi, language }) {
  const [data, setData] = useState();
  const apiUrl = import.meta.env.VITE_APP_API_URL;
  useEffect(() => {
    axios
      .get(`${apiUrl}/pourquois?populate=*`)
      .then((response) => {
        const newData = response.data.data.map((item) => ({
          title: item.attributes.title,
          text: item.attributes.description,
        }));
        const frenchData = response.data.data.map((item) => ({
          title: item.attributes.localizations.data[0].attributes.title,
          text: item.attributes.localizations.data[0].attributes.description,
        }));
        if (language === "fr") {
          setData(frenchData);
          return;
        }
        setData(newData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      {data && (
        <div className="py-10 px-4 lg:px-10">
          <h1 className="font-title font-bold text-4xl lg:text-5xl  lg:w-96 lg:text-right  ">
            {language === "fr" ? "POURQUOI CHOISIR " : " WHY CHOOSE "}
            <span className="text-purple">STEPPOST?</span>
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
                  {data[0].title}
                </h1>
                <p className="text-white font-body font-semibold text-lg">{data[0].text}</p>
              </div>
            </div>
            <div className="flex justify-center items-start">
              <Card
                className="flex justify-center items-center"
                title={`${data[1].title}`}
                text={`${data[1].text}`}
                textColor={"purple"}
              />
            </div>
            <div className="flex justify-center items-center">
              <Card title={`${data[2].title}`} text={`${data[2].text}`} textColor={"purple"} />
            </div>
            <div className="flex justify-center items-center">
              <Card
                title={`${data[3].title}`}
                text={`${data[3].text}`}
                textColor={"white"}
                bg={"bg-cup"}
              />
            </div>
            <div className="flex justify-center items-center">
              <Card title={`${data[4].title}`} text={`${data[4].text}`} textColor={"purple"} />
            </div>
          </div>
          <div className="grid grid-cols-2"></div>
        </div>
      )}
    </>
  );
}

export default Pourquoi;
