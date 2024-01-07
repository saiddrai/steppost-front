import React, { useEffect } from "react";
import Landing from "./sections/Landing";
import Navbar from "./components/Navbar";
import SlideSection from "./sections/SlideSection";
import Pourquoi from "./sections/Pourquoi";
import Demo from "./sections/Demo";
import Avis from "./sections/Avis";
import Roadmap from "./sections/Roadmap";
import Footer from "./components/Footer";

function LandingPage({ content }) {
  const api = import.meta.env.VITE_APP_API_URL;
  console.log(content);
  return (
    <div className=" overflow-hidden  ">
      <Navbar />
      <section id="acceuil">
        <Landing home={content.home} />
      </section>
      <section id="avantages">
        <Pourquoi pourquoi={content.pourquoi} />
      </section>
      <section id="fonctionnalites">
        <SlideSection slides={content.slides} />
      </section>
      <Demo videoData={content.videoData} />
      <section id="avis">
        <Avis />
      </section>
      <section id="roadmap">
        <Roadmap />
      </section>
      {/* <section id="prices">
        <Prices />
      </section> */}
      <Footer />
    </div>
  );
}

export default LandingPage;
