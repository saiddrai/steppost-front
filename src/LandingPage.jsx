import React, { useEffect, useState } from "react";
import Landing from "./sections/Landing";
import Navbar from "./components/Navbar";
import SlideSection from "./sections/SlideSection";
import Pourquoi from "./sections/Pourquoi";
import Demo from "./sections/Demo";
import Avis from "./sections/Avis";
import Roadmap from "./sections/Roadmap";
import Footer from "./components/Footer";
import Services from "./sections/Services";
import Carousel from "./sections/Test";
import PricesNew from "./sections/PricesNew";
import axios from "axios";
import Blog from "./sections/Blog";
import Cta from "./sections/Cta";

function LandingPage({ content, language }) {
  const [ActivatedSections, setActivatedSections] = useState([
    true,
    true,
    true,
    true,
    true,
    true,
    true,
  ]);
  const apiUrl = import.meta.env.VITE_APP_API_URL;

  useEffect(() => {
    axios.get(`${apiUrl}/sections`).then((response) => {
      const sections = response.data.data.map((section) => section.attributes.active);
      setActivatedSections(sections);
    });
    axios.get(`https://steppost.com/api/api/paragraphs/29/?populate=*`).then((response) => {
      if (language === "fr") {
      } else {
        const test2 = response.data.data.attributes;
        // console.log(test2);
      }
    });
  }, []);

  return (
    <div className=" overflow-hidden  ">
      <Navbar language={language} />
      <section id="acceuil">
        <Landing home={content.home} language={language} />
      </section>
      {ActivatedSections[0] && (
        <section id="avantages">
          <Pourquoi pourquoi={content.pourquoi} language={language} />
        </section>
      )}
      {ActivatedSections[1] && (
        <section id="fonctionnalites">
          <SlideSection slides={content.slides} language={language} />
        </section>
      )}
      {ActivatedSections[2] && (
        <section id="demo">
          <Demo videoData={content.videoData} language={language} />
        </section>
      )}
      {ActivatedSections[3] && (
        <section id="avis">
          <Avis content={content.avis} language={language} />
        </section>
      )}
      {ActivatedSections[4] && (
        <section id="roadmap">
          <Roadmap roadmapList={content.roadmapList} language={language} />
        </section>
      )}
      {ActivatedSections[5] && (
        <section id="services">
          <Services language={language} />
        </section>
      )}

      {ActivatedSections[6] && <PricesNew language={language} />}
      <Cta />
      {ActivatedSections[7] && (
        <section id="blog">
          <Blog language={language} />
        </section>
      )}
      <Footer language={language} />
    </div>
  );
}

export default LandingPage;
