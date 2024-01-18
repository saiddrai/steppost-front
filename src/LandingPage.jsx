import React, { useEffect } from "react";
import Landing from "./sections/Landing";
import Navbar from "./components/Navbar";
import SlideSection from "./sections/SlideSection";
import Pourquoi from "./sections/Pourquoi";
import Demo from "./sections/Demo";
import Avis from "./sections/Avis";
import Roadmap from "./sections/Roadmap";
import Footer from "./components/Footer";

function LandingPage({ content, language }) {
  return (
    <div className=" overflow-hidden  ">
      <Navbar language={language} />
      <section id="acceuil">
        <Landing home={content.home} language={language} />
      </section>
      <section id="avantages">
        <Pourquoi pourquoi={content.pourquoi} language={language} />
      </section>
      <section id="fonctionnalites">
        <SlideSection slides={content.slides} language={language} />
      </section>
      <section id="demo">
        <Demo videoData={content.videoData} language={language} />
      </section>
      <section id="avis">
        <Avis content={content.avis} language={language} />
      </section>
      <section id="roadmap">
        <Roadmap roadmapList={content.roadmapList} language={language} />
      </section>
      {/* <section id="prices">
        <Prices />
      </section> */}
      <Footer language={language} />
    </div>
  );
}

export default LandingPage;
