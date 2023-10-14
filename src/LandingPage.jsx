import React, { useEffect } from "react";
import Landing from "./sections/Landing";
import Navbar from "./components/Navbar";
import axios from "axios";
import SlideSection from "./sections/SlideSection";
import Pourquoi from "./sections/Pourquoi";
import Demo from "./sections/Demo";
import Avis from "./sections/Avis";
import Roadmap from "./sections/Roadmap";
import Footer from "./components/Footer";
import Prices from "./sections/Prices";

function LandingPage() {
  const api = import.meta.env.VITE_APP_API_URL;

  return (
    <div className=" overflow-hidden  ">
      <Navbar />
      <section id="acceuil">
        <Landing />
      </section>
      <section id="avantages">
        <Pourquoi />
      </section>
      <section id="fonctionnalites">
        <SlideSection />
      </section>
      <Demo />
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
