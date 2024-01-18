import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { Bars3Icon } from "@heroicons/react/24/solid";

function Navbar({ language }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menu = () => {
    setMenuOpen(!menuOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 500;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`transition duration-1000 scroll-smooth w-screen flex flex-row justify-between items-center ${
        scrolled ? "bg-purple" : "bg-transparent"
      }  fixed top-0 z-50`}
    >
      <div className="flex flex-row justify-start items-center">
        <div className="hidden lg:flex flex-row justify-start items-center">
          <a href="#top">
            <img
              src={logo}
              alt="logo"
              className="mx-4 mr-20 my-2 lg:my-4 w-28  cursor-pointer  "
            />
          </a>
          <a href="#avantages">
            <button className="text-white text-xl font-bold hover:text-gray-400">
              {language === "fr" ? "Avantages" : "Advantages"}
            </button>
          </a>
          <a href="#fonctionnalites">
            <button className="text-white text-xl font-bold hover:text-gray-400 ml-10">
              {language === "fr" ? "Fonctionnalités" : "Features"}
            </button>
          </a>
          <a href="#avis">
            <button className="text-white text-xl font-bold hover:text-gray-400 ml-10">
              {language === "fr" ? "Avis" : "Feedback"}
            </button>
          </a>
          <a href="#demo">
            <button className="text-white text-xl font-bold hover:text-gray-400 ml-10">
              Demo
            </button>
          </a>
        </div>
        {/* sandwich menu hero icon button to make it responsive */}
        <div
          className={`flex flex-col lg:hidden justify-center items-center text-center pb-2 lg:pb-10 ${
            menuOpen ? "bg-dark" : ""
          } `}
        >
          <div className="flex py-4 flex-row w-screen justify-between">
            <a className="smooth-scroll" href="#top">
              <img
                src={logo}
                alt="logo"
                className={`mx-4 my-4 lg:hidden w-28 mr-5 cursor-pointer z-10 `}
              />
            </a>
            <button className={`w-14`} onClick={() => menu()}>
              <Bars3Icon className="h-6 w-6" stroke="white" fill="white" />
            </button>
          </div>
          {menuOpen && (
            <div className="flex flex-col justify-start items-center">
              <a className="smooth-scroll" href="#avantages">
                <button className="text-white text-xl font-bold hover:text-gray-400 py-4">
                  {language === "fr" ? "Avantages" : "Advantages"}
                </button>
              </a>
              <a className="smooth-scroll" href="#fonctionnalites">
                <button className="text-white text-xl font-bold hover:text-gray-400 my-4">
                  {language === "fr" ? "Fonctionnalités" : "Features"}
                </button>
              </a>
              <a className="smooth-scroll" href="#avis">
                <button className="text-white text-xl font-bold hover:text-gray-400 my-4">
                  {language === "fr" ? "Avis" : "Feedback"}
                </button>
              </a>
              <a className="smooth-scroll" href="#prix">
                <button className="text-white text-xl font-bold hover:text-gray-400 my-4">
                  Demo
                </button>
              </a>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-row justify-end items-center"></div>
    </div>
  );
}

export default Navbar;
